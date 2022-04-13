import React, { useState } from "react";

function Sushi({ sushi, putOnTable, addPlate }) {
  const { id, name, img_url, price } = sushi;
  const [notEaten, setNotEaten] = useState(true);

  //console.log(sushi);

  const eatSushi = () => {
    setNotEaten(notEaten => !notEaten);
    addPlate(notEaten, setNotEaten, id)
    putOnTable(price);
  };

  const plateStatus = notEaten ? (
    <img src={img_url} alt={name} width="100%" />
  ) : null;

  return (
    <div className={notEaten}>
      <div className="plate" onClick={eatSushi}> 
        {plateStatus}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
