import styled from 'styled-components';
import breakpoints from '@css/breakpoints';

const AsideBox = styled.aside`
  background: var(--ultra-light-gray);
  margin: 2.78rem;

  ${breakpoints.phoneOnly} {
    margin: 1rem;
  }
`;

export default AsideBox;
