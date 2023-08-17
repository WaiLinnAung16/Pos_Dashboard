import React from "react";
import straw from "../../public/strawberry.jpg";
import ProductsGridCard from "./ProductsGridCard";

const ProductsGrid = () => {
  return (
    <div>
      <div className=" flex gap-[50px] flex-wrap items-center">
        <ProductsGridCard/>
        <ProductsGridCard/>
        <ProductsGridCard/>
        <ProductsGridCard/>
        <ProductsGridCard/>
        <ProductsGridCard/>
        <ProductsGridCard/>
        <ProductsGridCard/>
        <ProductsGridCard/>
        <ProductsGridCard/>
      </div>
    </div>
  );
};

export default ProductsGrid;
