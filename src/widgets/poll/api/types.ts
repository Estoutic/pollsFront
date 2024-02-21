import { IAnswerType } from "src/entities";

export interface IPoll {
  pollId: string;
  state: boolean;
  categoryId: string;
  question: Question;
  answers: IAnswerType[];
}

export interface Question {
  questionId: string;
  description: string;
}

export type IPollType =
  | 'my'
  | 'all'
