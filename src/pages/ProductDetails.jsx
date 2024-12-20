import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import db from "../config/FirebaseConfig";
import rating from "../images/rating.svg";
import likes from "../images/likes.svg";
import Modal from "../components/ProductDetails/Modal";
import "./ProductDetails.css";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../useStore/cartActions';

const ProductDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Получаем ID из маршрута
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0); // Текущее отображаемое изображение
  const [buttonText, setButtonText] = useState("Add to Cart");

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const getCartItemCount = () => {
    return cartItems.length;
  };

  const handleSizeClick = (index) => {
    setSelectedSizeIndex(index);
  };

  const calculateDeliveryDate = (days) => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date.toLocaleDateString("en-US", { day: "numeric", month: "short" });
  };

  const deliveryStart = calculateDeliveryDate(6);
  const deliveryEnd = calculateDeliveryDate(12);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleImageClick = (index) => {
    setCurrentImage(index);
  };
  const handleAddToCart = () => {
    if (buttonText === "Add to Cart" && product) {
        console.log(product);
      dispatch(addToCart(product));
      console.log(cartItems.length);
      setButtonText("In Cart");
    } else {
      navigate("/cart");
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const doc = await db.collection("Products").doc(id).get();
        if (!doc.exists) {
          throw new Error("Product not found");
        }
        setProduct({ id: doc.id, ...doc.data() });
        setLoading(false);
      } catch (err) {
        console.error("Error fetching product:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="product-container">
      <Breadcrumb productTitle={product.title} />
      <div className="images-info">
        <div className="product-images">
          {product && product.images && product.images.length > 0 ? (
            product.images.map((image, index) => (
              <img
                key={index}
                src={image || "https://via.placeholder.com/150"}
                alt={`Product Image ${index + 1}`}
                onClick={() => handleImageClick(index)} // Обработчик клика на изображение
                style={{ maxWidth: "100%" }} // Ограничивает максимальную ширину изображения
              />
            ))
          ) : (
            <p>No images available</p>
          )}
        </div>
        <div className="product-image">
          <img
            src={
              product.images[currentImage] || "https://via.placeholder.com/150"
            } // Отображает изображение по текущему индексу
            alt={product.title}
          />
        </div>
        <div className="product-info">
          <h1 className="product-title">{product.title}</h1>
          <div className="rating-review">
            <img src={rating} alt="Rating" />
            <p>({product.reviews} Reviews)</p>
            <div className="vertical-line"></div>
            <p>{product.status}</p>
          </div>
          <p className="product-price">{product.price}</p>
          <p className="product-description">{product.description}</p>
          <div className="horizontal-line"></div>

          <div className="product-sizes">
            <p>Sizes:</p>
            <div className="size-options">
              {product.sizes && product.sizes.length > 0 ? (
                product.sizes.map((size, index) => (
                  <div
                    key={index}
                    onClick={() => handleSizeClick(index)}
                    className={`size-box ${
                      selectedSizeIndex === index ? "selected" : ""
                    }`}
                  >
                    <span>{size}</span>
                  </div>
                ))
              ) : (
                <p>No sizes available</p>
              )}
            </div>
          </div>
          <div className="add-likes">
            <button className="add-to-cart" onClick={handleAddToCart}>
              {buttonText}
            </button>
            <img onClick={handleOpenModal} src={likes} alt="Likes" />
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
          </div>
          <p className="delivery-dates">
            Estimated Delivery:{" "}
            <strong>
              {deliveryStart} - {deliveryEnd}
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
