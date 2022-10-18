import styled from 'styled-components';
import Breakpoints from '@css/breakpoints';

const StyledHero = styled.section`
  height: 100vh;
  color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  ${Breakpoints.laptopUp} {
    justify-content: center;
  }

  ${Breakpoints.tabletDown} {
    /*height: 60vh;*/
    height: 100vh;
    padding-top: 45vh;
  }

  ${Breakpoints.phoneOnly} {
    padding-top: 40vh;
  }
`;

const StyledBgWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  ${Breakpoints.laptopUp} {
    > svg {
      width: 100%;
      min-height: 100vh;
    }
  }
`;

const Hero = ({ children, background, className }) => {
  return (
    <StyledHero className={className}>
      <StyledBgWrapper>{background}</StyledBgWrapper>
      {children}
    </StyledHero>
  );
};

export default Hero;
