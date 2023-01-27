import React, { useState } from "react";

const royalCelebrities = ["Elizabeth", "William", "Harry", "Meghan", "Kate"];
const foodNames = [
  "Apple",
  "Banana",
  "Orange",
  "Strawberry",
  "Grapes",
  "Pizza",
  "Burger",
  "Taco",
  "Sushi",
  "Ramen",
  "Chicken",
  "Steak",
  "Salmon",
  "Shrimp",
  "Lobster",
  "Pasta",
  "Rice",
  "Quinoa",
  "Couscous",
  "Bread",
  "Milk",
  "Yogurt",
  "Cheese",
  "Ice Cream",
  "Chocolate",
  "Coffee",
  "Tea",
  "Juice",
  "Smoothie",
  "Soda",
  "Soup",
  "Stew",
  "Chili",
  "Curry",
  "Gumbo",
  "Potato",
  "Carrot",
  "Pepper",
  "Onion",
  "Garlic",
  "Spinach",
  "Kale",
  "Lettuce",
  "Cabbage",
  "Cauliflower",
  "Black Beans",
  "Chickpeas",
  "Lentils",
  "Peas",
  "Corn",
  "Biscuit",
  "Steak",
  "Pizza",
  "Burger",
  "Taco"
];

function App() {
  const [number, setNumber] = useState(0);
  const [dogNames, setDogNames] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newDogNames = [];
    for (let i = 0; i < number; i++) {
      let randomCelebrity =
        royalCelebrities[Math.floor(Math.random() * royalCelebrities.length)];
      let randomFood = foodNames[Math.floor(Math.random() * foodNames.length)];
      newDogNames.push(randomCelebrity + " " + randomFood);
    }
    setDogNames(newDogNames);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter a number:
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <div>
        {dogNames.map((name, index) => (
          <div key={index}>{name}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
