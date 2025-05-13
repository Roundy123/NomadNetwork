import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section className="py-16 sm:py-24 bg-[hsl(var(--primary))] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Start Your Nomad Journey?</h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of remote workers who have found their freedom and community with Nomad Network.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <motion.a 
              href="#" 
              className="bg-white text-[hsl(var(--primary))] px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Now
            </motion.a>
            <motion.a 
              href="#" 
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:bg-opacity-10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
