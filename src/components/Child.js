import React from "react";
import Grandchild from "./Grandchild";

const Child = () => {
  return (
    <div>
      <h3>Child</h3>
      <Grandchild />
    </div>
  );
};

export default Child;
