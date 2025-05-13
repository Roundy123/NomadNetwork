import { Membership } from "../types";

const memberships: Membership[] = [
  {
    id: "explorer",
    name: "Explorer",
    price: 19,
    description: "Perfect for occasional travelers who want to test the nomad waters.",
    features: {
      included: [
        "Access to online community",
        "Basic destination guides",
        "Monthly virtual events"
      ],
      excluded: [
        "Workspace discounts",
        "Personal trip planning"
      ]
    }
  },
  {
    id: "nomad",
    name: "Nomad",
    price: 49,
    description: "Ideal for active digital nomads who want to make the most of their travels.",
    isPopular: true,
    features: {
      included: [
        "Full community access",
        "Comprehensive destination guides",
        "All community events (virtual & in-person)",
        "30% off partner workspaces"
      ],
      excluded: [
        "Personalized trip planning"
      ]
    }
  },
  {
    id: "global",
    name: "Global",
    price: 99,
    description: "The ultimate package for serious digital nomads and remote teams.",
    features: {
      included: [
        "All Nomad plan features",
        "Priority workspace access",
        "50% off partner workspaces",
        "Personalized trip planning",
        "Visa and accommodation support"
      ],
      excluded: []
    }
  }
];

export default memberships;
