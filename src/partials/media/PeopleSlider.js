import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import styled from 'styled-components';
import breakpoints, { rules as breakpointRules } from '@css/breakpoints';
import Person from './Person';

const PersonItem = styled.div``;

const SliderWrapper = styled.div`
  overflow: hidden;

  ${breakpoints.tabletUp} {
    padding-left: 2.8rem;
  }

  ${breakpoints.phoneOnly} {
    padding-left: 0.5rem;
  }
`;

const PeopleSlider = ({ people }) => {
  const [sliderRef] = useKeenSlider({
    slidesPerView: 4.15,
    mode: 'free',
    spacing: 25,
    initial: 0,
    loop: false,
    breakpoints: {
      '(max-width: 875px)': {
        slidesPerView: 1.15,
        spacing: 15,
      },
      '(min-width: 900px) and (max-width: 1099px)': {
        slidesPerView: 3.15,
        spacing: 15,
      },
      '(min-width: 1100px) and (max-width: 1416px)': {
        slidesPerView: 3.25,
      },
      '(min-width: 1417px) and (max-width: 1516px)': {
        slidesPerView: 4.15,
      },
      '(min-width: 1920px)': {
        slidesPerView: 5.15,
      },
    },
  });

  return (
    <SliderWrapper className="keen-slider" ref={sliderRef}>
      {people.map((partner, index) => (
        <PersonItem as="div" className="keen-slider__slide" key={partner.id}>
          <Person {...partner} nameStyleN={index % 4} sizes={`${breakpointRules.phoneOnly} 100vw, 400px`} />
        </PersonItem>
      ))}
    </SliderWrapper>
  );
};

export default PeopleSlider;
