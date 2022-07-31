import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

const Wrapper = styled.div`
  .label {
    display: block;
    margin: 0;
  }

  .control.inline {
    display: flex;
    align-items: center;

    input {
      margin: 0 0 0 4px;
    }
  }

  input,
  select {
    margin: 6px 0;
    border: 1px solid #eee;
    padding: 4px;
    border-radius: 2px;

    &: [type=checkbox] {
      cursor: pointer;
    }

    &:focus {
      border-color: blue;
    }
  }

  .error {
    margin-top: 4px;
    color: red;
    font-size: small;
  }
`;

const FormField: React.FC<{
  children: React.ReactNode[] | React.ReactNode;
  errMsg?: string | React.ReactNode;
  label?: string;
  inline?: boolean;
  className?: string;
}> = ({ children, className, errMsg, label, inline }) => (
  <Wrapper className={classNames(className)}>
    <div className={classNames('control', { inline })}>
      {label && <p className="label">{label}</p>}
      {children}
    </div>
    {errMsg && <p className="error">{errMsg}</p>}
  </Wrapper>
);

export default FormField;
