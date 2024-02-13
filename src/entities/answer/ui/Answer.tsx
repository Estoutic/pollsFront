import React from "react";
import { IBaseComponentProps } from "src/shared/types";
import AnswerType from "../models/AnswerType";
import "./Answer.css";
import { Paragraph, Text, Tappable, Progress, FormItem } from "@vkontakte/vkui";

type Props = IBaseComponentProps & AnswerType;

const Answer = ({ className, title, votes, ...rest }: Props) => {
  const classes = ["answer", className].join(" ");
  return (
    <Tappable
      className={classes}
      onClick={() => console.log("Hello")}
      activeMode="background"
      hasActive
      hasHover
    >
      <FormItem id="progresslabel" top={title}>
        <Progress aria-labelledby="progresslabel" appearance="positive" value={votes} />
      </FormItem>
    </Tappable>
  );
};

export default Answer;
