import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";

function FoodItem({ food }) {
  const dispatch = useDispatch();

  return (
    <article className="food-card">
      <h3 className="food-card__title">{food.name}</h3>
      <p className="food-card__price">₹{food.price}</p>

      <button
        className="button button--primary"
        onClick={() => dispatch(addItem(food))}
      >
        Add to Cart
      </button>
    </article>
  );
}

export default FoodItem;
