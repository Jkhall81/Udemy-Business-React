const Pizza = ({ name, ingredients, photoName, price }) => {
  return (
    <div>
      <img src={photoName} alt="first pizza image" />
      <h3>{name}</h3>
      <p>{ingredients}</p>
      <span>{price}</span>
    </div>
  );
};

export default Pizza;
