import Breakpoints from '@css/breakpoints';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { forwardRef, useContext, useEffect, useState } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import DeviceContext from '@contexts/Device';
import styled from 'styled-components';

const StyledCardsSlider = styled.div`
  overflow: visible;
`;

const SliderWrapper = styled.div`
  padding: 0 2.7rem 0 9rem;

  ${Breakpoints.tabletDown} {
    padding: 0 0 0 0.9rem;
  }
`;

const StyledDots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const StyledDot = styled.button`
  background: var(--white);
  border-radius: 50%;
  padding: 4px;
  margin: 0 6px;
  cursor: pointer;
  transform: scale(0.5);
  transition: transform 350ms;

  &.active {
    transform: scale(1);
  }
`;

const CardsSlider = forwardRef(({ cards, model: Model, autoplay }, ref) => {
  const device = useContext(DeviceContext);
  const slidesPerView = device === 'phone' || device === 'tablet' ? 1.12 : 3.65;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider({
    slidesPerView,
    spacing: 25,
    mode: 'free',
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });

  useEffect(() => {
    if (slider && device !== 'phone' && device !== 'tablet' && autoplay) {
      const trigger = ScrollTrigger.create({
        trigger: ref.current,
        once: true,
        onEnter: () => slider.moveToSlide(cards.length - 1, 120000),
      });

      return () => trigger.kill();
    }
  }, [slider, autoplay, cards.length, device, ref]);

  return (
    <>
      <SliderWrapper className="navigation-wrapper" ref={ref}>
        <StyledCardsSlider ref={sliderRef} className="keen-slider">
          {cards.map((card, index) => (
            <Model className="keen-slider__slide" key={`card-slider-${index}`} item={card} />
          ))}
        </StyledCardsSlider>
      </SliderWrapper>
      {slider && (
        <StyledDots className="dots">
          {[...Array(slider.details().size).keys()].map((idx) => {
            return (
              <StyledDot
                key={idx}
                onClick={() => {
                  slider.moveToSlideRelative(idx);
                }}
                className={`dot${
                  idx >= currentSlide && idx < Math.floor(currentSlide + slidesPerView) ? ' active' : ''
                }`}
              />
            );
          })}
        </StyledDots>
      )}
    </>
  );
});

export default CardsSlider;
