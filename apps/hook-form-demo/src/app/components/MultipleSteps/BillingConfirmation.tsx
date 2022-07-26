import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Button from './Button';
import FormCard from './FormCard';

import formContext, { FormValues } from './FormContext';
import FormField from './FormField';

const BillingConformation = () => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { formValues, currentStep, setCurrentStep, updateFormValues } = useContext(formContext)!;

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'all',
    defaultValues: {
      confirmed: false,
    },
  });

  const onSubmit = (data: FormValues) => {
    updateFormValues(data);
    setCurrentStep(currentStep + 1);
  };

  useEffect(() => {
    reset({
      confirmed: formValues['confirmed'] ?? false,
    });
  }, [formValues, reset]);

  const errMsg = errors['confirmed']?.message;

  return (
    <FormCard>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormField label="Confirm" errMsg={errMsg} inline>
          <input
            type="checkbox"
            {...register('confirmed', {
              required: 'Please confirm your information',
            })}
          />
        </FormField>
        <Button type="submit">Next</Button>
      </form>
    </FormCard>
  );
};

export default BillingConformation;
