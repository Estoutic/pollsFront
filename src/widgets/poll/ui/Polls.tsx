import React, { useEffect, useState } from "react";
import { Poll } from "../../../entities";
import { IBaseComponentProps } from "src/shared/types";
import "@vkontakte/vkui/dist/vkui.css";
import "./Poll.css";
import usePolls from "../api/hooks/usePolls";
import { IPollType } from "../api/types";
import useStore from "../../../shared/store";

type Props = IBaseComponentProps;

const Polls = ({ className, ...rest }: Props) => {
  const classes = ["poll", className];
  const pollType: IPollType = "all";

  const { data, isError, isLoading, isSuccess } = usePolls({ pollType });
  const addPoll = useStore(({ addPoll }) => addPoll);

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
      {isSuccess ? data.map((poll) => <Poll poll={poll} onClick={onClick}></Poll>) : <h1> Not okey</h1>}
    </div>
  );
};

export default Polls;
