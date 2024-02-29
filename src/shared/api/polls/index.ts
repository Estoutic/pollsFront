import { AxiosInstance } from "axios";
import { IPoll } from "src/widgets/poll/api/types";
import CustomApiClient from "../CustomApiClient";

export interface IPollServiceApi {
  version: string;
  allCategories: string;
  pollsByCategory: (id: string) => string;
  allPolls: string;
}

const routes: IPollServiceApi = {
  version: "api/application/version",
  allCategories: "api/category/all",
  pollsByCategory: (id: string) => `api/category/${id}`,
  allPolls: "api/poll/all",
};

export class PollApi extends CustomApiClient<IPollServiceApi> {
  constructor(mainHttpClient: AxiosInstance) {
    super(mainHttpClient, routes);
  }

  version(): Promise<any> {
    return this.client
      .get<string>(this.methods.version)
      .then(({ data }) => data);
  }

  getAllPolls(): Promise<IPoll[]> {
    return this.client
      .get<IPoll[]>(this.methods.allPolls)
      .then(({ data }) => data);
  }
}
