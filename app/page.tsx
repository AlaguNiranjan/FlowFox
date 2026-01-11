'use client'

import {
  Upload,
  FileCheck,
  PlayCircle,
  Sparkles,
  Zap,
  Shield,
  ArrowRight,
  CheckCircle2,
  Code2,
  RefreshCcw,
  Eye,
  AlertCircle,
  Clock,
  TrendingUp,
  Layers,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Spotlight } from '@/components/ui/spotlight'
import { WaitlistForm } from '@/components/waitlist-form'

// ============================================================================
// FlowGuard Landing Page - Luxury Minimalist with Rich Details
// ============================================================================

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#09090b] text-white">

      {/* Background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 20% 20%, rgba(255,255,255,0.03), transparent),
              radial-gradient(ellipse 60% 40% at 80% 80%, rgba(255,255,255,0.02), transparent)
            `,
          }}
        />
        <div
          className="absolute h-[500px] w-[500px] rounded-full blur-[100px]"
          style={{
            left: '5%',
            top: '10%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)',
            animation: 'float1 20s ease-in-out infinite',
          }}
        />
        <div
          className="absolute h-[400px] w-[400px] rounded-full blur-[80px]"
          style={{
            right: '10%',
            top: '40%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 70%)',
            animation: 'float2 25s ease-in-out infinite',
          }}
        />
      </div>

      <style jsx>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, 20px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-30px, -20px); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        @keyframes spotlight {
          0% { opacity: 0; transform: translate(-72%, -62%) scale(0.5); }
          100% { opacity: 1; transform: translate(-50%, -40%) scale(1); }
        }
      `}</style>

      {/* HEADER - Centered App Name */}
      <header className="absolute inset-x-0 top-0 z-20 border-b border-white/10 py-6">
        <div className="flex items-center justify-center">
          <span className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold tracking-wider text-white md:text-3xl">FlowGuard</span>
        </div>
      </header>

      {/* HERO SECTION with Spotlight */}
      <section className="relative z-10 px-6 pt-16 pb-8 md:pt-24 md:pb-12 overflow-hidden">
        {/* Aceternity Spotlight */}
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className="mx-auto max-w-4xl text-center">
          <Badge className="mb-6 gap-1.5 border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-400">
            <Sparkles className="h-3.5 w-3.5" />
            Early Access 2026
          </Badge>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="text-white">Stop Debugging.</span>
            <br />
            <span className="text-gray-500">Start Shipping.</span>
          </h1>

          <p className="mx-auto mt-4 max-w-lg text-sm text-gray-500 md:text-base">
            The first testing platform built for no-code automation.
            Test Make, n8n & Zapier workflows before they break in production.
          </p>

          <WaitlistForm className="max-w-md mx-auto mt-6" />

          <p className="mt-2 text-sm font-medium text-gray-400">
            <span
              className="inline-block text-white font-bold"
              style={{ animation: 'pulse-glow 2s ease-in-out infinite' }}
            >500+</span> developers on the waitlist • No spam
          </p>
        </div>
      </section>

      {/* TRUSTED BY - Text only, bigger & stylish */}
      <section className="relative z-10 px-6 py-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-gray-600">
            Built for teams using
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 md:gap-x-12">
            <span className="text-2xl font-bold tracking-tight text-white opacity-60 transition-opacity hover:opacity-100 md:text-3xl">n8n</span>
            <span className="text-2xl font-bold tracking-tight text-white opacity-60 transition-opacity hover:opacity-100 md:text-3xl">Make</span>
            <span className="text-2xl font-bold tracking-tight text-white opacity-60 transition-opacity hover:opacity-100 md:text-3xl">Zapier</span>
            <span className="text-2xl font-bold tracking-tight text-white opacity-60 transition-opacity hover:opacity-100 md:text-3xl">Airtable</span>
            <span className="text-2xl font-bold tracking-tight text-white opacity-60 transition-opacity hover:opacity-100 md:text-3xl">Notion</span>
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="relative z-10 border-y border-white/5 px-6 py-10 md:py-14">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 text-center">
            <p className="mb-2 text-xs uppercase tracking-[0.15em] text-gray-600">The Problem</p>
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Automations break. Often silently.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5">
              <AlertCircle className="mb-3 h-5 w-5 text-gray-500" />
              <h3 className="mb-1 text-sm font-semibold text-white">Silent Failures</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                API changes, schema updates, and edge cases cause workflows to fail without warning. You find out from angry users.
              </p>
            </div>
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5">
              <Clock className="mb-3 h-5 w-5 text-gray-500" />
              <h3 className="mb-1 text-sm font-semibold text-white">Hours Wasted</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Teams spend 10-40 hours monthly debugging workflows. That&apos;s entire workweeks lost to preventable issues.
              </p>
            </div>
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5">
              <TrendingUp className="mb-3 h-5 w-5 text-gray-500" />
              <h3 className="mb-1 text-sm font-semibold text-white">No Testing Culture</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Unlike code, automations lack staging environments. You test in production and hope for the best.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION - HOW IT WORKS */}
      <section className="relative z-10 px-6 py-10 md:py-14">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 text-center">
            <p className="mb-2 text-xs uppercase tracking-[0.15em] text-gray-600">The Solution</p>
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Test workflows like a developer
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-gray-500">
              FlowGuard brings software engineering best practices to no-code
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="group rounded-xl border border-white/5 bg-white/[0.02] p-5 text-center transition-all hover:border-white/10 hover:bg-white/[0.04]">
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-base font-bold text-black">
                1
              </div>
              <Upload className="mx-auto mb-3 h-6 w-6 text-gray-500 group-hover:text-white transition-colors" />
              <h3 className="mb-1 text-sm font-semibold text-white">Import Workflow</h3>
              <p className="text-xs text-gray-500">
                Paste your workflow JSON or connect directly to Make, n8n, or Zapier
              </p>
            </div>

            <div className="group rounded-xl border border-white/5 bg-white/[0.02] p-5 text-center transition-all hover:border-white/10 hover:bg-white/[0.04]">
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-base font-bold text-black">
                2
              </div>
              <FileCheck className="mx-auto mb-3 h-6 w-6 text-gray-500 group-hover:text-white transition-colors" />
              <h3 className="mb-1 text-sm font-semibold text-white">Define Expectations</h3>
              <p className="text-xs text-gray-500">
                Set assertions for each step. What data should flow? What should trigger?
              </p>
            </div>

            <div className="group rounded-xl border border-white/5 bg-white/[0.02] p-5 text-center transition-all hover:border-white/10 hover:bg-white/[0.04]">
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-base font-bold text-black">
                3
              </div>
              <PlayCircle className="mx-auto mb-3 h-6 w-6 text-gray-500 group-hover:text-white transition-colors" />
              <h3 className="mb-1 text-sm font-semibold text-white">Run & Monitor</h3>
              <p className="text-xs text-gray-500">
                Get instant AI-powered feedback. Schedule recurring tests for peace of mind
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative z-10 border-y border-white/5 bg-white/[0.01] px-6 py-8">
        <div className="mx-auto grid max-w-4xl grid-cols-4 gap-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-white md:text-3xl">20+</p>
            <p className="mt-0.5 text-xs text-gray-600">Hours saved/mo</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-white md:text-3xl">99.9%</p>
            <p className="mt-0.5 text-xs text-gray-600">Detection rate</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-white md:text-3xl">30s</p>
            <p className="mt-0.5 text-xs text-gray-600">Test time</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-white md:text-3xl">500+</p>
            <p className="mt-0.5 text-xs text-gray-600">On waitlist</p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="relative z-10 px-6 py-10 md:py-14">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 text-center">
            <p className="mb-2 text-xs uppercase tracking-[0.15em] text-gray-600">Features</p>
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Everything you need to ship confidently
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="group rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-all hover:border-white/10 hover:bg-white/[0.04]">
              <Code2 className="mb-2 h-5 w-5 text-gray-500 group-hover:text-white transition-colors" />
              <h4 className="mb-1 text-sm font-semibold text-white">Visual Debugger</h4>
              <p className="text-xs text-gray-500">Step through each node. See exactly where things fail.</p>
            </div>
            <div className="group rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-all hover:border-white/10 hover:bg-white/[0.04]">
              <RefreshCcw className="mb-2 h-5 w-5 text-gray-500 group-hover:text-white transition-colors" />
              <h4 className="mb-1 text-sm font-semibold text-white">Scheduled Tests</h4>
              <p className="text-xs text-gray-500">Run tests hourly, daily, or weekly. Get alerts on failures.</p>
            </div>
            <div className="group rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-all hover:border-white/10 hover:bg-white/[0.04]">
              <Eye className="mb-2 h-5 w-5 text-gray-500 group-hover:text-white transition-colors" />
              <h4 className="mb-1 text-sm font-semibold text-white">AI Analysis</h4>
              <p className="text-xs text-gray-500">Smart detection of edge cases and potential failure points.</p>
            </div>
            <div className="group rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-all hover:border-white/10 hover:bg-white/[0.04]">
              <Layers className="mb-2 h-5 w-5 text-gray-500 group-hover:text-white transition-colors" />
              <h4 className="mb-1 text-sm font-semibold text-white">Multi-Platform</h4>
              <p className="text-xs text-gray-500">Works with Make, n8n, Zapier. More integrations coming.</p>
            </div>
          </div>

          {/* Security note */}
          <div className="mt-6 flex items-center justify-center gap-4 text-xs text-gray-600">
            <div className="flex items-center gap-1.5">
              <Shield className="h-3.5 w-3.5" />
              <span>End-to-end encrypted</span>
            </div>
            <span className="text-gray-700">•</span>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5" />
              <span>No credential storage</span>
            </div>
            <span className="text-gray-700">•</span>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5" />
              <span>GDPR compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative z-10 border-t border-white/5 bg-white/[0.01] px-6 py-12 md:py-16">
        <div className="mx-auto max-w-md text-center">
          <h2 className="mb-4 text-xl font-bold text-white md:text-2xl">
            Ready to ship with confidence?
          </h2>

          <WaitlistForm className="max-w-sm mx-auto" />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-white/5 px-6 py-6">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-white">
              <Zap className="h-3 w-3 text-black" />
            </div>
            <span className="text-sm font-medium text-white">FlowGuard</span>
          </div>
          <div className="flex gap-5 text-xs text-gray-600">
            <span className="cursor-pointer hover:text-white">Privacy</span>
            <span className="cursor-pointer hover:text-white">Terms</span>
            <span className="cursor-pointer hover:text-white">Contact</span>
          </div>
          <p className="text-xs text-gray-600">© 2026 FlowGuard</p>
        </div>
      </footer>
    </main>
  )
}
