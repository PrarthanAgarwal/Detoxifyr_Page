import { motion } from 'framer-motion';

const screenshots = [
  {
    url: "/Images/1.PNG",
    title: "Session Page",
    description: "Start and manage your focused viewing sessions with detailed controls"
  },
  {
    url: "/Images/2.PNG",
    title: "Curated Videos",
    description: "Browse through a personalized feed of high-quality, filtered content"
  },
  {
    url: "/Images/3.PNG",
    title: "Session History",
    description: "Track your viewing patterns and analyze your content consumption habits"
  }
];

export function Showcase() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Beautiful Interface, Powerful Features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience YouTube the way it should be - clean, focused, and tailored to your preferences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {screenshots.map((screenshot, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <div className="w-full h-[400px] mb-8 hover:scale-105 transition-transform duration-300">
                <img
                  src={screenshot.url}
                  alt={screenshot.title}
                  className="w-full h-full object-contain rounded-lg shadow-md"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {screenshot.title}
              </h3>
              <p className="text-lg text-gray-600">
                {screenshot.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}