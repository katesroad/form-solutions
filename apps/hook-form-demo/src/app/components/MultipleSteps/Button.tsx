import styled from 'styled-components';

const Button = styled.button`
  border: none;
  color: white;
  background-color: #eee;
  cursor: pointer;
  &: [disabled] {
    background-color: gray;
  }
`;

export default Button;
