import React, { useEffect, useState } from "react";
import { Answer, IAnswerType } from "../../../entities";
import { IBaseComponentProps } from "src/shared/types";
import { View, Group, CardGrid, Card, Title } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import "./Poll.css";
import usePolls from "../api/hooks/usePolls";
import { IPollType } from "../api/types";
import useStore from "../../../shared/store";

type Props = IBaseComponentProps;

const Poll = ({ className, ...rest }: Props) => {
  const classes = ["poll", className];
  const pollType: IPollType = "all";

  const { data, isError, isLoading, isSuccess } = usePolls({ pollType });
  const addPoll = useStore(({ addPoll }) => addPoll);
  const checkPoll = useStore(({ checkPoll }) => checkPoll);

  console.log(data);

  const [key, setKey] = useState(Date.now());

  useEffect(() => {
    console.log("Component re-rendered with key:", key);
  }, [key]);

  const onClick = (pollId: string, questionId: string, answerId: string) => {
    console.log(pollId, questionId, answerId);
    addPoll(pollId, questionId, answerId);
    setKey(Date.now());
  };

  return (
    <div className="poll-container">
      {isSuccess ? (
        data.map((poll) => (
          <Group mode="plain" key={poll.pollId}>
            <Card
              mode="shadow"
              className={`${classes.join(" ")} ${
                checkPoll(poll.pollId) ? "disabled" : ""
              }`}
            >
              <Title level="1">{poll.question.description}</Title>
              {poll.answers.map((answer) => (
                <Answer
                  pollId={poll.pollId}
                  questionId={poll.question.questionId}
                  answerId={answer.answerId}
                  description={answer.description}
                  count={answer.count}
                  key={answer.answerId}
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
