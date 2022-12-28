import {useEffect, useState} from "react";
import IconButton from "../../../../atoms/Button/IconButton";
import PlayIcon from "../../../../atoms/vectors/PlayIcon";
import CheckIcon from "../../../../atoms/vectors/CheckIcon";
import {convertSecToTime} from "../../../../utils";

type Props = {
  time: number;
  onTimeChange: (val: number) => void;
};

function Timer({time, onTimeChange}: Props) {
  const [timer, setTimer] = useState(time);
  const [isPlay, setIsPlay] = useState(false);

  let intervalRef: number;

  useEffect(() => {
    if (isPlay) {
      intervalRef = setInterval(() => {
        setTimer(prev => {
          onTimeChange(prev + 1);
          return prev + 1;
        });
      }, 1000);
    }
    return () => {
      clearInterval(intervalRef);
    };
  }, [isPlay]);

  function stop() {
    clearInterval(intervalRef);
    // onTimeChange(0);
    // setTimer(0);
    setIsPlay(false);
  }
  function pause() {
    clearInterval(intervalRef);
    setIsPlay(false);
  }

  return (
    <div className="flex items-center space-x-3">
      <IconButton
        type="button"
        onClick={() => setIsPlay(!isPlay)}
        icon={
          !isPlay ? (
            <PlayIcon />
          ) : (
            <img src="/vectors/pauseIcon.png" alt="pauseIcon" />
          )
        }
        rounded
        otherClasses="start-time-btn"
      />
      <p className="text-primary font-medium">{convertSecToTime(time)}</p>
      {/* {time > 0 && ( */}
      <IconButton
        type="submit"
        onClick={stop}
        icon={<CheckIcon style={{transform: "scale(1.4)"}} />}
        rounded
        otherClasses="start-time-btn"
      />
      {/* )} */}
    </div>
  );
}

export default Timer;
