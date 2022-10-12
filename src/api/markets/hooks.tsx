import { useMemo } from "react";
import { useSpotifyClient } from "../hooks";
import { MarketsApi } from "./MarketsApi";

export const useMarketsApi = () => {
  const spotifyClient = useSpotifyClient();
  return useMemo(() => MarketsApi.fromClient(spotifyClient), [spotifyClient]);
};
