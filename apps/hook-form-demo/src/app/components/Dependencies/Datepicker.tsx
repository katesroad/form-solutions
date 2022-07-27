import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

// https://stackoverflow.com/questions/60864610/is-it-possible-to-use-react-datepicker-with-react-hooks-forms

const Datepicker = () => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name="date-input"
      render={({ field }) => (
        <DatePicker
          placeholderText="Select date"
          onChange={(date: Date) => field.onChange(date)}
          selected={field.value}
        />
      )}
    />
  );
};

export default Datepicker;
