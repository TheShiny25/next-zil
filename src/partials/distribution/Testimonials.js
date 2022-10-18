import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import breakpoints from '@css/breakpoints';
import BackGradient from '@svg/distribution/testimonials-back-gradient.svg';
import Light from '@svg/distribution/testimonials-light.svg';

const Section = styled.section`
  position: relative;
  padding: 2.83rem;
  margin: 12.45rem 0;

  ${breakpoints.tabletDown} {
    padding: 0.89rem;
    margin: 6rem 0;
  }
`;
const Quote = styled.blockquote`
  font-size: var(--size-xxl);
  width: 73.38%;
  margin: 0 auto 1.17rem;

  &:before, &:after {
    content: '"';
  }

  ${breakpoints.tabletDown} {
    font-size: 1.39rem;
  }
`;

const Author = styled.figcaption.attrs(({ children }) => ({
  children: <cite>{children}</cite>,
}))`
  color: var(--light-gray);
  font-size: 1.33rem;

  ${breakpoints.tabletDown} {
    font-size: var(--size-md);
  }
`;

const Testimonial = styled.figure.attrs(({ children, quote, author }) => ({
  children: (
    <>
      <Quote>{quote}</Quote>
      <Author>{author}</Author>
    </>
  ),
}))`
  text-align: center;
  padding: 4.78rem 0 5.78rem 0;

  ${breakpoints.tabletDown} {
    padding-top: 3.25rem;
    padding-bottom: 4.5rem;
  }
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: calc(5.78rem / 2);
  left: 50%;
  transform: translate(-50%, 100%);

  ${breakpoints.tabletDown} {
    bottom: calc(5rem / 2);
  }
`;

const StyledDot = styled.button`
  background: var(--violet);
  border-radius: 50%;
  padding: 4px;
  margin: 0 6px;
  cursor: pointer;
  transition: transform 350ms;
  transform: scale(0.5);

  ${({ selected }) => selected && `
    transform: scale(1);
  `}
`;

const SliderWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

const Slider = ({ children }) => {
  const timer = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider({
    slidesPerView: 1,
    initial: 0,
    duration: 3250,
    loop: true,
    slideChanged(slide) {
      setCurrentSlide(slide.details().relativeSlide);
    },
  });

  useEffect(() => {
    timer.current = setInterval(() => {
      if (slider) slider.next();
    }, 5000);

    return () => {
      clearInterval(timer.current);
    };
  }, [slider]);

  return (
    <SliderWrapper>
      <StyledBackGradient />
      <div className="keen-slider" ref={sliderRef}>
        {children.map((slide, idx) => <div key={`slide-${idx}`} className="keen-slider__slide">{slide}</div>)}
      </div>
      {slider && (
        <Dots className="dots">
          {[...Array(slider.details().size).keys()].map((idx) => {
            return (
              <StyledDot
                key={idx}
                onClick={() => {
                  slider.moveToSlideRelative(idx);
                }}
                selected={idx === currentSlide}
                aria-label={`Go to slide ${idx + 1}`}
              />
            );
          })}
        </Dots>
      )}
    </SliderWrapper>
  );
};

const StyledBackGradient = styled(BackGradient)`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: -1;

  ${breakpoints.tabletDown} {
    path:last-of-type {
      transform: translateX(-6px);
    }
  }
`;

const BlurredLight = styled(Light)`
  position: absolute;
  left: 50%;
  width: 95.62%;

  ${breakpoints.tabletDown} {
    width: 100%;
    filter: blur(30px);
  }
`;

const TopLight = styled(BlurredLight)`
  top: 0;
  transform: translate(-50%, -35%);
`;

const BottomLight = styled(BlurredLight)`
  bottom: 0;
  transform: translate(-50%, 25%);
`;

const Testimonials = () => (
  <Section>
    <h1 hidden>Testimonials</h1>
    <TopLight as={Light} />
    <Slider>
      <Testimonial
        quote="No Great Marketing Decisions Have Ever Been Made On Qualitative Data."
        author="John Sculley, Ex-CEO of Apple Inc"
      />
      <Testimonial
        quote="No Great Marketing Decisions Have Ever Been Made On Qualitative Data."
        author="John Sculley, Ex-CEO of Apple Inc"
      />
      <Testimonial
        quote="No Great Marketing Decisions Have Ever Been Made On Qualitative Data."
        author="John Sculley, Ex-CEO of Apple Inc"
      />
    </Slider>
    <BottomLight as={Light} />
  </Section>
);

export default Testimonials;

