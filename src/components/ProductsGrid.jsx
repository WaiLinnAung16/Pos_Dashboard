import React from "react";
import straw from "../../public/strawberry.jpg";
import ProductsGridCard from "./ProductsGridCard";

const ProductsGrid = ({ productsData }) => {
  return (
    <div>
      <div className=" grid grid-cols-12 gap-5">
        {productsData?.map((product) => {
          return <ProductsGridCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default ProductsGrid;
