import styled from 'styled-components';
import breakpoints from '@css/breakpoints';
import Page from '@components/Page';
import JobListing from '@partials/jobs/JobListing';
import About from '@partials/jobs/About';
import BackGradient from '@svg/jobs/back-gradient.svg';
import CheckIcon from '@svg/icons/check--circle.svg';
import { useGet } from '@zil/util/request';

const StyledPage = styled(Page)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 6rem;
  position: relative;
  z-index: 1;
`;

const StyledBackGradient = styled(BackGradient)`
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;

  ${breakpoints.phoneOnly} {
    width: 180%;
    height: 20rem;
    left: 50%;
    transform: translate(-50%, 0);
  }
`;

const PageTitle = styled.h1`
  font-size: var(--size-xxl);
  font-weight: 500;
  text-align: center;
`;

const IntroText = styled.p`
  font-size: var(--size-lg);
  margin: 1.22rem 0 4rem;
  text-align: center;

  ${breakpoints.phoneOnly} {
    font-size: var(--size-md);
    max-width: 14rem;
  }
`;

const Wrapper = styled.section`
  width: 70vw;

  ${breakpoints.phoneOnly} {
    width: 90vw;
  }
`;

const SectionTitle = styled.h1`
  font-size: var(--size-lg);
  font-weight: 500;

  ${breakpoints.phoneOnly} {
    font-size: var(--size-md);
    padding-left: 5vw;
  }
`;

const BenefitList = styled.ul`
  margin: 2rem 0 3rem 0;
`;

const StyledCheckIcon = styled(CheckIcon)`
  width: 22px;
  height: 22px;
  margin-right: 0.65rem;
`;

const BenefitListItem = styled.li.attrs(({ children }) => ({
  children: (
    <>
      <StyledCheckIcon />
      {children}
    </>
  ),
}))`
  display: inline-flex;
  align-items: center;
  margin-right: 2.5rem;

  ${breakpoints.phoneOnly} {
    width: 100%;
    margin: 0.5em 0;
    padding-left: 5vw;
  }
`;

const BENEFITS = ['Fully Remote', 'Flexible working hours', 'Management by objectives'];

const Jobs = () => {
  const jobs = useGet('jobsOffers', (json) =>
    Object.entries(
      json.jobOffers.reduce((acc, job) => ({ ...acc, [job.category]: [...(acc[job.category] ?? []), job] }), {})
    )
  );

  return (
    <StyledPage theme="light" title="Zil - Jobs" description="Join the team that’s changing the music industry">
      <StyledBackGradient />
      <hgroup>
        <PageTitle>Jobs</PageTitle>
        <IntroText>Join the team that’s changing the music industry</IntroText>
      </hgroup>
      <Wrapper>
        <SectionTitle>Current Job Openings at Zil Holding</SectionTitle>
        <BenefitList>
          {BENEFITS.map((item) => (
            <BenefitListItem key={item}>{item}</BenefitListItem>
          ))}
        </BenefitList>
        {jobs && <JobListing results={jobs} />}
      </Wrapper>
      <About />
    </StyledPage>
  );
};

export default Jobs;
