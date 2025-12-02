// How It Works section showcasing dashboard features with screenshots
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Activity, MessageSquare, Wrench } from 'lucide-react';
import Image from 'next/image';
import { ScrollReveal } from '../animations';

const features = [
  {
    number: '01',
    icon: Activity,
    title: 'Real-time Dashboard',
    description:
      'Monitor all your sensors in one unified dashboard. View live alerts, failure predictions with confidence scores, and system health status at a glance.',
    highlight: 'Live Monitoring',
    image: '/DashboardShowcase.png',
    imageAlt: 'Dashboard showing real-time sensor monitoring and alerts',
    iconColor: 'text-blue-600 dark:text-blue-400',
    iconBgColor: 'bg-blue-50 dark:bg-blue-950/30',
    badgeColor: 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-400',
    imageScale: 'scale-100', // Normal size
  },
  {
    number: '02',
    icon: MessageSquare,
    title: 'AI Copilot Chat',
    description:
      'Ask questions and get instant AI-powered insights. Chat with your intelligent assistant to troubleshoot issues, analyze trends, and get recommendations.',
    highlight: 'AI Assistant',
    image: '/CopilotChatFeatures.png',
    imageAlt: 'AI Copilot chat interface with intelligent responses',
    iconColor: 'text-purple-600 dark:text-purple-400',
    iconBgColor: 'bg-purple-50 dark:bg-purple-950/30',
    badgeColor:
      'bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-400',
    imageScale: 'scale-75', // Smaller size (75%)
  },
  {
    number: '03',
    icon: Wrench,
    title: 'Recommended Actions',
    description:
      'Get priority-based alerts with actionable repair recommendations. Each alert includes severity level, failure status, and one-click action buttons.',
    highlight: 'Smart Actions',
    image: '/RecommendedActionFeatures.png',
    imageAlt: 'Recommended actions with priority alerts and repair options',
    iconColor: 'text-orange-600 dark:text-orange-400',
    iconBgColor: 'bg-orange-50 dark:bg-orange-950/30',
    badgeColor:
      'bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-400',
    imageScale: 'scale-100', // Normal size
  },
];

export function HowItWorks() {
  return (
    <section
      className='py-20 sm:py-24 lg:py-32 bg-white dark:bg-zinc-900 px-4 sm:px-6 lg:px-8'
      role='region'
      aria-labelledby='how-it-works-heading'
    >
      <div className='max-w-7xl mx-auto'>
        {/* Section Header */}
        <ScrollReveal delay={0.2} direction='up'>
          <div className='text-center space-y-4 mb-16'>
            <Badge
              variant='outline'
              className='px-4 py-1.5 text-sm font-medium'
            >
              Powerful Features
            </Badge>
            <h2
              id='how-it-works-heading'
              className='text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white'
            >
              Everything You Need in One Dashboard
            </h2>
            <p className='text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto'>
              Comprehensive monitoring, intelligent insights, and actionable
              recommendations all in one place.
            </p>
          </div>
        </ScrollReveal>

        {/* Features Grid */}
        <div className='space-y-24'>
          {features.map((feature, index) => (
            <ScrollReveal
              key={index}
              delay={0.2 + index * 0.1}
              direction={index % 2 === 0 ? 'left' : 'right'}
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div
                  className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                >
                  <div className='flex items-center gap-4'>
                    <div
                      className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${feature.iconBgColor} shadow-lg`}
                    >
                      <feature.icon
                        className={`w-7 h-7 ${feature.iconColor}`}
                        aria-hidden='true'
                      />
                    </div>
                    <Badge
                      className={`${feature.badgeColor} border-0 text-sm px-3 py-1`}
                    >
                      {feature.highlight}
                    </Badge>
                  </div>

                  <div className='space-y-4'>
                    <div className='flex items-center gap-3'>
                      <span className='text-sm font-bold text-zinc-400 dark:text-zinc-600'>
                        FEATURE {feature.number}
                      </span>
                      <div className='flex-1 h-px bg-zinc-200 dark:bg-zinc-800' />
                    </div>
                    <h3 className='text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white'>
                      {feature.title}
                    </h3>
                    <p className='text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed'>
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Screenshot */}
                <div
                  className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}
                >
                  <Card
                    className={`relative overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 ${
                      index === 1 ? 'max-w-md mx-auto' : ''
                    }`}
                  >
                    <div className='relative rounded-lg overflow-hidden flex items-center justify-center'>
                      <Image
                        src={feature.image}
                        alt={feature.imageAlt}
                        width={1200}
                        height={800}
                        className='w-full h-auto'
                      />
                      {/* Gradient Overlay */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${feature.iconColor.replace(
                          'text-',
                          'from-'
                        )}/5 to-transparent pointer-events-none`}
                      />
                    </div>
                  </Card>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal delay={0.2} direction='up'>
          <div className='mt-16 text-center'>
            <p className='text-lg text-zinc-600 dark:text-zinc-400'>
              Ready to eliminate downtime?{' '}
              <a
                href='/dashboard'
                className='font-semibold text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 underline underline-offset-4 decoration-2 transition-colors'
              >
                Get started now
              </a>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
