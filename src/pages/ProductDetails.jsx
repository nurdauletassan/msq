import React, { useState } from 'react';
import './ProductDetails.css';
import Breadcrumb from '../components/Breadcrumb';
import rating from '../images/rating.svg';
import likes from '../images/likes.svg'
import Modal from '../components/ProductDetails/Modal';

const ProductDetails = () => {
    const product = {
        image: 'path-to-image.jpg',
        title: 'Slim Fit Cotton Twil Pants',
        description: 'Detailed description of the product. It should provide all necessary information about the product.',
        price: '$99.99',
        reviews: '120',
        status: 'In Stock',
        colors: ['#A0BCE0', '#E07575','#334344' ], 
        sizes: ['XS', 'S', 'M', 'L', 'XL','XXL']// Список цветов
    };
    const [selectedSizeIndex, setSelectedSizeIndex] = useState(null);
    const [clickedColorIndex, setClickedColorIndex] = useState(null);

    const handleColorClick = (index) => {
        setClickedColorIndex(index); // Устанавливаем индекс выбранного цвета
    };
    const handleSizeClick = (index) => {
        setSelectedSizeIndex(index); // Set selected size index
    };

     // Calculate delivery dates
     const calculateDeliveryDate = (days) => {
        const date = new Date();
        date.setDate(date.getDate() + days);
        return date.toLocaleDateString('en-US', { day: 'numeric', month: 'short' });
    };

    const deliveryStart = calculateDeliveryDate(6);
    const deliveryEnd = calculateDeliveryDate(12);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <div className="product-container">
            <Breadcrumb />
            <div className="images-info">
            <div className="product-images">
                    <img src={product.images?.[0]?.url || "https://via.placeholder.com/150"} alt={product.name || "No Name"} />
                    <img src={product.images?.[1]?.url || "https://via.placeholder.com/150"} alt={product.name || "No Name"} />
                    <img src={product.images?.[2]?.url || "https://via.placeholder.com/150"} alt={product.name || "No Name"} />
                    <img src={product.images?.[3]?.url || "https://via.placeholder.com/150"} alt={product.name || "No Name"} />
                </div>
                <div className="product-image">
                    <img src={product.images?.[0]?.url || "https://via.placeholder.com/150"} alt={product.name || "No Name"} />
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
                    <div className="product-colors">
                        <p>Colours:</p>
                        <div className="color-options">
                            {product.colors.map((color, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleColorClick(index)}
                                    className='color-ring'
                                    style={{
                                        backgroundColor: clickedColorIndex === index ? 'transparent' : color,
                                       
                                    }}
                                >
                                    {clickedColorIndex === index && (
                                        <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
                                            <div
                                                style={{
                                                    width: 12,
                                                    height: 12,
                                                    left: '4px',
                                                    top: '4px',
                                                    position: 'absolute',
                                                    background: color,
                                                    borderRadius: '50%',
                                                }}
                                            />
                                            <div
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    position: 'absolute',
                                                    borderRadius: '50%',
                                                    border: '2px black solid',
                                                }}
                                            />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="product-sizes">
                        <p>Sizes:</p>
                        <div className="size-options">
                            {product.sizes.map((size, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleSizeClick(index)}
                                    className={`size-box ${
                                        selectedSizeIndex === index ? 'selected' : ''
                                    }`}
                                >
                                    <span>{size}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='add-likes'>
                    <button className="add-to-cart" onClick={() => alert('Added to cart')}>
                        Add to Cart
                    </button>
                    <img onClick={handleOpenModal} src={likes} alt="" />
                    <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
                    </div>
                    <p className="delivery-dates">
                        Estimated Delivery: <strong>{deliveryStart} - {deliveryEnd}</strong>
                    </p>

                    </div>
                    
                </div>
            </div>
       
    );
};

export default ProductDetails;
