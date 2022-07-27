import { useFormContext } from 'react-hook-form';
import FormField from './FormField';

export type Props = {
  options: { label: string; value: string }[];
  name: string;
  label: string;
};

export default function Select({ name, options, label }: Props) {
  const { register } = useFormContext();

  return (
    <FormField label={label}>
      <select {...register(name)}>
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </FormField>
  );
}
