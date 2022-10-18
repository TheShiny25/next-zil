const listenMediaChange = (match, callback) => {
  let removeListener;
  if (match.addEventListener) {
    match.addEventListener('change', callback);
    removeListener = () => match.removeEventListener('change', callback);
  } else if (match.addListener) {
    match.addListener(callback);
    removeListener = () => match.removeListener(callback);
  }

  return removeListener;
};

export default listenMediaChange;
