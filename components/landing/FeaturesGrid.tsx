// Grid layout containing multiple feature cards
import { FeatureCard } from './FeatureCard';
import { Activity, MessageSquare, Wrench, Shield } from 'lucide-react';
import { BubbleBackground } from '@/components/ui/shadcn-io/bubble-background';

const features = [
  {
    icon: Activity,
    title: 'Real-time Dashboard',
    description:
      'Monitor hundreds of sensors simultaneously with live updates. Get instant visibility into your entire operation with interactive charts and metrics.',
    iconColor: 'text-blue-600 dark:text-blue-400',
    iconBgColor: 'bg-blue-50 dark:bg-blue-950/30',
  },
  {
    icon: MessageSquare,
    title: 'AI Copilot Chat',
    description:
      'Chat with AI assistant for instant troubleshooting. Get intelligent recommendations based on historical data and real-time sensor readings.',
    iconColor: 'text-purple-600 dark:text-purple-400',
    iconBgColor: 'bg-purple-50 dark:bg-purple-950/30',
  },
  {
    icon: Wrench,
    title: 'Recommended Actions',
    description:
      'Receive priority-based alerts with actionable recommendations. One-click repair workflows help you resolve issues faster than ever.',
    iconColor: 'text-orange-600 dark:text-orange-400',
    iconBgColor: 'bg-orange-50 dark:bg-orange-950/30',
  },
  {
    icon: Shield,
    title: 'Predictive Analytics',
    description:
      'Machine learning predicts equipment failures before they happen. Confidence scores help you prioritize maintenance and minimize downtime.',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
    iconBgColor: 'bg-emerald-50 dark:bg-emerald-950/30',
  },
];

export function FeaturesGrid() {
  return (
    <BubbleBackground
      interactive
      className='py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8'
    >
      <section
        className='relative z-10 w-full'
        role='region'
        aria-labelledby='features-heading'
      >
        <div className='max-w-7xl mx-auto'>
          {/* Section Header */}
          <div className='text-center space-y-4 mb-16'>
            <h2
              id='features-heading'
              className='text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white'
            >
              Powerful Features for Zero Downtime
            </h2>
            <p className='text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto'>
              Everything you need to keep your operations running smoothly,
              powered by AI and real-time analytics.
            </p>
          </div>

          {/* Features Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'>
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                iconColor={feature.iconColor}
                iconBgColor={feature.iconBgColor}
              />
            ))}
          </div>
        </div>
      </section>
    </BubbleBackground>
  );
}
