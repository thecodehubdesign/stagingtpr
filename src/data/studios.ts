
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
    description: "Our flagship Highett studio offers both pole and aerial classes in a spacious, welcoming environment. Perfect for beginners and advanced students alike."
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
    description: "Located in the heart of Kilsyth, our studio specializes in pole fitness with expert instructors and a supportive community atmosphere."
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
    description: "Our Narre Warren location combines pole and aerial training in a modern facility designed for comfort and safety."
  },
  {
    id: 'eltham',
    name: "The Pole Room Eltham",
    address: "2/38 Bridge Street, Eltham VIC",
    phone: "(03) 9456 7890",
    email: "eltham@thepoleroom.com.au",
    apparatus: ["Pole"],
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
    description: "Nestled in historic Eltham, our studio offers pole fitness classes in an intimate setting with personalized attention."
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
    description: "Our Mitcham studio features state-of-the-art equipment for both pole and aerial disciplines in a bright, airy space."
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
    description: "Located in the heart of Melbourne's CBD, our city studio offers convenient pole fitness classes for busy professionals."
  }
];
