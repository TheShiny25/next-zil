// eslint-disable-next-line no-param-reassign, no-return-assign
const easeOutCubic = (t, b, c, d) => c * ((t = t / d - 1) * t * t + 1) + b;

const smoothScrollTo = (top, scrollDuration, callback) => {
  let abort = false;
  const finalY = Math.min(Math.ceil(top), document.documentElement.scrollHeight - window.innerHeight);
  const originalY = Math.ceil(window.scrollY);
  const offset = Math.ceil(finalY - originalY);
  const initialTimestamp = performance.now();
  const step = (newTimestamp) => {
    const nextY = Math.ceil(easeOutCubic(newTimestamp - initialTimestamp, originalY, offset, scrollDuration));
    if (abort || (finalY >= originalY && nextY >= finalY) || (finalY <= originalY && nextY <= finalY + 1)) {
      window.scrollTo(0, finalY);
      if (callback) callback();

      return;
      // eslint-disable-next-line no-else-return
    } else {
      window.scrollTo(0, nextY);
    }
    window.requestAnimationFrame(step);
  };
  window.requestAnimationFrame(step);

  return () => {
    abort = true;
  };
};

export default smoothScrollTo;
