import { gsap } from 'gsap';
import { useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import DeviceContext from '@contexts/Device';
import breakpoints from '@css/breakpoints';
import ConfusedEmoji from '@svg/distribution/emoji-confused.svg';
import KnockedOutEmoji from '@svg/distribution/emoji-knocked-out.svg';
import MonocleEmoji from '@svg/distribution/emoji-monocle.svg';
import { useAnimateIn } from '@zil/util/animations';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 80%;
  margin: auto;
  margin-top: 15rem;

  ${breakpoints.tabletDown} {
    margin-top: 0;
  }
`;

const Title = styled.h1`
  font-size: var(--size-xxxl);
  font-weight: 500;
  margin-bottom: 8rem;
`;

const LetsChangeList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  ${breakpoints.tabletDown} {
    flex-direction: column;
  }
`;

const Card = styled.li`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 0 3.25rem;
  font-weight: 500;
  line-height: 1.44em;
`;

const Strikethrough = styled.svg.attrs(({ pathRef }) => ({
  viewBox: '0 0 223 352',
  children: <path ref={pathRef} opacity="0.3" d="M218.457 2.99927L4.45677 348.999" stroke="#FF7C7E" strokeWidth="10" />,
}))`
  position: absolute;
  top: 1.5rem;
  right: 0.83rem;
  width: calc(100% - 0.83rem);
  height: calc(100% - 1.5rem);

  path {
    stroke-dasharray: 550;
    stroke-dashoffset: 550;
  }
`;

const DontCard = styled(Card).attrs(({ children, strikethroughRef }) => ({
  children: <>
    {children}
    <Strikethrough pathRef={strikethroughRef} />
  </>
}))`
  width: 23.681vw;
  height: 27.778vw;
  background: linear-gradient(204.65deg, rgba(126, 127, 158, 0.2) 4.23%, rgba(0, 0, 0, 0) 68.14%);

  ${breakpoints.tabletDown} {
    width: 91.5vw;
    height: 106.66vw;
    margin: 2.125vw 0;
  }
`;

const DoCard = styled(Card)`
  width: 27.917vw;
  height: 32.847vw;
  background: var(--red);
  color: var(--black);
  margin: 0 2.778vw;
  z-index: 1;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.25);
    transition: opacity 1s;
  }

  ${breakpoints.tabletDown} {
    width: 91.47vw;
    height: 106.66vw;
    margin: 2.125vw 0;
    order: 2;
  }

  &.active {
    &:after {
      opacity: 0;
    }
  }
`;

const Emoji = styled.svg`
  margin-bottom: 3.11rem;
`;

const Industry = () => {
  const device = useContext(DeviceContext);
  const titleRef = useRef();
  const leftCardRef = useRef();
  const leftCardSttRef = useRef();
  const middleCardRef = useRef();
  const rightCardRef = useRef();
  const rightCardSttRef = useRef();
  const animationTimeline = useRef();

  useAnimateIn(titleRef);

  useEffect(() => {
    if (!device) return undefined;
    const isMobile = device === 'phone' || device === 'tablet';
    if (isMobile) {
      gsap.to(leftCardSttRef.current, {
        scrollTrigger: { trigger: leftCardSttRef.current, start: 'top center' },
        strokeDashoffset: 0,
      });
      gsap.to(rightCardSttRef.current, {
        scrollTrigger: { trigger: rightCardSttRef.current, start: 'top center' },
        strokeDashoffset: 0,
      });
      gsap.to(middleCardRef.current, {
        scrollTrigger: { trigger: middleCardRef.current, start: 'top 75%' },
        onComplete: () => middleCardRef.current.classList.add('active'),
      });
    } else {
      animationTimeline.current = gsap.timeline({
        scrollTrigger: {
          trigger: leftCardRef.current,
          start: 'top center',
        },
        onComplete: () => middleCardRef.current.classList.add('active'),
      });
      animationTimeline.current
        .from(leftCardRef.current, { x: '4vw' }, 0).from(rightCardRef.current, { x: '-4vw' }, 0)
        .to([leftCardSttRef.current, rightCardSttRef.current], { strokeDashoffset: 0 }, 0.15)
        .pause();
    }

    return () => {
      if (animationTimeline.current) animationTimeline.current.kill();
    };
  }, [device, leftCardRef, middleCardRef, rightCardRef]);

  return (
    <Wrapper>
      <Title ref={titleRef}>
        Let’s change the
        <br />
        industry together
      </Title>
      <LetsChangeList>
        <DontCard ref={leftCardRef} strikethroughRef={leftCardSttRef}>
          <Emoji as={ConfusedEmoji} />
          Low cost / free distribution sounds great but, do you know what you're missing or giving in exchange?
        </DontCard>
        <DoCard ref={middleCardRef}>
          <Emoji as={MonocleEmoji} />
          Zil offers a mid-point service to benefit independent record labels and artists; all best from high tier
          distributors with flexible and fair terms.
        </DoCard>
        <DontCard ref={rightCardRef} strikethroughRef={rightCardSttRef}>
          <Emoji as={KnockedOutEmoji} />
          Majors distribution services offer an exceptional service but, are you partnering or selling your company?
        </DontCard>
      </LetsChangeList>
    </Wrapper>
  );
};

export default Industry;
