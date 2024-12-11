import styled from "styled-components";
import theme from "@theme/index";

const Button = styled.button`
  outline: none;
  border: none;
  border-radius: 6px;
  font-size: calc(100% + 0.8928571428571429vw);
  padding: 10px;
  margin-top: 5px;
  max-height: 52px;
  cursor: pointer;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.secondary};

  &:hover {
    background-color: ${theme.colors.grey60};
  }

  &:active {
    background-color: ${theme.colors.grey80};
  }

  &:disabled {
    cursor: default;
    background-color: ${theme.colors.grey60};
    color: ${theme.colors.grey40};
  }
`;

export default Button;
