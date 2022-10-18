import styled from 'styled-components';
import breakpoints from '@css/breakpoints';
import AsideBox from '@components/AsideBox';
import ActionLink from '@components/ActionLink';
import Link from 'next/link';

const StyledAsideBox = styled(AsideBox)`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  padding: 3.78rem 0 3.22rem;
  margin-top: 6.83rem;
  text-align: center;

  ${breakpoints.phoneOnly} {
    margin-top: 5rem;
  }
`;

const Title = styled.h1`
  font-size: var(--size-xxl);
  font-weight: 500;
`;

const Text = styled.p`
  font-size: var(--size-lg);
  font-weight: 500;
  margin: 1.22rem 0 1.89rem;

  ${breakpoints.phoneOnly} {
    font-size: var(--size-md);
    margin: 1rem 2rem 2.89rem;
  }
`;

const Jobs = () => (
  <StyledAsideBox>
    <Title>Jobs</Title>
    <Text>Join the team that’s changing the music industry</Text>
    <Link href="/jobs" prefetch={false} passHref>
      <ActionLink>Apply</ActionLink>
    </Link>
  </StyledAsideBox>
);

export default Jobs;
