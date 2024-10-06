import axios from "axios";
import {
  setMinusLoadingOff,
  setMinusLoadingOn,
} from "../redux/minusLoadingSlice";
import { store } from "../redux/configStore";
import { tokenLocalStorage } from "./localStorage";

export const BASE_URL = "http://localhost:3000/";

// LOADING EFFECT (SAMLL CIRCLE)
export const https_effect = axios.create({
  baseURL: BASE_URL,
});

https_effect.interceptors.request.use(
  (config) => {
    const token = tokenLocalStorage?.get() || null;

    // If token exists, add it to the request headers
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    store.dispatch(setMinusLoadingOn());
    return config;
  },
  (err) => {
    store.dispatch(setMinusLoadingOff());
    return Promise.reject(err);
  }
);

https_effect.interceptors.response.use(
  (res) => {
    store.dispatch(setMinusLoadingOff());
    return res;
  },
  (err) => {
    store.dispatch(setMinusLoadingOff());

    // if (
    //   tokenLocalStorage.get() &&
    //   err.response.data.content === "TokenExpiredError"
    // ) {
    //   store.dispatch(setIsLoginAgain(true));
    // }

    return Promise.reject(err);
  }
);

// http chung chung - no loading effect
export const https_no_effect = axios.create({
  baseURL: BASE_URL,
});

https_no_effect.interceptors.request.use(
  (config) => {
    const token = tokenLocalStorage?.get() || null;
    // If token exists, add it to the request headers
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

https_no_effect.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    return Promise.reject(err);
  }
);
