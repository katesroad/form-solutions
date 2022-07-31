import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import FormField from './FormField';
import Select from './Select';

import { useGetClassTypes, useGetLimits } from './queries';

export default function Dynamic() {
  const methods = useForm({
    defaultValues: {
      classType: '',
      limit: '',
    },
  });

  const handleSubmit = methods.handleSubmit((data) => {
    console.info(data);
  });

  const classType = methods.watch('classType');

  const { data: classTypes = [], isLoading: isLoadingClassTypes } =
    useGetClassTypes();

  const { data: limits = [], isLoading: isLoadingLimits } = useGetLimits(
    methods.getValues('classType')
  );

  useEffect(() => {
    methods.setValue('limit', '', {
      shouldDirty: false,
      shouldTouch: false,
      shouldValidate: false,
    });
  }, [classType, methods]);

  return (
    <FormProvider {...methods}>
      <form action="" onSubmit={handleSubmit}>
        <h3>Model information</h3>
        <FormField label="class type">
          <Select
            name="classType"
            disabled={isLoadingClassTypes}
            required
            options={[
              {
                label: isLoadingClassTypes
                  ? `Is fetching class types...`
                  : 'Please select class type',
                value: '',
              },
              ...classTypes,
            ]}
          />
          <ErrorMessage
            errors={methods.formState.errors}
            name="classType"
            render={({ message }) => <p className="error">{message}</p>}
          />
        </FormField>
        <FormField label="limit">
          <Select
            name="limit"
            disabled={!classType}
            required
            options={[
              {
                label: (!!classType && isLoadingLimits)
                    ? `Is fetching limit...`
                    : 'Please select limit',
                value: '',
              },
              ...limits,
            ]}
          />
          <ErrorMessage
            errors={methods.formState.errors}
            name="limit"
            render={({ message }) => <p className="error">{message}</p>}
          />
        </FormField>
        <button
          type="submit"
          disabled={!methods.formState.isValid && methods.formState.isDirty}
        >
          Submit
        </button>
      </form>
    </FormProvider>
  );
}
