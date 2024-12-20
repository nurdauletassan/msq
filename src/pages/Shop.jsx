import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Filter from "../components/Shop/Filter";
import Breadcrumb from "../components/Breadcrumb";
import ProductCard from '../components/Shop/ProductCard';
import "./Shop.css";
import db from "../config/FirebaseConfig";

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductsFromFirebase = async () => {
      try {
        const snapshot = await db.collection('Products').get();
        if (snapshot.empty) {
          throw new Error('No products found.');
        }
        const productsList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsList);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProductsFromFirebase();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="shop-page">
      <Breadcrumb />
      <div className="filter-catalog">
        <Filter />
        <div className="products-grid">
          {products.map((product) => (
            <Link
              to={`/shop/${product.id}`} // Assuming `id` is your unique identifier for the product
              key={product.id}
              style={{ textDecoration: "none" }}
            >
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
