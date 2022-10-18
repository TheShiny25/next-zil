import styled, { css } from 'styled-components';
import { useCallback, useEffect, useRef, useState } from 'react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useAnimateIn } from '@zil/util/animations';
import Breakpoints from '@css/breakpoints';
import CrossIcon from '@svg/icons/cross.svg';
import HandsUpIcon from '@svg/media/hands-up.svg';
import ActionLink from '@components/ActionLink';
import PeopleSlider from './PeopleSlider';
import PeopleGrid from './PeopleGrid';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  color: var(--black);
  padding: 8rem 0 14.16rem 0;
  position: relative;
  z-index: 1;

  ${Breakpoints.tabletDown} {
    padding: 4.44rem 0 11.5rem 0;
  }
`;

const Title = styled.h1`
  width: 100%;
  font-size: var(--size-xxxl);
  line-height: 1.25em;
  text-align: center;
  padding: 0 5.88rem;
  margin-top: 1rem;
  margin-bottom: 10rem;

  ${Breakpoints.tabletDown} {
    padding: 0 0.5rem;
    margin-bottom: 3.9rem;
  }
`;

const HandsUpFigure = styled(HandsUpIcon)`
  width: 15rem;
  max-width: 90vw;
  margin: auto;

  ${Breakpoints.tabletDown} {
    width: 45vw;
  }
`;

const ActionBar = styled.div`
  margin-top: 2rem;
  padding: 0 2.8rem;
  text-align: center;

  ${({ isSticky }) =>
    isSticky &&
    css`
      position: sticky;
      bottom: 5vh;
      z-index: 100;
      display: flex;
      justify-content: flex-end;
    `}

  ${Breakpoints.tabletDown} {
    padding: 0 0.5rem;
  }
`;

const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 3.6rem;
  height: 3.6rem;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
  border-radius: 100%;
  background: white;

  > svg {
    width: 50%;
    height: 50%;
  }
`;

const Team = ({ people }) => {
  const [fullView, setFullView] = useState(false);
  const prevFullView = useRef(false);
  const titleRef = useRef();

  const toggleFullView = useCallback(() => setFullView(!fullView), [fullView]);

  useEffect(() => {
    if (prevFullView.current !== fullView) {
      window.scrollTo(0, titleRef.current.getBoundingClientRect().bottom + window.scrollY);
      prevFullView.current = fullView;
      ScrollTrigger.refresh(true);
    }
  }, [fullView]);

  useAnimateIn(titleRef);

  return (
    <Wrapper>
      <HandsUpFigure />
      <Title ref={titleRef}>Join the talent squad that’s making millions of people move their bodies!</Title>
      <div>
        {fullView ? <PeopleGrid people={people} /> : <PeopleSlider people={people.slice(0, 7)} />}
        <ActionBar isSticky={fullView}>
          {fullView ? (
            <CloseButton onClick={toggleFullView}>
              <CrossIcon width={undefined} height={undefined} viewBox="0 0 19 19" />
            </CloseButton>
          ) : (
            <ActionLink as="button" onClick={toggleFullView}>
              Check them all
            </ActionLink>
          )}
        </ActionBar>
      </div>
    </Wrapper>
  );
};

export default Team;
