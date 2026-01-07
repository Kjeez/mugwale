export const mugProducts = [
  {
    id: 1,
    name: "Ceramic Mugs (11oz, 15oz, 20oz)",
    image: "/mug-images/1.jpg",
    hoverImage: "/mug-images/1_h.jpg",
    images: ["/mug-images/1.jpg", "/mug-images/1_h.jpg"],
    // ADDED: Out of stock logic
    outOfStockSizes: ["11oz", "20oz"], 
    price: 1,
    sizes: ["11oz", "15oz", "20oz"],
    material: "100% glossy ceramic",
    description: "Our classic ceramic mug is perfect for vibrant, full-color sublimation prints. Available in three sizes, this industry standard ceramic mug offers exceptional durability and a brilliant finish that makes your designs pop.",
    features: [
      "100% glossy white ceramic",
      "Available in 11oz, 15oz, and 20oz",
      "Easy-grip C-shaped handle",
      "Dishwasher and microwave safe",
      "Vibrant colors that won't fade",
      "Perfect for sublimation printing"
    ],
    colors: ["White"],
    care: "Clean in dishwasher or wash by hand with warm water and dish soap."
  },
  {
    id: 2,
    name: "Two-Tone Coffee Mug, 11oz",
    image: "/mug-images/2.jpg",
    hoverImage: "/mug-images/2_h.jpg",
    images: ["/mug-images/2.jpg", "/mug-images/2_h.jpg", "/mug-images/4.jpg", "/mug-images/4_h.jpg", "/mug-images/12.jpg", "/mug-images/12_h.jpg"],
    price: 1.3,
    sizes: ["11oz"],
    material: "Premium ceramic",
    description: "Stylish two-tone coffee mug featuring a colored interior and handle. Perfect for adding personality to your morning coffee routine with custom designs.",
    features: [
      "Colored interior and handle",
      "White exterior for printing",
      "11oz capacity",
      "Dishwasher safe",
      "Microwave safe",
      "Perfect for branding"
    ],
    colors: ["Multiple color options"],
    care: "Dishwasher and microwave safe."
  },
  {
    id: 3,
    name: "Black Coffee Cup, 11oz",
    image: "/mug-images/3.jpg",
    hoverImage: "/mug-images/3_h.jpg",
    images: ["/mug-images/3.jpg", "/mug-images/3_h.jpg", "/mug-images/5.jpg"],
    price: 1.5,
    sizes: ["11oz"],
    material: "Premium ceramic",
    description: "Sleek black coffee cup with a sophisticated matte finish. Ideal for elegant designs and professional branding applications.",
    features: [
      "Matte black finish",
      "11oz capacity",
      "Comfortable C-handle",
      "Scratch-resistant surface",
      "Microwave safe",
      "Hand wash recommended"
    ],
    colors: ["Black"],
    care: "Hand wash recommended to maintain finish."
  },
  
  
  {
    id: 6,
    name: "Heart-Shaped Mug",
    image: "/mug-images/6.jpg",
    hoverImage: "/mug-images/6_h.jpg",
    images: ["/mug-images/6.jpg", "/mug-images/6_h.jpg"],
    price: 1,
    sizes: ["11oz"],
    material: "Ceramic",
    description: "Unique heart-shaped mug perfect for romantic gifts and special occasions. A memorable way to show you care.",
    features: [
      "Heart-shaped design",
      "11oz capacity",
      "Unique gift option",
      "White ceramic",
      "Dishwasher safe",
      "Perfect for special occasions"
    ],
    colors: ["White"],
    care: "Dishwasher and microwave safe."
  },
  {
    id: 7,
    name: "Magic Mug",
    image: "/mug-images/7.jpg",
    hoverImage: "/mug-images/7_h.jpg",
    images: ["/mug-images/7.jpg", "/mug-images/7_h.jpg"],
    price: 1.5,
    sizes: ["11oz"],
    material: "Thermochromic ceramic",
    description: "Amazing color-changing magic mug that reveals your design when filled with hot liquid. Creates a delightful surprise with every pour!",
    features: [
      "Thermochromic coating",
      "Design appears with heat",
      "Black when cold",
      "Full color when hot",
      "Hand wash only",
      "Unique gift option"
    ],
    colors: ["Black (changes with heat)"],
    care: "Hand wash only. Do not microwave or dishwasher."
  },
  {
    id: 8,
    name: "Latte Mug, 12oz",
    image: "/mug-images/8.jpg",
    hoverImage: "/mug-images/8_h.jpg",
    images: ["/mug-images/8.jpg", "/mug-images/8_h.jpg"],
    price: 1.5,
    sizes: ["12oz"],
    material: "Ceramic",
    description: "Wide-mouth latte mug perfect for coffee enthusiasts. The 12oz capacity is ideal for lattes, cappuccinos, and specialty coffee drinks.",
    features: [
      "Wide mouth design",
      "12oz capacity",
      "Perfect for lattes",
      "Comfortable handle",
      "Dishwasher safe",
      "Microwave safe"
    ],
    colors: ["White"],
    care: "Dishwasher and microwave safe."
  },
  {
    id: 9,
    name: "Color-Changing Mug, 11oz",
    image: "/mug-images/9.jpg",
    hoverImage: "/mug-images/9_h.jpg",
    images: ["/mug-images/9.jpg", "/mug-images/9_h.jpg"],
    price: 1.5,
    sizes: ["11oz"],
    material: "Thermochromic ceramic",
    description: "Interactive color-changing mug that transforms when hot beverages are added. A fun and engaging experience with every use.",
    features: [
      "Color-changing technology",
      "Reveals design with heat",
      "11oz capacity",
      "Hand wash recommended",
      "Unique conversation starter",
      "Perfect gift idea"
    ],
    colors: ["Color-changing"],
    care: "Hand wash recommended. Avoid extreme temperatures."
  },
  {
    id: 10,
    name: "Mason Jar",
    image: "/mug-images/10.jpg",
    hoverImage: "/mug-images/10_h.jpg",
    images: ["/mug-images/10.jpg", "/mug-images/10_h.jpg"],
    price: 1.5,
    sizes: ["16oz"],
    material: "Glass",
    description: "Classic mason jar style drinkware with handle. Perfect for rustic themes, outdoor events, and casual dining.",
    features: [
      "Mason jar style",
      "16oz capacity",
      "Glass construction",
      "Includes handle",
      "Dishwasher safe",
      "Versatile use"
    ],
    colors: ["Clear glass"],
    care: "Dishwasher safe. Handle with care."
  },
  {
    id: 11,
    name: "Frosted Glass Mug",
    image: "/mug-images/11.jpg",
    hoverImage: "/mug-images/11_h.jpg",
    images: ["/mug-images/11.jpg", "/mug-images/11_h.jpg"],
    price: 1.45,
    sizes: ["11oz", "15oz"],
    material: "Frosted glass",
    description: "Elegant frosted glass mug with sophisticated appeal. Ideal for premium branding and upscale corporate gifts.",
    features: [
      "Frosted glass finish",
      "Elegant appearance",
      "Available in 11oz and 15oz",
      "Dishwasher safe",
      "Modern design",
      "Clear print area"
    ],
    colors: ["Frosted"],
    care: "Dishwasher safe. Handle carefully."
  },
  
  
  {
    id: 14,
    name: "Ceramic Mug, (15oz)",
    image: "/mug-images/14.jpg",
    hoverImage: undefined,
    images: ["/mug-images/14.jpg"],
    price: 2,
    sizes: [ "15oz"],
    material: "Ceramic",
    description: "Classic ceramic mug in two convenient sizes. A reliable choice for everyday coffee and tea enjoyment.",
    features: [
      "Classic design",
      "Two sizes available",
      "Durable ceramic",
      "Easy to clean",
      "Dishwasher safe",
      "Microwave safe"
    ],
    colors: ["White"],
    care: "Dishwasher and microwave safe."
  },
  {
    id: 15,
    name: "Black Mug (15oz)",
    image: "/mug-images/15.jpg",
    hoverImage: "/mug-images/15_h.jpg",
    images: ["/mug-images/15.jpg", "/mug-images/15_h.jpg"],
    price: 1.75,
    sizes: ["15oz"],
    material: "Ceramic",
    description: "Sleek black ceramic mug available in two sizes. Perfect for modern designs and sophisticated branding.",
    features: [
      "Solid black color",
      "Available in 11oz and 15oz",
      "Modern aesthetic",
      "Dishwasher safe",
      "Microwave safe",
      "Great for contrast designs"
    ],
    colors: ["Black"],
    care: "Dishwasher and microwave safe."
  },
  
  {
    id: 18,
    name: "Frosted Glass Beer Mug",
    image: "/mug-images/18.jpg",
    hoverImage: "/mug-images/18_h.jpg",
    images: ["/mug-images/18.jpg", "/mug-images/18_h.jpg"],
    price: 2,
    sizes: ["16oz"],
    material: "Frosted glass",
    description: "Classic frosted glass beer mug perfect for bars, restaurants, and home entertainment. Keeps beverages cold longer.",
    features: [
      "Frosted finish",
      "16oz capacity",
      "Classic beer mug style",
      "Thick glass construction",
      "Dishwasher safe",
      "Perfect for beverages"
    ],
    colors: ["Frosted"],
    care: "Dishwasher safe."
  }
];