import { Album } from "../albums";
import { spotifyClient } from "../client";
import { Track } from "../tracks";
import { PaginateResult } from "../../types";
import { Artist } from "./types";

/**
 * Get Spotify catalog information for a single artist identified by their unique Spotify ID.
 * @param {string} id - The Spotify ID of the artist.
 * @returns {Artist} An artist
 */
export const getArtist = async ({ id }: { id: string }) => {
  const response = await spotifyClient.get(`/artists/${id}`);
  return response.data as Artist;
};

/**
 * Get Spotify catalog information for several artists based on their Spotify IDs.
 * @param {string[]} ids - List of the Spotify IDs for the artists. Maximum: 50 IDs.
 * @returns {Artist[]} A set of artists
 */
export const getArtists = async ({ ids }: { ids: string[] }) => {
  const response = await spotifyClient.get(`/artists`, {
    params: {
      ids: ids.join(","),
    },
  });
  return response.data as Artist[];
};

type IncludeGroup = "album" | "single" | "appears_on" | "compilation";

/**
 * Get Spotify catalog information about an artist's albums.
 * @param {string} id - The Spotify ID of the artist.
 * @param {IncludeGroups=} include_groups - A comma-separated list of keywords that will be used to filter the response. If not supplied, all album types will be returned.
Valid values are:
- album
- single
- appears_on
- compilation
 * @param {number=} limit - The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.
 * @param {string=} market - An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.
If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter.
Note: If neither market or user country are provided, the content is considered unavailable for the client.
Users can view the country that is associated with their account in the account settings.
 * @param {number=} offset - The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.
 * @returns {PaginateResult<Album>} Pages of content
 */
export const getArtistAlbums = async ({
  id,
  include_groups = [],
  ...params
}: {
  id: string;
  include_groups?: IncludeGroup[];
  limit?: number;
  market?: string;
  offset?: number;
}) => {
  const response = await spotifyClient.get(`/artists/${id}/albums`, {
    params: {
      include_groups,
      ...params,
    },
  });
  return response.data as PaginateResult<Album>;
};

/**
 * Get Spotify catalog information about an artist's top tracks by country.
 * @param {string} id - The Spotify ID of the artist.
 * @param {string=} market - An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.
If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter.
Note: If neither market or user country are provided, the content is considered unavailable for the client.
Users can view the country that is associated with their account in the account settings.
 * @returns {{tracks: Track[]}} A set of tracks
 */
export const getArtistTopTracks = async ({
  id,
  ...params
}: {
  id: string;
  market?: string;
}) => {
  const response = await spotifyClient.get(`/artists/${id}/top-tracks`, {
    params,
  });
  return response.data as { tracks: Track[] };
};

/**
 * Get Spotify catalog information about artists similar to a given artist. Similarity is based on analysis of the Spotify community's listening history.
 * @param {string} id - The Spotify ID of the artist.
 * @returns {{artists: Artist[]}} A set of artists
 */
export const getRelatedArtists = async ({ id }: { id: string }) => {
  const response = await spotifyClient.get(`/artists/${id}/related-artists`);
  return response.data as Artist[];
};
