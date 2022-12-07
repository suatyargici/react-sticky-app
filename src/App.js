import React, { useState } from "react";

const App = () => {
  const [points, setPoints] = useState([]);
  const [data, setData] = useState([]);

  const handleClick = (e) => {
    setPoints([...points, { x: e.clientX, y: e.clientY }]);
    setData([]);
  };

  const redoHandle = (e) => {
    e.stopPropagation();
    const newPoints = [...points];
    const item = newPoints.pop();
    setData([...data, item]);
    setPoints(newPoints);
  };

  const undoHandle = (e) => {
    e.stopPropagation();
    const newData = [...data];
    const item = newData.pop();
    setPoints([...points, item]);
    setData(newData);
  };
  return (
    <div className="screen" onClick={handleClick}>
      <div className="header">
        <button
          disabled={points.length === 0}
          onClick={redoHandle}
          className="button"
        >
          Redo
        </button>
        <button
          disabled={data.length === 0}
          onClick={undoHandle}
          className="button"
        >
          Undo
        </button>
      </div>

      {points.map((point, index) => {
        return (
          <div
            key={index}
            className="point"
            style={{ '--left': point.x+"px", '--top': point.y +"px"}}
          ></div>
        );
      })}
    </div>
  );
};

export default App;
