import React from "react";
import Categories from "../../../features";
import { IBaseComponentProps } from "src/shared/types";
import "./Header.css";

type Props = IBaseComponentProps;

const Header = ({ className, ...rest }: Props) => {
  const classes = ["header", className].join(" ");
  return (
    <div className={classes}>
      <div className="top-container">
        <h1>Polls</h1>
      </div>
      <Categories></Categories>
    </div>
  );
};

export default Header;
