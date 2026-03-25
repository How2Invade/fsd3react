import FoodItem from "./FoodItem";

function FoodList({ foods }) {
  return (
    <div>
      <h2>Menu</h2>

      {foods.map((food) => (
        <FoodItem key={food.id} food={food} />
      ))}
    </div>
  );
}

export default FoodList;