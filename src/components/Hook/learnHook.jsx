import { useState } from "react";



const LearnHook = () => {
  
  const [count, setCount] = useState(0);

  const handleClick = () => setCount(count + 1);

  return (
    <>
    <child onClick={handleClick}/>
    <p>{count}</p>

    </>

  )
}

export default LearnHook;