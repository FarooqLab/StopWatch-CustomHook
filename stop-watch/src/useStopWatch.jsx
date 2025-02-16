import { useEffect, useState } from "react";

const useStopWatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((pre) => pre + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    }; //q k use effect ka function 2 bar mount and un mount hta hy,
  }, [isRunning]);

  const start = () => {
    setIsRunning(true);
  };
  const stop = () => {
    setIsRunning(false);
  };
    const restart = () => {
        setIsRunning(false);
        setTime(0)
    };

  const getSeconds = () => {
    return `${time % 60 < 10 ? "0" + (time % 60) : time % 60}`;
  };

  const getMinuts = () => {
    return `${
      Math.floor((time % 3600) / 60) < 10
        ? "0" + Math.floor((time % 3600) / 60)
        : Math.floor((time % 3600) / 60)
    }`;
  };

  const getHours = () => {
    return `${
      Math.floor(time / 3600) < 10
        ? "0" + Math.floor(time / 3600)
        : Math.floor(time / 3600)
    }`;
  };

  //ye function jab start ho jata to is ko close krny k liaye hum iski ID ko clear kr dety hen
  return {
    seconds: getSeconds(),
    minutes: getMinuts(),
    hours: getHours(),
    start,
    stop,
    restart
  };
};

export default useStopWatch;
