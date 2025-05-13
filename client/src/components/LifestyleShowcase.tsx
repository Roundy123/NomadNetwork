import { motion } from 'framer-motion';

export default function LifestyleShowcase() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Work from Anywhere, Live Everywhere</h2>
            <p className="text-nomad-gray text-lg mb-6">
              The world is changing, and so is the way we work. Break free from the traditional office and join a global community of professionals who have embraced location independence.
            </p>
            <p className="text-nomad-gray text-lg mb-8">
              Our platform provides everything you need to successfully transition to the digital nomad lifestyle - from accommodation to workspaces, community events to local experiences.
            </p>
            <motion.a 
              href="#" 
              className="inline-block bg-[hsl(var(--primary))] text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Journey
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div 
              className="rounded-lg overflow-hidden"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1530099486328-e021101a494a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500" 
                alt="Digital nomad working at cafe" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div 
              className="rounded-lg overflow-hidden"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1520881363902-a0ff4e722963?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500" 
                alt="Coworking space" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div 
              className="rounded-lg overflow-hidden"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500" 
                alt="Digital nomad community event" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div 
              className="rounded-lg overflow-hidden"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1509305717900-84f40e786d82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500" 
                alt="Remote work from tropical location" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
