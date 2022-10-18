import { useRef } from 'react';
import styled from 'styled-components';
import breakpoints from '@css/breakpoints';
import SpotifyTrackIcon from '@svg/distribution/spotify-track-icon.svg';
import RevenuesIcon from '@svg/distribution/revenues-icon.svg';
import DontMissIcon from '@svg/distribution/dont-miss-icon.svg';
import DistributionIcon from '@svg/distribution/distribution-icon.svg';
import TransparentIcon from '@svg/distribution/transparent-icon.svg';
import { useAnimateIn } from '@zil/util/animations';

const Section = styled.section`
  max-width: 80%;
  margin: 5.38rem auto;

  ${breakpoints.laptopUp} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 7.89rem 4.28rem;
    margin: 16rem auto 13rem auto;
  }
`;

const Title = styled.h1`
  font-size: var(--size-xxl);
  font-weight: 500;
  color: var(--red);
  line-height: 1.25em;
`;

const Icon = styled.span`
  display: block;
  width: 2.33rem;
  margin-right: 1.38rem;
`;

const SubSectionTitle = styled.h1`
  text-transform: uppercase;
  font-weight: 900;
  font-size: var(--size-md);
  line-height: 1.27em;
  margin-bottom: 0.83rem;
`;

const SubSectionContent = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  line-height: 1.44rem;
`;

const SubSection = styled.section.attrs(({ children, icon, title }) => ({
  title: null,
  children: (
    <>
      <Icon as={icon} />
      <SubSectionContent>
        <SubSectionTitle>
          {title}
        </SubSectionTitle>
        {children}
      </SubSectionContent>
    </>
  ),
}))`
  display: flex;
  padding-top: 1rem;

  ${breakpoints.tabletDown} {
    margin: 3rem 0 4rem;
  }
`;

const Developing = () => {
  const titleRef = useRef();
  const subsectionRefs = [useRef(), useRef(), useRef(), useRef(), useRef()];

  useAnimateIn(titleRef);
  useAnimateIn(subsectionRefs, { stagger: 0.15 });

  return (
    <Section>
      <Title ref={titleRef}>
        Developing based on your needs.
      </Title>
      <SubSection
        ref={subsectionRefs[0]}
        title="Track your Spotify playlist"
        icon={SpotifyTrackIcon}
      >
        <p>
          Optimize your advertising campaigns with our metrics.
          Discover how many people follow your playlist with our live stats but also how many un-follow it.
        </p>
      </SubSection>
      <SubSection
        ref={subsectionRefs[1]}
        title="Auto-split revenues"
        icon={RevenuesIcon}
      >
        <p>
          Paying revenues to thousands of artists sounds crazy, but it is pretty easy with our auto-split system.
          Are you making advanced payments? You can set up a limit before we start splitting revenues.
        </p>
      </SubSection>
      <SubSection
        ref={subsectionRefs[2]}
        title="You don’t miss anything"
        icon={DontMissIcon}
      >
        <p>We follow up your releases and let you know isntantly if something great is happening! Get a notification when you get editorial support or playlisted.</p>
      </SubSection>
      <SubSection
        ref={subsectionRefs[3]}
        title="Distribution APIs"
        icon={DistributionIcon}
      >
        <p>Use our rest API to deliver your content to all DSPs, offer distribution services to your rooster, you dont need to deal with DSPs!</p>
      </SubSection>
      <SubSection
        ref={subsectionRefs[4]}
        title="Transparent and clear"
        icon={TransparentIcon}
      >
        <p>No hidden fees, bank transfer costs or taxes that you didn't know about, our platform is easy to use, clear and fully transparent. </p>
      </SubSection>
    </Section>
  );
};

export default Developing;

