import React, { useState } from "react";
import Chocolate from "./Chocolate";
import "./ChoclatePack.css";



const ChoclatePack = ({ chocolates }) => {
  const [selectedChocolates, setSelectedChocolates] = useState([]);
  const maxChocolates = 8;
  

  const addToPack = (chocolate) => {
    if (selectedChocolates.length < maxChocolates) {
      const key = `${chocolate.id}_${new Date().getTime()}`;
      setSelectedChocolates([...selectedChocolates, { ...chocolate, key }]);
    } 
  };
  

  const removeFromPack = (chocolate) => {
    const updatedPack = selectedChocolates.filter((c) => c.key !== chocolate.key);
    setSelectedChocolates(updatedPack);
  };

  const calculateTotalPrice = () => {
    return selectedChocolates.reduce((total, chocolate) => {
      return total + chocolate.price;
    }, 0);
  };

  

  return (
    <div className="custom-pack">
      <h2>Make Your Customize Chocolate Pack</h2>
      

      <div className="chocolate-list">
        {chocolates.map((chocolate) => (
          <Chocolate
            key={chocolate.id}
            chocolate={chocolate}
            onAddToPack={addToPack}
          />
        ))}
      </div>
      <div className="selected-chocolates">
        <h3 style={{textAlign:"left"}}>Selected Chocolates</h3>
        {selectedChocolates.map((chocolate) => (
          <div key={chocolate.id} className="selected-chocolate">
            <span>{chocolate.name}</span>
            <span >Price: ${chocolate.price}</span>
            <button onClick={() => removeFromPack(chocolate)}>Remove</button>
          </div>
        ))}
        <p style={{textAlign:"left"}}>Total Price: ${calculateTotalPrice()}</p>
      </div>
    </div>
  );
};

export default ChoclatePack;
