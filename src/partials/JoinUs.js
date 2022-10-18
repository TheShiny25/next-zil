import Link from 'next/link';
import styled from 'styled-components';
import Breakpoints from '@css/breakpoints';
import ActionLink from '@components/ActionLink';
import LabelBg from '@svg/label-bg.svg';

const Title = styled.span`
  text-transform: uppercase;
  display: flex;
  align-items: center;
`;

const StyledLabelBg = styled(LabelBg)`
  color: var(--join-us-label-color, var(--white));
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const TitleLabel = styled.span.attrs(({ children }) => ({
  children: (
    <>
      <StyledLabelBg />
      {children}
    </>
  ),
}))`
  width: 2.72rem;
  height: 0.83rem;
  color: var(--join-us-label-text-color, var(--black));
  font-size: 0.55rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.4rem;
  position: relative;
  z-index: 2;
`;

const Text = styled.p`
  line-height: 1.625em;
  margin-top: 0.22rem;
`;

const StyledActionLink = styled(ActionLink)`
  margin-top: 2.22rem;
  transition: color 350ms;

  ${Breakpoints.tabletDown} {
    margin-top: 1rem;
  }

  &:hover {
    color: var(--red);
    --arrow-color: var(--red);
    transition: color 350ms;
  }
`;

const JoinUs = () => (
  <>
    <Title>
      Join Us <TitleLabel>Hiring</TitleLabel>
    </Title>
    <Text>Join the team that’s changing the music industry</Text>
    <Link href="/jobs" prefetch={false} passHref>
      <StyledActionLink>Apply</StyledActionLink>
    </Link>
  </>
);

export default JoinUs;
