import Cookies from "js-cookie";
import React from "react";
import { useGetProductsQuery } from "../../redux/services/productApi";
import CashierProductCard from "./CashierProductCard";
import styles from "./customScrollbar.module.css";
const CashierProducts = () => {
  const token = Cookies.get("token");

  const { data: products } = useGetProductsQuery(token);
  const productsData = products?.data;
  return (
    <div
      className={`border-t border-[#3F4245] px-8 pt-5 overflow-y-scroll ${styles["custom-scrollbar"]}`}
    >
      <div className=" grid grid-cols-12 gap-5">
        {productsData?.map((product) => {
          return <CashierProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default CashierProducts;
