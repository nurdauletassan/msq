import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Filter from "../components/Shop/Filter";
import Breadcrumb from "../components/Breadcrumb";
import ProductCard from '../components/Shop/ProductCard'
import "./Shop.css";

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?country=us&lang=en&currentpage=0&pagesize=36&categories=men_all&concepts=H%26M%20MAN",
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
        setProducts(data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="shop-page">
      <Breadcrumb />
      <div className="filter-catalog">
        <Filter />
        <div className="products-grid">
          {products.map((product, index) => (
            <Link
              to={`/product/${product.articleCode}`}
              key={product.articleCode}
              style={{ textDecoration: "none" }}
            >
              <ProductCard key={product.articleCode || index} product={product} />
              
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
  