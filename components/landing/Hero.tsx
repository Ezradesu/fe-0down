// Hero section with headline, subheadline, CTA buttons, and visual element
"use client";

import { Button } from "@/components/ui/button";
import { AuroraText } from "@/components/ui/aurora-text";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { AuroraBackground } from "../ui/shadcn-io/aurora-background";

interface HeroProps {
  headline?: string;
  subheadline?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export function Hero({
  headline = "Zero Downtime for Your Operations",
  subheadline = "AI-powered predictive maintenance that keeps your equipment running 24/7. Detect failures before they happen.",
  primaryCtaText = "Start Monitoring",
  primaryCtaHref = "/dashboard",
  secondaryCtaText = "Watch Demo",
  secondaryCtaHref = "#demo",
}: HeroProps) {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900 px-4 sm:px-6 lg:px-8"
      role="banner"
      aria-label="Hero section"
    >
      <div className="max-w-7xl mx-auto w-full py-20 sm:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <AuroraText className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white">
                {headline}
              </AuroraText>
              <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto lg:mx-0">
                {subheadline}
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 text-center lg:text-left">
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">
                  99.8%
                </div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">
                  Uptime Rate
                </div>
              </div>
              <div className="w-px bg-zinc-200 dark:bg-zinc-700" />
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">
                  24/7
                </div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">
                  Real-time Detection
                </div>
              </div>
              <div className="w-px bg-zinc-200 dark:bg-zinc-700" />
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">
                  AI
                </div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">
                  Powered Insights
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href={primaryCtaHref}>
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-100 dark:text-zinc-900 text-white group"
                >
                  {primaryCtaText}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href={secondaryCtaHref}>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-zinc-300 dark:border-zinc-700 group"
                >
                  <Play className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                  {secondaryCtaText}
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Dashboard Showcase */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-2xl bg-white dark:bg-zinc-900">
              <Image
                src="/DashboardShowcase.png"
                alt="Dashboard Preview - Real-time monitoring interface"
                width={1200}
                height={800}
                className="w-full h-auto"
                priority
              />
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-orange-200/10 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;