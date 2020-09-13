import React from 'react';
import PropTypes from 'prop-types';
import { Formik, From, Field } from 'formik';
import Input from '../components/Input';
import { SIGNUP_SCHEMA } from '../validate';

function SignUpForm(props) {
  const { onSubmit } = props;
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  const fields = [
    {
      name: 'firstName',
      type: 'text',
      placeholder: 'first name',
    },
    {
      name: 'lastName',
      type: 'text',
      placeholder: 'last name',
    },
    {
      name: 'email',
      type: 'type',
      placeholder: 'email',
    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'password',
    },
    {
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'confirmPassword',
    },
  ];

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={SIGNUP_SCHEMA}
    >
      {() => (
        <Form>
          <Field key={index} name={fields.name}>
            {(fieldProps) => <Input {...field} {...fieldProps} />}
          </Field>
          ))}
          <button type="submit">SignUp</button>
        </Form>
      )}
    </Formik>
  );
}

export default SignUpForm;
