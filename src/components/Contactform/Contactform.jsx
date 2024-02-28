import css from './Contactform.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
const userSchema = Yup.object().shape({
  name: Yup.string().min(5, 'To short').max(50, 'To long').required('This is a required field'),
  number: Yup.string().min(5, 'To short').max(50, 'To long').required('This is a required field'),
});
export const Contactform = ({ addusers }) => {
  const namefield = useId();
  const phonefield = useId();
  return (
    <>
      <h1 className={css.phonebook}>Phonebook</h1>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={userSchema}
        onSubmit={(values, actions) => {
          addusers({ id: Date.now(), ...values });
          actions.resetForm();
        }}
      >
        <Form className={css.form}>
          <div className={css.namebox}>
            <label htmlFor={namefield} className={css.nametext}>
              {' '}
              Name
            </label>
            <Field type="text" name="name" id={namefield} className={css.fieldname} />
            <ErrorMessage name="name" component="p" className={css.error} />
          </div>
          <div className={css.namebox}>
            <label htmlFor={phonefield} className={css.numberlabel}>
              Number
            </label>
            <Field type="text" name="number" id={phonefield} className={css.fieldname} />
            <ErrorMessage name="number" component="p" className={css.error} />
          </div>
          <button type="submit" className={css.buttonform}>
            Add Contact
          </button>
        </Form>
      </Formik>
    </>
  );
};
