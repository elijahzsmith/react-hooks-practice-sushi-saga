import React from "react";
import MoreButton from "./MoreButton";
import Sushi from './Sushi'

function SushiContainer({ sushiList, handleMore, putOnTable, notEaten, setNotEaten, eatSushi, addPlate }) {

  const displaySushi = sushiList.map(sushi => (
    <Sushi 
      key={sushi.id}
      sushi={sushi} 
      putOnTable={putOnTable}
      notEaten={notEaten}
      setNotEaten={setNotEaten}
      eatSushi={eatSushi}
      addPlate={addPlate}
    />
  ))

  return (
    <div className="belt">
      {displaySushi}
      <MoreButton handleMore={handleMore}/>
    </div>
  );
}

export default SushiContainer;
