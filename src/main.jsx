import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// coding some of this by hand, to walk through what is going on
/*
import React from "react";
import ReactDOM from 'react-dom/client';

function App() {
  return <h1>Stupid Hello something Message!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root)).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
*/
