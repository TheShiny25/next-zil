import { useRef } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Breakpoints from '@css/breakpoints';
import ActionButton from '@components/ActionButton';
import CapsText from '@components/CapsText';
import GradientAbove from '@svg/cta-gradient-above.svg';
import GradientBelow from '@svg/cta-gradient-below.svg';
import { useAnimateIn } from '@zil/util/animations';

const StyledCta = styled.section`
  height: 25rem;
  color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;

  ${Breakpoints.tabletDown} {
    height: 20rem;
  }
`;

const Text = styled.p`
  font-size: var(--size-xxxl);
  line-height: 1em;
  margin: 1rem 0 2rem 0;

  ${Breakpoints.tabletDown} {
    line-height: 1.23em;
    text-align: center;
    padding: 0 2rem;
  }
`;

const StyledGradientAbove = styled(GradientAbove)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const StyledGradientBelow = styled(GradientBelow)`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`;

const Background = styled.div.attrs({
  children: (
    <>
      <StyledGradientAbove />
      <StyledGradientBelow />
    </>
  ),
})`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const Cta = ({ title, text, link, className }) => {
  const titleRef = useRef();
  const textRef = useRef();
  const buttonRef = useRef();

  useAnimateIn([titleRef, textRef, buttonRef]);

  return (
    <StyledCta className={className}>
      <Background />
      <CapsText as="h1" ref={titleRef}>{title}</CapsText>
      <Text ref={textRef}>{text}</Text>
      <Link href={link.url} prefetch={false} passHref>
        <ActionButton ref={buttonRef}>{link.text}</ActionButton>
      </Link>
    </StyledCta>
  );
};

export default Cta;
