import FoodList from "../components/FoodList";

function Home() {
  const foods = [
    { id: 1, name: "Pizza", price: 250 },
    { id: 2, name: "Burger", price: 150 },
    { id: 3, name: "Pasta", price: 200 },
    { id: 4, name: "Sandwich", price: 100 }
  ];

  return <FoodList foods={foods} />;
}

export default Home;