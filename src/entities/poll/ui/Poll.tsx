import React from "react";
import { Group, Card, Title } from "@vkontakte/vkui";
import Answer from "../../answer/ui/Answer";
import useStore from "../../../shared/store";
import { IBaseComponentProps } from "src/shared/types";
import { IPoll } from "src/widgets/poll/api/types";
import "./Poll.css";

type Props = IBaseComponentProps & {
  poll: IPoll;
  onClick?: (pollId: string, questionId: string, answerId: string) => void;
};

const Poll = ({ className, poll, onClick, ...rest }: Props) => {

  const checkPoll = useStore(({ checkPoll }) => checkPoll);
  const classes = [className, "poll"];

  return (
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
          />
        ))}
      </Card>
    </Group>
  );
};

export default Poll;
