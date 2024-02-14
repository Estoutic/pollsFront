import { Paragraph } from "@vkontakte/vkui";
import React from "react";
import { IBaseComponentProps } from "src/shared/types";
import "./Cloud.css";

type Props = IBaseComponentProps;

const Cloud = ({ className, ...rest }: Props) => {
  const classes = [className, "cloud"].join(" ");

  return <div className={classes}>
    <img src="/cloud.svg" alt="cloud"/>
  </div>;
};

export default Cloud;