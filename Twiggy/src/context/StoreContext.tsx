import { createContext, ReactNode, useState } from "react";
import { food_list } from "../assets/assets";

// Define the type of your food_list items (if not already defined in assets/assets.ts)
interface FoodItem {
  _id: string;
  name: string;
  image: string;
  price: number;
  description: string;
  category: string;
}

interface StoreContextProps {
  food_list: FoodItem[];
  cartItems: Record<string, number>; // Add cartItems to context
  addToCart: (itemId: string) => void; // Specify type for addToCart
  removeFromCart: (itemId: string) => void; // Specify type for removeFromCart
  getTotalCartAmount: () => number; // calculate total cart value
}

// Define props for the context provider
interface StoreContextProviderProps {
  children: ReactNode; // Define children prop here
}

export const StoreContext = createContext<StoreContextProps | null>(null);

const StoreContextProvider: React.FC<StoreContextProviderProps> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<Record<string, number>>({}); // Use Record for cartItems

  const addToCart = (itemId: string) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId: string) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = (): number => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      const itemCount = cartItems[itemId];
      const itemInfo = food_list.find((product) => product._id === itemId);
      if (itemInfo) {
        totalAmount += itemInfo.price * itemCount; // Calculate total
      }
    }
    return totalAmount;
  };

  const contextValue: StoreContextProps = {
    food_list, // Use the imported food_list
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
