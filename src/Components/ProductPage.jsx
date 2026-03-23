import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductPage() {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  async function getProduct() {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await res.json();

    setProduct(data);
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="px-24 my-10">
      <div className="flex justify-between gap-4">
        <div className="w-1/3 bg-gray-100 rounded-2xl">
          <img src={product.thumbnail} alt={product.title} />
        </div>
        <div className="w-2/3">
          <p className="font-bold">{product.title}</p>
          <p>Rating : {product.rating} / 5</p>
          <div className="flex gap-2 items-center">
            <p className="font-bold">${product.price}</p>
            <p className="px-2 py-1 bg-red-200 text-red-500 rounded-2xl">
              {product.discountPercentage}%
            </p>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
