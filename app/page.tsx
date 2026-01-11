'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { WaitlistForm } from '@/components/waitlist-form'
import { Spotlight } from '@/components/ui/spotlight'
import {
  Sparkles,
  Zap,
  GitBranch,
  Bug,
  Users,
  Upload,
  Download,
  Search,
  Bot,
  Gauge,
  Link2,
  BarChart3,
  UsersRound,
  Check,
  X,
  ArrowRight,
  Quote,
} from 'lucide-react'

// ============================================================================
// WorkflowTest Landing Page - CodeRabbit Positioning
// "AI Code Review for Automation Workflows"
// ============================================================================

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#09090b] text-white overflow-x-hidden">
      {/* Background gradient effects - Luxury Premium */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -left-20 top-0 h-[600px] w-[600px] rounded-full bg-white/[0.03] blur-[150px]" />
        <div className="absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-white/[0.02] blur-[130px]" />
        <div className="absolute left-1/3 top-1/2 h-[400px] w-[400px] rounded-full bg-white/[0.02] blur-[120px]" />
      </div>

      {/* Animations */}
      <style>{`
        @keyframes pulse-glow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        @keyframes aurora {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.15; }
          50% { transform: translateY(-20px) rotate(2deg); opacity: 0.25; }
        }
      `}</style>

      {/* HEADER */}
      <header className="absolute inset-x-0 top-0 z-20 border-b border-white/10 py-4 md:py-6">
        <div className="flex items-center justify-center">
          <span className="font-[family-name:var(--font-jetbrains-mono)] text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
            FlowFox
          </span>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative z-10 px-6 pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden">
        {/* Aceternity UI Spotlights */}
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className="mx-auto max-w-5xl text-center">
          <Badge className="mb-6 gap-1.5 border-white/20 bg-white/5 px-3 py-1.5 text-xs text-gray-300">
            <Sparkles className="h-3.5 w-3.5" />
            Now in Early Access
          </Badge>

          <h1 className="font-[family-name:var(--font-jetbrains-mono)] text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="text-white">AI Code Review for</span>
            <br />
            <span className="text-gray-400">
              Automation Workflows
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm text-gray-400 sm:text-base md:text-lg px-4 sm:px-0">
            Like CodeRabbit for Make, n8n, and Zapier. Catch bugs before deployment,
            get AI-powered fixes, and ship with confidence.
          </p>

          <WaitlistForm className="max-w-md mx-auto mt-8" showToolSelect={false} />

          <p className="mt-3 text-sm text-gray-500">
            <span
              className="text-white font-semibold inline-block"
              style={{ animation: 'pulse-glow 2s ease-in-out infinite' }}
            >500+</span> developers on the waitlist
          </p>
        </div>
      </section>

      {/* BUILT FOR TEAMS USING */}
      <section className="relative z-10 border-b border-white/5 px-6 py-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-8 text-xs uppercase tracking-[0.3em] text-gray-600">Built for teams using</p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 md:gap-x-16">
            <span className="text-2xl font-bold text-gray-500 transition-colors hover:text-white md:text-3xl">n8n</span>
            <span className="text-2xl font-bold text-gray-500 transition-colors hover:text-white md:text-3xl">Make</span>
            <span className="text-2xl font-bold text-gray-500 transition-colors hover:text-white md:text-3xl">Zapier</span>
            <span className="text-2xl font-bold text-gray-500 transition-colors hover:text-white md:text-3xl">Airtable</span>
            <span className="text-2xl font-bold text-gray-500 transition-colors hover:text-white md:text-3xl">Notion</span>
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="relative z-10 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-gray-600">The Problem</p>
            <h2 className="font-[family-name:var(--font-jetbrains-mono)] text-3xl font-bold text-white md:text-4xl">
              Automation Workflows Aren&apos;t Code-Reviewed
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="group rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:border-white/20 hover:bg-white/[0.04]">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5">
                <GitBranch className="h-6 w-6 text-gray-400" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">No review process for workflows</h3>
              <p className="text-sm text-gray-500">
                You review code. Why not review automations? Workflows go to production unchecked.
              </p>
            </div>

            <div className="group rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:border-white/20 hover:bg-white/[0.04]">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5">
                <Bug className="h-6 w-6 text-gray-400" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">Bugs caught in production</h3>
              <p className="text-sm text-gray-500">
                Broken workflows = lost revenue + debugging hours. You find issues from angry users.
              </p>
            </div>

            <div className="group rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:border-white/20 hover:bg-white/[0.04]">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5">
                <Users className="h-6 w-6 text-gray-400" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">No second pair of eyes</h3>
              <p className="text-sm text-gray-500">
                Solo developers ship without feedback. Even teams lack workflow review culture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION - HOW IT WORKS */}
      <section className="relative z-10 border-y border-white/5 bg-white/[0.01] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-gray-600">The Solution</p>
            <h2 className="font-[family-name:var(--font-jetbrains-mono)] text-3xl font-bold text-white md:text-4xl">
              How FlowFox Reviews Your Automations
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="relative text-center">
              <div className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 border border-white/20 shadow-lg">
                <Upload className="h-7 w-7 text-white" />
                <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-bold text-black">1</span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">Upload or Connect</h3>
              <p className="text-sm text-gray-500">
                Export JSON or connect your Make/n8n account directly for seamless sync.
              </p>
            </div>

            <div className="relative text-center">
              <div className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 border border-white/20 shadow-lg">
                <Sparkles className="h-7 w-7 text-white" />
                <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-bold text-black">2</span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">AI Reviews Every Step</h3>
              <p className="text-sm text-gray-500">
                Claude analyzes logic, data flow, and error handling in seconds.
              </p>
            </div>

            <div className="relative text-center">
              <div className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 border border-white/20 shadow-lg">
                <Download className="h-7 w-7 text-white" />
                <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-bold text-black">3</span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">Get Instant Fixes</h3>
              <p className="text-sm text-gray-500">
                Download corrected workflow or apply fixes automatically with one click.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="relative z-10 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-gray-600">Features</p>
            <h2 className="font-[family-name:var(--font-jetbrains-mono)] text-3xl font-bold text-white md:text-4xl">
              Everything You Need for Reliable Workflows
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:border-white/20 hover:bg-white/[0.04]">
              <Search className="mb-4 h-8 w-8 text-gray-400" />
              <h4 className="mb-2 text-lg font-semibold text-white">Deep Analysis</h4>
              <ul className="space-y-1.5 text-sm text-gray-500">
                <li>• Logic errors detection</li>
                <li>• Missing error handlers</li>
                <li>• Data type mismatches</li>
                <li>• Inefficient routing</li>
              </ul>
            </div>

            <div className="group rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:border-white/20 hover:bg-white/[0.04]">
              <Bot className="mb-4 h-8 w-8 text-gray-400" />
              <h4 className="mb-2 text-lg font-semibold text-white">Auto-Fix</h4>
              <ul className="space-y-1.5 text-sm text-gray-500">
                <li>• AI generates corrected workflow</li>
                <li>• Before/after diff view</li>
                <li>• One-click download</li>
                <li>• Direct push to Make/n8n</li>
              </ul>
            </div>

            <div className="group rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:border-white/20 hover:bg-white/[0.04]">
              <Gauge className="mb-4 h-8 w-8 text-gray-400" />
              <h4 className="mb-2 text-lg font-semibold text-white">Fast Reviews</h4>
              <ul className="space-y-1.5 text-sm text-gray-500">
                <li>• Results in &lt; 30 seconds</li>
                <li>• Step-by-step feedback</li>
                <li>• Actionable suggestions</li>
                <li>• No manual checking</li>
              </ul>
            </div>

            <div className="group rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:border-white/20 hover:bg-white/[0.04]">
              <Link2 className="mb-4 h-8 w-8 text-gray-400" />
              <h4 className="mb-2 text-lg font-semibold text-white">Direct Integration</h4>
              <ul className="space-y-1.5 text-sm text-gray-500">
                <li>• Connect Make.com account</li>
                <li>• Connect n8n (Cloud + self-hosted)</li>
                <li>• Auto-fetch workflows</li>
                <li>• Auto-apply fixes</li>
              </ul>
            </div>

            <div className="group rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:border-white/20 hover:bg-white/[0.04]">
              <BarChart3 className="mb-4 h-8 w-8 text-gray-400" />
              <h4 className="mb-2 text-lg font-semibold text-white">Quality Metrics</h4>
              <ul className="space-y-1.5 text-sm text-gray-500">
                <li>• Workflow complexity score</li>
                <li>• Error probability rating</li>
                <li>• Best practice compliance</li>
                <li>• Trend tracking</li>
              </ul>
            </div>

            <div className="group rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:border-white/20 hover:bg-white/[0.04]">
              <UsersRound className="mb-4 h-8 w-8 text-gray-400" />
              <h4 className="mb-2 text-lg font-semibold text-white">Team Reviews</h4>
              <ul className="space-y-1.5 text-sm text-gray-500">
                <li>• Share workflows with team</li>
                <li>• Collaborative feedback</li>
                <li>• Approval workflows</li>
                <li>• Activity history</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="relative z-10 border-y border-white/5 bg-white/[0.01] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-gray-600">Comparison</p>
            <h2 className="font-[family-name:var(--font-jetbrains-mono)] text-3xl font-bold text-white md:text-4xl">
              FlowFox vs Manual Reviews
            </h2>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="px-4 py-4 text-left text-sm font-medium text-gray-400 md:px-6">Task</th>
                  <th className="px-4 py-4 text-center text-sm font-medium text-gray-400 md:px-6">Manual</th>
                  <th className="px-4 py-4 text-center text-sm font-medium text-white md:px-6">FlowFox</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="px-4 py-4 text-sm text-white md:px-6">Review time</td>
                  <td className="px-4 py-4 text-center text-sm text-gray-500 md:px-6">30-60 min</td>
                  <td className="px-4 py-4 text-center text-sm font-medium text-white md:px-6">&lt; 30 sec</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 text-sm text-white md:px-6">Find logic errors</td>
                  <td className="px-4 py-4 text-center md:px-6">
                    <span className="inline-flex items-center gap-1 text-sm text-red-400">
                      <X className="h-4 w-4" /> Miss 40%
                    </span>
                  </td>
                  <td className="px-4 py-4 text-center md:px-6">
                    <span className="inline-flex items-center gap-1 text-sm text-white">
                      <Check className="h-4 w-4" /> Catch 95%
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4 text-sm text-white md:px-6">Suggest fixes</td>
                  <td className="px-4 py-4 text-center md:px-6">
                    <span className="inline-flex items-center gap-1 text-sm text-red-400">
                      <X className="h-4 w-4" /> Manual
                    </span>
                  </td>
                  <td className="px-4 py-4 text-center md:px-6">
                    <span className="inline-flex items-center gap-1 text-sm text-white">
                      <Check className="h-4 w-4" /> Auto-generated
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4 text-sm text-white md:px-6">Apply fixes</td>
                  <td className="px-4 py-4 text-center md:px-6">
                    <span className="inline-flex items-center gap-1 text-sm text-red-400">
                      <X className="h-4 w-4" /> Hours
                    </span>
                  </td>
                  <td className="px-4 py-4 text-center md:px-6">
                    <span className="inline-flex items-center gap-1 text-sm text-white">
                      <Check className="h-4 w-4" /> One-click
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4 text-sm text-white md:px-6">Track history</td>
                  <td className="px-4 py-4 text-center md:px-6">
                    <span className="inline-flex items-center gap-1 text-sm text-red-400">
                      <X className="h-4 w-4" /> None
                    </span>
                  </td>
                  <td className="px-4 py-4 text-center md:px-6">
                    <span className="inline-flex items-center gap-1 text-sm text-white">
                      <Check className="h-4 w-4" /> Full audit
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative z-10 border-t border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent px-6 py-20 md:py-28">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-[family-name:var(--font-jetbrains-mono)] mb-4 text-3xl font-bold text-white md:text-4xl">
            Start Reviewing Workflows Today
          </h2>
          <p className="mb-8 text-base text-gray-400">
            Join developers shipping reliable automations
          </p>

          <WaitlistForm className="max-w-md mx-auto" showToolSelect={false} />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-white/5 px-6 py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 md:flex-row">
          <span className="font-[family-name:var(--font-jetbrains-mono)] text-lg font-semibold text-white">FlowFox</span>
          <div className="flex gap-6 text-sm text-gray-500">
            <span className="cursor-pointer transition-colors hover:text-white">Privacy</span>
            <span className="cursor-pointer transition-colors hover:text-white">Terms</span>
            <span className="cursor-pointer transition-colors hover:text-white">Contact</span>
          </div>
          <p className="text-sm text-gray-600">© 2026 FlowFox</p>
        </div>
      </footer>
    </main>
  )
}
