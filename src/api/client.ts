import axios, { AxiosRequestConfig } from "axios";

export const createSpotifyClient = (accessToken: string, overrides: AxiosRequestConfig<any> = {}) =>
  axios.create({
    baseURL: "https://api.spotify.com/v1",
    responseType: "json",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    ...overrides
  });
