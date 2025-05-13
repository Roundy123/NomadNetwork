import { Destination } from "../types";

const destinations: Destination[] = [
  {
    id: 1,
    name: "Bali",
    country: "Indonesia",
    description: "Island paradise with vibrant digital nomad scene and beautiful coworking spaces.",
    imageUrl: "https://images.unsplash.com/photo-1554481923-a6918bd997bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    ratings: {
      fun: 4.7,
      affordability: 3.8,
      safety: 4.2,
      wifi: 3.9
    },
    tags: ["Beach", "Island", "Popular", "Coworking"]
  },
  {
    id: 2,
    name: "Lisbon",
    country: "Portugal",
    description: "European tech hub with perfect weather, affordable cost of living, and gorgeous coastline.",
    imageUrl: "https://images.unsplash.com/photo-1534960680480-ca9853707e10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    ratings: {
      fun: 4.5,
      affordability: 3.5,
      safety: 4.6,
      wifi: 4.7
    },
    tags: ["Europe", "Tech Hub", "Coastal", "Historic"]
  },
  {
    id: 3,
    name: "Chiang Mai",
    country: "Thailand",
    description: "Affordable living with rich culture, amazing food, and established nomad community.",
    imageUrl: "https://images.unsplash.com/photo-1455156218388-5e61b526818b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    ratings: {
      fun: 4.2,
      affordability: 4.8,
      safety: 4.0,
      wifi: 4.2
    },
    tags: ["Asia", "Budget", "Food", "Culture"]
  },
  {
    id: 4,
    name: "Mexico City",
    country: "Mexico",
    description: "Vibrant metropolis with rich culture, diverse neighborhoods, and growing tech scene.",
    imageUrl: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    ratings: {
      fun: 4.6,
      affordability: 4.1,
      safety: 3.2,
      wifi: 3.8
    },
    tags: ["Latin America", "Urban", "Food", "Culture"]
  },
  {
    id: 5,
    name: "Medellin",
    country: "Colombia",
    description: "Perfect climate, innovative city with a thriving expat and digital nomad community.",
    imageUrl: "https://images.unsplash.com/photo-1562693315-156f8de60432?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    ratings: {
      fun: 4.5,
      affordability: 4.3,
      safety: 3.6,
      wifi: 4.0
    },
    tags: ["Latin America", "Spring Weather", "Community", "Nature"]
  },
  {
    id: 6,
    name: "Prague",
    country: "Czech Republic",
    description: "Historic European city with stunning architecture and excellent public transport.",
    imageUrl: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    ratings: {
      fun: 4.3,
      affordability: 3.7,
      safety: 4.7,
      wifi: 4.5
    },
    tags: ["Europe", "Historic", "Architecture", "Public Transport"]
  },
  {
    id: 7,
    name: "Tbilisi",
    country: "Georgia",
    description: "Blend of ancient and modern with excellent visa policies and low cost of living.",
    imageUrl: "https://images.unsplash.com/photo-1565008576549-57569a49371d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    ratings: {
      fun: 4.0,
      affordability: 4.9,
      safety: 4.3,
      wifi: 3.7
    },
    tags: ["Europe", "Asia", "Budget", "Visa-friendly", "Hidden Gem"]
  },
  {
    id: 8,
    name: "Cape Town",
    country: "South Africa",
    description: "Stunning coastal city with diverse culture, outdoor activities, and growing tech scene.",
    imageUrl: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    ratings: {
      fun: 4.6,
      affordability: 3.9,
      safety: 3.1,
      wifi: 3.6
    },
    tags: ["Africa", "Coastal", "Outdoor", "Nature"]
  }
];

export default destinations;
