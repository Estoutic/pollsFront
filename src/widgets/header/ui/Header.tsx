import React from "react";
import Categories from "../../../features";
import { IBaseComponentProps } from "src/shared/types";
import "./Header.css";
import { Title } from "@vkontakte/vkui";

type Props = IBaseComponentProps;

const Header = ({ className, ...rest }: Props) => {
  const classes = ["header", className].join(" ");
  return (
    <header className={classes}>
      <Title level="1">Polls</Title>
      <Categories></Categories>
    </header>
  );
};

export default Header;
