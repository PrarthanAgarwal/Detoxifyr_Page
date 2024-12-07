import { motion } from 'framer-motion';
import { Download, Settings2, Play, Layout, BarChart } from 'lucide-react';

const steps = [
  {
    icon: Download,
    title: 'Install Extension',
    description: 'Add Detoxifyr to Chrome with a single click',
  },
  {
    icon: Settings2,
    title: 'Set Preferences',
    description: 'Customize your content filtering preferences',
  },
  {
    icon: Play,
    title: 'Start New Session',
    description: 'Begin your curated YouTube experience',
  },
  {
    icon: Layout,
    title: 'Browse Curated Content',
    description: 'Enjoy high-quality, relevant content',
  },
  {
    icon: BarChart,
    title: 'Track Progress',
    description: 'Monitor your viewing habits and improvements',
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How Detoxifyr Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get started in minutes with our simple setup process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border-2 border-brand-primary z-10 relative">
                <step.icon className="w-8 h-8 text-brand-primary" />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}