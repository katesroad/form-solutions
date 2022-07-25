import styled from 'styled-components';
import { useForm } from 'react-hook-form';

const FormField = styled.div`
  align-items: center;
  display: flex;

  .field-input {
    margin: 0 8px;
  }

  .error {
    color: red;
  }
`;

export default function QuickStart() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onBlur'
  });

  const onSubmit = (data: Record<string, string>) => console.log(data);

  console.log(watch('example')); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormField>
        <p>
          <span className="label">Not Required Field</span>
          {/* register your input into the hook by invoking the "register" function */}
          <input
            className="field-input"
            defaultValue="test"
            {...register('example')}
          />
        </p>

        {/* include validation with required or other standard HTML validation rules */}
      </FormField>
      <FormField>
        <p>
          <span>Required Field</span>
          <input
            className="field-input"
            {...register('exampleRequired', { required: true })}
          />
        </p>
        {/* errors will return when field validation fails  */}
        <p className="error">
          {errors['exampleRequired'] && <span>This field is required</span>}
        </p>
      </FormField>
      <FormField>
        <input type="submit" />
      </FormField>
    </form>
  );
}
