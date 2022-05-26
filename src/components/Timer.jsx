import React, { useEffect, useState } from "react";

const Timer = ({ start, end }) => {
    const [timer, setTimer] = useState(start);

    useEffect(() => {
      let id = setInterval(() => {
        if (timer >= end) {
          clearInterval(id);
        } else {
          setTimer((prev) => prev + 1);
        }
      }, 1000);
  
      return () => {
        clearInterval(id);
      };
    }, [timer]);
  return <div>Timer: {timer}</div>;
};

export default Timer;
