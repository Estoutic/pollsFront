import React from "react";
import { IBaseComponentProps } from "src/shared/types";
import { Header, Poll } from "../../..//widgets";
import "./Feed.css";

type Props = IBaseComponentProps;

const Feed = ({ className, ...rest }: Props) => {
  const classes = ["feed", className].join(" ");

  return (
    <>
      <div className={classes}>

        <Header></Header>
        <Poll></Poll>
      </div>
    </>
  );
};

export default Feed;
