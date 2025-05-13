export interface Destination {
  id: number;
  name: string;
  country: string;
  description: string;
  imageUrl: string;
  ratings: {
    fun: number;
    affordability: number;
    safety: number;
    wifi: number;
  };
  tags: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  title: string;
  text: string;
  avatarUrl: string;
}

export interface Membership {
  id: string;
  name: string;
  price: number;
  description: string;
  isPopular?: boolean;
  features: {
    included: string[];
    excluded: string[];
  };
}
