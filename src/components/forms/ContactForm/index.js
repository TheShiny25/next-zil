import React from 'react';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import { TextInput, Select } from '@components/forms/fields';
import ActionLink from '@components/ActionLink';
import schema from './schema';

const SendButton = styled(ActionLink).attrs({
  as: 'button',
  type: 'submit',
})`
  margin-top: 2.88rem;
`;

const applyForOptions = [
  {
    label: 'Music Distribution',
    value: 'music-distribution',
  },
  {
    label: 'YouTube Network',
    value: 'youtube-network',
  },
  {
    label: 'Artists Management',
    value: 'artists-management',
  },
  {
    label: 'Business Acceleration Program',
    value: 'business-acceleration-program',
  },
  {
    label: 'MarketWise (Marketing)',
    value: 'marketwise',
  },
];

const ContactForm = ({ className, onSubmit }) => {
  return (
    <Formik
      initialValues={{ email: '', name: '', organizationName: '', link: '' }}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={className}>
          <TextInput id="contact-email-field" label="Email" type="email" name="email" spellCheck="false" />
          <TextInput id="contact-name-field" label="Name" name="name" autoComplete="name" spellCheck="false" />
          <TextInput
            id="contact-organization-name-field"
            label="Company / Artist Name"
            name="organizationName"
            autoComplete="organization"
            spellCheck="false"
          />
          <TextInput
            id="contact-link-field"
            label="Website / Demo Link"
            name="link"
            autoComplete="url"
            spellCheck="false"
          />
          <Select id="contact-apply-for-field" label="I want to apply for" name="applyFor" options={applyForOptions} />
          <SendButton disabled={isSubmitting}>Send</SendButton>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
