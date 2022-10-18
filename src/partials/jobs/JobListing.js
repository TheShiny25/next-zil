import styled from 'styled-components';
import CapsText from '@components/CapsText';
import JobEntry from './JobEntry';

const CategoryTitle = styled(CapsText).attrs({ as: 'h2' })`
  font-weight: normal;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  padding: 1rem 0;
  margin-bottom: 1rem;
`;

const StyledSection = styled.section`
  margin-bottom: 3rem;
`;

const JobCategory = ({ title, jobs }) => (
  <StyledSection>
    <CategoryTitle>{title}</CategoryTitle>
    <ul>
      {jobs.map((job) => (
        <li key={job.id}>
          <JobEntry {...job} />
        </li>
      ))}
    </ul>
  </StyledSection>
);

const JobListing = ({ results }) => (
  <>
    {results.map(([category, jobs]) => (
      <JobCategory key={category} title={category} jobs={jobs} />
    ))}
  </>
);

export default JobListing;
