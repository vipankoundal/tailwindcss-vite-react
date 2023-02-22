import { Link } from "react-router-dom";

const Product = ({ p }) => {
  const { images, title, description, price, category, id } = p;
  return (
    <div className="item flex flex-col justify-between bg-gray-100 rounded-xl hover:shadow-lg ease-in duration-200">
      <div className="p-4">
        <img src={category.image} alt={title} className="rounded-xl" />
      </div>

      <div className=" px-4 pb-6 ">
        <h3 className="mt-4 font-medium text-lg flex justify-between">
          <span>{title}</span> <span className="text-blue-700">${price}</span>
        </h3>
        <p className="my-4">{`${description.substring(0, 70)}...`}</p>
        <div className="flex justify-between">
          <a href="#" className="add-button">
            Add to cart
          </a>
          <Link to={`/products/${id}`}>Know more</Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
