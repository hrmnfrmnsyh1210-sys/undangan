
import { WeddingData } from './types';

export const WEDDING_DATA: WeddingData & { gallery: string[], accounts: { bank: string, number: string, holder: string }[] } = {
  bride: {
    name: "Sekar",
    fullName: "Sekar Ayu Kirana, S.T.",
    father: "Bpk. Bambang Wijaya",
    mother: "Ibu Siti Aminah",
    instagram: "@sekar_kirana"
  },
  groom: {
    name: "Aditya",
    fullName: "Aditya Pratama Putra, M.B.A.",
    father: "Bpk. Hendra Saputra",
    mother: "Ibu Lilis Suryani",
    instagram: "@adit_pratama"
  },
  event: {
    date: "Sabtu, 12 Juli 2025",
    time: "09:00 - 21:00 WIB",
    location: "Sasana Kriya, Taman Mini Indonesia Indah",
    address: "Jl. Taman Mini Indonesia Indah, Jakarta Timur",
    mapUrl: "https://maps.app.goo.gl/W6ZpU9u4p5yQoE5Y8"
  },
  gallery: [
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1465495910483-0d6749ee9f4a?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=800"
  ],
  accounts: [
    {
      bank: "BCA",
      number: "1234567890",
      holder: "Sekar Ayu Kirana"
    },
    {
      bank: "Mandiri",
      number: "0987654321",
      holder: "Aditya Pratama Putra"
    }
  ]
};

export const COLORS = {
  primary: "#8b6e4e",
  secondary: "#4a3728",
  accent: "#c4a484",
  background: "#fcfaf2",
  deepRed: "#722f37"
};
