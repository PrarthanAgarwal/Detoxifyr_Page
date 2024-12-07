import { motion } from 'framer-motion';
import { Logo } from './Logo';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-brand-primary to-brand-secondary">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Logo />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
              <span className="animate-pulse mr-2">●</span>
              Coming Soon
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Take Control of Your YouTube Experience
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Join the waitlist for early access to powerful content curation tools that help you focus on what matters.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button
                className="group cursor-pointer hover:opacity-90 transition-opacity bg-white text-black px-6 py-3 rounded-lg font-medium flex items-center z-10"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  window.open('https://forms.gle/Gd7DShK5W5Kchirj6', '_blank');
                }}
                style={{ position: 'relative' }}
              >
                Join Waitlist
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative animate-float">
              <img
                src="Images/floating_screen_final.png"
                alt="Detoxifyr Interface"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/10 to-transparent" />
              <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}