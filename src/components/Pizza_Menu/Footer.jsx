function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      <div>
        {isOpen && <p>We're open until {closeHour - 12}:00 PM.</p>}
        <button className="btn">Order</button>
      </div>
    </footer>
  );
}

export default Footer;
