import { useState } from "react";
import { createContext, useContext } from "react";
import { contextStore, productType } from "../@types/context-type";

const Context = createContext({} as contextStore);

export const StoreProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<productType[]>([]);
  const [product, setProduct] = useState<productType>({} as productType);
  const [cart, setCart] = useState<productType[]>([]);

  const getProducts = async () => {
    try {
      const api = await fetch("https://fakestoreapi.com/products");
      const data = await api.json();

      const tempProduct = [...data];
      tempProduct.map(list => {
        list.inCart = false;
        list.amount = 0;
        list.total = list.price;
      });

      setProducts(tempProduct);
    } catch (error) {
      console.log(error);
    }
  };

  const getProduct = async (id: number) => {
    try {
      const api = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await api.json();
      setProduct(data);
    } catch (error) {}
  };

  const productToCart = (_product: productType) => {
    const tempProduct = { ..._product };
    tempProduct.amount = 1;
    tempProduct.inCart = true;

    updateProducts(_product);

    setCart([...cart, tempProduct]);
  };

  const updateProducts = (list: productType) => {
    const findIndex = products.findIndex(prod => prod.id === list.id);
    const tempProduct = [...products];
    tempProduct[findIndex].inCart = true;
    tempProduct[findIndex].amount = 1;

    setProducts(tempProduct);
  };

  const handleIncrease = (id: number) => {
    const tempCart = [...cart];
    const findIndexCart = tempCart.findIndex(list => list.id === id);
    tempCart[findIndexCart].amount += 1;
    tempCart[findIndexCart].total =
      tempCart[findIndexCart].price * tempCart[findIndexCart].amount;

    setCart(tempCart);
  };
  const handleDecrease = (id: number) => {
    const tempCart = [...cart];
    const findIndexCart = tempCart.findIndex(list => list.id === id);
    tempCart[findIndexCart].amount -= 1;
    tempCart[findIndexCart].total =
      tempCart[findIndexCart].price * tempCart[findIndexCart].amount;

    if (tempCart[findIndexCart].amount === 0) {
      const tempProducts = [...products];
      const findIndexProduct = tempProducts.findIndex(list => list.id === id);
      tempProducts[findIndexProduct].inCart = false;
      tempProducts[findIndexProduct].amount = 1;
      tempProducts[findIndexProduct].total =
        tempProducts[findIndexProduct].price;

      const removeProductFromCart = tempCart.filter(list => list.id !== id);

      setProducts(tempProducts);
      setCart(removeProductFromCart);
    } else {
      setCart(tempCart);
    }
  };

  return (
    <Context.Provider
      value={{
        products,
        product,
        cart,
        event: {
          getProducts,
          getProduct,
          productToCart,
          handleIncrease,
          handleDecrease,
        },
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStore = () => useContext(Context);
