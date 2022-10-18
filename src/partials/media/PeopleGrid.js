import styled from 'styled-components';
import breakpoints, { rules as breakpointRules } from '@css/breakpoints';
import Person from './Person';

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.38rem;
  padding: 0 2.8rem;

  ${breakpoints.tabletDown} {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
    padding: 0 0.5rem;
  }
`;

const PersonCell = styled(Person)`
  width: 100%;
  height: 100%;

  &::before {
    padding-top: 126.9%;
  }

  .person__photo {
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
  }
`;

const PeopleGrid = ({ people }) => {
  return (
    <Grid>
      {people
        .sort((a, b) => {
          return b.name.substring(0, 1) < a.name.substring(0, 1) ? 1 : -1;
        })
        .map((person, index) => (
          <PersonCell
            {...person}
            nameStyleN={index % 4}
            key={person.id}
            sizes={`${breakpointRules.tabletDown} 50vw, 25vw`}
          />
        ))}
    </Grid>
  );
};

export default PeopleGrid;
