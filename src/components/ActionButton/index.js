import styled from 'styled-components';
import ActionLink from '@components/ActionLink';

const ActionButton = styled(ActionLink)`
  background: var(--white);
  color: var(--black);
  padding: 1.22rem 3.16rem;
  transition: background-color 250ms, color 250ms;

  &:hover {
    background-color: var(--black);
    color: var(--white);
    transition: background-color 250ms, color 250ms;
  }
`;

export default ActionButton;
