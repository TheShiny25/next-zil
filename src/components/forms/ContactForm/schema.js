import { object, string } from 'yup';

const schema = object().shape({
  email: string()
    .email('Please enter a correct email format')
    .required('Please enter your email address'),
  name: string().required('Please enter your name'),
  organizationName: string().required('Please enter your company / artist name'),
  link: string()
    .matches(
      /^(https?:\/\/)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/,
      'Please enter a correct format site / demo link'
    )
    .required('Please enter a site / demo link'),
});

export default schema;
