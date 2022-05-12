import React, { useEffect, useState } from 'react';

export default function StopWatch() {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    let interval = null;
    if (start) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  });
  const formatTime = () => {
    const getSeconds = `0${time % 60}`.slice(-2);
    const minutes = `${Math.floor(time / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2);

    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };
  return (
    <>
      <h1 id="time">time:{formatTime()}</h1>
      <div>
        <button id="start" onClick={() => setStart(!start)}>
          {start ? 'stop' : 'start'}
        </button>
        <button id="reset" onClick={() => setTime(0)}>
          reset
        </button>
      </div>
    </>
  );
}
