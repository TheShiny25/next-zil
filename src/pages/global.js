import styled from 'styled-components';
import Breakpoints from '@css/breakpoints';
import Page from '@components/Page';
import Hero from '@components/Hero';
import ContactCta from '@partials/ContactCta';
import ProductList from '@partials/holding/ProductList';
import About from '@partials/holding/About';
import OurDivisions from '@partials/holding/OurDivisions';
import JoinTheProgram from '@partials/holding/JoinTheProgram';
import LatestNews from '@partials/holding/LatestNews';
import HeroBackground from '@svg/holding/hero-background';
import { useAnimateIn } from '@zil/util/animations';
import { useRef } from 'react';

const HeroTitle = styled.h1`
  font-size: 3.61rem;
  text-align: center;
  margin-bottom: 0.72rem;
  position: relative;

  ${Breakpoints.tabletDown} {
    font-size: 1.9rem;
    padding: 0 3rem;
  }
`;

const HeroText = styled.p`
  font-size: var(--size-lg);
  text-align: center;
  position: relative;

  ${Breakpoints.tabletDown} {
    font-size: var(--size-sm);
  }
`;

const StyledHero = styled(Hero)`
  ${Breakpoints.phonyOnly} {
    height: 85vh;
  }
`;

const StyledHeroBackground = styled(HeroBackground)`
  width: 100%;
  height: 100vh;

  ${Breakpoints.phoneOnly} {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 2vh;
    right: 0;
  }
`;

const Holding = () => {
  const heroTitleRef = useRef();
  const heroTextRef = useRef();

  useAnimateIn(heroTitleRef, { delay: 0.5 });
  useAnimateIn(heroTextRef, { delay: 1 });

  return (
    <Page
      title="Zil Global"
      description="Zil Global is the key partner for every emerging media company. We own, operate, and represent many of your favorite music channels, artists, playlists, releases, and labels."
    >
      <StyledHero background={<StyledHeroBackground />}>
        <HeroTitle ref={heroTitleRef}>Right Solutions for Rising Brands</HeroTitle>
        <HeroText ref={heroTextRef}>Multidisciplinary solutions for every need</HeroText>
      </StyledHero>
      <ProductList />
      <About />
      <OurDivisions />
      <JoinTheProgram />
      <LatestNews />
      <ContactCta />
    </Page>
  );
};

export default Holding;
