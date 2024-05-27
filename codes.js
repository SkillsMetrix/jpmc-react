import React, { useEffect, useState } from "react";

function Demo1(props) {
  // this is alternative to state={}
  const [count, setCount] = useState(0);
  // called during load time
  useEffect(() => {
    console.log(" called load time");
  }, []);
  //called when state changed
  useEffect(() => {
    console.log(" called when state changed");
  }, [count]);


  const inc = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>The count is : {count}</p>
      <hr />
      <button onClick={inc}>INC</button>
      <button onClick={() => setCount(count - 1)}>DEC</button>
    </div>
  );
}

export default Demo1;
