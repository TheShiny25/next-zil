import { useRef } from 'react';
import styled from 'styled-components';
import breakpoints from '@css/breakpoints';
import PlatformPeople from './PlatformPeople';
import FancySpotifyIcon from '@svg/distribution/fancy-spotify-icon.svg';
import FancyYouTubeIcon from '@svg/distribution/fancy-youtube-icon.svg';
import Background from '@svg/distribution/playlisting-background';
import { useAnimateIn } from '@zil/util/animations';

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15vw;
  margin: 5rem 0 8rem 0;
  position: relative;
  z-index: 1;

  ${breakpoints.tabletDown} {
    flex-direction: column;
    margin-top: 13rem;
  }
`;

const Title = styled.h1`
  font-size: var(--size-xxxl);
  margin-bottom: 1.75rem;

  ${breakpoints.tabletDown} {
    margin-bottom: 1rem;
  }
`;

const Description = styled.p`
  font-size: 1.33rem;
  line-height: 1.25em;
  width: 100%;

  ${breakpoints.tabletDown} {
    font-size: 1rem;
  }
`;

const Intro = styled.div`
  flex-basis: 0;
`;

const Data = styled.dl`
  margin: 0;
  flex-basis: 0;

  ${breakpoints.phoneOnly} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const PositionedBackground = styled(Background)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: -1;

  ${breakpoints.tabletDown} {
    width: 275%;
    top: -11rem;
  }
`;

const StyledFancyYouTubeIcon = styled(FancyYouTubeIcon)`
  ${breakpoints.phoneOnly} {
    transform: translateY(-40%);
  }
`;

const Playlisting = () => {
  const introRef = useRef();
  const spotifyRef = useRef();
  const youtubeRef = useRef();

  useAnimateIn(introRef);
  useAnimateIn(spotifyRef, { triggerElement: introRef, delay: 0.5 });
  useAnimateIn(youtubeRef, { triggerElement: introRef, delay: 0.75 });

  return (
    <Section>
      <PositionedBackground />
      <Intro ref={introRef}>
        <Title>Playlisting</Title>
        <Description>
          Get your releases placed into our playlist network for free, reach thousands of people and expand your fanbase.
        </Description>
      </Intro>
      <Data>
        <PlatformPeople ref={spotifyRef} platform="Spotify" millions={1} icon={FancySpotifyIcon} />
        <PlatformPeople ref={youtubeRef} platform="YouTube" millions={5} icon={StyledFancyYouTubeIcon} />
      </Data>
    </Section>
  );
};

export default Playlisting;
