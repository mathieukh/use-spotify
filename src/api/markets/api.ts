import { createSpotifyClient } from "../client";

/**
 * Get the list of markets where Spotify is available.
 * @returns {{ markets: string[] }} A markets object with an array of country codes
 */
export const getAvailableMarkets = async () => {
  const response = await createSpotifyClient.get(`/markets`);
  return response.data as { markets: string[] };
};
