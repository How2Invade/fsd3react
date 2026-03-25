import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";

function FoodItem({ food }) {
  const dispatch = useDispatch();

  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      <h3>{food.name}</h3>
      <p>₹{food.price}</p>

      <button onClick={() => dispatch(addItem(food))}>
        Add to Cart
      </button>
    </div>
  );
}

export default FoodItem;