import styled from 'styled-components';

const Button = styled.button`
  border: none;
  padding: 4px;
  border-radius: 2px;
  cursor: pointer;
  &: [disabled] {
    background-color: gray;
  }
`;

export default Button;
