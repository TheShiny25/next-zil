import { useState } from 'react';
import styled from 'styled-components';
import breakpoints from '@css/breakpoints';
import Page from '@components/Page';
import FormScreen from '@partials/contact/FormScreen';
import MessageSentScreen from '@partials/contact/MessageSentScreen';
import BackGradient from '@svg/contact/back-gradient.svg';
import { client } from '@zil/util/request';

const StyledPage = styled(Page)`
  display: flex;
  flex-direction: column;
  min-height: 80vh;
  padding-top: 8.17rem;
  position: relative;
  z-index: 1;

  ${breakpoints.phoneOnly} {
    padding-top: 6rem;
  }
`;

const StyledBackGradient = styled(BackGradient)`
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  width: 65vw;

  ${breakpoints.tabletUp} {
    transform-origin: left top;
    ${({ large }) => large && 'transform: scale(1.25);'}
  }

  ${breakpoints.phoneOnly} {
    width: 175%;
    height: 30rem;
  }
`;

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);

  const handleFormSubmit = ({ applyFor, ...values }, { setSubmitting }) => {
    client('contactForm', { body: { applyFor: applyFor?.[0]?.label ?? 'undefined', ...values } })
      .then(() => {
        setMessageSent(true);
        document.documentElement.scrollTo(0, 0);
      })
      .finally(() => setSubmitting(false));
  };

  return (
    <StyledPage
      theme="light"
      title="Zil - Contact"
      description="Questions, collabs, inquiries? Use the contact form and we get in touch"
    >
      <StyledBackGradient large />
      {messageSent ? <MessageSentScreen /> : <FormScreen onFormSubmit={handleFormSubmit} />}
    </StyledPage>
  );
};

export default Contact;
