/* eslint-disable prettier/prettier */
import { useRef } from 'react';
import styled from 'styled-components';
import { useAccordionBreathAnimation } from '@zil/util/animations';
import breakpoints from '@css/breakpoints';

const StyledSvg = styled.svg`
  ${breakpoints.phoneOnly} {
    transform: scaleX(0.75);
    transform-origin: right center;
    width: 133% !important;
  }
`;

const HeroBackground = ({ className }) => {
  const rects = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];

  useAccordionBreathAnimation(rects);

  return (
    <StyledSvg className={className} viewBox="0 0 1440 760" preserveAspectRatio="xMaxYMid slice" xmlns="http://www.w3.org/2000/svg">
      <rect ref={rects[6]} x="391" y="290" width="148.73" height="115" fill="url(#paint4_radial)" fillOpacity="0.4" />
      <rect ref={rects[5]} x="539.73" y="258" width="148.73" height="179" fill="url(#paint3_radial)" fillOpacity="0.4" />
      <rect ref={rects[4]} x="688.461" y="231" width="148.73" height="233" fill="url(#paint2_radial)" fillOpacity="0.4" />
      <rect ref={rects[3]} x="837.191" y="185" width="148.73" height="293" fill="url(#paint1_radial)" fillOpacity="0.6" />
      <rect ref={rects[2]} x="985.922" y="107" width="148.73" height="446" fill="url(#paint0_radial)" fillOpacity="0.8" />
      <g filter="url(#filter0_f)">
        <path d="M1366.5 355C1366.5 399.183 1451.21 441 1317 441C1182.79 441 1074 405.183 1074 361C1074 316.817 1182.79 281 1317 281C1451.21 281 1366.5 310.817 1366.5 355Z" fill="url(#paint5_linear)" />
      </g>
      <rect ref={rects[1]} x="1134.65" y="1" width="148.73" height="592" fill="url(#paint6_radial)" />
      <g filter="url(#filter1_f)">
        <path d="M1387.5 337C1387.5 416.529 1447.05 481 1414.02 481C1299.69 481 1207 416.529 1207 337C1207 257.471 1299.69 193 1414.02 193C1440.54 193 1387.5 257.471 1387.5 337Z" fill="url(#paint7_linear)" />
      </g>
      <rect ref={rects[0]} x="1283.38" width="156.618" height="673" fill="url(#paint8_radial)" />
      <defs>
        <filter id="filter0_f" x="944" y="151" width="578.872" height="420" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="65" result="effect1_foregroundBlur" />
        </filter>
        <filter id="filter1_f" x="1077" y="63" width="477" height="548" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="65" result="effect1_foregroundBlur" />
        </filter>
        <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1015.22 355.686) rotate(67.2204) scale(151.324 189.892)">
          <stop offset="0.0119527" stopColor="#FF7173" />
          <stop offset="1" />
        </radialGradient>
        <radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(842.262 343.827) rotate(7.92748) scale(158.129 117.991)">
          <stop stopColor="#FF7173" />
          <stop offset="1" />
        </radialGradient>
        <radialGradient id="paint2_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(663.673 344.135) rotate(21.3647) scale(151.236 118.575)">
          <stop offset="0.0119527" stopColor="#FF7173" />
          <stop offset="0.939704" />
        </radialGradient>
        <radialGradient id="paint3_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(498.041 341.726) rotate(16.0951) scale(164.18 104.074)">
          <stop offset="0.0119527" stopColor="#FF7173" />
          <stop offset="0.827443" />
        </radialGradient>
        <radialGradient id="paint4_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(349.31 343.79) rotate(10.5021) scale(160.432 68.4251)">
          <stop offset="0.0119527" stopColor="#FF7173" />
          <stop offset="0.827443" />
        </radialGradient>
        <linearGradient id="paint5_linear" x1="1157.95" y1="310.281" x2="1483.8" y2="383.999" gradientUnits="userSpaceOnUse">
          <stop offset="0.184446" stopColor="#5573FF" />
          <stop offset="1" stopColor="#FF7173" />
        </linearGradient>
        <radialGradient id="paint6_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1077.75 359.117) rotate(45.9167) scale(200.018 223.434)">
          <stop offset="0.222298" stopColor="#FF7173" />
          <stop offset="1" />
        </radialGradient>
        <linearGradient id="paint7_linear" x1="1278.52" y1="245.706" x2="1567.03" y2="276.598" gradientUnits="userSpaceOnUse">
          <stop offset="0.184446" stopColor="#5573FF" />
          <stop offset="1" stopColor="#FF7173" />
        </linearGradient>
        <radialGradient id="paint8_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1270 337) rotate(67.4074) scale(237.203 276.362)">
          <stop offset="0.1256" stopColor="#FF7173" />
          <stop offset="1" />
        </radialGradient>
      </defs>
    </StyledSvg>
  );
};

export default HeroBackground;
