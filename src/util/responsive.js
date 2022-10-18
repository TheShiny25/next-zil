export const phoneMediaRule = '(max-width: 767px)';
export const tabletMediaRule = '(min-width: 768px) and (max-width: 1024px)';
export const desktopMediaRule = '(min-width: 1025px)';

export const getCurrentDevice = () => {
  let device;
  if (window.matchMedia(phoneMediaRule).matches) device = 'phone';
  else if (window.matchMedia(tabletMediaRule).matches) device = 'tablet';
  else device = 'desktop';

  return device;
};
