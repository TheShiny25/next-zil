import gsap from 'gsap';
import { useEffect, useRef } from 'react';

const PlaylistingBackground = (props) => {
  const svgRef = useRef();
  const parallaxLayers = [
    [useRef(), 100],
    [useRef(), 70],
    [useRef(), 50],
    [useRef(), 20],
    [useRef(), 10],
    [useRef(), 35],
  ];

  useEffect(() => {
    const parallaxEffects = parallaxLayers.map(([ref, movement]) =>
      gsap.fromTo(
        ref.current,
        { y: `${movement}vh` },
        {
          y: `-${movement}vh`,
          ease: 'none',
          scrollTrigger: {
            trigger: svgRef.current,
            scrub: true,
          },
        }
      )
    );

    return () => parallaxEffects.forEach((effect) => effect.kill());
  });

  /* eslint-disable prettier/prettier */
  return (
    <svg
      viewBox="0 0 1440 876"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}
    >
      <g filter="url(#prefix__filter0_f)">
        <ellipse
          cx={1196.79}
          cy={503.366}
          rx={413.634}
          ry={221.941}
          transform="rotate(-16.002 1196.79 503.366)"
          fill="url(#prefix__paint0_linear)"
          fillOpacity={0.15}
        />
      </g>
      <circle
        ref={parallaxLayers[2][0]}
        cx={465.5}
        cy={618.5}
        r={118.5}
        fill="url(#prefix__paint1_radial)"
      />
      <circle
        ref={parallaxLayers[4][0]}
        cx={180.5}
        cy={588.5}
        r={52.5}
        fill="url(#prefix__paint2_radial)"
      />
      <circle
        ref={parallaxLayers[3][0]}
        cx={724.5}
        cy={524.5}
        r={52.5}
        fill="url(#prefix__paint3_radial)"
      />
      <g filter="url(#prefix__filter1_f)">
        <ellipse
          cx={161.226}
          cy={352.596}
          rx={414}
          ry={214.5}
          transform="rotate(-9.302 161.226 352.596)"
          fill="url(#prefix__paint4_linear)"
          fillOpacity={0.2}
        />
      </g>
      <circle
        ref={parallaxLayers[5][0]}
        cx={294.5}
        cy={416.5}
        r={41.5}
        fill="url(#prefix__paint5_radial)"
      />
      <circle
        ref={parallaxLayers[1][0]}
        cx={496.5}
        cy={313.5}
        r={141.5}
        fill="url(#prefix__paint6_radial)"
      />
      <circle ref={parallaxLayers[0][0]} cx={13} cy={262} r={210} fill="url(#prefix__paint7_radial)" />
      <defs>
        <radialGradient
          id="prefix__paint1_radial"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(58.628 -159.745 445.818) scale(330.26)"
        >
          <stop stopColor="#FF7C7E" />
          <stop offset={0.786} stopColor="#010101" />
        </radialGradient>
        <radialGradient
          id="prefix__paint2_radial"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(55.078 -404.016 333.848) scale(146.993)"
        >
          <stop stopColor="#FF7C7E" />
          <stop offset={0.786} stopColor="#010101" />
        </radialGradient>
        <radialGradient
          id="prefix__paint3_radial"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(55.078 -70.647 823.487) scale(146.993)"
        >
          <stop stopColor="#FF7C7E" />
          <stop offset={0.786} stopColor="#010101" />
        </radialGradient>
        <radialGradient
          id="prefix__paint5_radial"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(55.078 -196.762 385.13) scale(116.195)"
        >
          <stop stopColor="#FF7C7E" />
          <stop offset={0.786} stopColor="#010101" />
        </radialGradient>
        <radialGradient
          id="prefix__paint6_radial"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(55.181 61.248 400.416) scale(302.253)"
        >
          <stop stopColor="#FF7C7E" />
          <stop offset={0.786} stopColor="#010101" />
        </radialGradient>
        <radialGradient
          id="prefix__paint7_radial"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(55.51 -72.371 -200.928) scale(452.318)"
        >
          <stop stopColor="#FF7C7E" />
          <stop offset={0.786} stopColor="#010101" />
        </radialGradient>
        <linearGradient
          id="prefix__paint0_linear"
          x1={926.061}
          y1={362.658}
          x2={1498.08}
          y2={442.06}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.184} stopColor="#546ACF" />
          <stop offset={1} stopColor="#EA5662" />
        </linearGradient>
        <linearGradient
          id="prefix__paint4_linear"
          x1={-109.741}
          y1={216.606}
          x2={462.004}
          y2={298.796}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.184} stopColor="#546ACF" />
          <stop offset={1} stopColor="#EA5662" />
        </linearGradient>
        <filter
          id="prefix__filter0_f"
          x={664.445}
          y={131.416}
          width={1064.69}
          height={743.899}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation={65} result="effect1_foregroundBlur" />
        </filter>
        <filter
          id="prefix__filter1_f"
          x={-378.822}
          y={0.531}
          width={1080.1}
          height={704.128}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation={65} result="effect1_foregroundBlur" />
        </filter>
      </defs>
    </svg>
  );
};

export default PlaylistingBackground;
