import React from "react";
import { Answer, AnswerType } from "../../../entities";
import { IBaseComponentProps } from "src/shared/types";
import { View, Group, CardGrid, Card } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import "./Poll.css";

type Props = IBaseComponentProps;

const Poll = ({ className, ...rest }: Props) => {
  const classes = ["poll", className].join(" ");

  const answers: AnswerType[] = [
    { votes: 40, title: "cats" },
    { votes: 60, title: "dogs" },
  ];

  return (
      <Group mode="plain">
          <Card mode="shadow" className={classes}>
            {answers.map((answer) => (
              <Answer title={answer.title} votes={answer.votes}></Answer>
            ))}
          </Card>
      </Group>
  );
};

export default Poll;
