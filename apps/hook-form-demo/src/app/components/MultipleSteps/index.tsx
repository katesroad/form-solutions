import React, { useState } from 'react';
import BillingAddress from './BillingAddress';
import BillingConformation from './BillingConfirmation';
import BillingInfo from './BillingInfo';

import formContext from './FormContext';

type FormValues = Record<string, string | boolean>;

export default function MultipleStepsForm() {
  const [formValues, setFormValues] = useState<FormValues>({});
  const [currentStep, setCurrentStep] = useState<number>(1);

  console.info(formValues);

  const handleButtonClick = () => {
    setCurrentStep((currentStep) => currentStep - 1);
  };

  const updateFormData = (newValues: FormValues) => {
    setFormValues({
      ...formValues,
      ...newValues,
    });
  };

  return (
    <formContext.Provider
      value={{
        currentStep,
        formValues,
        setCurrentStep,
        setFormValues: updateFormData,
      }}
    >
      <h3>Step {currentStep} of 3</h3>
      {currentStep > 1 && <button onClick={handleButtonClick}>Back</button>}
      {currentStep === 1 && <BillingInfo />}
      {currentStep === 2 && <BillingAddress />}
      {currentStep === 3 && <BillingConformation />}
      {currentStep === 4 && <p>{JSON.stringify(formValues)}</p>}
    </formContext.Provider>
  );
}
