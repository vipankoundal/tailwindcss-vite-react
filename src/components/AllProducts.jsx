import React, { useState } from "react";
import useFetch from "../api/useFetch";
import Product from "../components/Product";
//import products from "../api/allproducts.json";

const AllProducts = () => {
  //const [productsdata] = useState(products);
  const {
    data: products,
    isLoading,
    error,
  } = useFetch("https://api.escuelajs.co/api/v1/products");
  return (
    <section>
      {isLoading && <h4 className="loading">Loading...</h4>}
      {error && <h4>{error}</h4>}
      <div className="grid grid-cols-4 gap-8">
        {products &&
          products.map((i, index) => {
            return <Product key={index} p={i} />;
          })}
      </div>
    </section>
  );
};

export default AllProducts;
