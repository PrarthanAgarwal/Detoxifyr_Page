import { motion } from 'framer-motion';
import { BarChart2, Award, Clock, Video, Target } from 'lucide-react';

const metrics = [
  {
    icon: BarChart2,
    title: 'Engagement Quality',
    value: '98%',
    description: 'Average content quality score',
  },
  {
    icon: Award,
    title: 'Channel Authority',
    value: '95%',
    description: 'Verified creator rating',
  },
  {
    icon: Clock,
    title: 'Content Freshness',
    value: '92%',
    description: 'Up-to-date information',
  },
  {
    icon: Video,
    title: 'Production Quality',
    value: '96%',
    description: 'Professional standards met',
  },
  {
    icon: Target,
    title: 'Relevancy Strength',
    value: '94%',
    description: 'Content match accuracy',
  },
];

export function Metrics() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Quality Metrics
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our advanced algorithms ensure you get the highest quality content
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm text-center"
            >
              <metric.icon className="w-12 h-12 text-brand-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{metric.title}</h3>
              <div className="text-3xl font-bold text-brand-primary mb-2">{metric.value}</div>
              <p className="text-sm text-gray-600">{metric.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}