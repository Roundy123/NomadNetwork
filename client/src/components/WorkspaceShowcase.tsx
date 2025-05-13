import { motion } from 'framer-motion';
import { MapPin, Briefcase, Database } from 'lucide-react';

export default function WorkspaceShowcase() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Find Your Perfect Workspace</h2>
            <p className="text-nomad-gray text-lg mb-6">
              Stay productive wherever you go with our network of verified coworking spaces, cafes, and work-friendly accommodations.
            </p>
            <div className="space-y-6 mb-8">
              <div className="flex">
                <div className="flex-shrink-0 text-[hsl(var(--primary))] mr-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Verified Coworking Spaces</h3>
                  <p className="text-nomad-gray">Access to hand-picked coworking spaces with fast WiFi, comfortable workstations, and community areas.</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 text-[hsl(var(--primary))] mr-4">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Work-Friendly Accommodations</h3>
                  <p className="text-nomad-gray">Stay in apartments and coliving spaces designed for remote workers with dedicated workspaces.</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 text-[hsl(var(--primary))] mr-4">
                  <Database className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Exclusive Member Discounts</h3>
                  <p className="text-nomad-gray">Get special rates and perks at our partner locations around the world.</p>
                </div>
              </div>
            </div>
            <motion.a 
              href="#" 
              className="inline-block bg-[hsl(var(--primary))] text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Workspaces
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="order-1 md:order-2 grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div 
              className="rounded-lg overflow-hidden shadow-lg"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500" 
                alt="Modern coworking space" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div 
              className="rounded-lg overflow-hidden shadow-lg"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500" 
                alt="Collaborative workspace" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div 
              className="rounded-lg overflow-hidden shadow-lg"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500" 
                alt="Work-friendly cafe" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div 
              className="rounded-lg overflow-hidden shadow-lg"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500" 
                alt="Coliving space for digital nomads" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
