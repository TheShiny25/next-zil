import styled from 'styled-components';
import breakpoints from '@css/breakpoints';
import ContactForm from '@components/forms/ContactForm';
import CapsText from '@components/CapsText';
import Jobs from '@partials/contact/Jobs';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 8.94rem;

  ${breakpoints.phoneOnly} {
    padding: 0 10vw;
  }
`;

const Intro = styled.div`
  width: 23rem;
`;

const MainPhrase = styled.p`
  font-size: var(--size-xxxl);
  font-weight: 500;
  line-height: 1em;
  margin-left: -0.2rem;
  margin-top: 1.5rem;
  margin-bottom: 2rem;

  ${breakpoints.phoneOnly} {
    margin-top: 1rem;
    margin-bottom: 1.25rem;
  }
`;

const IntroText = styled.p`
  line-height: 1.44em;
`;

const EmailLink = styled.a`
  font-weight: 700;
`;

const StyledContactForm = styled(ContactForm)`
  width: calc(31.6vw + 5rem);
  padding-left: 5rem;

  ${breakpoints.phoneOnly} {
    width: 100%;
    padding: 0;
    margin-top: 2rem;
  }
`;

const StyledLink = styled.a`
  font-weight: bold;
  line-height: 1.44em;
  white-space: nowrap;
  transition: color 350ms;

  &:hover {
    color: var(--red);
    transition: color 350ms;
  }
`;

const FormScreen = ({ onFormSubmit }) => (
  <>
    <Wrapper>
      <Intro>
        <CapsText>Contact</CapsText>
        <MainPhrase>Let’s talk about your project</MainPhrase>
        <IntroText>
          Questions, collabs, inquiries? Use the contact form and we get in touch or mail us at{' '}
          <EmailLink target="_blank" href="mailto:info@zil.global" rel="noreferrer">
            info@zil.global
          </EmailLink>
        </IntroText>
        <IntroText>
          Support (WhatsApp):{' '}
          <a href="https://wa.me/17028615900" target="_blank" rel="noreferrer">
            <StyledLink>+1 (702) 861-5900</StyledLink>
          </a>
        </IntroText>
      </Intro>
      <StyledContactForm onSubmit={onFormSubmit} />
    </Wrapper>
    <Jobs />
  </>
);

export default FormScreen;
