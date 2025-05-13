import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import destinations from '@/data/destinations';

export default function DestinationShowcase() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  
  return (
    <section id="destinations" className="py-16 sm:py-24 bg-nomad-lightgray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Popular Destinations</h2>
          <p className="text-nomad-gray max-w-2xl mx-auto text-lg">
            Discover amazing locations around the world that are perfect for remote work and exploration.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {destinations.map((destination) => (
            <motion.div 
              key={destination.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={destination.imageUrl} 
                  alt={`${destination.name}, ${destination.country}`} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{destination.name}, {destination.country}</h3>
                <p className="text-nomad-gray mb-4">{destination.description}</p>
                <a href="#" className="text-[hsl(var(--primary))] font-medium flex items-center">
                  Learn more
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-12 text-center">
          <motion.a 
            href="#" 
            className="inline-block bg-[hsl(var(--primary))] text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Destinations
          </motion.a>
        </div>
      </div>
    </section>
  );
}
