import React, { useState } from "react";
import useFetch from "../api/useFetch";
import Product from "../components/Product";
import products from "../api/product.json";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const HomeProduct = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useFetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=12");
  return (
    <section className="pt-2">
      {isLoading && <h4 className="loading">Loading...</h4>}
      {error && <h4>{error}</h4>}
      <div class="grid grid-cols-4 gap-8">
        {products &&
          products.map((i, index) => {
            return <Product key={index} p={i} />;
          })}
      </div>
      <div className="text-center">
        <Link to="/products">
          <Button name="Know More" />
        </Link>
      </div>
    </section>
  );
};

export default HomeProduct;
