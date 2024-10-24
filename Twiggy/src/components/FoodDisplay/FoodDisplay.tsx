import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

interface FoodDisplayProps {
  category: string;
}

const FoodDisplay: React.FC<FoodDisplayProps> = ({ category }) => {
  const context = useContext(StoreContext);

  // Handle the case where context might be null
  if (!context) {
    return <div>Loading...</div>; // You can handle this case however you'd like
  }

  const { food_list } = context;

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you!</h2>
      <div className="food-display-list">
        {food_list.map((item) => {
          // Check if the category matches or is "All"
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={item._id} // Use unique identifier for the key
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
          return null; // Return null for items that don't match
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
