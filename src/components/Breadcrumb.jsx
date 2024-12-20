import React from 'react';
import { Link } from 'react-router-dom';
import './BreadCrumb.css'

const Breadcrumb = ({ productTitle }) => {
  const pathNames = window.location.pathname.split('/').filter(x => x);

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
        <li className="breadcrumb-item"><Link to="/shop">Shop</Link></li>
        <li className="breadcrumb-item active" aria-current="page">{productTitle}</li>
      </ol>
    </nav>
  );
}

export default Breadcrumb;
