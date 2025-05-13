import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import memberships from '@/data/memberships';

export default function Membership() {
  return (
    <section id="membership" className="py-16 sm:py-24 bg-nomad-lightgray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Membership Plans</h2>
          <p className="text-nomad-gray max-w-2xl mx-auto text-lg">
            Choose the plan that fits your lifestyle and start your nomad journey today.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {memberships.map((membership, index) => (
            <motion.div 
              key={membership.id}
              className={`
                bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow
                ${membership.isPopular ? 'border-2 border-[hsl(var(--primary))] transform scale-105 z-10' : ''}
              `}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {membership.isPopular && (
                <div className="bg-[hsl(var(--primary))] text-white py-2 text-center font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{membership.name}</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold">${membership.price}</span>
                  <span className="text-nomad-gray ml-2">/month</span>
                </div>
                <p className="text-nomad-gray mb-6">{membership.description}</p>
                <ul className="space-y-3 mb-8">
                  {membership.features.included.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className="text-[hsl(var(--primary))] mr-3">
                        <Check className="w-5 h-5" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                  {membership.features.excluded.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className="text-nomad-gray mr-3">
                        <X className="w-5 h-5" />
                      </div>
                      <span className="text-nomad-gray">{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.a 
                  href="#" 
                  className={`
                    block w-full px-6 py-3 rounded-full font-medium text-center
                    ${membership.isPopular 
                      ? 'bg-[hsl(var(--primary))] text-white hover:bg-opacity-90' 
                      : 'bg-white border border-[hsl(var(--primary))] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))] hover:text-white'
                    } transition-colors
                  `}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Get Started
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
