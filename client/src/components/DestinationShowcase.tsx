import { motion } from 'framer-motion';
import { ChevronRight, Search, Smile, DollarSign, Shield, Wifi, Filter, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import destinations from '@/data/destinations';

export default function DestinationShowcase() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    fun: 0,
    affordability: 0,
    safety: 0,
    wifi: 0,
  });
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [filteredDestinations, setFilteredDestinations] = useState(destinations);
  const [showFilters, setShowFilters] = useState(false);

  // Extract all unique tags
  const allTags = Array.from(new Set(destinations.flatMap(d => d.tags)));
  
  // Update filtered destinations when filters change
  useEffect(() => {
    let results = destinations;
    
    // Apply search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      results = results.filter(dest => 
        dest.name.toLowerCase().includes(query) || 
        dest.country.toLowerCase().includes(query) ||
        dest.description.toLowerCase().includes(query) ||
        dest.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    // Apply rating filters
    if (filters.fun > 0) {
      results = results.filter(dest => dest.ratings.fun >= filters.fun);
    }
    if (filters.affordability > 0) {
      results = results.filter(dest => dest.ratings.affordability >= filters.affordability);
    }
    if (filters.safety > 0) {
      results = results.filter(dest => dest.ratings.safety >= filters.safety);
    }
    if (filters.wifi > 0) {
      results = results.filter(dest => dest.ratings.wifi >= filters.wifi);
    }
    
    // Apply tag filters
    if (selectedTags.length > 0) {
      results = results.filter(dest => 
        selectedTags.some(tag => dest.tags.includes(tag))
      );
    }
    
    setFilteredDestinations(results);
  }, [searchQuery, filters, selectedTags]);
  
  // Handle rating filter changes
  const handleRatingFilterChange = (type: keyof typeof filters, value: number) => {
    setFilters(prev => ({
      ...prev,
      [type]: prev[type] === value ? 0 : value // Toggle off if already selected
    }));
  };
  
  // Handle tag selection
  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };
  
  // Toggle filter visibility
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };
  
  // Count active filters
  const activeFilterCount = () => {
    return Object.values(filters).filter(v => v > 0).length + selectedTags.length;
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
          <p className="text-nomad-gray max-w-2xl mx-auto text-lg mb-8">
            Discover amazing locations around the world that are perfect for remote work and exploration.
          </p>
          
          {/* Search & Filter Section */}
          <div className="max-w-4xl mx-auto mb-12 bg-white p-6 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search destinations..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <button 
                onClick={toggleFilters}
                className={`flex items-center justify-center gap-2 px-4 py-2 rounded-md border ${
                  activeFilterCount() > 0 
                    ? 'bg-[hsl(var(--primary))] text-white border-[hsl(var(--primary))]'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
              >
                <Filter size={20} />
                <span>Filters {activeFilterCount() > 0 ? `(${activeFilterCount()})` : ''}</span>
                {showFilters && <X size={16} />}
              </button>
            </div>
            
            {showFilters && (
              <div className="border-t pt-6 mt-2">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                  <div className="space-y-2">
                    <div className="flex items-center mb-1">
                      <Smile className="w-4 h-4 mr-2 text-[hsl(var(--primary))]" />
                      <span className="font-medium">Fun</span>
                    </div>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((num) => (
                        <button 
                          key={`fun-${num}`}
                          className={`w-8 h-8 rounded-full ${filters.fun === num ? 'bg-[hsl(var(--primary))] text-white' : 'bg-gray-200'}`}
                          onClick={() => handleRatingFilterChange('fun', num)}
                        >
                          {num}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center mb-1">
                      <DollarSign className="w-4 h-4 mr-2 text-[hsl(var(--primary))]" />
                      <span className="font-medium">Affordability</span>
                    </div>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((num) => (
                        <button 
                          key={`affordability-${num}`}
                          className={`w-8 h-8 rounded-full ${filters.affordability === num ? 'bg-[hsl(var(--primary))] text-white' : 'bg-gray-200'}`}
                          onClick={() => handleRatingFilterChange('affordability', num)}
                        >
                          {num}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center mb-1">
                      <Shield className="w-4 h-4 mr-2 text-[hsl(var(--primary))]" />
                      <span className="font-medium">Safety</span>
                    </div>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((num) => (
                        <button 
                          key={`safety-${num}`}
                          className={`w-8 h-8 rounded-full ${filters.safety === num ? 'bg-[hsl(var(--primary))] text-white' : 'bg-gray-200'}`}
                          onClick={() => handleRatingFilterChange('safety', num)}
                        >
                          {num}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center mb-1">
                      <Wifi className="w-4 h-4 mr-2 text-[hsl(var(--primary))]" />
                      <span className="font-medium">WiFi</span>
                    </div>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((num) => (
                        <button 
                          key={`wifi-${num}`}
                          className={`w-8 h-8 rounded-full ${filters.wifi === num ? 'bg-[hsl(var(--primary))] text-white' : 'bg-gray-200'}`}
                          onClick={() => handleRatingFilterChange('wifi', num)}
                        >
                          {num}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Popular Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {allTags.map(tag => (
                      <button
                        key={tag}
                        className={`px-3 py-1 rounded-full text-sm ${
                          selectedTags.includes(tag) 
                            ? 'bg-[hsl(var(--primary))] text-white' 
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                        onClick={() => toggleTag(tag)}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
        
        {filteredDestinations.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">No destinations match your current filters. Try adjusting your search criteria.</p>
          </div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {filteredDestinations.map((destination) => (
              <motion.div 
                key={destination.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={destination.imageUrl} 
                    alt={`${destination.name}, ${destination.country}`} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <div className="bg-white px-2 py-1 rounded-full text-xs font-medium shadow-sm">
                      {destination.country}
                    </div>
                  </div>
                  
                  {/* Rating badges - now with colorful styling */}
                  <div className="absolute top-0 left-0 w-full p-2 z-10">
                    <div className="grid grid-cols-2 gap-1">
                      <div className="flex items-center px-2 py-1 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full shadow-sm">
                        <Smile className="w-4 h-4 mr-1 text-white" />
                        <span className="font-medium text-white">{destination.ratings.fun.toFixed(1)}</span>
                      </div>
                      <div className="flex items-center px-2 py-1 bg-gradient-to-r from-green-400 to-green-500 rounded-full shadow-sm">
                        <DollarSign className="w-4 h-4 mr-1 text-white" />
                        <span className="font-medium text-white">{destination.ratings.affordability.toFixed(1)}</span>
                      </div>
                      <div className="flex items-center px-2 py-1 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full shadow-sm mt-1">
                        <Shield className="w-4 h-4 mr-1 text-white" />
                        <span className="font-medium text-white">{destination.ratings.safety.toFixed(1)}</span>
                      </div>
                      <div className="flex items-center px-2 py-1 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full shadow-sm mt-1">
                        <Wifi className="w-4 h-4 mr-1 text-white" />
                        <span className="font-medium text-white">{destination.ratings.wifi.toFixed(1)}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-3">
                  <h3 className="text-xl font-bold mb-2">{destination.name}</h3>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {destination.tags.slice(0, 3).map((tag, index) => (
                      <span 
                        key={index} 
                        className="bg-gray-100 text-xs px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    {destination.tags.length > 3 && 
                      <span className="text-xs px-2 py-1">+{destination.tags.length - 3} more</span>
                    }
                  </div>
                  
                  <a href="#" className="text-[hsl(var(--primary))] font-medium flex items-center text-sm">
                    Learn more
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
        
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