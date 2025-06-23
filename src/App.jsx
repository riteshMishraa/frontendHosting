import React, { useEffect, useState } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const App = () => {
  let [count, setCount] = useState(0);

  function countPlus() {
    setCount((prev) => prev + 1);
  }
  function countMinus() {
    setCount((prev) => prev - 1);
  }

  useEffect(() => {
    if (count > 20 || count < -20) {
      setCount(0);
    }
  }, [count]);

  return (
    <div className="container">
      <h1>Counter app by ritesh mishra</h1>
      <hr />

      <div className="box">
        <h1>counter app</h1>

        <div className="messageBox">
          {count === 20 ? (
            <p>You can only go to max value by 20 . after 20 You will gate 0</p>
          ) : (
            <div></div>
          )}

          {count === -20 ? (
            <p>
              You can only go to max value by -20 . after -20 You will gate 0
            </p>
          ) : (
            <div></div>
          )}
        </div>

        <div className="counterApp">
          <IoIosArrowDropleft
            fontSize={32}
            onClick={countMinus}
            style={{ cursor: "pointer" }}
            className="scale"
          />
          <div style={{ fontSize: "2rem",color:"lightgreen" }}>{count}</div>
          <IoIosArrowDropright
            fontSize={32}
            onClick={countPlus}
            style={{ cursor: "pointer" }}
            className="scale"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
