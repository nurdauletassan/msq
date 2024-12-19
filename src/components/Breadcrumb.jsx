import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = ({ productName }) => {
  const location = useLocation();

  const paths = location.pathname.split("/").filter((path) => path);
  const breadcrumbs = [];

  paths.forEach((path, index) => {
    const to = `/${paths.slice(0, index + 1).join("/")}`;
    const isLast = index === paths.length - 1;
    const label = path === "product" ? "Shop" : productName || path;

    breadcrumbs.push(
      isLast ? (
        <span key={to}>{label}</span>
      ) : (
        <Link key={to} to={to}>
          {label}
        </Link>
      )
    );
  });

  return (
    <div className="breadcrumb">
      <Link to="/">Home </Link> - {breadcrumbs.map((crumb, index) => (
        <React.Fragment key={index}>
          {index > 0 && " > "}
          {crumb}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumb;
