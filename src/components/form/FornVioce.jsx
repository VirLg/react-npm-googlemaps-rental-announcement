import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormVioce = ({ handleVoice }) => {
  return (
    <Formik
      initialValues={{ voiceName: '', voicePrice: '', voiceImg: '' }}
      validationSchema={Yup.object({
        voiceName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        voicePrice: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        voiceImg: Yup.string().required('Required'),
      })}
      onSubmit={values => {
        handleVoice(values);
      }}
    >
      <Form>
        <label htmlFor="voiceName">voiceName</label>
        <Field name="voiceName" type="text" />
        <ErrorMessage name="voiceName" />

        <label htmlFor="voicePrice">voicePrice</label>
        <Field name="voicePrice" type="text" />
        <ErrorMessage name="voicePrice" />

        <label htmlFor="voiceImg">voiceImg</label>
        <Field name="voiceImg" type="text" />
        <ErrorMessage name="voiceImg" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
export default FormVioce;
