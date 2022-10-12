import { useMemo } from "react";
import { useSpotifyClient } from "../hooks";
import { ArtistsApi } from "./ArtistsApi";

export const useArtistsApi = () => {
  const spotifyClient = useSpotifyClient();
  return useMemo(() => ArtistsApi.fromClient(spotifyClient), [spotifyClient]);
};
