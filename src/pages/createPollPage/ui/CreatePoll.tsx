import React from "react";
import { IBaseComponentProps } from "src/shared/types";

type Props = IBaseComponentProps;

const CreatePoll = ({ className, ...rest }: Props) => {
  const classes = [className, "create-poll"];

  return (
    <div className={classes.join(" ")}>
      <h1>HIII</h1>
    </div>
  );
};

export default CreatePoll;
