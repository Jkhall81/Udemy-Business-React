const OpenTime = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <>
      {" "}
      {isOpen ? (
        <p>We're open until {closeHour - 12}:00 PM.</p>
      ) : (
        <p>We are currently closed... We will reopen at {openHour}:00 PM</p>
      )}
    </>
  );
};

export default OpenTime;
