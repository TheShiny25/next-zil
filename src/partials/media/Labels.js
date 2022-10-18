import styled from 'styled-components';
import Link from 'next/link';
import Breakpoints from '@css/breakpoints';
import { useAnimateIn } from '@zil/util/animations';
import { useRef } from 'react';
import UniversalLogo from '@svg/media/label-universal.svg';
import NcsLogo from '@svg/media/label-ncs.svg';
import AtlanticLogo from '@svg/media/label-atlantic.svg';
import SelectedLogo from '@svg/media/label-selected.svg';
import CatLogo from '@svg/media/label-cat.svg';
import NitronLogo from '@svg/media/label-nitron.svg';
import UltraLogo from '@svg/media/ultra-logo.svg';
import StmpdLogo from '@svg/media/stmpd-logo.svg';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  color: var(--black);
  padding: 7.5rem 5.11rem 35vh 5.11rem;
  position: relative;
  z-index: 1;

  ${Breakpoints.tabletDown} {
    padding: 4.44rem 1.88rem 2.22rem 1.88rem;
  }
`;

const Text = styled.span`
  width: 100%;
  font-size: var(--size-xxl);
  line-height: 1.25em;
  text-align: center;
  padding: 0 5.88rem;
  margin-top: 1rem;

  ${Breakpoints.tabletDown} {
    padding: 0 0.5rem;
    margin-bottom: 3.9rem;
  }
`;

const TextLink = styled.a`
  text-decoration: underline;
`;

const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  margin-top: 5.625rem;
  margin-bottom: 5rem;

  ${Breakpoints.tabletDown} {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 1.5rem;
    margin-top: -2rem;
    margin-bottom: 2rem;
  }
`;

const LabelLogo = styled.svg`
  border-radius: 100%;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.25);
  width: 10.4vw;
  height: 10.4vw;

  ${Breakpoints.tabletDown} {
    width: 27.5vw;
    height: 27.5vw;
  }
`;

const LogoAnchor = styled.a`
  display: inline-block;
  justify-self: center;
`;

const LinkedLogo = ({ logo: Logo, href }) => (
  <a href={href} target="_blank" rel="noreferrer">
    <LogoAnchor>
      <LabelLogo as={Logo} />
    </LogoAnchor>
  </a>
);

const logos = [
  {
    id: 1,
    logo: UltraLogo,
    href: "https://www.youtube.com/c/Ultramusic"
  },
  {
    id: 2,
    logo: NcsLogo,
    href: 'https://www.youtube.com/c/NoCopyrightSounds',
  },
  {
    id: 3,
    logo: StmpdLogo,
    href: 'https://www.youtube.com/c/stmpdrcrds',
  },
  {
    id: 4,
    logo: SelectedLogo,
    href: 'https://www.youtube.com/c/SelectedBase',
  },
  {
    id: 5,
    logo: CatLogo,
    href: 'https://www.youtube.com/c/Monstercat',
  },
  {
    id: 6,
    logo: NitronLogo,
    href: 'https://www.nitronmusic.com',
  },
  
];

const YourTurnText = styled(Text)`
  ${Breakpoints.laptopUp} {
    margin-top: 15vh;
  }

  ${Breakpoints.tabletDown} {
    margin-top: 2.22rem;
  }
`;

const Labels = () => {
  const titleRef = useRef();
  const textRef = useRef();

  useAnimateIn(titleRef);
  useAnimateIn(textRef);

  return (
    <Wrapper>
      <Text as="h2" ref={titleRef}>
        Labels that enjoy your demos
      </Text>
      <LogoGrid>
        {logos.map(({ id, logo, href }) => (
          <LinkedLogo href={href} logo={logo} key={id} />
        ))}
      </LogoGrid>
      <YourTurnText ref={textRef}>
        Now, it’s{' '}
        <Link href="/contact" prefetch={false} passHref>
          <TextLink>your turn</TextLink>
        </Link>
        .
      </YourTurnText>
    </Wrapper>
  );
};

export default Labels;
