import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import formContext, { FormValues } from './FormContext';
import FormField from './FormField';

const BillingConformation = () => {
  const { formValues, currentStep, setCurrentStep, setFormValues } =
    useContext(formContext)!;

  const { register, reset, handleSubmit } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = (data: FormValues) => {
    setFormValues(data);
    setCurrentStep(currentStep + 1);
  };

  useEffect(() => {
    reset({
      confirmed: formValues['confirmed'] ?? false,
    });
  }, [formValues, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormField label="Confirm" inline>
        <input type="checkbox" {...register('confirmed', { required: true })} />
      </FormField>
      <button type="submit">Next</button>
    </form>
  );
};

export default BillingConformation;
