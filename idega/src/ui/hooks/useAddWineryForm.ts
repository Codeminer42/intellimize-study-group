import { FormikHelpers, useFormik } from 'formik';
import { object, string } from 'yup';

import { Winery } from '../../domain/Winery';

const initianlWineryValues: Winery = {
  name: '',
  location: '',
};

const wineryValidationSchema = object().shape({
  name: string().required('Winery name is required.').max(50, 'Name must be at max 50 characters'),
  location: string().required('Location is required.').max(50),
});

const useAddWineryForm = () => {
  const handleSubmission = (values: Winery, { setSubmitting }: FormikHelpers<Winery>) => {
    createNewWinery(values);

    resetForm();
    setSubmitting(false);
  };

  const createNewWinery = (winery: Winery) => {
    console.log(winery);
  };

  const { handleSubmit, values, errors, touched, handleChange, handleBlur, resetForm } = useFormik({
    initialValues: initianlWineryValues,
    onSubmit: handleSubmission,
    validationSchema: wineryValidationSchema,
  });

  const isInvalid = {
    name: touched.name && errors.name,
    location: touched.location && errors.location,
  };

  return {
    winery: values,
    errors,
    isInvalid,
    handleSubmit,
    handleChange,
    handleBlur,
  };
};

export { useAddWineryForm };
