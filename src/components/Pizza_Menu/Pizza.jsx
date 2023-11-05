const Pizza = ({ pizzaObj }) => {
  return (
    <li className="">
      <img src={pizzaObj.photoName} alt="first pizza image" />
      <h3>{pizzaObj.name}</h3>
      <p>{pizzaObj.ingredients}</p>
      <span>{pizzaObj.price}</span>
    </li>
  );
};

export default Pizza;
