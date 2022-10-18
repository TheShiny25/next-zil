import styled from 'styled-components';
import ArrowRight from '@svg/icons/arrow--right-thin.svg';

const Cursor = styled.span.attrs({
  children: <ArrowRight />,
})`
  position: fixed;
  opacity: 0;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 92px;
  height: 92px;
  color: var(--red);
  background: rgba(30, 30, 30, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 50%;
  z-index: 2000;
  transition: transform 350ms ease;
  transform: translate(-40%, -40%);

  svg {
    width: 50%;
  }
`;

export default Cursor;
