import React from "react";
import Slider from "../Slider/Slider";
import NavigateButtons from "../NavigateButtons/NavigateButtons";
import ProductSection from "../ProductSection/ProductSection";
import EShoppingFAQ from "../FAQ/FAQ";

const Main = () => {
  return (
    <>
      <Slider />
      <NavigateButtons />
      <ProductSection />
      <EShoppingFAQ />
    </>
  );
};

export default Main;
