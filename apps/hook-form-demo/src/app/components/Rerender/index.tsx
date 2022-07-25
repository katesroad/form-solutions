import React, { useEffect, useState } from 'react';
import { useForm, useFieldArray, useWatch, Control } from 'react-hook-form';
import styled from 'styled-components';

type FormValues = {
  cart: {
    name: string;
    price: number;
    quantity: number;
  }[];
};

type CartItem = {
  name: string;
  quantity: number;
  price: number;
};

const Item = styled.section`
  display: flex;
  align-items: center;
  margin-bottom: 2px;

  input {
    margin: 0 8px;
  }

  button {
    cursor: pointer;
    padding: 4px;
    border-radius: 4px;
    background-color: transparent;
    border: none;
    border: 1px solid #eee;
  }

  p {
    margin-top: 0;
  }
`;

const Total = ({ control }: { control: Control<FormValues> }) => {
  const formValues = useWatch({
    name: 'cart',
    control,
  });
  const total = formValues.reduce(
    (acc, current) => acc + (current.price || 0) * (current.quantity || 0),
    0
  );
  return <p>Total Amount: {total}</p>;
};

function UserCart(props: { title: string; cart: CartItem[] }) {
  const { title, cart } = props;

  const {
    reset,
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: { cart },
    mode: 'onBlur',
  });

  const { fields, append, remove } = useFieldArray({
    name: 'cart',
    control,
  });

  const onSubmit = (data: FormValues) => console.log(data);

  useEffect(() => {
    reset({ cart });
  }, [cart, reset]);

  return (
    <div>
      {title && <h3>{title}</h3>}
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field, index) => {
          return (
            <div key={field.id}>
              <Item className={'section'} key={field.id}>
                <p>
                  <span>Name</span>
                  <input
                    placeholder="name"
                    {...register(`cart.${index}.name` as const, {
                      required: true,
                    })}
                    className={errors?.cart?.[index]?.name ? 'error' : ''}
                  />
                </p>
                <p>
                  <span>Number</span>
                  <input
                    placeholder="quantity"
                    type="number"
                    {...register(`cart.${index}.quantity` as const, {
                      valueAsNumber: true,
                      required: true,
                    })}
                    className={errors?.cart?.[index]?.quantity ? 'error' : ''}
                  />
                </p>
                <p>
                  <span>Quantity</span>
                  <input
                    placeholder="value"
                    type="number"
                    {...register(`cart.${index}.price` as const, {
                      valueAsNumber: true,
                      required: true,
                    })}
                    className={errors?.cart?.[index]?.price ? 'error' : ''}
                  />
                </p>
                <p>
                  <button type="button" onClick={() => remove(index)}>
                    -
                  </button>
                  {index + 1 === fields.length && (
                    <button
                      type="button"
                      onClick={() =>
                        append({
                          name: '',
                          quantity: 0,
                          price: 0,
                        })
                      }
                    >
                      +
                    </button>
                  )}
                </p>
              </Item>
            </div>
          );
        })}
        {cart && (
          <React.Fragment>
            <Total control={control} />
            <input type="submit" />
          </React.Fragment>
        )}
      </form>
    </div>
  );
}

export default function Demo() {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setCart([
        {
          name: 'Apple',
          quantity: 12,
          price: 12,
        },
      ]);
    }, 2500);
  }, []);

  return (
    <React.Fragment>
      <p>
        <strong>parent data</strong>:{JSON.stringify(cart)}
      </p>
      <UserCart cart={cart} title="Checkout" />
    </React.Fragment>
  );
}
