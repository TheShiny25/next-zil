import styled from 'styled-components';
import Breakpoints from '@css/breakpoints';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useContext, useState, useRef } from 'react';
import DeviceContext from '@contexts/Device';
import ActionButton from '@components/ActionButton';
import Diagram from '@partials/holding/ProgramDiagram';
import { useAnimateIn } from '@zil/util/animations';

const StyledJoinTheProgram = styled.section`
  background-color: var(--white);
  color: var(--black);
  padding: 7.55rem 6.55rem 10.4rem 6.55rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${Breakpoints.tabletDown} {
    padding: 3.88rem 0 3.22rem 1rem;
  }
`;

const Title = styled.h1`
  width: 100%;
  font-size: var(--size-xxxl);
  line-height: 1.25em;
  text-align: center;
  padding: 0 5.88rem;
  margin-bottom: 6rem;

  ${Breakpoints.tabletDown} {
    padding: 0 2.33rem 0 1.33rem;
    margin-bottom: 3.88rem;
  }
`;

const DiagramWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 6rem 0 4.28rem;
  margin-bottom: 2.77rem;

  ${Breakpoints.tabletDown} {
    padding: 0;
  }
`;

const DiagramTitle = styled.h2`
  width: 5.55rem;
  font-size: 1.33rem;
  font-weight: 900;
  color: var(--red);
  line-height: 1.25em;
  flex-shrink: 0;

  ${Breakpoints.tabletDown} {
    width: 2rem;
    font-size: 0.77rem;
    word-break: break-word;
    overflow-wrap: break-word;
    -webkit-hyphens: auto;
    -moz-hyphens: auto;
    -ms-hyphens: auto;
    hyphens: auto;
  }
`;

const DiagramViewport = styled.div`
  width: 250vw;

  ${Breakpoints.tabletDown} {
    width: 250vw;
    flex-shrink: 0;
    position: relative;
    overflow: hidden;

    &:before {
      content: '';
      background: linear-gradient(to left, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
      height: 182px;
      width: 75px;
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 100;
    }
  }
`;

const StepsWrapper = styled.div`
  width: 100%;
`;

const Steps = styled.div`
  width: 100%;

  ${Breakpoints.laptopUp} {
    display: grid;
    grid-template-columns: calc(18% - 5.55rem + 7.5%) 18% 17% auto;
    column-gap: 8%;
    padding-left: 4.28rem;
  }

  ${Breakpoints.tabletDown} {
    padding: 0;
    padding-top: 15rem;
    margin-top: -15rem;
    position: relative;
    z-index: 100;
  }
`;

const Step = styled.div`
  ${Breakpoints.tabletDown} {
    text-align: center;
    padding: 0 4.22rem 0 3.22rem;
  }
`;

const StepsTitle = styled.h2`
  width: 5.55rem;
  font-size: 1.28rem;
  line-height: 1.087em;
`;

const Name = styled.h2`
  font-size: 1.44rem;
  line-height: 1.27em;
  margin-bottom: 0.83rem;
  white-space: nowrap;
`;

const Description = styled.p`
  font-size: var(--size-sm);
`;

const StyledActionButton = styled(ActionButton)`
  background: var(--radial-red-gradient);
  color: var(--white);
  margin-top: 5.55rem;
  position: relative;
  z-index: 2;
  --arrow-color: var(--white);

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0;
    transition: opacity 500ms;
    z-index: -1;
  }

  &:hover {
    &:before {
      opacity: 1;
    }
  }

  ${Breakpoints.phoneOnly} {
    margin-right: 1rem;
  }
`;

const StyledDots = styled.div`
  display: flex;
  justify-content: center;
  padding-right: 1rem;
  margin-top: 2rem;
`;

const StyledDot = styled.button`
  background: var(--black);
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

const StepsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider({
    slidesPerView: 1,
    initial: 0,
    move(s) {
      const progress = s.details().progressTrack;
      moveDiagram(s.details().relativeSlide === 0 && progress > 0.8 ? 0 : progress);
    },
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });
  const diagramRef = useRef(null);

  const moveDiagram = (progress) => {
    diagramRef.current.style.transform = `translateX(${-progress * 100 - 10}%)`;
  };

  return (
    <>
      <DiagramWrapper>
        <DiagramTitle>Your proj&shy;ect</DiagramTitle>
        <DiagramViewport>
          <Diagram ref={diagramRef} focused={currentSlide} />
        </DiagramViewport>
      </DiagramWrapper>
      <StepsWrapper className="navigation-wrapper">
        <Steps ref={sliderRef} className="keen-slider">
          <Step className="keen-slider__slide">
            <Name>Advisory</Name>
            <Description>
              Feel like at home, reach each sector at Zil whenever you need. Our team is ready to help!
            </Description>
          </Step>
          <Step className="keen-slider__slide">
            <Name>Funding</Name>
            <Description>
              You focus on developing your project; we do the seed investment to make it possible.
            </Description>
          </Step>
          <Step className="keen-slider__slide">
            <Name>Business Ecosystem</Name>
            <Description>
              Join our business ecosystem, get any of our solutions and collaborate with our brand's teams.
            </Description>
          </Step>
        </Steps>
      </StepsWrapper>
      {slider && (
        <StyledDots className="dots">
          {[...Array(slider.details().size).keys()].map((idx) => {
            return (
              <StyledDot
                key={idx}
                onClick={() => {
                  slider.moveToSlideRelative(idx);
                }}
                className={`dot${currentSlide === idx ? ' active' : ''}`}
              />
            );
          })}
        </StyledDots>
      )}
    </>
  );
};

const StepsGrid = () => {
  const diagramRef = useRef();
  const stepsRef = useRef();

  useAnimateIn(diagramRef);
  useAnimateIn(stepsRef);

  return (
    <>
      <DiagramWrapper ref={diagramRef}>
        <DiagramTitle>Your proj&shy;ect</DiagramTitle>
        <Diagram />
      </DiagramWrapper>
      <Steps ref={stepsRef}>
        <StepsTitle>We know the way</StepsTitle>
        <Step>
          <Name>Advisory</Name>
          <Description>
            Feel like at home, reach each sector at Zil whenever you need. Our team is ready to help!
          </Description>
        </Step>
        <Step>
          <Name>Funding</Name>
          <Description>You focus on developing your project; we do the seed investment to make it possible.</Description>
        </Step>
        <Step>
          <Name>Business Ecosystem</Name>
          <Description>
            Join our business ecosystem, get any of our solutions and collaborate with our brand's teams.
          </Description>
        </Step>
      </Steps>
    </>
  );
};

const JoinTheProgram = () => {
  const device = useContext(DeviceContext);
  const titleRef = useRef();
  const buttonRef = useRef();

  useAnimateIn(titleRef, { delay: 0.5 });
  useAnimateIn(buttonRef, { triggerStart: 'top 75%' });

  return (
    <StyledJoinTheProgram>
      <Title ref={titleRef}>Join the business acceleration program and scale worldwide.</Title>
      {device === 'phone' || device === 'tablet' ? <StepsSlider /> : <StepsGrid />}
      <StyledActionButton ref={buttonRef}>Lets talk</StyledActionButton>
    </StyledJoinTheProgram>
  );
};

export default JoinTheProgram;
