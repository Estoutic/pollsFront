import React from "react";
import Categories from "../../../features";
import { IBaseComponentProps } from "src/shared/types";
import "./Header.css";

type Props = IBaseComponentProps;

const Header = ({ className, ...rest }: Props) => {
  const classes = ["header", className].join(" ");
  return (
    <header className={classes}>
      <h1>Polls</h1>
      <Categories></Categories>
    </header>
  );
};

export default Header;
