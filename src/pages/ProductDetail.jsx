import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../api/useFetch";

const ProductDetail = () => {
  const { id } = useParams();
  const {
    data: single,
    isLoading,
    error,
  } = useFetch(`https://api.escuelajs.co/api/v1/products/${id}`);

  return (
    <section>
      {isLoading && <h4 className="loading">Loading...</h4>}
      {error && <h4>{error}</h4>}
      <div className="grid grid-cols-2 gap-6">
        <div className="product-slider">
          <img src={single && single.category.image} className="rounded-xl" />
        </div>
        <div className="product-detail">
          <h1 className="text-[1.5rem] leading-10 font-bold">
            {single && single.title}
          </h1>
          <p>{single && single.description}</p>
          <h4 className="my-4">
            <span className="text-blue-700; font-bold">
              ${single && single.price}
            </span>
          </h4>
          <div className="flex justify-between">
            <a href="#" className="add-button">
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
