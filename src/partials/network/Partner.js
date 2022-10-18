import styled from 'styled-components';
import breakpoints from '@css/breakpoints';
import PartnerIcon from '@svg/network/partner.svg';

const Wrapper = styled.a`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
  line-height: 1.35em;
  font-size: var(--size-sm);

  ${breakpoints.laptopUp} {
    &:hover {
      svg {
        transform: scale(1.2);
      }
    }
  }
`;

const Title = styled.span`
  display: block;
  margin-top: 2rem;
`;

const Subs = styled.span`
  display: block;
  color: var(--red);
  line-height: 1.75em;
`;

const Featured = styled.span`
  display: block;
  color: var(--gray);
  font-size: var(--size-xs);
`;

const StyledPartnerIcon = styled(PartnerIcon)`
  transition: transform 250ms;
`;

const Partner = ({ title, subs, featured }) => (
  <Wrapper>
    <StyledPartnerIcon />
    <Title>{title}</Title>
    <Subs>{subs} Subs</Subs>
    <Featured>{featured}</Featured>
  </Wrapper>
);

export default Partner;
