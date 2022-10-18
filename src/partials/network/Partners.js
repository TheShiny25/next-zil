import { useState, useContext, useRef } from 'react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import styled from 'styled-components';
import breakpoints from '@css/breakpoints';
import DeviceContext from '@contexts/Device';
import Partner from './Partner';
import { useAnimateIn } from '@zil/util/animations';

const partners = [
  {
    id: 'tropical-house-radio',
    title: 'Tropical House Radio',
    subs: '+400k',
    featured: '10M monthly views',
  },
  {
    id: 'eric-clapman',
    title: 'Eric Clapman',
    subs: '+750k',
    featured: '+500M total views',
  },
  {
    id: 'deep-legacy',
    title: 'Deep Legacy',
    subs: '+350k',
    featured: '+77M watch hours',
  },
  {
    id: '4pm',
    title: '4pm',
    subs: '+100k',
    featured: '+50M views last year',
  },
  {
    id: 'shine-music',
    title: 'Shine Music',
    subs: '+800k',
    featured: '4k new subs/m',
  },
];

const Section = styled.section`
  position: relative;
  margin-top: 5rem;
  width: 70vw;
  margin: auto;

  ${breakpoints.phoneOnly} {
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: var(--size-xxxl);
  text-align: center;
  margin-bottom: 4rem;

  ${breakpoints.phoneOnly} {
    text-align: left;
    padding-left: 10vw;
    margin-bottom: 2rem;
  }
`;

const PartnerList = styled.ul`
  display: flex;
  justify-content: space-around;
`;

const PartnerItem = styled.li`
  margin: 0 1rem;
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: calc(5rem / 2);
  left: 50%;
  transform: translate(-50%, 100%);
`;

const StyledDot = styled.button`
  background: var(--violet);
  border-radius: 50%;
  padding: 3px;
  margin: 0 6px;
  cursor: pointer;
  transition: transform 350ms;
  transform: scale(0.5);

  ${({ selected }) => selected && `
    transform: scale(1);
  `}
`;

const SliderSpacer = styled.div`
  padding: 0 calc(10vw - 1rem);
`;

const SliderWrapper = styled.div`
  overflow: visible;
`;

const Slider = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider({
    slidesPerView: 2.25,
    initial: 0,
    duration: 1250,
    loop: false,
    slideChanged(slide) {
      setCurrentSlide(slide.details().relativeSlide);
    },
  });

  return (
    <>
      <SliderSpacer>
        <SliderWrapper className="keen-slider" ref={sliderRef}>
          {children.map((slide, idx) => <div key={`slide-${idx}`} className="keen-slider__slide">{slide}</div>)}
        </SliderWrapper>
      </SliderSpacer>
      {slider && (
        <Dots className="dots">
          {[...Array(slider.details().size).keys()].map((idx) => {
            return (
              <StyledDot
                key={idx}
                onClick={() => {
                  slider.moveToSlideRelative(idx);
                }}
                selected={idx >= currentSlide && idx < Math.floor(currentSlide + 2.5)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            );
          })}
        </Dots>
      )}
    </>
  );
};

const Partners = () => {
  const device = useContext(DeviceContext);
  const titleRef = useRef();
  const partnersRef = useRef();

  useAnimateIn(titleRef);
  useAnimateIn(partnersRef);

  return (
    <Section>
      <Title ref={titleRef}>Our partners</Title>
      <div ref={partnersRef}>
        {device !== 'phone' && (
          <PartnerList>
            {partners.map((partner) => (
              <PartnerItem key={partner.id}>
                <Partner {...partner} />
              </PartnerItem>
            ))}
          </PartnerList>
        )}
        {device === 'phone' && (
          <Slider>
            {partners.map((partner) => (
              <PartnerItem as="div" key={partner.id}>
                <Partner {...partner} />
              </PartnerItem>
            ))}
          </Slider>
        )}
      </div>
    </Section>
  );
};

export default Partners;
