import React from "react";
import { IBaseComponentProps } from "src/shared/types";
import "./Categories.css";
import {Link} from "react-router-dom";

type Props = IBaseComponentProps;

const categories = [
  {
    name: "Create",
    link: "/create",
  },
  {
    name: "Categories",
    link: "/categories",
  },
  {
    name: "Records",
    link: "/record",
  },
];

const Categories = ({ className, ...rest }: Props) => {
  const classes = ["categories", className].join(" ");
  return (
    <div className={classes}>
      {categories.map((item) => (
        <Link to={item.link}>{item.name}</Link>
      ))}
    </div>
  );
};

export default Categories;