import styled from 'styled-components';
import Cta from '@components/Cta';

const StyledCta = styled(Cta)`
  position: relative;
  z-index: 100;
`;

const ContactCta = () => (
  <StyledCta
    title="Contact"
    text="Let’s talk about your project"
    link={{
      url: '/contact',
      text: 'Apply now',
    }}
  />
);

export default ContactCta;
