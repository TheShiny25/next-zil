import Link from 'next/link';
import styled from 'styled-components';
import ActionLink from '@components/ActionLink';
import Check from '@svg/contact/check.svg';

const Wrapper = styled.div`
  text-align: center;
  min-height: 100vh;
`;

const StyledCheck = styled(Check)`
  width: 15.39rem;
  margin: 0 auto;
  transform: translateX(10%);
`;

const MainPhrase = styled.p`
  font-size: var(--size-xxxl);
  font-weight: 500;
  margin: 1rem 0 0.75rem;
`;

const StyledActionLink = styled(ActionLink)`
  margin-top: 3.5rem;
`;

const MessageSentScreen = () => (
  <Wrapper>
    <StyledCheck />
    <MainPhrase>Roger, over and out!</MainPhrase>
    <p>We will get back to you shortly.</p>
    <Link href="/" prefetch={false} passHref>
      <StyledActionLink>Back</StyledActionLink>
    </Link>
  </Wrapper>
);

export default MessageSentScreen;
