import React, { useState, MouseEventHandler } from "react";
import { IBaseComponentProps } from "src/shared/types";
import IAnswerType from "../models/AnswerType";
import "./Answer.css";
import {
  Paragraph,
  Text,
  Tappable,
  Progress,
  FormItem,
  ProgressProps,
} from "@vkontakte/vkui";

type Props = IBaseComponentProps &
  IAnswerType & {
    onClick: (description: string, count: number) => void;
  };

const Answer = ({ className, description, count, onClick, ...rest }: Props) => {
  const classes = ["answer", className].join(" ");
  const negativeType: ProgressProps = { appearance: "negative" };
  const positiveType: ProgressProps = { appearance: "positive" };

  const [progresType, setProgresType] = useState(negativeType);

  const handleClick: MouseEventHandler<HTMLElement> = (event) => {
    onClick(description, count);
    setProgresType(positiveType);
  };

  return (
    <Tappable
      className={classes}
      onClick={handleClick}
      activeMode="background"
      hasActive
      hasHover
    >
      <FormItem id="progresslabel" top={description}>
        <Progress
          aria-labelledby="progresslabel"
          appearance={progresType.appearance}
          value={count}
        />
      </FormItem>
    </Tappable>
  );
};

export default Answer;
