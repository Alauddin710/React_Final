import React, { useState } from "react";

const Colors = () => {
  const [color, setColor] = useState("Red");

  return (
    <div className="col-sm-8">
      <h1>My Color is {color}</h1>

      <button className="btn btn-info" onClick={() => setColor("Blue")}>
        BLUE
      </button>
      <button className="btn btn-danger mx-2" onClick={() => setColor("Red")}>
        RED
      </button>
      <button className="btn btn-success" onClick={() => setColor("GREEN")}>
        Green
      </button>
    </div>
  );
};
export default Colors;
