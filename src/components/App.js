import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushiList, setSushiList] = useState([]);
  const [index, setIndex] = useState(0);
  const [budget, setBudget] = useState(100);
  const [sushiPlates, setSushiPlates] = useState([])

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((sushi) => {
        setSushiList(sushi);
      });
  }, []);

  const handleMore = () => {
    setIndex((index) => index + 4);
  };

  const putOnTable = (price) => {
    console.log(price);
    const newBudget = budget - price;
    setBudget(newBudget);
  };

  console.log(index);

  const addPlate = (id) => {
    const eachPlate = sushiList.filter(sushi => console.log(sushi)) 
  }

  return (
    <div className="app">
      <SushiContainer
        sushiList={sushiList.slice(index, index + 4)}
        handleMore={handleMore}
        putOnTable={putOnTable}
        addPlate={addPlate}
      />
      <Table sushiList={sushiList} putOnTable={putOnTable} budget={budget} addPlate={addPlate}/>
    </div>
  );
}

export default App;

