import React, { useContext } from "react";
import AppContext from "../contexts/AppContext";

const Grandchild = () => {
  const value = useContext(AppContext);
  return (
    <div>
      <h3>Grandchild</h3>
      {value}
    </div>
  );
};

export default Grandchild;
