import styled from 'styled-components';
import Breakpoints from '@css/breakpoints';
import CapsText from '@components/CapsText';
import YouTubeIcon from '@svg/icons/youtube.svg';
import SpotifyIcon from '@svg/icons/spotify.svg';
import { useAnimateIn } from '@zil/util/animations';
import { useRef } from 'react';

const StyledAbout = styled.section`
  background-color: var(--white);
  color: var(--black);
  padding: 7.55rem 5.11rem 14.16rem 5.11rem;

  ${Breakpoints.tabletDown} {
    padding: 4.44rem 1.88rem 11.5rem 1.88rem;
  }
`;

const Title = styled.h1`
  width: 100%;
  font-size: var(--size-xxxl);
  line-height: 1.25em;
  text-align: center;
  padding: 0 5.88rem;
  margin-bottom: 10rem;

  ${Breakpoints.tabletDown} {
    padding: 0 0.5rem;
    margin-bottom: 3.9rem;
  }
`;

const StyledCapsText = styled(CapsText)`
  margin-bottom: 1.66rem;
`;

const Text = styled.p`
  line-height: 1.44em;
  margin-bottom: 1.66rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 4rem;

  ${Breakpoints.tabletDown} {
    width: 100%;
    flex-direction: column;
    margin: 0;
  }
`;

const TextWrapper = styled.div`
  width: 31.6vw;

  ${Breakpoints.laptopUp} {
    margin-right: 7.88rem;
  }

  ${Breakpoints.tabletDown} {
    width: auto;
    margin-bottom: 3.6rem;
  }
`;

const FloatingYouTubeIcon = styled(YouTubeIcon)`
  width: 3.72rem;
  height: 2.85rem;
  position: absolute;
  top: 0;
  left: 25%;
  transform: translate(-50%, -75%);
  filter: drop-shadow(0.66rem 0.66rem var(--white));
  border-radius: 0.7rem;
  z-index: 1;

  ${Breakpoints.tabletDown} {
    width: 2.5rem;
    height: auto;
  }
`;

const FloatingSpotifyIcon = styled(SpotifyIcon)`
  background-color: var(--white);
  width: 3.72rem;
  height: 3.72rem;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(50%, -50%);
  filter: drop-shadow(-1.1rem 0.66rem var(--white));
  border-radius: 50%;
  z-index: 1;

  ${Breakpoints.tabletDown} {
    width: 2.5rem;
    height: auto;
    top: initial;
    bottom: 0;
    right: calc(25% - 0.5rem);
    transform: translate(50%, 50%);
    filter: drop-shadow(-0.5rem -0.5rem var(--white));
  }
`;

const ImagesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0.5rem;
  position: relative;

  ${Breakpoints.tabletDown} {
    grid-gap: 0.3rem;
  }
`;

const CollageImg = styled.img`
  &.collage-img--double-height {
    grid-row-start: 1;
    grid-row-end: 3;
  }

  ${Breakpoints.tabletDown} {
    max-width: 100%;
  }
`;

const BoxedText = styled.p`
  width: 60%;
  font-size: 1.16rem;
  color: var(--red);
  padding: 3rem;
  border: 2px solid var(--red);
  position: absolute;
  bottom: 0;
  left: -5%;
  transform: translateY(50%);

  ${Breakpoints.tabletDown} {
    width: calc(60% + 1.88rem);
    font-size: var(--size-sm);
    padding: 2rem 1.66rem 2rem calc(1.66rem + 2px);
    left: calc(-1.88rem - 2px);
    transform: translateY(65%);
  }
`;

const About = () => {
  const titleRef = useRef();
  const textRef = useRef();
  const imagesWrapperRef = useRef();
  const img1Ref = useRef();
  const img2Ref = useRef();
  const img3Ref = useRef();
  const youtubeIconRef = useRef();
  const spotifyIconRef = useRef();
  const boxedTextRef = useRef();

  useAnimateIn(titleRef);
  useAnimateIn(textRef, { triggerStart: 'top 75%' });
  useAnimateIn(youtubeIconRef, { triggerElement: imagesWrapperRef, yPercent: 100, triggerStart: 'top 75%' });
  useAnimateIn(img1Ref, { triggerElement: imagesWrapperRef, delay: 0.15, triggerStart: 'top 75%' });
  useAnimateIn(img2Ref, { triggerElement: imagesWrapperRef, delay: 0.35, triggerStart: 'top 75%' });
  useAnimateIn(img3Ref, { triggerElement: imagesWrapperRef, delay: 0.65, triggerStart: 'top 75%' });
  useAnimateIn(spotifyIconRef, {
    triggerElement: imagesWrapperRef,
    yPercent: 0,
    xPercent: 15,
    delay: 0.75,
    triggerStart: 'top 75%',
  });

  return (
    <StyledAbout>
      <Title ref={titleRef}>We are building one of the most prominent music companies worldwide.</Title>
      <ContentWrapper>
        <TextWrapper ref={textRef}>
          <StyledCapsText as="h2">Zil Global</StyledCapsText>
          <Text>
            Founded in 2014, Zil Global is the key partner for every emerging media company. We own, operate, and
            represent many of your favorite music channels, artists, playlists, releases, and labels.
          </Text>
          <Text>
            We want to see a highly competitive industry where brands fight to improve their quality, and talented
            artists can quickly emerge.
          </Text>
          <Text>
            That's why we provide top services at friendly terms; we will make sure our partnered artists and labels
            will keep growing independently.
          </Text>
        </TextWrapper>
        <ImagesWrapper ref={imagesWrapperRef}>
          <FloatingYouTubeIcon ref={youtubeIconRef} />
          <FloatingSpotifyIcon ref={spotifyIconRef} />
          <CollageImg
            ref={img1Ref}
            className="collage-img--double-height"
            src="images/holding/Zil Holding_Laura West.webp"
          />
          <CollageImg ref={img2Ref} src="images/holding/Zil Holding_Halvorsen.webp" />
          <CollageImg ref={img3Ref} src="images/holding/Zil Holding_Yuma.webp" />
          <BoxedText ref={boxedTextRef}>
            Let's work together for a popular industry where talent, creativity, and dedication get awarded.
          </BoxedText>
        </ImagesWrapper>
      </ContentWrapper>
    </StyledAbout>
  );
};

export default About;
