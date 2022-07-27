import { useFormContext } from 'react-hook-form';
import FormField from './FormField';

export type Props = {
  options: { label: string; value: string }[];
  name: string;
  label: string;
};

export default function Select({ name, options, label }: Props) {
  const { register, getValues } = useFormContext();

  const value = getValues(name);

  return (
    <FormField label={label}>
      {/* Must be defaultValue here */}
      <select {...register(name)} defaultValue={value}>
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </FormField>
  );
}
