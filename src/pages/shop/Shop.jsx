import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Filter from "../../components/Shop/Filter";
import Breadcrumb from "../../shared/ui/Breadcrump/Breadcrumb";
import ProductCard from '../../components/Shop/ProductCard';
import "./Shop.css";
import db from "../../app/config/FirebaseConfig";
import { useLoading } from "../../app/context/LoadingContext";

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const { startLoading, stopLoading } = useLoading();

  useEffect(() => {
    startLoading();
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
      } catch (err) {
        console.error("Error fetching products:", err);
        setError(err.message);
      } finally {
        stopLoading();
      }
    };

    fetchProductsFromFirebase();
  }, []);

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
