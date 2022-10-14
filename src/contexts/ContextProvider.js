import React, { createContext, useContext, useState } from "react";
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
const allProducts = localStorage.getItem("products");

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

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
    setThemeSettings(false);
  };

  const setColor = (color) => {
    // console.log(e.target);
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
    setThemeSettings(false);
  };

  const setProduct = () => {
    setProducts([...products]);
  };

  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

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
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
