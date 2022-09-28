import { spotifyClient } from "../../api";

/**
 * Get the list of markets where Spotify is available.
 * @returns {{ markets: string[] }} A markets object with an array of country codes
 */
export const getAvailableMarkets = async () => {
  const response = await spotifyClient.get(`/markets`);
  return response.data as { markets: string[] };
};
