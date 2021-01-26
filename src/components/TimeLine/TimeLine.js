import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Title from '../Title/Title';
import './TimeLine.css';

export default function TimeLine({ times = [] }) {
  const [initialSwipeX, setInitialSwipeX] = useState(0);
  const [finalSwipeX, setFinalSwipeX] = useState(0);
  const [currentRightPx, setCurrentRightPx] = useState(0);
  const [currentTimeIndex, setCurrentTimeIndex] = useState(0);

  function handleTouchStart(e) {
    setInitialSwipeX(e.nativeEvent.touches[0].clientX);
  }

  function handleTouchMove(e) {
    setFinalSwipeX(e.nativeEvent.touches[0].clientX);
  }

  function moveTimeLine(ind) {
    setCurrentRightPx(ind * 272);
  }

  function handleTouchEnd() {
    let ind =
      currentTimeIndex + 1 <= times.length - 1
        ? currentTimeIndex + 1
        : times.length - 1;
    if (initialSwipeX < finalSwipeX) {
      ind = currentTimeIndex - 1 >= 0 ? currentTimeIndex - 1 : 0;
    }
    setCurrentTimeIndex(ind);
    moveTimeLine(ind);
  }

  function handleTimeClick(e) {
    const ind = Number(e.currentTarget.getAttribute('data-index'));
    const currentInd =
      ind === times.length - 1 && currentTimeIndex === times.length - 1
        ? 0
        : ind;
    setCurrentTimeIndex(currentInd);
    moveTimeLine(currentInd);
  }

  return (
    <div className="time-line">
      <ul
        className="time-line__times"
        style={{
          '--right-px': `-${currentRightPx}px`,
          '--times-length': times.length,
        }}
        onTouchMove={handleTouchMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {times.map(({ title, subtitle }, i) => (
          <li
            data-index={i}
            onClick={handleTimeClick}
            key={i}
            className={`time-line__time ${
              currentTimeIndex !== i && 'time-line__time_inactive'
            }`}
          >
            <div className="time-line__time-title">
              <Title size="xs" title={title} />
              <span className="time-line__line"></span>
            </div>
            <p className="time-line__time-subtitle">{subtitle}</p>
          </li>
        ))}
      </ul>
      <ul className="time-line__counter">
        {times.map((el, i) => (
          <li
            data-index={i}
            onClick={handleTimeClick}
            className={`time-line__counter-dot ${
              i === currentTimeIndex && 'time-line__counter-dot_active'
            }`}
            key={i}
          ></li>
        ))}
      </ul>
    </div>
  );
}

TimeLine.propTypes = {
  times: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
    })
  ).isRequired,
};
