export interface Instructor {
  id: number;
  name: string;
  specialty: string;
  specialties: string[];
  experience: string;
  bio: string;
  image: string;
  video?: string;
}

export const instructors: Instructor[] = [
  {
    id: 1,
    name: "Derryn",
    specialty: "Pole & Flexibility",
    specialties: ["Pole", "Flexibility", "Dance"],
    experience: "8+ years",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Derryn brings passion and energy to every class, focusing on building strength and confidence in her students. Her teaching style emphasizes proper technique while making every session fun and engaging.",
    image: "/images/instructors/derryn.png",
    video: "/videos/instructors/alison.mp4"
  },
  {
    id: 2,
    name: "Bianca",
    specialty: "Aerial Silks & Hoop",
    specialties: ["Aerial Silks", "Aerial Hoop", "Contortion"],
    experience: "6+ years",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bianca specializes in aerial arts and brings a graceful, creative approach to her classes. She loves helping students discover new movements and push their boundaries safely.",
    image: "/images/instructors/bianca.png",
    video: "/videos/instructors/derryn.mp4"
  },
  {
    id: 3,
    name: "Alison",
    specialty: "Pole & Strength",
    specialties: ["Pole", "Strength Training", "Tricks"],
    experience: "10+ years",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Alison is dedicated to helping her students build incredible strength and master advanced pole tricks. Her systematic approach ensures safe progression for all levels.",
    image: "/images/instructors/alison.png",
    video: "/videos/instructors/bianca.mp4"
  },
  {
    id: 4,
    name: "KP",
    specialty: "Flow & Choreography",
    specialties: ["Flow", "Choreography", "Dance"],
    experience: "5+ years",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. KP brings creativity and musicality to every class, specializing in fluid transitions and expressive choreography that helps students find their unique style.",
    image: "/images/instructors/kp.png"
  },
  {
    id: 5,
    name: "Gillian",
    specialty: "Exotic & Heels",
    specialties: ["Exotic", "Heels", "Floor Work"],
    experience: "7+ years",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gillian empowers her students through sensual movement and confident expression. Her classes are designed to build body confidence and embrace femininity.",
    image: "/images/instructors/gillian.png"
  },
  {
    id: 6,
    name: "Courtney",
    specialty: "Pole & Aerials",
    specialties: ["Pole", "Aerial Hoop", "Flexibility"],
    experience: "4+ years",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Courtney brings enthusiasm and a nurturing approach to her teaching, making every student feel welcome and supported on their fitness journey.",
    image: "/images/instructors/courtney.png"
  },
  {
    id: 7,
    name: "Sarah",
    specialty: "Pole & Beginners",
    specialties: ["Pole", "Beginners", "Fundamentals"],
    experience: "5+ years",
    bio: "Sarah specializes in helping newcomers discover their love for pole. Her patient and encouraging teaching style makes every first-timer feel welcome and confident.",
    image: "/images/instructors/courtney.png"
  }
];
