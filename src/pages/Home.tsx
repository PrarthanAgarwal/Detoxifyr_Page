import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Showcase } from '../components/Showcase';
import { HowItWorks } from '../components/HowItWorks';
import { Metrics } from '../components/Metrics';
import { CTA } from '../components/CTA';

export function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Showcase />
      <Features />
      <HowItWorks />
      <Metrics />
      <CTA />
    </div>
  );
}