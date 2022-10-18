import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import breakpoints from '@css/breakpoints';
import Page from '@components/Page';
import Hero from '@components/Hero';
import Cta from '@components/Cta';
import Team from '@partials/media/Team';
import Labels from '@partials/media/Labels';
import WhatWeDo from '@partials/media/WhatWeDo';
import HeroBackground from '@partials/media/HeroBackground';
import { useAnimateIn } from '@zil/util/animations';
import { useGet } from '@zil/util/request';

const HeroTitle = styled.h1`
  font-size: var(--size-xxl);
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

const StyledHeroBackground = styled(HeroBackground)`
  width: 100%;
  height: 100%;

  ${breakpoints.phoneOnly} {
    width: 100%;
  }
`;

const StyledHero = styled(Hero)`
  ${breakpoints.tabletDown} {
    height: 100vh;
    padding-top: 0;
    padding-bottom: 2rem;
    justify-content: center;
  }
`;

const Artists = ()=>{
  const heroTitleRef = useRef();
  const heroTextRef = useRef();
  const teamMembers = useGet('managementArtists', (json) => {
    return json.artist;
  });

  useAnimateIn(heroTitleRef, { delay: 0.5 });
  useAnimateIn(heroTextRef, { delay: 1 });
  return (
    <>
    <StyledHero
      background={teamMembers &&<StyledHeroBackground people={teamMembers?.sort((a,b)=>{
        return (a.order ? (a?.order > b?.order ? 1 : -1): 1)
    }).slice(0, 5)} />}
    >
      <HeroTitle ref={heroTitleRef}>Artist Management</HeroTitle>
      <HeroText ref={heroTextRef}>Making talented artists quickly emerge.</HeroText>
    </StyledHero>
    {teamMembers && <Team people={teamMembers} />}
    </>
  );
}

const Media = () => {
  // Prevent overflow hidden to allow stickyness
  useEffect(() => {
    document.body.classList.add('body--contained');

    return () => document.body.classList.remove('body--contained');
  });

  return (
    <Page title="Zil Media" description="Lorem Ipsum">
      <Artists/>
      <WhatWeDo />
      <Labels />
      <Cta
        title="Media"
        text="Show the world your talent"
        link={{
          url: '/contact',
          text: 'Apply now',
        }}
      />
    </Page>
  );
};

export default Media;
