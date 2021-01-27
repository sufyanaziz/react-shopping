import React from "react";
import styled from "styled-components";

import { AiOutlineCloseCircle } from "react-icons/ai";
import { productType } from "../@types/context-type";

interface Props {
  className?: string;
  style?: React.CSSProperties | undefined;
  isOpenSidebar: boolean;
  onClick?:
    | ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void)
    | undefined;
  openSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  cart: productType[];
  event: {
    handleDecrease: (id: number) => void;
    handleIncrease: (id: number) => void;
  };
}

const SidebarCart: React.FC<Props> = ({
  className,
  style,
  isOpenSidebar,
  onClick,
  openSidebar,
  cart,
  event,
}) => {
  // Calculate Total Purchase
  const calculateTotal = (items: productType[]) =>
    items
      .reduce((ack: number, item) => ack + item.amount * item.price, 0)
      .toFixed(2);

  return (
    <SideCartComponent
      openComponent={isOpenSidebar}
      className={className}
      style={style}
      onClick={onClick}
    >
      <div className="icons">
        <AiOutlineCloseCircle onClick={() => openSidebar(false)} />
      </div>
      {cart.length === 0 ? (
        <div className="side-component-container">
          <p>Product not found, purchase one!</p>
        </div>
      ) : (
        <div className="side-component-container">
          <p style={{ marginBottom: 20 }}>
            Total Purchase : ${calculateTotal(cart)}
          </p>
          {cart.map(item => {
            return (
              <div className="side-component-card" key={item.id}>
                <div className="side-component-image">
                  <img src={item.image} />
                </div>
                <div className="side-component-details">
                  <div
                    className="side-component-title"
                    style={{ marginBottom: 10 }}
                  >
                    <p>{item.title}</p>
                  </div>
                  <div
                    className="side-component-amount"
                    style={{ marginBottom: 10 }}
                  >
                    <p>
                      ${item.total} ({item.amount})
                    </p>
                  </div>
                  <div
                    className="side-component-action"
                    style={{ marginBottom: 10 }}
                  >
                    <button onClick={() => event.handleDecrease(item.id)}>
                      -
                    </button>
                    <button onClick={() => event.handleIncrease(item.id)}>
                      +
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </SideCartComponent>
  );
};

type SideCartComponentType = {
  openComponent: boolean;
};

const SideCartComponent = styled.div<SideCartComponentType>`
  position: fixed;
  color: white;
  z-index: 10;
  right: ${props => (props.openComponent ? "0px" : "-400px")};
  transition: all 0.5s ease-out;
  width: 400px;
  background: white;
  height: 100vh;

  .icons {
    padding: 20px 20px 0 0;
    color: #222831;
    font-size: 40px;
    cursor: pointer;
    float: right;
    margin-bottom: 20px;
  }

  .side-component-container {
    padding: 10px 20px;
    height: 500px;
    width: 100%;
    overflow-y: auto;
    color: #222831;
  }

  .side-component-card {
    display: flex;
    margin-bottom: 10px;
    border-bottom: 1px solid black;
  }

  .side-component-image img {
    width: 100px;
    height: auto;
  }

  .side-component-details {
    margin-left: 10px;
    margin-right: 10px;
  }

  button {
    border: none;
    background: #222831;
    color: #eee;
    padding: 10px 14px;
    margin-right: 10px;
    cursor: pointer;
  }

  @media screen and (max-width: 500px) {
    right: ${props => (props.openComponent ? "-16px" : "-400px")};
  }
`;

export default SidebarCart;
