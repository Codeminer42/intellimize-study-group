import { FormikHelpers, useFormik } from 'formik';

import { Winery } from '../../domain/Winery';

const initianlWineryValues: Winery = {
  name: '',
  location: '',
};

const useAddWineryForm = () => {
  const handleSubmission = (values: Winery, { setSubmitting }: FormikHelpers<Winery>) => {
    createNewWinery(values);

    resetForm();
    setSubmitting(false);
  };

  const createNewWinery = (winery: Winery) => {
    console.log(winery);
  };

  const { handleSubmit, values, errors, handleChange, resetForm } = useFormik({
    initialValues: initianlWineryValues,
    onSubmit: handleSubmission,
  });

  return {
    winery: values,
    errors,
    handleSubmit,
    handleChange,
  };
};

export { useAddWineryForm };
