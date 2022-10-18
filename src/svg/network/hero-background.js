import { useRef } from 'react';
import { useSunshineAnimation } from '@zil/util/animations';

const HeroBackground = ({ className }) => {
  const sun = useRef();

  useSunshineAnimation(sun);

  /* eslint-disable prettier/prettier */
  return (
    <svg className={className} viewBox="0 0 1440 760" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_f)">
        <ellipse ref={sun} cx="713.056" cy="545.376" rx="488.408" ry="212.787" transform="rotate(15.5976 688.636 423.274)" fill="#5573FF" />
      </g>
      <rect y="480" width="1440" height="380" fill="black" />
      <path fillRule="evenodd" clipRule="evenodd" d="M1367.96 760H72.037C75.7907 405.344 364.456 119 720 119C1075.54 119 1364.21 405.344 1367.96 760Z" fill="url(#paint0_radial)" />
      <path fillRule="evenodd" clipRule="evenodd" d="M1367.96 760H72.037C75.7907 405.344 364.456 119 720 119C1075.54 119 1364.21 405.344 1367.96 760Z" fill="url(#paint1_radial)" />
      <defs>
        <filter id="filter0_f" x="84.7001" y="49.8291" width="1207.87" height="746.889" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="65" result="effect1_foregroundBlur" />
        </filter>
        <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(353.5 60) rotate(60.7273) scale(586.952)">
          <stop stopColor="#FF7173" />
          <stop offset="0.41163" stopColor="#010101" />
        </radialGradient>
        <radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1069 196) rotate(137.061) scale(727.376)">
          <stop offset="0.0089851" stopColor="#FF7173" />
          <stop offset="0.635275" stopColor="#010101" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default HeroBackground;
