import fontPackKeys from "./keys";

import { useQuery } from "react-query";
import { IPollType } from "../types";
import { pollApi } from "../../../../shared/api";

type Params = { pollType: IPollType };

const usePolls = ({ pollType }: Params) => {
  const queryKey = fontPackKeys.all(pollType);
  const queryFn = () => pollApi.version();

  return useQuery({ queryKey, queryFn });
};

export default usePolls;
