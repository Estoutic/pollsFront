import React, { useState } from "react";
import { IBaseComponentProps } from "src/shared/types";
import "./CreatePoll.css";
import { Title } from "@vkontakte/vkui";

type Props = IBaseComponentProps;

const CreatePoll = ({ className, ...rest }: Props) => {
  const classes = [className, "create-poll"];
  
  const [question,setQuestion] = useState("");


  return (
    <div className={classes.join(" ")}>
      <Title level="1">HIII</Title>
    </div>
  );
};

export default CreatePoll;
