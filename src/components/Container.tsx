import React from "react";
import styled from "styled-components";

interface Props {
  className?: string;
  style?: React.CSSProperties | undefined;
}

const Container: React.FC<Props> = ({ children, className, style }) => {
  return (
    <ContainerStyled className={className} style={style}>
      {children}
    </ContainerStyled>
  );
};

const ContainerStyled = styled.div`
  padding: 20px 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  text-align: center;
  grid-gap: 16px;

  @media only screen and (max-width: 950px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media only screen and (max-width: 820px) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export default Container;
