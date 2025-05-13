import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 sm:pb-32 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
          alt="Digital nomad destination" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-2xl text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Live Anywhere.<br />Work Everywhere.
          </h1>
          <p className="text-lg sm:text-xl mb-8 max-w-lg">
            Join our global community of remote workers and explore the world while growing your career.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <motion.a 
              href="#" 
              className="bg-[hsl(var(--primary))] text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Journey
            </motion.a>
            <motion.a 
              href="#" 
              className="bg-white text-nomad-black px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors text-center"
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
