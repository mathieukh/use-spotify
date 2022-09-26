import axios from "axios";

export const spotifyClient = axios.create({
  baseURL: "https://api.spotify.com/v1",
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});
