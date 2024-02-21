import React from "react";
import { IBaseComponentProps } from "src/shared/types";
import IAnswerType from "../models/AnswerType";
import "./Answer.css";
import { Paragraph, Text, Tappable, Progress, FormItem } from "@vkontakte/vkui";

type Props = IBaseComponentProps & IAnswerType;

const Answer = ({ className, description, count, ...rest }: Props) => {
  const classes = ["answer", className].join(" ");
  return (
    <Tappable
      className={classes}
      onClick={() => console.log("Hello")}
      activeMode="background"
      hasActive
      hasHover
    >
      <FormItem id="progresslabel" top={description}>
        <Progress aria-labelledby="progresslabel" appearance="negative" value={count} />
      </FormItem>
    </Tappable>
  );
};

export default Answer;
