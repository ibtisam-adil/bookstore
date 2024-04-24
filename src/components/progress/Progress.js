import { useEffect, useState } from 'react';
import './progress.css';

const Progress = () => {
  const [progressValue, setProgressValue] = useState(0);
  const progressEndValue = 65;
  const speed = 100;

  useEffect(() => {
    const progress = setInterval(() => {
      setProgressValue((prevProgress) => {
        if (prevProgress === progressEndValue) {
          clearInterval(progress);
          return prevProgress;
        }
        return prevProgress + 1;
      });
    }, speed);

    return () => clearInterval(progress);
  }, [progressEndValue, speed]);

  return (
    <div className="progress-bar-container">
      <div
        className="progress-bar"
        style={{
          background: `conic-gradient(
        #4d5bf9 ${progressValue * 3.6}deg,
        #cadcff ${progressValue * 3.6}deg
      )`,
        }}
      />
      <div className="progress-value">
        <p className="percent">
          {progressValue}
          %
        </p>
        <p className="completed">Completed</p>
      </div>
    </div>
  );
};

export default Progress;
