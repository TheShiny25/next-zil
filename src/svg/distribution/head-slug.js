import { useEffect, useState } from "react";
import styled from 'styled-components';
import breakpoints from "@css/breakpoints";

const IllustrationSlug = ({title}) => {
  const [color,setColor] = useState(["#FF7C7E","#546ACF","#546ACF","#EA5662"]);

  /*const DivSVG = styled.div`
    width: 60%;
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  `;*/
  const DivSVG = styled.div`
    //width: 50%;
    width: 60%;
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    ${breakpoints.tabletDown} {
      left: -60%;
      width: 205%;
      top: 18%;
      transform:rotate(45deg);
    }

    ${breakpoints.phoneOnly} {
      left: -102%;
      width: 301%;
      top: 22%;
      transform:rotate(36deg);
    }
  `;
  useEffect(() => {

    const arrColors= [
      ["#FF7C7E","#546ACF","#546ACF","#EA5662"],
      ["#FF7C7E","#EA5662","#546ACF","#546ACF"],
      ["#546ACF","#FF7C7E","#EA5662","#546ACF"],
      ["#EA5662","#546ACF","#EA5662","#FF7C7E"],
      ["#EA5662","#546ACF","#FF7C7E","#EA5662"],
      ["#EA5662","#546ACF","#FF7C7E","#546ACF"],
      ["#546ACF","#546ACF","#FF7C7E","#EA5662"],
    ];

    let index = Math.floor(Math.random() * arrColors.length)
    let randomColors = arrColors[index];

    if(localStorage.getItem('color-theme')){
      const colorIndex = localStorage.getItem('color-theme');
      if(index == colorIndex){
        if(index == 0){
          index = index + 1;
        } else {
          index = index - 1;
        }
        randomColors = arrColors[index];
      }
    }

    localStorage.setItem('color-theme', ""+index);

    setColor(randomColors);

  }, [title]);


  return (
    <DivSVG>
      <svg viewBox="0 0 1086 371" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_1_103)">
          <path d="M602.304 290.963C602.304 290.963 967.287 188.474 996.999 125.813C1051.33 41.0409 848.497 92.0012 683.497 150.501C592.482 182.77 511.182 167.247 511.182 167.247C511.182 167.247 152.26 67.7388 85.0985 125.814C34.4277 169.63 378.25 209.412 414.002 237.977C475.784 281.518 602.304 290.963 602.304 290.963Z" fill="url(#paint0_linear_1_103)"/>
          <path d="M602.304 290.963C602.304 290.963 967.287 188.474 996.999 125.813C1051.33 41.0409 848.497 92.0012 683.497 150.501C592.482 182.77 511.182 167.247 511.182 167.247C511.182 167.247 152.26 67.7388 85.0985 125.814C34.4277 169.63 378.25 209.412 414.002 237.977C475.784 281.518 602.304 290.963 602.304 290.963Z" fill="url(#paint1_radial_1_103)" fillOpacity="0.4"/>
          <path d="M602.304 290.963C602.304 290.963 967.287 188.474 996.999 125.813C1051.33 41.0409 848.497 92.0012 683.497 150.501C592.482 182.77 511.182 167.247 511.182 167.247C511.182 167.247 152.26 67.7388 85.0985 125.814C34.4277 169.63 378.25 209.412 414.002 237.977C475.784 281.518 602.304 290.963 602.304 290.963Z" fill="url(#paint2_radial_1_103)" fillOpacity="0.4"/>
          <path d="M602.304 290.963C602.304 290.963 967.287 188.474 996.999 125.813C1051.33 41.0409 848.497 92.0012 683.497 150.501C592.482 182.77 511.182 167.247 511.182 167.247C511.182 167.247 152.26 67.7388 85.0985 125.814C34.4277 169.63 378.25 209.412 414.002 237.977C475.784 281.518 602.304 290.963 602.304 290.963Z" fill="url(#paint3_radial_1_103)" fillOpacity="0.4"/>
        </g>
        <defs>
          <filter id="filter0_f_1_103" x="0.0129395" y="0.937744" width="1085.98" height="370.025" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="40" result="effect1_foregroundBlur_1_103"/>
          </filter>
          <linearGradient id="paint0_linear_1_103" x1="820.204" y1="259.737" x2="154.417" y2="95.8461" gradientUnits="userSpaceOnUse">
            <stop stopColor={color[0]} stopOpacity="0.63"/>
            <stop offset="0.0625" stopColor={color[1]} stopOpacity="0.54"/>
            <stop offset="0.283853" stopColor={color[2]}/>
            <stop offset="1" stopColor={color[3]}/>
          </linearGradient>
          <radialGradient id="paint1_radial_1_103" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(600.001 339.868) rotate(-3.22517) scale(89.0084 43.9734)">
            <stop/>
            <stop offset="1" stopOpacity="0"/>
          </radialGradient>
          <radialGradient id="paint2_radial_1_103" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(691.722 133.724) rotate(-172.828) scale(251.383 84.8146)">
            <stop/>
            <stop offset="1" stopOpacity="0"/>
          </radialGradient>
          <radialGradient id="paint3_radial_1_103" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(409.744 150.772) rotate(171.657) scale(255.539 76.971)">
            <stop/>
            <stop offset="1" stopOpacity="0"/>
          </radialGradient>
        </defs>
      </svg>

    </DivSVG>
  );
}

export default IllustrationSlug;
