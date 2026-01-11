'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Loader2, Check, AlertCircle } from 'lucide-react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

// ============================================================================
// Waitlist Form Component
// Saves emails to Supabase with optional tool selection
// ============================================================================

type FormState = 'default' | 'loading' | 'success' | 'error'

interface WaitlistFormProps {
    className?: string
    showToolSelect?: boolean
}

export function WaitlistForm({ className = '', showToolSelect = true }: WaitlistFormProps) {
    const [email, setEmail] = useState('')
    const [tool, setTool] = useState('')
    const [formState, setFormState] = useState<FormState>('default')
    const [errorMessage, setErrorMessage] = useState('')

    // Email validation
    const isValidEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        // Validate email
        if (!email.trim()) {
            setErrorMessage('Please enter your email')
            setFormState('error')
            return
        }

        if (!isValidEmail(email)) {
            setErrorMessage('Please enter a valid email')
            setFormState('error')
            return
        }

        setFormState('loading')
        setErrorMessage('')

        try {
            const { error } = await supabase
                .from('waitlist')
                .insert([
                    {
                        email: email.toLowerCase().trim(),
                        tool: tool || null
                    }
                ])

            if (error) {
                // Handle duplicate email error (unique constraint violation)
                if (error.code === '23505' || error.message.includes('duplicate')) {
                    setErrorMessage('Already registered!')
                } else {
                    setErrorMessage(error.message || 'Something went wrong')
                }
                setFormState('error')
                return
            }

            setFormState('success')

            setEmail('')
            setTool('')

            // Reset to default after 3 seconds
            setTimeout(() => {
                setFormState('default')
            }, 3000)

        } catch (err) {
            console.error('Waitlist error:', err)
            setErrorMessage('Connection error. Please try again.')
            setFormState('error')
        }
    }

    // Reset error state when user starts typing
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
        if (formState === 'error') {
            setFormState('default')
            setErrorMessage('')
        }
    }

    return (
        <form onSubmit={handleSubmit} className={`w-full ${className}`}>
            <div className="flex flex-col gap-4">
                {/* Input Container with Embedded Select */}
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
                    <div className="relative flex-1">
                        <Label htmlFor="email" className="sr-only">Email</Label>
                        <div className={`
                            flex items-stretch overflow-hidden rounded-lg border transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]
                            ${formState === 'error' ? 'border-red-500/50 bg-red-500/5 shadow-[0_0_20px_rgba(239,68,68,0.2)]' : 'border-white/10 bg-white/5 focus-within:border-white/30 focus-within:shadow-[0_0_30px_rgba(255,255,255,0.15)]'}
                        `}>
                            <Input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={handleEmailChange}
                                disabled={formState === 'loading' || formState === 'success'}
                                className="h-12 flex-1 border-0 bg-transparent px-4 text-base text-white placeholder:text-gray-600 focus-visible:ring-0 focus-visible:ring-offset-0 disabled:opacity-50"
                            />

                            {/* Tool Selection Inside Input */}
                            {showToolSelect && (
                                <div className="flex items-center border-l border-white/10">
                                    <Select
                                        value={tool}
                                        onValueChange={setTool}
                                        disabled={formState === 'loading' || formState === 'success'}
                                    >
                                        <SelectTrigger className="h-12 w-auto min-w-[100px] border-0 bg-transparent px-2 text-[11px] text-gray-500 shadow-none hover:text-gray-300 focus:ring-0 focus:ring-offset-0 data-[placeholder]:text-gray-500">
                                            <SelectValue placeholder="Tool (optional)" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-[#09090b] border-white/10">
                                            <SelectItem value="make" className="text-white text-xs focus:bg-white/10 focus:text-white">Make</SelectItem>
                                            <SelectItem value="n8n" className="text-white text-xs focus:bg-white/10 focus:text-white">n8n</SelectItem>
                                            <SelectItem value="zapier" className="text-white text-xs focus:bg-white/10 focus:text-white">Zapier</SelectItem>
                                            <SelectItem value="airtable" className="text-white text-xs focus:bg-white/10 focus:text-white">Airtable</SelectItem>
                                            <SelectItem value="other" className="text-white text-xs focus:bg-white/10 focus:text-white">Other</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        disabled={formState === 'loading' || formState === 'success'}
                        className={`h-12 w-full rounded-lg px-6 text-sm font-medium transition-all sm:w-auto ${formState === 'success'
                            ? 'bg-green-600 text-white hover:bg-green-600'
                            : 'bg-white text-black hover:bg-gray-200'
                            }`}
                    >
                        {formState === 'loading' && (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Joining...
                            </>
                        )}
                        {formState === 'success' && (
                            <>
                                <Check className="mr-2 h-4 w-4" />
                                You&apos;re on the list!
                            </>
                        )}
                        {(formState === 'error' || formState === 'default') && 'Join Waitlist'}
                    </Button>
                </div>

                {/* Error Message */}
                {formState === 'error' && errorMessage && (
                    <div className="flex items-center gap-2 rounded-lg bg-red-500/10 px-3 py-2 text-xs text-red-400">
                        <AlertCircle className="h-3.5 w-3.5 flex-shrink-0" />
                        <span>{errorMessage}</span>
                    </div>
                )}
            </div>
        </form>
    )
}
