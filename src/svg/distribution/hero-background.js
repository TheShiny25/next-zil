/* eslint-disable prettier/prettier */
import { useFloatingAnimation } from '@zil/util/animations';
import { useRef } from 'react';

const Illustration = ({ className }) => {
  const floatingCircles = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];

  useFloatingAnimation(floatingCircles);

  return (
    <svg className={className} preserveAspectRatio="xMidYMin slice" version="1.1" viewBox="0 0 1440 760" xmlns="http://www.w3.org/2000/svg">
      <path
        d="m1440 464c-144.19-0.27-261-117.24-261-261.5 0-81.642 37.41-154.54 96.03-202.5h164.97v464z"
        clipRule="evenodd"
        fill="url(#paint0_radial)"
        fillRule="evenodd"
      />
      <g filter="url(#filter0_f)">
        <path
          d="m1440 269.78v374.45c-18.63 1.172-37.66 1.777-57 1.777-228.65 0-414-84.618-414-189s185.35-189 414-189c19.34 0 38.37 0.605 57 1.777z"
          clipRule="evenodd"
          fill="url(#paint1_linear)"
          fillRule="evenodd"
        />
      </g>
      <g filter="url(#filter1_f)">
        <path d="m168.9 279.28c225.64-36.957 393.03-161.69 373.89-278.6-0.037-0.22702-0.075-0.45384-0.114-0.68047h-542.67v288.27c52.615 3.384 109.82 0.684 168.9-8.991z" clipRule="evenodd" fill="url(#paint2_linear)" fillOpacity=".5" fillRule="evenodd" />
      </g>
      <path d="m1440 440.34v319.66h-93.33c-44.05-32.196-72.67-84.256-72.67-143 0-94.061 73.37-170.98 166-176.66z" clipRule="evenodd" fill="url(#paint3_radial)" fillRule="evenodd" />
      <circle ref={floatingCircles[6]} cx="1306" cy="343" r="36" fill="url(#paint4_linear)" />
      <circle ref={floatingCircles[5]} cx="1170.5" cy="513.5" r="95.5" fill="url(#paint5_radial)" />
      <path ref={floatingCircles[4]} d="m1272.4 760h-376.86c25.719-79.503 100.36-137 188.42-137 88.07 0 162.71 57.497 188.43 137z" clipRule="evenodd" fill="url(#paint6_linear)" fillRule="evenodd" />
      <circle cx="972" cy="536" r="58" fill="url(#paint7_linear)" />
      <circle ref={floatingCircles[3]} cx="1013.5" cy="287.5" r="152.5" fill="url(#paint8_radial)" />
      <circle cx="696.5" cy="235.5" r="52.5" fill="url(#paint9_radial)" />
      <circle ref={floatingCircles[2]} cx="711" cy="520" r="167" fill="url(#paint10_radial)" />
      <circle cx="372" cy="609" r="78" fill="url(#paint11_radial)" />
      <circle cx="431.5" cy="354.5" r="118.5" fill="url(#paint12_radial)" />
      <circle cx="153.5" cy="420.5" r="52.5" fill="url(#paint13_radial)" />
      <circle ref={floatingCircles[0]} cx="305.5" cy="200.5" r="41.5" fill="url(#paint14_radial)" />
      <circle ref={floatingCircles[1]} cx="483.5" cy="20.5" r="152.5" fill="url(#paint15_radial)" />
      <path d="M91.5 253C198.367 253 285 166.367 285 59.5C285 38.7409 281.731 18.7454 275.68 0H0L0 230.042C27.2439 244.69 58.4015 253 91.5 253Z" clipRule="evenodd" fill="url(#paint16_radial)" fillRule="evenodd" />
      <path d="M0 486H1440V760H0V486Z" fill="url(#paint17_linear)" />
      <defs>
        <filter id="filter0_f" x="839" y="138" width="731" height="638" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="65" />
        </filter>
        <filter id="filter1_f" x="-130" y="-130" width="804.28" height="549.66" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="65" />
        </filter>
        <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientTransform="translate(1336.5 30.5) rotate(59.652) scale(319.53)" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF7173" offset="0" />
          <stop stopColor="#010101" offset="1" />
        </radialGradient>
        <linearGradient id="paint1_linear" x1="1112" x2="1680.5" y1="337.18" y2="429.92" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5573FF" offset=".18445" />
          <stop stopColor="#FF7173" offset=".67131" />
        </linearGradient>
        <linearGradient id="paint2_linear" x1="-155.16" x2="422.35" y1="-22.809" y2="-34.112" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5573FF" offset=".18445" />
          <stop stopColor="#FF7173" offset="1" />
        </linearGradient>
        <radialGradient id="paint3_radial" cx="0" cy="0" r="1" gradientTransform="translate(1317.5 456.5) rotate(55.604) scale(236.32)" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF7173" offset="0" />
          <stop stopColor="#010101" offset="1" />
        </radialGradient>
        <linearGradient id="paint4_linear" x1="1270" x2="1306.3" y1="292.47" y2="343.33" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF7173" offset="0" />
          <stop stopColor="#010101" offset="1" />
        </linearGradient>
        <radialGradient id="paint5_radial" cx="0" cy="0" r="1" gradientTransform="translate(1120 439) rotate(57.543) scale(133.19)" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF7173" offset="0" />
          <stop stopColor="#010101" offset="1" />
        </radialGradient>
        <linearGradient id="paint6_linear" x1="896" x2="1003" y1="515.5" y2="771" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF7173" offset="0" />
          <stop stopColor="#010101" offset="1" />
        </linearGradient>
        <linearGradient id="paint7_linear" x1="914" x2="972.53" y1="454.59" y2="536.53" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF7173" offset="0" />
          <stop stopColor="#010101" offset="1" />
        </linearGradient>
        <radialGradient id="paint8_radial" cx="0" cy="0" r="1" gradientTransform="translate(925 135) rotate(60.197) scale(245.46)" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF7173" offset="0" />
          <stop stopColor="#010101" offset=".78584" />
        </radialGradient>
        <radialGradient id="paint9_radial" cx="0" cy="0" r="1" gradientTransform="translate(617 121) rotate(55.078) scale(146.99)" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF7173" offset="0" />
          <stop stopColor="#010101" offset=".78584" />
        </radialGradient>
        <radialGradient id="paint10_radial" cx="0" cy="0" r="1" gradientTransform="translate(533.6 220.5) rotate(58.906) scale(372.14)" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF7173" offset="0" />
          <stop stopColor="#010101" offset=".78584" />
        </radialGradient>
        <radialGradient id="paint11_radial" cx="0" cy="0" r="1" gradientTransform="translate(261 416) rotate(59.722) scale(233.85)" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF7173" offset="0" />
          <stop stopColor="#010101" offset=".78584" />
        </radialGradient>
        <radialGradient id="paint12_radial" cx="0" cy="0" r="1" gradientTransform="translate(270.06 86.12) rotate(58.628) scale(330.26)" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF7173" offset="0" />
          <stop stopColor="#010101" offset=".78584" />
        </radialGradient>
        <radialGradient id="paint13_radial" cx="0" cy="0" r="1" gradientTransform="translate(74 306) rotate(55.078) scale(146.99)" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF7173" offset="0" />
          <stop stopColor="#010101" offset=".78584" />
        </radialGradient>
        <radialGradient id="paint14_radial" cx="0" cy="0" r="1" gradientTransform="translate(242.66 109.99) rotate(55.078) scale(116.2)" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF7173" offset="0" />
          <stop stopColor="#010101" offset=".78584" />
        </radialGradient>
        <radialGradient id="paint15_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(409.5 -117.5) rotate(60.1972) scale(245.465)">
          <stop stopColor="#FF7C7E"/>
          <stop offset="0.785837" stopColor="#010101"/>
        </radialGradient>
        <radialGradient id="paint16_radial" cx="0" cy="0" r="1" gradientTransform="translate(-20.793 -134) rotate(60.197) scale(311.46)" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF7173" offset="0" />
          <stop stopColor="#010101" offset=".78584" />
        </radialGradient>
        <linearGradient id="paint17_linear" x1="720" x2="720" y1="486" y2="760" gradientUnits="userSpaceOnUse">
          <stop stopOpacity="0" offset="0" />
          <stop offset=".85417" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Illustration;