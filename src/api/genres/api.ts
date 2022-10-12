import { createSpotifyClient } from "../client";

/**
 * Retrieve a list of available genres seed parameter values for recommendations.
 * @returns {{ genres: string[] }} A set of genres
 */
export const getAvailableMarkets = async () => {
  const response = await createSpotifyClient.get(
    `/recommendations/available-genre-seeds`
  );
  return response.data as { genres: string[] };
};
