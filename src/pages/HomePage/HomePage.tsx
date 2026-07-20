import Category from "../../widjets/Category/ui/Category";
import HeroSlider from "../../widjets/HeroSlider/HeroSlider";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchProducts } from "../../redux/productsSlice";
import HitsSlider from "../../widjets/HitsSlider/HitsSlider";

const HomePage = () => {
  
  return (
    <>
      <HeroSlider />
      <Category />
      <HitsSlider />
      
    </>
  );
};
 
export default HomePage;