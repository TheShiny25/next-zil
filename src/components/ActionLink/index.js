import styled from 'styled-components';
import CapsText from '@components/CapsText';
import ArrowRight from '@svg/icons/arrow--right.svg';

const StyledArrow = styled(ArrowRight)`
  width: 0.89rem;
  height: 1em;
  display: inline-block;
  margin-left: 0.3rem;
  transform: translateX(0);
  transition: transform 500ms;
`;

const ActionLink = styled(CapsText).attrs(({ children, ...rest }) => ({
  children: (
    <>
      {children}
      <StyledArrow className="action-link__arrow" />
    </>
  ),
  ...rest,
}))`
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    .action-link__arrow {
      transform: translateX(100%);
      transition: transform 500ms;
    }
  }
`;

export default ActionLink;
