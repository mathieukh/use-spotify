import { useMemo } from "react";
import { useSpotifyClient } from "../hooks";
import { AlbumsApi } from "./AlbumsApi";

export const useAlbumsApi = () => {
  const spotifyClient = useSpotifyClient();
  return useMemo(() => AlbumsApi.fromClient(spotifyClient), [spotifyClient]);
};
