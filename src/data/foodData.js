export const foodItems = [
  // Indian Food
  {
    id: 1,
    name: "Butter Chicken",
    description: "Tender chicken in a creamy tomato sauce",
    price: 350,
    category: "Main Course",
    cuisine: "indian",
  },
  {
    id: 2,
    name: "Palak Paneer",
    description: "Cottage cheese in a spiced spinach gravy",
    price: 250,
    category: "Main Course",
    cuisine: "indian",
  },
  {
    id: 3,
    name: "Chole Bhature",
    description: "Spicy chickpeas with fried bread",
    price: 200,
    category: "Main Course",
    cuisine: "indian",
  },

  // Japanese Food
  {
    id: 4,
    name: "Sushi Platter",
    description: "Assorted nigiri and maki rolls",
    price: 800,
    category: "Sushi",
    cuisine: "japanese",
  },
  {
    id: 5,
    name: "Ramen",
    description: "Noodles in a rich, flavorful broth",
    price: 400,
    category: "Noodles",
    cuisine: "japanese",
  },
  {
    id: 6,
    name: "Tempura",
    description: "Lightly battered and fried seafood and vegetables",
    price: 500,
    category: "Appetizers",
    cuisine: "japanese",
  },

  // Italian Food
  {
    id: 7,
    name: "Margherita Pizza",
    description: "Classic tomato and mozzarella pizza",
    price: 350,
    category: "Pizza",
    cuisine: "italian",
  },
  {
    id: 8,
    name: "Spaghetti Carbonara",
    description: "Pasta with creamy egg and bacon sauce",
    price: 400,
    category: "Pasta",
    cuisine: "italian",
  },
  {
    id: 9,
    name: "Tiramisu",
    description: "Coffee-flavored Italian dessert",
    price: 250,
    category: "Dessert",
    cuisine: "italian",
  },

  // Kashmiri Food
  {
    id: 10,
    name: "Rogan Josh",
    description: "Aromatic lamb curry",
    price: 500,
    category: "Main Course",
    cuisine: "kashmiri",
  },
  {
    id: 11,
    name: "Dum Aloo",
    description: "Spiced potatoes in a yogurt-based gravy",
    price: 250,
    category: "Main Course",
    cuisine: "kashmiri",
  },
  {
    id: 12,
    name: "Kahwa",
    description: "Traditional Kashmiri green tea",
    price: 100,
    category: "Beverages",
    cuisine: "kashmiri",
  },

  // Thai Food
  {
    id: 13,
    name: "Pad Thai",
    description: "Stir-fried rice noodles with shrimp",
    price: 300,
    category: "Noodles",
    cuisine: "thai",
  },
  {
    id: 14,
    name: "Tom Yum Soup",
    description: "Spicy and sour soup with shrimp",
    price: 250,
    category: "Soup",
    cuisine: "thai",
  },
  {
    id: 15,
    name: "Mango Sticky Rice",
    description: "Sweet dessert with ripe mangoes",
    price: 200,
    category: "Dessert",
    cuisine: "thai",
  },

  // Chinese Food
  {
    id: 16,
    name: "Kung Pao Chicken",
    description: "Spicy chicken with peanuts",
    price: 350,
    category: "Main Course",
    cuisine: "chinese",
  },
  {
    id: 17,
    name: "Dim Sum Platter",
    description: "Assorted steamed and fried dumplings",
    price: 400,
    category: "Appetizers",
    cuisine: "chinese",
  },
  {
    id: 18,
    name: "Mapo Tofu",
    description: "Spicy tofu in a flavorful sauce",
    price: 300,
    category: "Main Course",
    cuisine: "chinese",
  },
];

export const categories = [...new Set(foodItems.map((item) => item.category))];
export const cuisines = [...new Set(foodItems.map((item) => item.cuisine))];
