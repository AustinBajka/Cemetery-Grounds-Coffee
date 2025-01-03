import { PreviewItem } from "../page";
import CoffeeIcon from "@/images/icons8-cafe-black-50px.png";
import CakeIcon from "@/images/icons8-cake-black-50px.png";

export interface FullItem extends PreviewItem {
  description: string;
  calories: number;
  ingredients: string[];
};

export const inventory: FullItem[] = [
  { 
    name: "Haunting Espresso", 
    id: 101, 
    image: CoffeeIcon, 
    description: "A bold espresso shot with a ghostly rich flavor.", 
    calories: 5, 
    ingredients: ["Espresso", "Water"] 
  },
  { 
    name: "Phantom Latte", 
    id: 102, 
    image: CoffeeIcon, 
    description: "A creamy latte with a hint of the otherworldly.", 
    calories: 120, 
    ingredients: ["Espresso", "Milk"] 
  },
  { 
    name: "Spectral Macchiato", 
    id: 103, 
    image: CoffeeIcon, 
    description: "A hauntingly sweet macchiato with caramel drizzle.", 
    calories: 150, 
    ingredients: ["Espresso", "Milk", "Caramel"] 
  },
  { 
    name: "Wraithful Americano", 
    id: 104, 
    image: CoffeeIcon, 
    description: "An americano as dark and mysterious as the night.", 
    calories: 5, 
    ingredients: ["Espresso", "Hot Water"] 
  },
  { 
    name: "Coffin Cold Brew", 
    id: 201, 
    image: CoffeeIcon, 
    description: "Cold brew with a deep, deathly smooth taste.", 
    calories: 5, 
    ingredients: ["Cold Brew Coffee", "Ice"] 
  },
  { 
    name: "Ethereal Mocha", 
    id: 202, 
    image: CoffeeIcon, 
    description: "A mocha kissed with the sweetness of the beyond.", 
    calories: 180, 
    ingredients: ["Espresso", "Milk", "Chocolate Syrup"] 
  },
  { 
    name: "Bone-Chilling Cappuccino", 
    id: 203, 
    image: CoffeeIcon, 
    description: "A classic cappuccino that will chill you to the bone.", 
    calories: 100, 
    ingredients: ["Espresso", "Milk Foam"] 
  },
  { 
    name: "Deathly Dark Roast", 
    id: 204, 
    image: CoffeeIcon, 
    description: "A dark roast brewed to perfection for the bold souls.", 
    calories: 2, 
    ingredients: ["Dark Roast Coffee", "Water"] 
  },
  { 
    name: "Chilling Matcha Latte", 
    id: 301, 
    image: CoffeeIcon, 
    description: "A creamy matcha latte with a spectral green glow.", 
    calories: 140, 
    ingredients: ["Matcha Powder", "Milk", "Water"] 
  },
  { 
    name: "Frozen Frappuccino", 
    id: 302, 
    image: CoffeeIcon, 
    description: "A frozen delight with a ghostly sweet taste.", 
    calories: 250, 
    ingredients: ["Espresso", "Milk", "Ice", "Whipped Cream"] 
  },
  { 
    name: "Tombstone Iced Coffee", 
    id: 303, 
    image: CoffeeIcon, 
    description: "Iced coffee with a hint of the grave's coolness.", 
    calories: 5, 
    ingredients: ["Coffee", "Ice"] 
  },
  { 
    name: "Icy Vanilla Chiller", 
    id: 304, 
    image: CoffeeIcon, 
    description: "A vanilla-flavored iced coffee that's to die for.", 
    calories: 160, 
    ingredients: ["Cold Brew", "Milk", "Vanilla Syrup"] 
  },
  { 
    name: "Ghastly Pumpkin Cookie", 
    id: 401, 
    image: CakeIcon,
    description: "A pumpkin spice cookie with a ghostly twist.", 
    calories: 210, 
    ingredients: ["Flour", "Sugar", "Pumpkin", "Spices"] 
  },
  { 
    name: "Sinister Chocolate Brownie", 
    id: 402, 
    image: CakeIcon,
    description: "A dark chocolate brownie that's devilishly decadent.", 
    calories: 250, 
    ingredients: ["Chocolate", "Flour", "Butter", "Sugar"] 
  },
  { 
    name: "Spooky Cinnamon Roll", 
    id: 403, 
    image: CakeIcon,
    description: "A cinnamon roll glazed with a chillingly sweet icing.", 
    calories: 320, 
    ingredients: ["Flour", "Sugar", "Cinnamon", "Butter"] 
  },
  { 
    name: "Cursed Caramel Muffin", 
    id: 404, 
    image: CakeIcon,
    description: "A caramel muffin that's irresistibly cursed.", 
    calories: 280, 
    ingredients: ["Flour", "Sugar", "Caramel", "Milk"] 
  }
];