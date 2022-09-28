import { useEffect } from "react";
import * as spotifyApi from "./api";

export const useSpotify = ({ authorization }: { authorization: string }) => {
  useEffect(() => {
    spotifyApi.spotifyClient.defaults.headers.common["Authorization"] =
      authorization;
  }, [authorization]);
  return spotifyApi;
};
