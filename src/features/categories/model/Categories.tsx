import React from "react";
import { IBaseComponentProps } from "src/shared/types";
import "./Categories.css";

type Props = IBaseComponentProps;

const categories = [
  {
    name: "Home",
    link: "feed",
  },
  {
    name: "Categories",
    link: "categories",
  },
  {
    name: "Records",
    link: "record",
  },
];

const Categories = ({ className, ...rest }: Props) => {
  const classes = ["categories", className].join(" ");

  return (
    <div className={classes}>
      {categories.map((item) => (
        <a>{item.name}</a>
      ))}
    </div>
  );
};

export default Categories;