import React, { createContext, useContext, useState, useEffect } from "react";
import { productData } from "../data/dummy";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

const colorMode = localStorage.getItem("colorMode");
const themeMode = localStorage.getItem("themeMode");
const allProducts = JSON.parse(localStorage.getItem("products"));

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState(
    colorMode === null ? "#03C9D7" : colorMode
  );
  const [currentMode, setCurrentMode] = useState(
    themeMode === null ? "Light" : themeMode
  );
  const [products, setProducts] = useState(
    allProducts === null ? productData : allProducts
  );
  const [productForm, setProductForm] = useState(false);
  const [themeSettings, setThemeSettings] = useState(false);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  // Set mode to either Light or Dark
  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
    setThemeSettings(false);
  };

  // Set the theme color
  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
    setThemeSettings(false);
  };

  // Save a new product
  const setProduct = (item) => {
    console.log(item);
    setProducts([...products, item]);
  };

  // Open popups in navbar
  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  // Close popups in navbar
  const closePopup = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: false });
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        closePopup,
        screenSize,
        setScreenSize,
        currentColor,
        currentMode,
        productForm,
        setProductForm,
        themeSettings,
        setThemeSettings,
        setMode,
        setColor,
        products,
        setProduct,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
