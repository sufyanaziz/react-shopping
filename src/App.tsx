import React from "react";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";

import "./App.css";

import { useStore } from "context/store-context";

import Button from "components/Button";
import Card from "components/Card";
import Navbar from "components/Navbar";
import SidebarCart from "components/SidebarCart";
import Container from "components/Container";

const App = () => {
  const { event, products, cart } = useStore();

  const [openSideCart, setOpenSideCart] = React.useState<boolean>(false);

  React.useEffect(() => {
    event.getProducts();
  }, []);

  const openSideComponentCart = (
    <SidebarCart
      isOpenSidebar={openSideCart}
      className="side-component-cart"
      cart={cart}
      openSidebar={setOpenSideCart}
      event={event}
    />
  );

  return (
    <div className="App">
      {products.length === 0 ? (
        <p>Loading</p>
      ) : (
        <>
          {openSideComponentCart}
          {/* Navbar */}
          <Navbar className="product-navbar">
            <h2>React Shopping</h2>
            <div className="navbar-icon-div">
              <div className="badge">
                <small>{cart.length}</small>
              </div>
              <FiShoppingCart
                className="navbar-icon"
                onClick={() => setOpenSideCart(true)}
              />
            </div>
          </Navbar>
          {/* Container */}
          <Container className="products-container">
            {products.map(product => {
              return (
                <Card key={product.id} className="product-card">
                  <div className="product-card-top">
                    <p>{product.title}</p>
                    <p>Category : {product.category}</p>
                  </div>
                  <div className="product-card-image">
                    <img
                      src={product.image}
                      style={{ width: 150, height: "auto" }}
                    />
                  </div>
                  <div className="product-card-bottom">
                    <p>{product.description}</p>
                    <p>
                      Price : <b>${product.price}</b>
                    </p>
                  </div>
                  {product.inCart ? (
                    <Button disabled={true} text="In Cart" />
                  ) : (
                    <Button
                      text="Shop"
                      onClick={() => {
                        event.productToCart(product);
                      }}
                    />
                  )}
                </Card>
              );
            })}
          </Container>
          <p style={{ textAlign: "center", color: "#eee", paddingBottom: 20 }}>
            Copyright &copy; {new Date().getFullYear()} - Achmad Sufyan Aziz
          </p>
        </>
      )}
    </div>
  );
};

export default App;
