import { AxiosRequestConfig } from "axios";
import { useContext, useMemo } from "react";
import { createSpotifyClient } from "./client";
import { SpotifyApiContext } from "./provider";

export const useSpotifyClient = (overrides?: AxiosRequestConfig<any>) => {
  const spotifyApiContext = useContext(SpotifyApiContext);
  if (!spotifyApiContext)
    throw new Error("useSpotifyClient must be used within a SpotifyApiContext");
  const { accessToken } = spotifyApiContext;
  return useMemo(() => {
    return createSpotifyClient(accessToken, overrides);
  }, [accessToken, overrides]);
};
