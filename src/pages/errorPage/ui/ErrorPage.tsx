import React from "react";
import "./ErrorPage.css";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1>404 Not Found</h1>
      <Link to='/'>Home</Link>
    </div>
  );
};

export default ErrorPage;
