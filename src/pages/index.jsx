// Halaman Home Utama //
import { useEffect, useState } from "react";

import "./indexStyles.css";

const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  const tick = () => {
    setDate(new Date());
  };

  return (
    <div>
      <p>Ini {date.toLocaleTimeString()}</p>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <div className="container-home">
        <h1>Ini Halaman Home</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ullam
          a pariatur, placeat nemo dolore natus quis, facilis vitae cumque
          quaerat cum ut earum quae illo libero officia iure praesentium.
        </p>
        <Clock />
      </div>
    </>
  );
};

export default Home;
