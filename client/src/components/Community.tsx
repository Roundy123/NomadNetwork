import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function Community() {
  return (
    <section id="community" className="py-16 sm:py-24 bg-nomad-lightgray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Global Community</h2>
          <p className="text-nomad-gray max-w-2xl mx-auto text-lg">
            Connect with thousands of professionals living and working around the world.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Community Stat 1 */}
          <motion.div 
            className="bg-white p-8 rounded-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="text-5xl font-bold text-[hsl(var(--primary))] mb-4">15,000+</div>
            <h3 className="text-xl font-bold mb-2">Members Worldwide</h3>
            <p className="text-nomad-gray">Join our growing community of remote workers across the globe.</p>
          </motion.div>
          
          {/* Community Stat 2 */}
          <motion.div 
            className="bg-white p-8 rounded-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="text-5xl font-bold text-[hsl(var(--primary))] mb-4">100+</div>
            <h3 className="text-xl font-bold mb-2">Global Destinations</h3>
            <p className="text-nomad-gray">Explore our curated selection of remote-work friendly cities.</p>
          </motion.div>
          
          {/* Community Stat 3 */}
          <motion.div 
            className="bg-white p-8 rounded-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="text-5xl font-bold text-[hsl(var(--primary))] mb-4">500+</div>
            <h3 className="text-xl font-bold mb-2">Monthly Events</h3>
            <p className="text-nomad-gray">Networking, workshops, and social activities for our community.</p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1531548731165-c6ae86ff6491?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600" 
                alt="Nomad community gathering" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-6">More Than Just a Network</h3>
            <p className="text-nomad-gray text-lg mb-6">
              Our community is built on genuine connections, shared experiences, and mutual support. Whether you're looking for business collaborators, travel companions, or just friends who understand your lifestyle, you'll find your tribe here.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="text-[hsl(var(--primary))] mr-4">
                  <Check className="w-6 h-6" />
                </div>
                <p className="text-nomad-gray">Regular meetups in major cities around the world</p>
              </div>
              <div className="flex items-start">
                <div className="text-[hsl(var(--primary))] mr-4">
                  <Check className="w-6 h-6" />
                </div>
                <p className="text-nomad-gray">Online forums and groups organized by location and interest</p>
              </div>
              <div className="flex items-start">
                <div className="text-[hsl(var(--primary))] mr-4">
                  <Check className="w-6 h-6" />
                </div>
                <p className="text-nomad-gray">Skill-sharing workshops and professional development</p>
              </div>
              <div className="flex items-start">
                <div className="text-[hsl(var(--primary))] mr-4">
                  <Check className="w-6 h-6" />
                </div>
                <p className="text-nomad-gray">Exclusive local experiences and cultural immersion</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
