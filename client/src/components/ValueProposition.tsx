import { motion } from 'framer-motion';
import { MapPin, Users, User } from 'lucide-react';

export default function ValueProposition() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Choose Nomads</h2>
          <p className="text-nomad-gray max-w-2xl mx-auto text-lg">
            Everything you need to work remotely and explore the world with confidence.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Feature 1 */}
          <motion.div className="text-center p-6" variants={itemVariants}>
            <div className="text-[hsl(var(--primary))] mb-4 inline-block">
              <MapPin className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-bold mb-2">Global Destinations</h3>
            <p className="text-nomad-gray">
              Access to over 100+ curated locations optimized for remote work and exploration.
            </p>
          </motion.div>
          
          {/* Feature 2 */}
          <motion.div className="text-center p-6" variants={itemVariants}>
            <div className="text-[hsl(var(--primary))] mb-4 inline-block">
              <Users className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-bold mb-2">Vibrant Community</h3>
            <p className="text-nomad-gray">
              Connect with like-minded professionals, attend exclusive events, and build your network.
            </p>
          </motion.div>
          
          {/* Feature 3 */}
          <motion.div className="text-center p-6" variants={itemVariants}>
            <div className="text-[hsl(var(--primary))] mb-4 inline-block">
              <User className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-bold mb-2">Personalized Support</h3>
            <p className="text-nomad-gray">
              Dedicated assistance for visas, accommodation, workspace, and local integration.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
