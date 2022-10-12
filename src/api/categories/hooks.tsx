import { useMemo } from "react";
import { useSpotifyClient } from "../hooks";
import { CategoriesApi } from "./CategoriesApi";

export const useCategoriesApi = () => {
  const spotifyClient = useSpotifyClient();
  return useMemo(
    () => CategoriesApi.fromClient(spotifyClient),
    [spotifyClient]
  );
};
