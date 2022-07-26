import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Button from './Button';

import formContext, { FormValues } from './FormContext';
import FormField from './FormField';

const BillingInfo = () => {
  const { currentStep, formValues, setCurrentStep, setFormValues } =  useContext(formContext)!;

  const { register, reset, handleSubmit } = useForm({
    mode: 'onBlur',
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = (data: FormValues) => {
    setFormValues(data);
    setCurrentStep(currentStep + 1);
  };

  useEffect(() => {
    reset({
      email: formValues['email'] ?? '',
    })
  }, [formValues, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormField label="Email">
        <input
          {...register('email', {
            required: true,
            pattern:
              /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
        />
      </FormField>
      <Button type="submit">Next</Button>
    </form>
  );
};

export default BillingInfo;
