import { useFormContext } from 'react-hook-form';

export type Props = {
  options: { label: string; value: string }[];
  name: string;
  disabled?: boolean;
  required?: boolean;
};

export default function Select({ name, options, disabled, required }: Props) {
  const { register, getValues } = useFormContext();

  const value = getValues(name);

  return (
    <select
      {...register(name, {
        disabled,
        required: required ? `${name} is required` : undefined,
      })}
      defaultValue={value}
    >
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
