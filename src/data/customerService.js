import natiImg from '/customer_Images/nati.jpg';
// import daniImg from '../assets/images/dani.jpg';
// import haileImg from '../assets/images/haile.jpg';
export const testimonials = [
  
  {
    id: 1,
    quote: "Amazing prices and super fast delivery!",
    name: "Nati G.",
    rating: 2,
    avatarUrl: natiImg,
  },
  {
    id: 2,
    quote: "Great quality products and excellent support.",
    name: "Dani W.",
    rating: 5,
   avatarUrl: natiImg
  },
  {
    id: 3,
    quote: "My go-to store for everything I need.",
    name: "Haile G.",
    rating: 4,
    avatarUrl: natiImg
  },
];

// 2. Top Brands data (Right Section) - Mixed images and text
export const brands = [
  {
    id: 1,
    type: "image",
    logoUrl: "https://cdn.simpleicons.org/apple",
    alt: "Apple",
  },
  { id: 2, type: "text", name: "SAMSUNG", color: "text-blue-700" },
  {
    id: 3,
    type: "image",
    logoUrl: "https://cdn.simpleicons.org/nike",
    alt: "Nike",
  },
  {
    id: 4,
    type: "image",
    logoUrl: "https://cdn.simpleicons.org/adidas",
    alt: "Adidas",
  },
  {
    id: 5,
    type: "image",
    logoUrl: "https://cdn.simpleicons.org/sony/000000",
    alt: "Sony",
  },
  { id: 6, type: "text-arrow", name: "dyson", color: "text-gray-900" },
];
