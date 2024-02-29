import { create } from "zustand";
import IPollResponse from "./models/types";

type Store = {
  polls: IPollResponse[];
  loading: boolean;
  error: any;
  addPoll: (pollId: string, questionId: string, answerId: string) => void;
};

const useStore = create<Store>((set, get) => ({
  polls: [],
  loading: false,
  error: null,
  addPoll(pollId, questionId, answerId) {
    const pollData: IPollResponse = { pollId, userId: "userId", answerId };
    const polls = [...get().polls, pollData];
    set({ polls });
    console.log(get().polls);
  },
}));

export default useStore;
