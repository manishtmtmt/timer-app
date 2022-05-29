import React, { useEffect, useState } from "react";

const Timer = () => {
  const [startTime, setStartTime] = useState(0);
  console.log("StartTime:", startTime);
  const [endTime, setEndTime] = useState(0);
  console.log("endTime:", endTime);

  useEffect(() => {
    const id = setInterval(() => {
      if (endTime <= startTime) {
        clearInterval(id);
      } else {
        setStartTime((time) => time + 1);
      }
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, [startTime, endTime]);

  const handleStartTime = (e) => {
    setStartTime(+e.target.value);
  };

  const handleEndTime = (e) => {
    setEndTime(+e.target.value);
  };

  return (
    <div>
      Initial Time : <input onChange={handleStartTime} /> <br />
      End Time : <input onChange={handleEndTime} /> <br />
      {/* <button onClick={() => startTimer(startTime, endTime)}>
        Start Timer
      </button> */}
      <h1>Timer : {startTime}</h1>
    </div>
  );
};

export default Timer;
