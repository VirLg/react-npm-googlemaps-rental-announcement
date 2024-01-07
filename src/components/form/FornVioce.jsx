import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const FornVioce = ({ handleVoice }) => {
  const valueForm = data => {
    handleVoice(data);
  };
  return (
    <div className="container">
      <Formik
        initialValues={{ nameVoice: '', priceVoice: '', imgVoice: '' }}
        validationSchema={Yup.object({
          nameVoice: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          priceVoice: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          imgVoice: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
        })}
        onSubmit={values => valueForm(values)}
      >
        <Form style={{ display: 'flex', flexDirection: 'column' }}>
          <label
            htmlFor="nameVoice"
            className="searchPlaceholderFont"
            style={{ marginLeft: '22px', paddingTop: '10px' }}
          >
            nameVoice
          </label>
          <Field className="addInput" name="nameVoice" type="text" />
          <ErrorMessage name="nameVoice" />

          <label
            htmlFor="priceVoice"
            className="searchPlaceholderFont"
            style={{ marginLeft: '22px', paddingTop: '10px' }}
          >
            priceVoice
          </label>
          <Field className="addInput" name="priceVoice" type="text" />
          <ErrorMessage name="priceVoice" />

          <label
            htmlFor="imgVoice"
            className="searchPlaceholderFont"
            style={{ marginLeft: '22px', paddingTop: '10px' }}
          >
            imgVoice
          </label>
          <Field className="addInput" name="imgVoice" type="text" />
          <ErrorMessage name="imgVoice" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default FornVioce;
