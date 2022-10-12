import { useMemo } from "react";
import { useSpotifyClient } from "../hooks";
import { PlayerApi } from "./PlayerApi";

export const usePlayerApi = () => {
  const spotifyClient = useSpotifyClient();
  return useMemo(() => PlayerApi.fromClient(spotifyClient), [spotifyClient]);
};
