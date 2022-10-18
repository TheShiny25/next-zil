import { useRef, useEffect, useState, useContext } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import styled from 'styled-components';
import breakpoints from '@css/breakpoints';
import DeviceContext from '@contexts/Device';
import BackgroundGradient from '@svg/distribution/platforms-background.svg';
import TikTokLogo from '@svg/distribution/tiktok.svg';
import SpotifyLogo from '@svg/distribution/spotify.svg';
import YouTubeMusicLogo from '@svg/distribution/youtube-music.svg';
import AppleMusicLogo from '@svg/distribution/apple-music.svg';
import AmazonMusicLogo from '@svg/distribution/amazon-music.svg';
import SoundcloudLogo from '@svg/distribution/soundcloud.svg';
import FacebookLogo from '@svg/distribution/facebook.svg';
import TidalLogo from '@svg/distribution/tidal.svg';
import TwitchLogo from '@svg/distribution/twitch.svg';
import { useAnimateIn } from '@zil/util/animations';

const Wrapper = styled.section`
  position: relative;
  z-index: 1;
  margin: 5rem 0;
`;

const Title = styled.h1`
  margin-bottom: 2.22rem;
  font-size: var(--size-xl);
  text-align: center;
`;

const platforms = [
  {
    id: 'tiktok',
    name: 'TikTok',
    logo: <TikTokLogo />,
  },
  {
    id: 'spotify',
    name: 'Spotify',
    logo: <SpotifyLogo />,
  },
  {
    id: 'youtube-music',
    name: 'YouTube Music',
    logo: <YouTubeMusicLogo />,
  },
  {
    id: 'apple-music',
    name: 'Apple Music',
    logo: <AppleMusicLogo />,
  },
  {
    id: 'tidal',
    name: 'Tidal',
    logo: <TidalLogo />,
  },
  {
    id: 'twitch',
    name: 'Twitch',
    logo: <TwitchLogo />,
  },
  {
    id: 'facebook',
    name: 'Facebook',
    logo: <FacebookLogo />,
  },
  {
    id: 'amazon-music',
    name: 'AmazonMusic',
    logo: <AmazonMusicLogo />,
  },
  {
    id: 'soundcloud',
    name: 'Soundcloud',
    logo: <SoundcloudLogo />,
  },
];

const Slide = styled.div`
  display: flex;
  justify-content: center;
`;

const Slider = ({ children }) => {
  const device = useContext(DeviceContext);
  const timer = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider({
    slidesPerView: device === 'phone' ? 1.75 : 6.5,
    centered: true,
    initial: 0,
    mode: 'free',
    duration: 4000,
    loop: true,
    controls: false,
    slideChanged(slide) {
      setCurrentSlide(slide.details().relativeSlide);
    },
  });

  useEffect(() => {
    if (slider) slider.moveToSlide(300, 90 * 24 * 60 * 60);
  }, [slider]);

  return (
    <div className="keen-slider" ref={sliderRef}>
      {children.map((slide, idx) => <Slide key={`slide-${idx}`} className="keen-slider__slide">{slide}</Slide>)}
    </div>
  );
};


const PlatformItem = styled.li.attrs(({ logo }) => ({
  children: logo,
}))`
  display: block;
  color: var(--white);
  width: 14vw;
  height: 14vw;
  border-radius: 100%;
  background: var(--black);
  position: relative;

  > svg {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 85%;
    transform: translate(-50%, -50%);
  }

  ${breakpoints.phoneOnly} {
    width: 50vw;
    height: 50vw;
  }
`;

const StyledBackgroundGradient = styled(BackgroundGradient)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -10%);
  z-index: -1;
  width: 95%;

  ${breakpoints.phoneOnly} {
    width: 225%;
  }
`;

const Platforms = () => {
  const device = useContext(DeviceContext);
  const titleRef = useRef();

  useAnimateIn(titleRef, { guard: () => device !== 'phone' });

  return (
    <Wrapper>
      <StyledBackgroundGradient />
      <Title ref={titleRef}>Reach major platforms</Title>
      <Slider>
        {platforms.concat(platforms).map((platform) => (
          <PlatformItem key={platform.id} {...platform} />
        ))}
      </Slider>
    </Wrapper>
  );
};

export default Platforms;
