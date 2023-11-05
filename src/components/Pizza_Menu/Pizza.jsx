const Pizza = ({ pizzaObj: { name, ingredients, photoName, price, blur } }) => {
  return (
    <li style={{ filter: blur }}>
      <img src={photoName} alt="first pizza image" />
      <h3>{name}</h3>
      <p>{ingredients}</p>
      <span>{price}</span>
    </li>
  );
};

export default Pizza;
