import axios, { AxiosRequestHeaders } from "axios";
import { getStorage } from "../../utils";
import isEmpty from "lodash";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_DOMAIN,
  headers: {
    // Origin: `${process.env.NEXT_PUBLIC_ORIGIN_KEY}`,
    // "Ocp-Apim-Subscription-Key": `${process.env.NEXT_PUBLIC_SUBSCRIPTION_KEY}`,
    "Content-Type": "application/json; charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
    // ...(isEmpty(getStorage("accessToken"))
    //   ? undefined
    //   : {
    //       Authorization: `Bearer ${getStorage("accessToken")}`,
    //     }),
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    if (config.headers !== undefined) {
      if (!isEmpty(getStorage("accessToken"))) {
        config.headers.Authorization = `Bearer ${getStorage("accessToken")}`;
      }
    }
    console.log("Starting Request", JSON.stringify(config, null, 2));
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    console.log("response");
  },
  (error) => {
    console.log("error");
    if (error.response.status === 401) {
      window.location.href = "/";
    }
  }
);

export default axiosInstance;
