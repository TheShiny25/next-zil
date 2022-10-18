import styled from 'styled-components';
import breakpoints from '@css/breakpoints';
import { forwardRef } from 'react';

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12.78rem;

  ${breakpoints.phoneOnly} {
    flex-direction: column;
    margin-bottom: 7rem;
  }
`;

const Info = styled.div`
  ${breakpoints.tabletUp} {
    width: 50%;
  }
`;

const Title = styled.h1`
  font-size: var(--size-xxxl);
  font-weight: 500;
  line-height: 1.15em;
  margin-top: 1.5rem;
  margin-bottom: 2rem;

  ${breakpoints.phoneOnly} {
    margin-bottom: 1rem;
    margin-top: 0;
  }
`;

const Description = styled.p`
  line-height: 1.5em;

  ${breakpoints.tabletUp} {
    padding-right: 2rem;
  }
`;

const GraphicWrapper = styled.div`
  ${breakpoints.tabletUp} {
    width: 35%;
  }

  ${breakpoints.phoneOnly} {
    order: -1;
  }
`;

const Reason = forwardRef(({ title, description, graphic, isSwapped }, ref) => {
  const content = [
    <Info key="info">
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Info>,
    <GraphicWrapper key="graphic">{graphic}</GraphicWrapper>,
  ];

  return <Section ref={ref}>{isSwapped ? content.reverse() : content}</Section>;
});

export default Reason;
