const foodItems = [
  {
    id: 1,
    name: "Veggie Delight Burger",
    image: "https://themewagon.github.io/feane/images/f2.png",
    description: "Grilled veggie patty with lettuce, tomato, and cheese.",
    price: 3.75
  },
  {
    id: 2,
    name: "Paneer Tikka Burger",
    image: "https://themewagon.github.io/feane/images/f7.png",
    description: "Spicy paneer tikka stuffed in a burger bun.",
    price: 4.5
  },
  {
    id: 3,
    name: "Cheese Burger",
    image: "https://themewagon.github.io/feane/images/f8.png",
    description: "Burger loaded with cheese and vegetables.",
    price: 5.25
  },
  {
    id: 4,
    name: "Mushroom Burger",
    image: "https://themewagon.github.io/feane/images/f7.png",
    description: "Grilled mushroom patty with creamy sauce.",
    price: 6.0
  },
  {
    id: 5,
    name: "Spicy Bean Burger",
    image: "https://themewagon.github.io/feane/images/f2.png",
    description: "Spicy bean-based patty with lettuce and mayo.",
    price: 6.75
  },
  {
    id: 6,
    name: "Aloo Tikki Burger",
    image: "https://themewagon.github.io/feane/images/f8.png",
    description: "Crispy potato tikki burger with chutneys.",
    price: 7.5
  },
  {
    id: 7,
    name: "Falafel Burger",
    image: "https://themewagon.github.io/feane/images/f2.png",
    description: "Middle eastern falafel patty burger.",
    price: 8.25
  },
  {
    id: 8,
    name: "Tofu Burger",
    image: "https://themewagon.github.io/feane/images/f7.png",
    description: "Tofu-based burger with spicy sauce.",
    price: 9.0
  },
  {
    id: 9,
    name: "Hara Bhara Burger",
    image: "https://themewagon.github.io/feane/images/f8.png",
    description: "Spinach and peas patty burger.",
    price: 9.75
  },
  {
    id: 10,
    name: "Crunchy Veg Burger",
    image: "https://themewagon.github.io/feane/images/f7.png",
    description: "Crispy veg patty with onions and sauces.",
    price: 3.0
  },
  {
    id: 11,
    name: "Cheese Burst Pizza",
    image: "https://themewagon.github.io/feane/images/f1.png",
    description: "Loaded with mozzarella cheese and herbs.",
    price: 3.75
  },
  {
    id: 12,
    name: "Veg Supreme Pizza",
    image: "https://themewagon.github.io/feane/images/f3.png",
    description: "Topped with olives, capsicum, onions, and corn.",
    price: 4.5
  },
  {
    id: 13,
    name: "Margherita Pizza",
    image: "https://themewagon.github.io/feane/images/f6.png",
    description: "Classic pizza with tomato, cheese, and basil.",
    price: 5.25
  },
  {
    id: 14,
    name: "Farmhouse Pizza",
    image: "https://themewagon.github.io/feane/images/f3.png",
    description: "Loaded with fresh farm vegetables.",
    price: 6.0
  },
  {
    id: 15,
    name: "Mushroom Pizza",
    image: "https://themewagon.github.io/feane/images/f1.png",
    description: "Pizza topped with mushrooms and cheese.",
    price: 6.75
  },
  {
    id: 16,
    name: "Paneer Pizza",
    image: "https://themewagon.github.io/feane/images/f6.png",
    description: "Spicy paneer cubes on a cheesy base.",
    price: 7.5
  },
  {
    id: 17,
    name: "Tandoori Veg Pizza",
    image: "https://themewagon.github.io/feane/images/f1.png",
    description: "Indian-style tandoori vegetables.",
    price: 8.25
  },
  {
    id: 18,
    name: "Corn & Cheese Pizza",
    image: "https://themewagon.github.io/feane/images/f3.png",
    description: "Sweet corn with extra cheese.",
    price: 9.0
  },
  {
    id: 19,
    name: "Spinach Alfredo Pizza",
    image: "https://themewagon.github.io/feane/images/f6.png",
    description: "Spinach and creamy Alfredo base.",
    price: 9.75
  },
  {
    id: 20,
    name: "Jain Pizza",
    image: "https://themewagon.github.io/feane/images/f3.png",
    description: "No onion, no garlic vegetarian pizza.",
    price: 3.0
  },
  {
    id: 21,
    name: "Creamy Alfredo Pasta",
    image: "https://themewagon.github.io/feane/images/f4.png",
    description: "Pasta tossed in creamy white sauce with veggies.",
    price: 3.75
  },
  {
    id: 22,
    name: "Spicy Arrabiata Pasta",
    image: "https://themewagon.github.io/feane/images/f9.png",
    description: "Red sauce pasta with a spicy tangy flavor.",
    price: 4.5
  },
  {
    id: 23,
    name: "Mushroom Pasta",
    image: "https://themewagon.github.io/feane/images/f4.png",
    description: "Mushroom and white sauce pasta.",
    price: 5.25
  },
  {
    id: 24,
    name: "Tomato Basil Pasta",
    image: "https://themewagon.github.io/feane/images/f9.png",
    description: "Fresh tomatoes and basil with spaghetti.",
    price: 6.0
  },
  {
    id: 25,
    name: "Pesto Pasta",
    image: "https://themewagon.github.io/feane/images/f4.png",
    description: "Pasta tossed in green pesto sauce.",
    price: 6.75
  },
  {
    id: 26,
    name: "Veg Penne Pasta",
    image: "https://themewagon.github.io/feane/images/f9.png",
    description: "Vegetables and penne in creamy sauce.",
    price: 7.5
  },
  {
    id: 27,
    name: "Cheesy Macaroni",
    image: "https://themewagon.github.io/feane/images/f4.png",
    description: "Cheesy and creamy macaroni.",
    price: 8.25
  },
  {
    id: 28,
    name: "Pink Sauce Pasta",
    image: "https://themewagon.github.io/feane/images/f9.png",
    description: "Mix of red and white sauces with veggies.",
    price: 9.0
  },
  {
    id: 29,
    name: "Spinach Pasta",
    image: "https://themewagon.github.io/feane/images/f4.png",
    description: "Healthy spinach-based pasta.",
    price: 9.75
  },
  {
    id: 30,
    name: "Baked Pasta",
    image: "https://themewagon.github.io/feane/images/f9.png",
    description: "Oven-baked cheesy veg pasta.",
    price: 3.0
  },
  {
    id: 31,
    name: "Masala Fries",
    image: "https://themewagon.github.io/feane/images/f5.png",
    description: "Crispy fries sprinkled with Indian spices.",
    price: 3.75
  },
  {
    id: 32,
    name: "Peri Peri Fries",
    image: "https://themewagon.github.io/feane/images/f5.png",
    description: "Spicy peri peri seasoned fries.",
    price: 4.5
  },
  {
    id: 33,
    name: "Cheese Fries",
    image: "https://themewagon.github.io/feane/images/f5.png",
    description: "French fries topped with melted cheese.",
    price: 5.25
  },
  {
    id: 34,
    name: "Crinkle Cut Fries",
    image: "https://themewagon.github.io/feane/images/f5.png",
    description: "Crinkle cut seasoned fries.",
    price: 6.0
  },
  {
    id: 35,
    name: "Sweet Potato Fries",
    image: "https://themewagon.github.io/feane/images/f5.png",
    description: "Sweet potato fries with herbs.",
    price: 6.75
  },
  {
    id: 36,
    name: "Garlic Fries",
    image: "https://themewagon.github.io/feane/images/f5.png",
    description: "Garlic flavored crispy fries.",
    price: 7.5
  },
  {
    id: 37,
    name: "Curly Fries",
    image: "https://themewagon.github.io/feane/images/f5.png",
    description: "Curly shaped seasoned fries.",
    price: 8.25
  },
  {
    id: 38,
    name: "Loaded Fries",
    image: "https://themewagon.github.io/feane/images/f5.png",
    description: "Fries with cheese, veggies and sauces.",
    price: 9.0
  },
  {
    id: 39,
    name: "Classic French Fries",
    image: "https://themewagon.github.io/feane/images/f5.png",
    description: "Simple salted potato fries.",
    price: 9.75
  },
  {
    id: 40,
    name: "Schezwan Fries",
    image: "https://themewagon.github.io/feane/images/f5.png",
    description: "Spicy Indo-Chinese fries.",
    price: 3.0
  }
];

export default foodItems;