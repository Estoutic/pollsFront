import React, { useState } from "react";
import { Answer, IAnswerType } from "../../../entities";
import { IBaseComponentProps } from "src/shared/types";
import { View, Group, CardGrid, Card, Title } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import "./Poll.css";
import usePolls from "../api/hooks/usePolls";
import { IPollType } from "../api/types";

type Props = IBaseComponentProps;

const Poll = ({ className, ...rest }: Props) => {
  const classes = ["poll", className];
  const pollType: IPollType = "all";

  const [disabled, setDisabled ] = useState(false);
  const { data, isError, isLoading, isSuccess } = usePolls({ pollType });
  console.log(data);
  const onClick = (description: string, count: number) => {
    console.log(description, count);
    setDisabled(true);
  };
  return (
    <div className="poll-container">
      {isSuccess ? (
        data.map((poll) => (
          <Group mode="plain" key={poll.pollId}>
            <Card mode="shadow" className={`${classes.join(" ")} ${disabled ? 'disabled' : ''}`}>
              <Title level="1">{poll.question.description}</Title>
              {poll.answers.map((answer) => (
                <Answer
                  description={answer.description}
                  count={answer.count}
                  key={answer.description}
                  onClick={onClick}
                ></Answer>
              ))}
            </Card>
          </Group>
        ))
      ) : (
        <h1> Not okey</h1>
      )}
    </div>
  );
};

export default Poll;
