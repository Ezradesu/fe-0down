import Hero from '@/components/landing/Hero';
import Header from '@/components/header';
import { FeaturesGrid } from '@/components/landing/FeaturesGrid';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { ScrollReveal } from '@/components/animations';
export default function Home() {
  return (
    <>
      <Header />
      <ScrollReveal delay={0.2} direction='up'>
        <Hero />
      </ScrollReveal>
      <ScrollReveal delay={0.2} direction='up'>
        <FeaturesGrid />
      </ScrollReveal>
        <HowItWorks />
    </>
  );
}
