// Halaman Home Utama //
import { useEffect, useState } from "react";
import styled from "styled-components";

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

  return <ClockText>Waktu Saat ini : {date.toLocaleTimeString()}</ClockText>;
};

const Home = () => {
  return (
    <div>
      <JumbotronImage img src="src\assets\img2.jpg" />
      <ContainerHome>
        <h1>Ini Halaman Home</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ullam
          a pariatur, placeat nemo dolore natus quis, facilis vitae cumque
          quaerat cum ut earum quae illo libero officia iure praesentium.
        </p>
        <Clock />
      </ContainerHome>
    </div>
  );
};

const JumbotronImage = styled.img`
  width: 100%;
  height: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
const ContainerHome = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  border-radius: 10px;
  margin: 500px;
  padding: 50px;
  background-color: #1a1a1a;
  color: #ddd;
  display: grid;
`;

const ClockText = styled.p`
  font-size: 18px;
  color: #fff;
  margin-top: 20px;
`;

export default Home;
