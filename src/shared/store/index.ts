import { create } from "zustand";
import IPollResponse from "./models/types";

type Store = {
  polls: IPollResponse[];
  loading: boolean;
  error: any;
  addPoll: (pollId: string, questionId: string, answerId: string) => void;
  checkPoll: (pollId: string) => boolean;
};

const useStore = create<Store>((set, get) => ({
  polls: [],
  loading: false,
  error: null,
  addPoll(pollId, questionId, answerId) {
    const pollData: IPollResponse = { pollId, userId: questionId, answerId };
    const polls = [...get().polls, pollData];
    set({ polls });
    console.log(get().polls);
  },
  checkPoll(pollId) {
    const checked = get().polls.some((poll) => poll.pollId === pollId);
    console.log(checked);
    return(checked);
    
  },
}));

export default useStore;
