// Individual feature card component with icon, title, and description
import { Card } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor?: string;
  iconBgColor?: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  iconColor = 'text-orange-600 dark:text-orange-400',
  iconBgColor = 'bg-orange-50 dark:bg-orange-950/30',
}: FeatureCardProps) {
  return (
    <Card className='group relative overflow-hidden border border-white/10 dark:border-zinc-800/30 bg-white/30 dark:bg-zinc-900/30 backdrop-blur-md p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 dark:hover:shadow-purple-500/10 hover:border-purple-400/40 dark:hover:border-purple-500/40 hover:-translate-y-2 hover:scale-[1.02] hover:bg-purple-50/40 dark:hover:bg-purple-950/30'>
      {/* Animated Gradient Background */}
      <div className='absolute inset-0 bg-gradient-to-br from-pink-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-pink-500/10 group-hover:via-purple-500/10 group-hover:to-blue-500/10 transition-all duration-500' />

      {/* Glow Effect on Hover */}
      <div className='absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 rounded-lg opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500' />

      <div className='relative space-y-6'>
        {/* Icon with Animated Ring */}
        <div className='relative w-fit'>
          <div
            className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${iconBgColor} shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-xl`}
          >
            <Icon
              className={`w-7 h-7 ${iconColor} transition-all duration-500 group-hover:scale-110`}
              aria-hidden='true'
            />
          </div>
          {/* Animated Ring */}
          {/* <div className={`absolute inset-0 rounded-xl ${iconBgColor} opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 blur-sm`} /> */}
        </div>

        {/* Content */}
        <div className='space-y-3'>
          <h3 className='text-xl font-bold text-zinc-900 dark:text-white transition-colors duration-300 group-hover:text-purple-800 dark:group-hover:text-purple-400'>
            {title}
          </h3>
          <p className='text-zinc-600 dark:text-zinc-400 leading-relaxed transition-colors duration-300'>
            {description}
          </p>
        </div>

        {/* Decorative Corner Elements */}
        <div className='absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-pink-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
        <div className='absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
      </div>
    </Card>
  );
}
