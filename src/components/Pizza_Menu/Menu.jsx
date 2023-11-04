import Pizza from "./Pizza.jsx";

const Menu = () => {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza
        name="Spinach Pizza"
        ingredients="Tomato, Mozarella, Spinach, and Ricotta Cheese"
        photoName="pizza1.jpeg"
        price="$10.99"
      />
      <Pizza
        name="Something Pizza"
        ingredients="Tomato, Mozarella, Spam, and Lonely tears"
        photoName="pizza2.jpeg"
        price="$14.99"
      />
    </main>
  );
};

export default Menu;
