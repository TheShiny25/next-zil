import { useRef } from 'react';
import styled from 'styled-components';
import breakpoints from '@css/breakpoints';
import Page from '@components/Page';
import Hero from '@components/Hero';
import ContactCta from '@partials/ContactCta';
import Platforms from '@partials/distribution/Platforms';
import Industry from '@partials/distribution/Industry';
import Developing from '@partials/distribution/Developing';
import Testimonials from '@partials/distribution/Testimonials';
import Services from '@partials/distribution/Services';
import Playlisting from '@partials/distribution/Playlisting';
import HeroBackground from '@svg/distribution/hero-background';
import { useAnimateIn } from '@zil/util/animations';

const HeroTitle = styled.h1`
  font-size: var(--size-xxl);
  font-weight: 500;
  text-align: center;
  padding: 0 3rem;
  z-index: 100;

  em {
    display: inline-block;
    color: var(--red);
    font-style: normal;
    border-bottom: 3px solid var(--red);
    padding: 0 3px 3px;
  }
`;

const StyledHeroBackground = styled(HeroBackground)`
  width: 100%;

  ${breakpoints.phoneOnly} {
    width: 275%;
    height: auto;
    position: absolute;
    top: 0;
    right: 0;
  }
`;

const Distribution = () => {
  const titleRef = useRef();

  useAnimateIn(titleRef, { delay: 1 });

  return (
    <Page
      title="Zil Distribution"
      description="Distribution is not enough! Our integral distribution service makes a huge difference for independent artists and record labels looking to scale."
    >
      <Hero background={<StyledHeroBackground />}>
        <HeroTitle ref={titleRef}>
          Distribution is <em>not enough</em>
        </HeroTitle>
      </Hero>
      <Platforms />
      <Industry />
      <Developing />
      <Testimonials />
      <Services />
      <Playlisting />
      <ContactCta />
    </Page>
  );
};

export default Distribution;
