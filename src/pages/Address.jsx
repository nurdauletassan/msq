import React, { useState } from "react";
import "./Address.css";

const Address = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    companyName: "",
    streetAddress: "",
    apartment: "",
    townCity: "",
    phoneNumber: "",
    emailAddress: "",
    saveInfo: false,
    couponCode: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="billing-container">
      {/* Left Form Section */}
      <form className="billing-form" onSubmit={handleSubmit}>
        <h2>Billing Details</h2>

        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="companyName"
          placeholder="Company Name"
          value={formData.companyName}
          onChange={handleChange}
        />

        <input
          type="text"
          name="streetAddress"
          placeholder="Street Address"
          value={formData.streetAddress}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="apartment"
          placeholder="Apartment, floor, etc."
          value={formData.apartment}
          onChange={handleChange}
        />

        <input
          type="text"
          name="townCity"
          placeholder="Town/City"
          value={formData.townCity}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="emailAddress"
          placeholder="Email Address"
          value={formData.emailAddress}
          onChange={handleChange}
          required
        />

        <div className="save-info">
            <div className="saveDiv">
                <input
                    type="checkbox"
                    name="saveInfo"
                    checked={formData.saveInfo}
                    onChange={handleChange}
                />
            </div> 
            <div>
                <p className="save-info-text">
                    Save your details for future purchases to speed up the checkout process.
                </p>
            </div>
        </div>
        
        
      </form>

      {/* Right Order Summary Section */}
      <div className="order-summary">
        <div className="summary-item">
          <p>
            <strong>LCD Monitor</strong> <span>$650</span>
          </p>
          <p>
            <strong>H1 Gamepad</strong> <span>$1100</span>
          </p>
        </div>
        <hr />
        <p>
          <strong>Subtotal:</strong> <span>$1750</span>
        </p>
        <p>
          <strong>Shipping:</strong> <span>Free</span>
        </p>
        <p>
          <strong>Total:</strong> <span>$1750</span>
        </p>

        {/* Coupon Code */}
        <div className="coupon-section">
          <input
            type="text"
            name="couponCode"
            placeholder="Coupon Code"
            value={formData.couponCode}
            onChange={handleChange}
          />
          <button type="button" className="apply-btn">
            Apply Coupon
          </button>
        </div>

        {/* Place Order Button */}
        <button className="place-order-btn" onClick={handleSubmit}>
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Address;
