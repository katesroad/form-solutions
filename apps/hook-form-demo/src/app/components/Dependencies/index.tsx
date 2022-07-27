import React from 'react';
import {
  useForm,
  FormProvider,
  useFormContext,
  useFieldArray,
} from 'react-hook-form';
import Button from './Button';
import EmissionFactor from './EmissionFactor';
import FormField from './FormField';
import OccupancyClass from './OccupancyClass';

export default function App() {
  const methods = useForm({
    defaultValues: {
      classes: [
        {
          group: '',
          limit: '',
          units: '',
        },
      ],
      commondities: [
        {
          commondity: '',
          factor: '',
          units: '',
          timestamp: '',
        },
      ],
      isAuthed: false,
    },
  });

  const onSubmit = (data: Record<string, boolean | any[]>) => console.log(data);

  const {
    fields: occupancyClasses = [],
    append: addCoccupanyClass,
    remove: removeOccpanyClass,
  } = useFieldArray({
    name: 'classes',
    control: methods.control,
  });

  const {
    fields: commondities = [],
    append: addCommondity,
    remove: removeCommodity,
  } = useFieldArray({
    name: 'commondities',
    control: methods.control,
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {/* Occupancy class */}
        {occupancyClasses.map((item, index) => (
          <OccupancyClass index={index} name="commondities" key={index}>
            <p>
              <Button onClick={() => removeOccpanyClass(index)}>-</Button>
              {index + 1 === occupancyClasses.length && (
                <Button
                  type="button"
                  onClick={() =>
                    addCoccupanyClass({
                      group: '',
                      limit: '',
                      units: '',
                    })
                  }
                >
                  +
                </Button>
              )}
            </p>
          </OccupancyClass>
        ))}

        {/* Commondity */}
        {commondities.map((item, index) => (
          <EmissionFactor index={index} name="commondities" key={index}>
            <p>
              <Button onClick={() => removeCommodity(index)}>-</Button>
              {index + 1 === commondities.length && (
                <Button
                  type="button"
                  onClick={() =>
                    addCommondity({
                      commondity: '',
                      factor: '',
                      units: '',
                      timestamp: '',
                    })
                  }
                >
                  +
                </Button>
              )}
            </p>
          </EmissionFactor>
        ))}
        {/* Sign in */}
        <FormField label="Authorized" inline>
          <input
            type="checkbox"
            {...methods.register('isAuthed', {
              required: 'Please sign your name',
            })}
          />
        </FormField>
        <input type="submit" />
      </form>
    </FormProvider>
  );
}
