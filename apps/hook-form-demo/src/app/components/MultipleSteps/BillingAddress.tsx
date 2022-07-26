import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import formContext, { FormValues } from './FormContext';
import FormField from './FormField';

const BillingAddress = () => {
  const { formValues, currentStep, setCurrentStep, setFormValues } =
    useContext(formContext)!;

  const { reset, register, handleSubmit } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = (data: FormValues) => {
    setFormValues(data);
    setCurrentStep(currentStep + 1);
  };

  useEffect(() => {
    reset({
      address: formValues['address'] ?? '',
    });
  }, [formValues, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormField label="Address">
        <input {...register('address', { required: true })} />
      </FormField>
      <button type="submit">Next</button>
    </form>
  );
};

export default BillingAddress;
