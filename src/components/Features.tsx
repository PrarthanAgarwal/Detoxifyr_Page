import { motion } from 'framer-motion';
import { Filter, Star, Clock, Settings, History, Shield } from 'lucide-react';

const features = [
  {
    icon: Filter,
    title: 'Smart Content Filtering',
    description: 'Advanced algorithms filter content based on your preferences and quality metrics.',
  },
  {
    icon: Star,
    title: 'Quality Scoring System',
    description: 'Each video is analyzed and scored based on multiple quality factors.',
  },
  {
    icon: Clock,
    title: 'Session Management',
    description: 'Track and manage your viewing sessions for better time management.',
  },
  {
    icon: Settings,
    title: 'Customizable Preferences',
    description: 'Fine-tune your viewing experience with detailed preference controls.',
  },
  {
    icon: History,
    title: 'History Tracking',
    description: 'Analyze your viewing patterns and get insights into your habits.',
  },
  {
    icon: Shield,
    title: 'Privacy-First Design',
    description: 'Your data stays local and secure with our privacy-focused approach.',
  },
];

export function Features() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Powerful Features for Better Content
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to enhance your YouTube experience and make the most of your time.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <feature.icon className="w-12 h-12 text-brand-primary mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}