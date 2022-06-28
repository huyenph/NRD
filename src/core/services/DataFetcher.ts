import axios, { Method } from "axios";
import env from "../../configs/env.json";

export const dataFetcher = (
  url: string,
  method: Method | string,
  data: object | null,
  isHeaderRequired: boolean = true,
  bearer: string | null,
  isMethodPatch: boolean | null,
  isCancel: boolean | null
) => {
  // for cancelling the api start
  const cancelToken = axios.CancelToken;
  const source = cancelToken.source();

  const headers = {
    Origin: env.ORIGIN_KEY,
    "Ocp-Apim-Subscription-Key": env.HEADER_KEY,
    ...(bearer && { Authorization: `Bearer ${bearer}` }),
  };

  return axios({
    url,
    method,
    ...(data && { data }),
    ...(isHeaderRequired && { headers: { ...headers } }),
    ...(isCancel && { cancelToken: source.token }),
    withCredentials: true,
  });
};
