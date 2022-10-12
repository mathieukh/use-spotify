import { useMemo } from "react";
import { useSpotifyClient } from "../hooks";
import { GenresApi } from "./GenresApi";

export const useGenresApi = () => {
  const spotifyClient = useSpotifyClient();
  return useMemo(() => GenresApi.fromClient(spotifyClient), [spotifyClient]);
};
