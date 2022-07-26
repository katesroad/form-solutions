import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  .label {
    display: block;
    font-size: 1.5rem;
    margin-bottom: 4px;
  }

  input {
    border: 1px solid #eee;
  }

  .error {
    margin-top: 4px;
    color: 4px;
  }

  &.inline {
    display: inline-flex;
  }
`;

const FormField: React.FC<{
  children: React.ReactNode;
  label: string;
  inline?: boolean;
}> = ({ children, inline, label }) => {
  return (
    <Wrapper className={inline ? 'inline' : ''}>
      <span className="label">{label}</span>
      {children}
    </Wrapper>
  );
};

export default FormField;
