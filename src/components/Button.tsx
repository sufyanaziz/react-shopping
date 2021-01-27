import React from "react";
import styled from "styled-components";

interface ButtonProps {
  disabled?: boolean;
  text: string;
  className?: string;
  style?: React.CSSProperties | undefined;
  onClick?:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
}

const Button: React.FC<ButtonProps> = ({
  disabled,
  style,
  className,
  text,
  onClick,
}) => {
  return (
    <ButtonStyled
      className={className}
      style={style}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button`
  padding: 14px;
  cursor: pointer;
  outline: none;
  color: ${props => (props.disabled ? "#eee" : "#222831")};
  background: ${props => (props.disabled ? "gray" : "#ffd369")};
  border: none;
`;

export default Button;
