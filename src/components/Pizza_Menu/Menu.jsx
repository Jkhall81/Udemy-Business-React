import Pizza from "./Pizza.jsx";

const Menu = () => {
  const pizzaData = [
    {
      name: "Spinach Pizza",
      ingredients: "Tomato, Mozarella, Spiach, and Ricotta Cheese",
      photoName: "pizza1.jpeg",
      price: "$10.99",
    },
    {
      name: "Spam Pizza",
      ingredients: "Tomato, Mozarella, Spiach, and Spam",
      photoName: "pizza2.jpeg",
      price: "$12.99",
    },
    {
      name: "taco Pizza",
      ingredients: "Tomato, Mozarella, Tacos, and Ricotta Cheese",
      photoName: "pizza3.jpeg",
      price: "$15.99",
    },
    {
      name: "OMG Pizza",
      ingredients: "Tomato, Mozarella, Secrets, and Ricotta Cheese",
      photoName: "pizza4.jpeg",
      price: "$9.99",
    },
    {
      name: "Backdoor Pizza",
      ingredients: "Tomato, Mozarella, Deviousness, and Ricotta Cheese",
      photoName: "pizza5.jpeg",
      price: "$19.99",
    },
    {
      name: "Last Pizza",
      ingredients: "Tomato, Mozarella, Spiach, and Ricotta Cheese",
      photoName: "pizza6.jpeg",
      price: "$19.99",
    },
  ];

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <div>
        {pizzaData.map((pizza, index) => (
          <Pizza
            key={index}
            name={pizza.name}
            ingredients={pizza.ingredients}
            photoName={pizza.photoName}
            price={pizza.price}
          />
        ))}
      </div>
    </main>
  );
};

export default Menu;
