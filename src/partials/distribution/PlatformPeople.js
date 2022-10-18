import { forwardRef } from 'react';
import styled from 'styled-components';
import breakpoints from '@css/breakpoints';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5rem 0;

  ${breakpoints.phoneOnly} {
    display: inline-flex;

    & + div {
      margin: 0;
    }
  }
`;

const PlatformName = styled.dt`
  font-size: 1.94rem;
  margin-left: 4rem;
  order: 1;
`;

const Value = styled.dd`
  font-size: 6.75rem;
  font-weight: bold;
  line-height: 1em;
  margin: 0;
  white-space: nowrap;
`;

const Unit = styled.abbr`
  display: inline-block;
  position: relative;
  font-size: 5.55rem;
  font-weight: normal;
  text-decoration: none;
  margin-left: 0.65rem;
`;

const Icon = styled.span`
  position: absolute;
  left: 65%;
  bottom: 57%;
  width: 4.875rem;
  transform: translate(0%, 0);
  z-index: -1;

  ${breakpoints.phoneOnly} {
    left: 45%;
    bottom: 47%;
  }
`;

const PlatformPeople = forwardRef(({ platform, millions, icon }, ref) => (
  <Wrapper ref={ref}>
    <PlatformName>{platform}</PlatformName>
    <Value>
      +{millions}
      <Unit title={`million${millions > 1 ? 's' : ''}`}>
        M
        <Icon as={icon} />
      </Unit>
    </Value>
  </Wrapper>
));

export default PlatformPeople;
