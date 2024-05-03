import React, { useRef, useState } from "react";
import "./TicTacToe.css";
import circle_icon from "../Assets/circle.png";
import cross_icon from "../Assets/cross.png";

//let data = ["", "", "", "", "", "", "", "", ""];

const TicTacToe = () => {
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);
  let [image, setImage] = useState([]);
  const [data, setData] = useState(Array(9).fill(""));
  let titleRef = useRef(null);

  const toggle = (e, num) => {
    if (lock || data[num] !== "") {
      return 0;
    }
    const newData = [...data];
    newData[num] = count % 2 === 0 ? "x" : "o";
    setData(newData);
    setCount(++count);
    checkWin(newData);
  };

  const renderIcon = (value) => {
    if (value === "x") {
      return <img src={cross_icon} alt="cross" />;
    } else if (value === "o") {
      return <img src={circle_icon} alt="circle" />;
    } else {
      return null;
    }
  };

  const checkWin = (newData) => {
    let data = newData;
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[0]);
    }
    if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data[3]);
    }
    if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data[6]);
    }

    if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won(data[0]);
    }
    if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data[1]);
    }
    if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data[2]);
    }
    if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data[0]);
    }

    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[0]);
    }
    if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      won(data[2]);
    }
  };
  const won = (winner) => {
    setLock(true);
    setImage(null);
    if (winner === "x") {
      setImage(<img src={cross_icon} alt="cross" />);
    } else {
      setImage(<img src={circle_icon} alt="cross" />);
    }
  };
  const reset = () => {
    setCount(0);
    setLock(false);
    setImage(null);
    setData(Array(9).fill(""));
  };

  return (
    <div className="container">
      <h1 className="title" ref={titleRef}>
        Tic Tac Toe winner is {image}
      </h1>
      <div className="board">
        <div className="row1">
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 0);
            }}
          >
            {renderIcon(data[0])}
          </div>
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 1);
            }}
          >
            {renderIcon(data[1])}
          </div>
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 2);
            }}
          >
            {renderIcon(data[2])}
          </div>
        </div>
        <div className="row2">
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 3);
            }}
          >
            {renderIcon(data[3])}
          </div>
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 4);
            }}
          >
            {renderIcon(data[4])}
          </div>
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 5);
            }}
          >
            {renderIcon(data[5])}
          </div>
        </div>
        <div className="row3">
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 6);
            }}
          >
            {renderIcon(data[6])}
          </div>
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 7);
            }}
          >
            {renderIcon(data[7])}
          </div>
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 8);
            }}
          >
            {renderIcon(data[8])}
          </div>
        </div>
      </div>
      <button
        className="reset"
        onClick={(e) => {
          reset();
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default TicTacToe;
