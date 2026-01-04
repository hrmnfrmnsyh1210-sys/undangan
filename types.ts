
export interface GuestWish {
  id: string;
  name: string;
  relation: string;
  message: string;
  timestamp: number;
}

export interface WeddingData {
  bride: {
    name: string;
    fullName: string;
    father: string;
    mother: string;
    instagram: string;
  };
  groom: {
    name: string;
    fullName: string;
    father: string;
    mother: string;
    instagram: string;
  };
  event: {
    date: string;
    time: string;
    location: string;
    address: string;
    mapUrl: string;
  };
}
