export interface Program {
  name: string;
  href: string;
  category: 'Pole' | 'Aerial' | 'Dance' | 'Flexibility';
  level: string;
  image: string;
  description: string;
}

export const programs: Program[] = [
  // Pole Programs
  {
    name: 'Pole Beginner',
    href: '/programs/pole/beginner',
    category: 'Pole',
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Start your pole journey with foundational spins, climbs, and floor work in a supportive environment.'
  },
  {
    name: 'Pole Intermediate',
    href: '/programs/pole/intermediate',
    category: 'Pole',
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Take your pole journey to the next level with advanced spins, inversions, and combinations.'
  },
  {
    name: 'Pole Advanced',
    href: '/programs/pole/advanced',
    category: 'Pole',
    level: 'Advanced',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Master complex aerial inversions, drops, and competition-level technique.'
  },
  {
    name: 'Pole Elite',
    href: '/programs/pole/elite',
    category: 'Pole',
    level: 'Elite',
    image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Competition-level training for serious pole athletes pursuing professional careers.'
  },
  {
    name: 'Teen Pole',
    href: '/programs/pole/teens',
    category: 'Pole',
    level: 'Ages 13-17',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Athletic pole fitness for teenagers focusing on strength, confidence, and self-expression.'
  },
  {
    name: '40+ Pole',
    href: '/programs/pole/40-plus',
    category: 'Pole',
    level: 'Ages 40+',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Age-appropriate pole fitness with focus on joint health, strength, and community.'
  },
  // Aerial Hoop Programs
  {
    name: 'Aerial Hoop Beginner',
    href: '/programs/aerial-hoop/beginner',
    category: 'Aerial',
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Learn to mount, spin, and pose in the lyra while building strength and grace.'
  },
  {
    name: 'Aerial Hoop Intermediate',
    href: '/programs/aerial-hoop/intermediate',
    category: 'Aerial',
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Advanced poses, dynamic spins, and flowing sequences in the aerial hoop.'
  },
  {
    name: 'Aerial Hoop Advanced',
    href: '/programs/aerial-hoop/advanced',
    category: 'Aerial',
    level: 'Advanced',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Master complex drops, catches, and performance-ready aerial hoop routines.'
  },
  // Aerial Silks Programs
  {
    name: 'Aerial Silks Beginner',
    href: '/programs/aerial-silks/beginner',
    category: 'Aerial',
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Climb, wrap, and create beautiful shapes on flowing fabric.'
  },
  {
    name: 'Aerial Silks Intermediate',
    href: '/programs/aerial-silks/intermediate',
    category: 'Aerial',
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Complex wraps, controlled drops, and flowing aerial silks combinations.'
  },
  {
    name: 'Aerial Hammock',
    href: '/programs/aerial-silks/hammock',
    category: 'Aerial',
    level: 'All Levels',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Where aerial yoga meets circus arts - accessible and beautiful aerial fitness.'
  },
  // Dance Programs
  {
    name: 'Dance Filthy',
    href: '/dance-filthy',
    category: 'Dance',
    level: 'All Levels',
    image: 'https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Embrace your sensual side with exotic dance and floor work.'
  },
  // Flexibility Programs
  {
    name: 'Front Splits Masterclass',
    href: '/front-splits-masterclass',
    category: 'Flexibility',
    level: 'All Levels',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Master your front splits with progressive flexibility training.'
  }
];
