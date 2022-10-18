import { forwardRef, useEffect, useRef, useContext } from 'react';
import gsap from 'gsap';
import styled from 'styled-components';
import DeviceContext from '@contexts/Device';
import breakpoints, { rules as breakpointRules } from '@css/breakpoints';
import Image from '@components/Image';
import BackLight from '@svg/media/hero-light.svg';

const LIGHT_SCALE = 2.15;

const Light1 = styled(BackLight)`
  position: absolute;
  top: 0;
  left: 35.48%;
  width: ${27.36 * LIGHT_SCALE}vw;
  height: ${20.62 * LIGHT_SCALE}vw;
  transform: translate(-50%, -40%);

  ${breakpoints.tabletDown} {
    width: 200vw;
    height: 100vh;
    transform: translate(-50%, -40%);
    opacity: 0.35;
  }
`;

const Light2 = styled(BackLight)`
  position: absolute;
  top: 50%;
  right: 0;
  width: ${27 * LIGHT_SCALE}vw;
  height: ${16.18 * LIGHT_SCALE}vw;
  transform: translate(25%, -50%);
`;

const Light3 = styled(BackLight)`
  position: absolute;
  bottom: 0;
  left: 25%;
  width: ${32.36 * LIGHT_SCALE}vw;
  height: ${14.93 * LIGHT_SCALE}vw;
  transform: translate(-50%, 50%);
`;

const PersonCardFrame = styled.div`
  position: relative;
  width: 21.94vw;

  &::before {
    content: '';
    display: block;
    width: 100%;
    padding-top: 126.9%;
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 1.46vw;
    top: 1.59vw;
    z-index: -1;
    border: 1px solid var(--red);
    border-radius: 2.77vw;
  }

  ${breakpoints.tabletDown} {
    width: 51vw;

    &::after {
      left: ${(1.46 / 21.94) * 51}vw;
      top: ${(1.59 / 21.94) * 51}vw;
      border-radius: ${(2.77 / 21.94) * 51}vw;
    }
  }
`;

const PersonPhoto = styled(Image)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 1.875vw;

  ${breakpoints.tabletDown} {
    border-radius: 3.5vw;
  }
`;

const PersonCard = forwardRef(({ image, ...rest }, ref) => (
  <PersonCardFrame ref={ref} {...rest}>
    <PersonPhoto src={image} alt="" sizes={`${breakpointRules.tabletDown} 51vw, 21.94vw`} />
  </PersonCardFrame>
));

const CardSlot1 = styled.div`
  position: absolute;
  top: 0;
  left: 35.48%;
`;

const CardSlot2 = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
`;

const CardSlot3 = styled.div`
  position: absolute;
  bottom: 0;
  right: 28.88%;

  ${breakpoints.tabletDown} {
    bottom: 0;
    left: 0;
    right: auto;
  }
`;

const CardSlot4 = styled.div`
  position: absolute;
  bottom: 0;
  left: 25%;
`;

const CardSlot5 = styled.div`
  position: absolute;
  left: 0%;
  top: 50%;
`;

const PersonCard1 = styled(PersonCard)`
  transform: translate(-50%, -50%);

  ${breakpoints.tabletDown} {
    transform: translate(-50%, -30%);
  }
`;

const PersonCard2 = styled(PersonCard)`
  transform: translate(-20%, -50%);

  ${breakpoints.tabletDown} {
    transform: translate(50%, -50%);
  }
`;

const PersonCard3 = styled(PersonCard)`
  transform: translate(0%, 75%);

  ${breakpoints.tabletDown} {
    transform: translate(-15%, 2.5%);
  }
`;

const PersonCard4 = styled(PersonCard)`
  transform: translate(-50%, 40%);
`;

const PersonCard5 = styled(PersonCard)`
  transform: translate(-65%, -60%);
`;

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

const HeroBackground = ({ people, ...rest }) => {
  const device = useContext(DeviceContext);
  const heroRef = useRef();
  const parallaxLayers = [
    [useRef(), device === 'phone' ? 20 : 100],
    [useRef(), device === 'phone' ? 50 : 70],
    [useRef(), device === 'phone' ? 15 : 50],
    [useRef(), 20],
    [useRef(), 10],
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
            trigger: heroRef.current,
            scrub: true,
          },
        }
      )
    );

    return () => parallaxEffects.forEach((effect) => effect.kill());
  });

  return (
    <Wrapper ref={heroRef} {...rest}>
      <Light1 />
      <CardSlot1 ref={parallaxLayers[0][0]}>
        <PersonCard1 image={people[0].image} />
      </CardSlot1>
      <CardSlot2 ref={parallaxLayers[1][0]}>
        <PersonCard2 image={people[1].image} />
      </CardSlot2>
      <CardSlot3 ref={parallaxLayers[2][0]}>
        <PersonCard3 image={people[2].image} />
      </CardSlot3>
      {device !== 'phone' && device !== 'tablet' && (
        <>
          <Light2 />
          <Light3 />
          <CardSlot4 ref={parallaxLayers[3][0]}>
            <PersonCard4 image={people[3].image} />
          </CardSlot4>
          <CardSlot5 ref={parallaxLayers[4][0]}>
            <PersonCard5 image={people[4].image} />
          </CardSlot5>
        </>
      )}
    </Wrapper>
  );
};

export default HeroBackground;
