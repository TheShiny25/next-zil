import { useRef } from 'react';
import styled from 'styled-components';
import Breakpoints from '@css/breakpoints';
import CapsText from '@components/CapsText';
import Card from '@components/Card';
import ActionLink from '@components/ActionLink';
import { useAnimateIn } from '@zil/util/animations';

const StyledOurDivisions = styled.section`
  display: flex;
  padding: 5.44rem 5.83rem 9.11rem 9.11rem;

  ${Breakpoints.tabletDown} {
    padding: 3.9rem 2rem 8rem 2rem;
    flex-direction: column;
  }
`;

const Title = styled.h1`
  color: var(--white);
  font-size: var(--size-xxxl);

  ${Breakpoints.tabletDown} {
    width: 50%;
    margin-bottom: 3.4rem;
  }
`;

const DivisionList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 7.2vw;
  row-gap: 3rem;
  color: var(--white);
  margin-left: 5.33rem;

  @media (max-width: 1366px) {
    column-gap: 3vw;
  }

  @media (max-width: 1280px) {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 5.77rem;
  }

  ${Breakpoints.tabletDown} {
    margin: 0;
  }
`;

const DivisionListItem = styled(Card)`
  padding: 2.33rem 1.33rem 4.55rem 1.77rem;
  flex-basis: 0;

  &:hover {
    .division-link {
      opacity: 0.4;
      transition: opacity 250ms;
    }
  }

  ${Breakpoints.tabletDown} {
    padding: 0;
  }
`;

const ProjectName = styled(CapsText)`
  font-weight: normal !important;
`;

const Name = styled.h2`
  font-size: var(--size-xl);

  ${Breakpoints.tabletDown} {
    font-size: 2.89rem;
  }
`;

const FeaturedText = styled.p`
  color: var(--red);
  line-height: 1.44em;
  margin-top: 0.66rem;
`;

const Text = styled.p`
  line-height: 1.44em;
`;

const StyledActionLink = styled(ActionLink)`
  margin-top: 0.75rem;
  transition: opacity 250ms;
`;

const OurDivisions = () => {
  const titleRef = useRef();
  const items = [useRef(), useRef(), useRef(), useRef()];

  useAnimateIn(titleRef, { triggerStart: 'top 75%', yPercent: null, y: 50 });
  useAnimateIn(items, { triggerElement: titleRef, stagger: 0.15, yPercent: 10 });

  return (
    <StyledOurDivisions>
      <Title ref={titleRef}>Our Divisions</Title>
      <DivisionList>
        <DivisionListItem borderedOnHover href="/global" ref={items[0]}>
          <ProjectName>Zil</ProjectName>
          <Name>Global</Name>
          <FeaturedText>Business acceleration program.</FeaturedText>
          <Text>
            Networking is one of the most powerful ways to grow; that's why we are building a multi&#x2011;disciplinary
            business network to promotes new talents and grow horizontally.
          </Text>
          <StyledActionLink as="span" className="division-link">
            Go
          </StyledActionLink>
        </DivisionListItem>
        <DivisionListItem borderedOnHover href="/network" ref={items[1]}>
          <ProjectName>Zil</ProjectName>
          <Name>Network</Name>
          <FeaturedText>YouTube channels management (business-oriented).</FeaturedText>
          <Text>
            Make sure your channels will always monetize and get the best terms on top&#x2011;tier MCNs, plus the best
            tools and facilities to grow exponentially.
          </Text>
          <StyledActionLink as="span" className="division-link">
            Go
          </StyledActionLink>
        </DivisionListItem>
        <DivisionListItem borderedOnHover href="/distribution" ref={items[2]}>
          <ProjectName>Zil</ProjectName>
          <Name>Distribution</Name>
          <FeaturedText>Next level of music distribution.</FeaturedText>
          <Text>
            Our integral distribution service makes a huge difference for independent artists and record labels looking
            to scale. We offer a complete and personalized attention service for a fair share.
          </Text>
          <StyledActionLink as="span" className="division-link">
            Go
          </StyledActionLink>
        </DivisionListItem>
        <DivisionListItem borderedOnHover href="/media" ref={items[3]}>
          <ProjectName>Zil</ProjectName>
          <Name>Media</Name>
          <FeaturedText>Artists management and record label.</FeaturedText>
          <Text>
            Join the talent squad that's making millions of people move their bodies! Focus on music production while we
            manage collaborations, label relations, negotiations, and every boring thing.
          </Text>
          <StyledActionLink as="span" className="division-link">
            Go
          </StyledActionLink>
        </DivisionListItem>
      </DivisionList>
    </StyledOurDivisions>
  );
};

export default OurDivisions;
