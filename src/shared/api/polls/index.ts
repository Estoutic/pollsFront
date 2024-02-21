import { AxiosInstance } from "axios";
import CustomApiClient from "../CustomApiClient";

export interface IPollServiceApi {
  version: string;
  allCategories: string;
  pollsByCategory: (id: string) => string;
}

const routes: IPollServiceApi = {
  version: "api/application/version",
  allCategories: "api/category/all",
  pollsByCategory: (id: string) => `api/category/${id}`,
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
}
