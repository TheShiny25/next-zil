import styled from 'styled-components';
import breakpoints from '@css/breakpoints';
import AsideBox from '@components/AsideBox';
import CheckIcon from '@svg/icons/check--circle.svg';

const StyledAsideBox = styled(AsideBox)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6.83rem;
  align-self: stretch;
`;

const Wrapper = styled.div`
  padding: 3.78rem 0 2.22rem;
  width: 70vw;

  ${breakpoints.phoneOnly} {
    width: 100%;
    padding: 2.83rem 6vw 2rem;
  }
`;

const Title = styled.h1`
  font-size: var(--size-xxl);
`;

const Text = styled.p`
  margin: 1em 0 2em;
  line-height: 1.5em;
`;

const StyledCheckIcon = styled(CheckIcon)`
  color: var(--violet);
  display: inline-block;
  position: absolute;
  left: 0;
  top: 0.65em;
  width: 22px;
  height: 22px;
  transform: translateY(-50%);
`;

const PerkItem = styled.li.attrs(({ children }) => ({
  children: (
    <>
      <StyledCheckIcon />
      {children}
    </>
  ),
}))`
  position: relative;
  padding-left: 2rem;
  line-height: 1.5em;
  margin: 2em 0;
`;

const About = () => (
  <StyledAsideBox>
    <Wrapper>
      <Title>About ZIL</Title>
      <Text>
        Founded in 2014, Zil Holding is the key partner for every emerging media company and a fantastic place to work.
        We are music lovers that found a way to make this industry better, would you help us?
      </Text>
      <ul>
        <PerkItem>Hiring globally.</PerkItem>
        <PerkItem>
          Our team members can manage their working hours at home; stop waking up at 7 am if that&apos;s not efficient for you.
        </PerkItem>
        <PerkItem>Only participation in calls and presentations are required.</PerkItem>
        <PerkItem>Friendly Paid Time Off (PTO) Policy</PerkItem>
        <PerkItem>Management by objectives</PerkItem>
      </ul>
    </Wrapper>
  </StyledAsideBox>
);

export default About;
