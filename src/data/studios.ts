
export interface Studio {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  apparatus: string[];
  features: string[];
  image: string;
  lat: number;
  lng: number;
  hours: {
    [key: string]: string;
  };
  description: string;
  // New fields
  studioSpecs?: string;
  instagram?: string;
  facebook?: string;
  transportInfo?: string[];
  parkingInfo?: string[];
  reviewCount?: number;
  rating?: number;
  nearbyLandmark?: string;
}

export const studios: Studio[] = [
  {
    id: 'highett',
    name: "The Pole Room Highett",
    address: "1/5 Graham Road, Highett VIC",
    phone: "(03) 9123 4567",
    email: "highett@thepoleroom.com.au",
    apparatus: ["Pole", "Aerials"],
    features: ["Changing Rooms", "Studio Hire", "Hens Parties"],
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    lat: -37.9398,
    lng: 145.0432,
    hours: {
      'Monday': '6:00 AM - 9:00 PM',
      'Tuesday': '6:00 AM - 9:00 PM',
      'Wednesday': '6:00 AM - 9:00 PM',
      'Thursday': '6:00 AM - 9:00 PM',
      'Friday': '6:00 AM - 8:00 PM',
      'Saturday': '8:00 AM - 6:00 PM',
      'Sunday': '8:00 AM - 6:00 PM'
    },
    description: "Our flagship Highett studio offers both pole and aerial classes in a spacious, welcoming environment. Perfect for beginners and advanced students alike.",
    studioSpecs: "10 Poles 45mm X-Pole • 6 Aerial Hoops • Professional Rigging",
    instagram: "https://instagram.com/thepoleroom",
    facebook: "https://facebook.com/thepoleroom",
    reviewCount: 156,
    rating: 4.9,
    nearbyLandmark: "Minutes from Highett Station & Southland Shopping Centre",
    transportInfo: [
      "Take the Frankston line train to Highett Station",
      "Walk 5 minutes via Graham Road",
      "Bus routes 903 and 631 stop nearby"
    ],
    parkingInfo: [
      "Free onsite parking (8 spots)",
      "Additional street parking on Graham Road",
      "Accessible parking bay near entrance"
    ]
  },
  {
    id: 'kilsyth',
    name: "The Pole Room Kilsyth",
    address: "1-3 Southfork Drive, Kilsyth VIC",
    phone: "(03) 9234 5678",
    email: "kilsyth@thepoleroom.com.au",
    apparatus: ["Pole"],
    features: ["Changing Rooms", "Studio Hire", "Hens Parties"],
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    lat: -37.8197,
    lng: 145.3116,
    hours: {
      'Monday': '6:00 AM - 9:00 PM',
      'Tuesday': '6:00 AM - 9:00 PM',
      'Wednesday': '6:00 AM - 9:00 PM',
      'Thursday': '6:00 AM - 9:00 PM',
      'Friday': '6:00 AM - 8:00 PM',
      'Saturday': '8:00 AM - 6:00 PM',
      'Sunday': '8:00 AM - 6:00 PM'
    },
    description: "Located in the heart of Kilsyth, our studio specializes in pole fitness with expert instructors and a supportive community atmosphere.",
    studioSpecs: "8 Poles 45mm X-Pole • Eurotruss Rig System",
    instagram: "https://instagram.com/thepoleroom",
    facebook: "https://facebook.com/thepoleroom",
    reviewCount: 98,
    rating: 4.8,
    nearbyLandmark: "Near Churinga Shopping Centre",
    transportInfo: [
      "Take bus route 664 or 679 to Kilsyth",
      "Nearest train station is Mooroolbark (15 min drive)",
      "We're located in the Southfork industrial area"
    ],
    parkingInfo: [
      "Ample free onsite parking",
      "Easy access from Canterbury Road"
    ]
  },
  {
    id: 'narre-warren',
    name: "The Pole Room Narre Warren",
    address: "Narre Warren VIC",
    phone: "(03) 9345 6789",
    email: "narrewarren@thepoleroom.com.au",
    apparatus: ["Pole", "Aerials"],
    features: ["Changing Rooms", "Studio Hire", "Hens Parties"],
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    lat: -38.0267,
    lng: 145.3028,
    hours: {
      'Monday': '6:00 AM - 9:00 PM',
      'Tuesday': '6:00 AM - 9:00 PM',
      'Wednesday': '6:00 AM - 9:00 PM',
      'Thursday': '6:00 AM - 9:00 PM',
      'Friday': '6:00 AM - 8:00 PM',
      'Saturday': '8:00 AM - 6:00 PM',
      'Sunday': '8:00 AM - 6:00 PM'
    },
    description: "Our Narre Warren location combines pole and aerial training in a modern facility designed for comfort and safety.",
    studioSpecs: "8 Poles 45mm X-Pole • 4 Aerial Hammocks • 4 Aerial Hoops",
    instagram: "https://instagram.com/thepoleroom",
    facebook: "https://facebook.com/thepoleroom",
    reviewCount: 112,
    rating: 4.9,
    nearbyLandmark: "Near Westfield Fountain Gate",
    transportInfo: [
      "Take the Pakenham/Cranbourne line to Narre Warren Station",
      "Walk 10 minutes or take bus 894",
      "Multiple bus routes available"
    ],
    parkingInfo: [
      "Free onsite parking available",
      "Street parking also available"
    ]
  },
  {
    id: 'eltham',
    name: "The Pole Room Eltham",
    address: "Factory 2/38 Bridge Street, Eltham VIC 3095",
    phone: "(03) 9456 7890",
    email: "eltham@thepoleroom.com.au",
    apparatus: ["Pole", "Aerials"],
    features: ["Changing Rooms", "Studio Hire", "Hens Parties"],
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    lat: -37.7137,
    lng: 145.1440,
    hours: {
      'Monday': '6:00 AM - 9:00 PM',
      'Tuesday': '6:00 AM - 9:00 PM',
      'Wednesday': '6:00 AM - 9:00 PM',
      'Thursday': '6:00 AM - 9:00 PM',
      'Friday': '6:00 AM - 8:00 PM',
      'Saturday': '8:00 AM - 6:00 PM',
      'Sunday': '8:00 AM - 6:00 PM'
    },
    description: "Nestled in historic Eltham, our studio offers pole fitness classes in an intimate setting with personalized attention.",
    studioSpecs: "8 Poles 35mm X-Pole • 8 Aerial Hammocks • Eurotruss 290 Rig",
    instagram: "https://instagram.com/thepoleroom",
    facebook: "https://facebook.com/thepoleroom",
    reviewCount: 127,
    rating: 4.9,
    nearbyLandmark: "Minutes from Bunnings Eltham & Eltham Town Centre",
    transportInfo: [
      "Take the Hurstbridge line train to Eltham Station",
      "Walk 8 minutes via Main Road",
      "We're located near Bunnings Eltham",
      "Bus routes 513 and 582 also stop nearby"
    ],
    parkingInfo: [
      "Free onsite parking (10 spots)",
      "Additional street parking on Main Road",
      "Accessible parking bay near entrance"
    ]
  },
  {
    id: 'mitcham',
    name: "The Pole Room Mitcham",
    address: "2e Cochrane Street, Mitcham VIC 3132",
    phone: "(03) 9567 8901",
    email: "mitcham@thepoleroom.com.au",
    apparatus: ["Pole", "Aerials"],
    features: ["Changing Rooms", "Studio Hire", "Hens Parties"],
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    lat: -37.8183,
    lng: 145.2044,
    hours: {
      'Monday': '6:00 AM - 9:00 PM',
      'Tuesday': '6:00 AM - 9:00 PM',
      'Wednesday': '6:00 AM - 9:00 PM',
      'Thursday': '6:00 AM - 9:00 PM',
      'Friday': '6:00 AM - 8:00 PM',
      'Saturday': '8:00 AM - 6:00 PM',
      'Sunday': '8:00 AM - 6:00 PM'
    },
    description: "Our Mitcham studio features state-of-the-art equipment for both pole and aerial disciplines in a bright, airy space.",
    studioSpecs: "10 Poles 45mm X-Pole • 6 Aerial Silks • 4 Aerial Hoops",
    instagram: "https://instagram.com/thepoleroom",
    facebook: "https://facebook.com/thepoleroom",
    reviewCount: 143,
    rating: 4.8,
    nearbyLandmark: "Near Mitcham Train Station & Mitcham Shopping Centre",
    transportInfo: [
      "Take the Belgrave/Lilydale line to Mitcham Station",
      "Walk 5 minutes via Cochrane Street",
      "Bus routes 270, 271, and 901 stop nearby"
    ],
    parkingInfo: [
      "Free onsite parking available",
      "2-hour street parking on Cochrane Street",
      "Mitcham Station car park nearby"
    ]
  },
  {
    id: 'cbd',
    name: "The Pole Room CBD",
    address: "2/333 Flinders Lane, Melbourne VIC 3000",
    phone: "(03) 9678 9012",
    email: "cbd@thepoleroom.com.au",
    apparatus: ["Pole"],
    features: ["Changing Rooms", "Studio Hire", "Hens Parties", "No Parking"],
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    lat: -37.8162,
    lng: 144.9646,
    hours: {
      'Monday': '6:00 AM - 9:00 PM',
      'Tuesday': '6:00 AM - 9:00 PM',
      'Wednesday': '6:00 AM - 9:00 PM',
      'Thursday': '6:00 AM - 9:00 PM',
      'Friday': '6:00 AM - 8:00 PM',
      'Saturday': '8:00 AM - 6:00 PM',
      'Sunday': '8:00 AM - 6:00 PM'
    },
    description: "Located in the heart of Melbourne's CBD, our city studio offers convenient pole fitness classes for busy professionals.",
    studioSpecs: "6 Poles 45mm X-Pole • Boutique Studio Space",
    instagram: "https://instagram.com/thepoleroom",
    facebook: "https://facebook.com/thepoleroom",
    reviewCount: 89,
    rating: 4.7,
    nearbyLandmark: "Steps from Flinders Street Station & Federation Square",
    transportInfo: [
      "Walk from Flinders Street Station (3 minutes)",
      "Multiple tram routes on Flinders Street",
      "City Loop trains all within walking distance"
    ],
    parkingInfo: [
      "No onsite parking - CBD location",
      "Wilson Parking on Flinders Lane",
      "QV Car Park 5 minutes walk"
    ]
  },
  {
    id: 'rowville',
    name: "The Pole Room Rowville",
    address: "Rowville VIC 3178",
    phone: "(03) 9789 0123",
    email: "rowville@thepoleroom.com.au",
    apparatus: ["Pole", "Aerials"],
    features: ["Changing Rooms", "Studio Hire", "Hens Parties"],
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    lat: -37.9257,
    lng: 145.2317,
    hours: {
      'Monday': '6:00 AM - 9:00 PM',
      'Tuesday': '6:00 AM - 9:00 PM',
      'Wednesday': '6:00 AM - 9:00 PM',
      'Thursday': '6:00 AM - 9:00 PM',
      'Friday': '6:00 AM - 8:00 PM',
      'Saturday': '8:00 AM - 6:00 PM',
      'Sunday': '8:00 AM - 6:00 PM'
    },
    description: "Our Rowville studio offers pole and aerial classes in a modern, welcoming space perfect for the Knox community.",
    studioSpecs: "8 Poles 45mm X-Pole • 4 Aerial Hoops • Professional Rigging",
    instagram: "https://instagram.com/thepoleroom",
    facebook: "https://facebook.com/thepoleroom",
    reviewCount: 95,
    rating: 4.8,
    nearbyLandmark: "Near Stud Park Shopping Centre",
    transportInfo: [
      "Take bus route 901 to Rowville",
      "Nearest train station is Dandenong (15 min drive)",
      "Easy access from Stud Road"
    ],
    parkingInfo: [
      "Free onsite parking available",
      "Street parking on surrounding streets"
    ]
  }
];
