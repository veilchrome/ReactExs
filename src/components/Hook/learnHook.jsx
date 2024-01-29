import { useState } from "react";
import styled from "styled-components";

const LearnHook = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => setCount(count + 1);
  const [name, setName] = useState(" ");
  const [state, setState] = useState({
    name: "",
    selected: false,
  });

  const handleAdd = () => {
    setState((prev) => ({ ...prev, name }));
  };

  const handleSelect = () => {
    setState((prev) => ({ ...prev, selected: true }));
  };

  return (
    <ContainerHook1>
      <button onClick={handleClick}>Klik Me</button>
      <p>{count}</p>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={handleAdd}>Add Name</button>
      <button onClick={handleSelect}>Select</button>
      {`{
        name: ${state.name},
        selected:${state.selected.toString()}
      }`}
    </ContainerHook1>
  );
};

const ContainerHook1 = styled.div`
  margin: 50px;
  font-family: Poppins, sans-serif;
  color: #ddd;
  display: flex;
  padding: 20px;
  background-color: #1a1a1a;
  align-item: center;
  justify-content: space-between;
  position: relative;
`;

export default LearnHook;
