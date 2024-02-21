import React from "react";
import { Answer, IAnswerType } from "../../../entities";
import { IBaseComponentProps } from "src/shared/types";
import { View, Group, CardGrid, Card } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import "./Poll.css";
import usePolls from "../api/hooks/usePolls";
import { IPollType } from "../api/types";

type Props = IBaseComponentProps;

const Poll = ({ className, ...rest }: Props) => {
  const classes = ["poll", className].join(" ");

  const answers: IAnswerType[] = [
    { count: 40, description: "cats" },
    { count: 60, description: "dogs" },
  ];

  const pollType: IPollType = "all";
  const { data, isError } = usePolls({ pollType });

  return (
    <div className="poll-container">
      <Group mode="plain">
        <Card mode="shadow" className={classes}>
          {answers.map((answer) => (
            <Answer
              description={answer.description}
              count={answer.count}
            ></Answer>
          ))}
        </Card>
      </Group>
    </div>
  );
};

export default Poll;
