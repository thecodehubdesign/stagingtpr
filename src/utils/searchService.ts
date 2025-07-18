
export interface SearchResult {
  title: string;
  type: 'page' | 'section' | 'blog';
  url: string;
  sectionId?: string;
  description: string;
}

export const searchData: SearchResult[] = [
  // Pages
  { title: 'Home', type: 'page', url: '/', description: 'Main homepage with hero section and overview' },
  { title: 'About Us', type: 'page', url: '/about', description: 'Learn about our story, mission and values' },
  { title: 'Classes', type: 'page', url: '/classes', description: 'Explore our full range of classes' },
  { title: 'Studios', type: 'page', url: '/studios', description: 'Find your perfect studio location' },
  { title: 'Instructors', type: 'page', url: '/instructors', description: 'Meet our amazing team of certified instructors' },
  { title: 'First Timers', type: 'page', url: '/first-timers', description: 'Perfect starting point for newcomers' },
  { title: 'Pricing', type: 'page', url: '/pricing', description: 'Flexible packages and membership options' },
  { title: 'Free Gifts', type: 'page', url: '/free-gifts', description: 'Special offers and free gifts' },
  { title: 'Franchise', type: 'page', url: '/franchise', description: 'Join the movement and open your own studio' },
  { title: 'Events', type: 'page', url: '/events', description: 'Competitions, showcases, and community events' },
  { title: 'Blog', type: 'page', url: '/blog', description: 'Tips, stories, and inspiration from our community' },

  // Home page sections
  { title: 'Hero Section', type: 'section', url: '/', sectionId: 'hero', description: 'Main introduction and call to action' },
  { title: 'Programs', type: 'section', url: '/', sectionId: 'programs', description: 'Our different training programs' },
  { title: 'Level Up Method', type: 'section', url: '/', sectionId: 'level-up', description: 'Our unique training methodology' },
  { title: 'Free Trial', type: 'section', url: '/', sectionId: 'free-trial', description: 'Book your free trial class' },
  { title: 'Founder Story', type: 'section', url: '/', sectionId: 'founder', description: 'Meet our founder and learn our story' },

  // About page sections
  { title: 'Our Story', type: 'section', url: '/about', sectionId: 'story', description: 'How The Pole Room was founded' },
  { title: 'Our Mission', type: 'section', url: '/about', sectionId: 'mission', description: 'What drives us every day' },
  { title: 'Our Values', type: 'section', url: '/about', sectionId: 'values', description: 'The principles that guide us' },
  { title: 'Meet the Team', type: 'section', url: '/about', sectionId: 'team', description: 'Get to know our amazing team' },

  // Classes
  { title: 'Beginner Pole', type: 'page', url: '/classes/beginner-pole', description: 'Perfect starting point for newcomers to pole dancing' },
  { title: 'Aerial Silks', type: 'page', url: '/classes/aerial-silks', description: 'Grace and strength in the air with silks' },
  { title: 'Lyra Hoop', type: 'page', url: '/classes/lyra-hoop', description: 'Elegant moves on the aerial hoop' },
  { title: 'Flexibility', type: 'page', url: '/classes/flexibility', description: 'Improve your range of motion and flexibility' },

  // Studios
  { title: 'Eltham Studio', type: 'page', url: '/studios/eltham', description: 'Our Eltham location in the heart of the community' },
  { title: 'Kilsyth Studio', type: 'page', url: '/studios/kilsyth', description: 'Modern facilities in beautiful Kilsyth' },
  { title: 'Highett Studio', type: 'page', url: '/studios/highett', description: 'Convenient Highett studio with ample parking' },
  { title: 'Mitcham Studio', type: 'page', url: '/studios/mitcham', description: 'Spacious Mitcham location with all amenities' },
  { title: 'Melbourne CBD Studio', type: 'page', url: '/studios/melbourne-cbd', description: 'Central city location for urban convenience' },
  { title: 'Narre Warren Studio', type: 'page', url: '/studios/narre-warren', description: 'Southeast Melbourne hub in Narre Warren' },

  // Blog posts (from the existing blog data)
  { title: '5 Benefits of Pole Dancing for Mental Health', type: 'blog', url: '/blog', description: 'Discover how pole dancing can boost your confidence, reduce stress, and improve your overall mental wellbeing.' },
  { title: 'Getting Started: What to Expect in Your First Pole Class', type: 'blog', url: '/blog', description: 'Nervous about your first pole class? Here\'s everything you need to know to feel confident and prepared.' },
  { title: 'The Science Behind Flexibility Training', type: 'blog', url: '/blog', description: 'Understanding the biomechanics of stretching and how our flexibility program accelerates your progress.' },
  { title: 'Aerial Silks vs Pole: Which is Right for You?', type: 'blog', url: '/blog', description: 'Explore the differences between aerial silks and pole dancing to find your perfect aerial art form.' },
  { title: 'Building Upper Body Strength for Aerial Arts', type: 'blog', url: '/blog', description: 'Essential exercises and techniques to develop the strength needed for pole and aerial performances.' },
  { title: 'Creating a Home Practice Space', type: 'blog', url: '/blog', description: 'Tips for setting up a safe and inspiring practice area in your own home.' },
];

export const searchContent = (query: string): SearchResult[] => {
  if (!query.trim()) return [];
  
  const normalizedQuery = query.toLowerCase().trim();
  
  return searchData.filter(item => 
    item.title.toLowerCase().includes(normalizedQuery) ||
    item.description.toLowerCase().includes(normalizedQuery) ||
    (item.type === 'blog' && item.title.toLowerCase().includes(normalizedQuery))
  ).slice(0, 8); // Limit to 8 results
};
