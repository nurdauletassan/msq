import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";

const ProductDetails = ({ addToCart }) => {
  const { productId } = useParams(); // Получаем ID товара из URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      `https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/detail?country=us&lang=en&productcode=${productId}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key": "a9a219b4demsh9614127a3b49660p172d1ajsnb5491c223e96",
          "x-rapidapi-host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [productId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>No product found</p>;

  return (
    <div className="product-details">
      <Breadcrumb productName={product.name} />
      <div className="details-container">
       
        <div className="details-info">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      </div>
      <Link to="/">Back to Shop</Link>
    </div>
  );
};

export default ProductDetails;
