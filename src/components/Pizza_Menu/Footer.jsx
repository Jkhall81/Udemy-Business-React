import OpenTime from "./OpenTime.jsx";

function Footer() {
  return (
    <footer className="footer">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <OpenTime />
        <button className="btn">Order</button>
      </div>
    </footer>
  );
}

export default Footer;
