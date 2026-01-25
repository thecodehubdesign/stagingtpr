export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  category: string;
  image: string;
  featured?: boolean;
  popular?: boolean;
}

export const products: Product[] = [
  // Class Passes
  {
    id: 'class-pack-4',
    name: '4 Class Pack',
    price: 99,
    description: 'Perfect for trying different classes and getting started with pole',
    category: 'Class Passes',
    image: '/placeholder.svg',
    featured: true,
  },
  {
    id: 'class-pack-8',
    name: '8 Class Pack',
    price: 179,
    originalPrice: 200,
    description: 'Great value for regular students building their skills',
    category: 'Class Passes',
    image: '/placeholder.svg',
    popular: true,
  },
  {
    id: 'unlimited-monthly',
    name: 'Unlimited Monthly',
    price: 149,
    description: 'Unlimited classes for one month - perfect for intensive training',
    category: 'Class Passes',
    image: '/placeholder.svg',
  },
  
  // Protective Gear
  {
    id: 'knee-pads',
    name: 'Premium Knee Pads',
    price: 45,
    description: 'Professional grade knee protection for floor work and spins',
    category: 'Protective Gear',
    image: '/placeholder.svg',
    featured: true,
  },
  {
    id: 'grip-aid',
    name: 'Grip Enhancement Spray',
    price: 25,
    description: 'Long-lasting grip formula for better pole connection',
    category: 'Grip & Safety',
    image: '/placeholder.svg',
  },
  {
    id: 'grip-gloves',
    name: 'Grip Gloves',
    price: 35,
    description: 'Fingerless gloves for extra grip during challenging moves',
    category: 'Grip & Safety',
    image: '/placeholder.svg',
  },
  
  // Apparel
  {
    id: 'pole-shorts',
    name: 'High-Waisted Pole Shorts',
    price: 55,
    description: 'Comfortable, stretchy shorts designed for pole movement',
    category: 'Apparel',
    image: '/placeholder.svg',
    popular: true,
  },
  {
    id: 'sports-bra',
    name: 'Supportive Sports Bra',
    price: 40,
    description: 'Medium support sports bra perfect for pole classes',
    category: 'Apparel',
    image: '/placeholder.svg',
  },
  {
    id: 'tank-top',
    name: 'Breathable Tank Top',
    price: 30,
    description: 'Lightweight, moisture-wicking fabric for comfort',
    category: 'Apparel',
    image: '/placeholder.svg',
  },
  
  // Accessories
  {
    id: 'microfiber-towel',
    name: 'Microfiber Towel',
    price: 15,
    description: 'Quick-dry towel for wiping down poles and yourself',
    category: 'Accessories',
    image: '/placeholder.svg',
  },
  {
    id: 'water-bottle',
    name: 'Insulated Water Bottle',
    price: 20,
    description: 'Stay hydrated during intense training sessions',
    category: 'Accessories',
    image: '/placeholder.svg',
  },
  {
    id: 'gym-bag',
    name: 'Studio Gym Bag',
    price: 65,
    description: 'Spacious bag with compartments for all your pole gear',
    category: 'Accessories',
    image: '/placeholder.svg',
  },
];

export const getFeaturedProducts = () => products.filter(p => p.featured || p.popular).slice(0, 4);
