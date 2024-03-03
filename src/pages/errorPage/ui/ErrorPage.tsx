import React from "react";
import "./ErrorPage.css";
import { Link } from "react-router-dom";
import { Title } from "@vkontakte/vkui";
const ErrorPage = () => {
  return (
    <div className="error-page">
      <Title level="1">404 Not Found</Title>
      <Link to='/'>Home</Link>
    </div>
  );
};

export default ErrorPage;
