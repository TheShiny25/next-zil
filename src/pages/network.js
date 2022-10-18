import { useContext, useRef } from 'react';
import styled from 'styled-components';
import breakpoints from '@css/breakpoints';
import DeviceContext from '@contexts/Device';
import Page from '@components/Page';
import AsideBox from '@components/AsideBox';
import Hero from '@components/Hero';
import CapsText from '@components/CapsText';
import ContactCta from '@partials/ContactCta';
import WhyUs from '@partials/network/WhyUs';
import Partners from '@partials/network/Partners';
import HeroBackground from '@svg/network/hero-background';
import BackgroundLight from '@svg/network/background-light.svg';
import { useAnimateIn } from '@zil/util/animations';

const HeroTitle = styled.h1`
  font-size: 3.61rem;
  text-align: center;
  margin-bottom: 0.72rem;
  padding: 0 3rem;
  position: relative;

  ${breakpoints.tabletDown} {
    font-size: var(--size-xxxl);
  }
`;

const HeroText = styled.p`
  font-size: var(--size-lg);
  text-align: center;
  position: relative;

  ${breakpoints.phoneOnly} {
    font-size: var(--size-sm);
  }
`;

const StyledAsideBox = styled(AsideBox)`
  position: relative;
  font-size: var(--size-xxl);
  font-weight: 500;
  color: var(--black);
  padding: 5rem 10vw;
  text-align: center;
  z-index: 1;
  transform: translate3D(0, 0, 0);

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    background: var(--white);
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  ${breakpoints.phoneOnly} {
    padding: 2.33rem 1.38rem;
    margin-top: 5rem;
    font-size: 1.22rem;
  }

  ${breakpoints.laptopUp} {
    margin-top: -5rem;
  }
`;

const GYBTitle = styled(CapsText)`
  margin-bottom: 2.5rem;
`;

const StyledHeroBackground = styled(HeroBackground)`
  width: 100%;
  height: 100%;

  ${breakpoints.phoneOnly} {
    width: 100%;
  }
`;

const StyledBackgroundLight = styled(BackgroundLight)`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 40%);
  z-index: -2;
  width: 100%;

  ${breakpoints.phoneOnly} {
    height: 50vh;
    transform: translate(-50%, 25%);
  }
`;

const Network = () => {
  const device = useContext(DeviceContext);
  const heroTitleRef = useRef();
  const heroTextRef = useRef();
  const boxedTextRef = useRef();

  useAnimateIn(heroTitleRef, { delay: 0.5 });
  useAnimateIn(heroTextRef, { delay: 1 });

  useAnimateIn(boxedTextRef, { guard: () => device === 'desktop' });
  useAnimateIn(boxedTextRef, {
    triggerElement: heroTitleRef,
    
    guard: () => device === 'phone',
    delay: 0.75,
    yPercent: 10,
  });

  return (
    <Page
      title="Zil Network"
      description="YouTube MCN. Make sure your channels will always monetize and get the best terms on top‑tier MCNs."
    >
      <Hero background={<StyledHeroBackground />}>
        <HeroTitle ref={heroTitleRef}>Media Asset Management</HeroTitle>
        <HeroText ref={heroTextRef}>Protect your company&apos;s future with us.</HeroText>
      </Hero>
      <StyledAsideBox>
        <div ref={boxedTextRef}>
          <GYBTitle>We got your back</GYBTitle>
          YouTube rules are always changing, but our partners aren&apos;t worried.
          <br />
          Let us manage your monetization, getting you the best terms on top tier MCN&apos;s.
        </div>
        <StyledBackgroundLight />
      </StyledAsideBox>
      <WhyUs />
      <Partners />
      <ContactCta />
    </Page>
  );
};

export default Network;
