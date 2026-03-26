import FoodItem from "./FoodItem";

function FoodList({ foods }) {
  return (
    <main className="page page--menu">
      <section className="menu-section">
        <h2 className="section-title">Today&apos;s Menu</h2>

        <div className="food-grid">
          {foods.map((food) => (
            <FoodItem key={food.id} food={food} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default FoodList;
