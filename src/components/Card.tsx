import React from "react";

import styled from "styled-components";

interface Props {
  className: string;
  style?: React.CSSProperties | undefined;
}

const Card: React.FC<Props> = ({ children, className, style }) => {
  return (
    <CardStyled className={className} style={style}>
      {children}
    </CardStyled>
  );
};

const CardStyled = styled.div`
  width: auto;
  height: auto;
  background: #fff;
  display: grid;
  grid-template-rows: 0.6fr 1fr 1fr;

  .product-card-top {
    background: #393e46;
    text-align: center;
    color: #eeeeee;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 0 16px;

    & p:nth-child(2) {
      margin-top: 10px;
    }
  }

  .product-card-image {
    margin-bottom: 10px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  .product-card-bottom {
    margin-bottom: 10px;
    padding: 0 16px;
    text-align: justify;

    & p:nth-child(2) {
      margin: 14px 0;
    }
  }
`;

export default Card;
