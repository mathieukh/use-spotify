import { spotifyClient } from "../api";
import { Track } from "../tracks/types";
import { PaginateResult } from "../types";
import { Album } from "./types";

/**
 * Get Spotify catalog information for a single album.
 * @param {string}  id - The Spotify ID of the album.
 * @param {string=} market - An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.
If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter.
Note: If neither market or user country are provided, the content is considered unavailable for the client.
Users can view the country that is associated with their account in the account settings.
 * @returns {Album} An album
 */
export const getAlbum = async ({
  id,
  ...params
}: {
  id: string;
  market?: string;
}) => {
  const response = await spotifyClient.get(`/albums/${id}`, {
    params,
  });
  return response.data as Album;
};

/**
 * Get Spotify catalog information for multiple albums identified by their Spotify IDs.
 * @param {string[]}  ids - List of the Spotify IDs for the albums. Maximum: 20 IDs.
 * @param {string=} market - An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.
If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter.
Note: If neither market or user country are provided, the content is considered unavailable for the client.
Users can view the country that is associated with their account in the account settings.
 * @returns {{ albums: Album[] }} A set of albums
 */
export const getAlbums = async ({
  ids,
  market,
}: {
  ids: string[];
  market?: string;
}) => {
  const response = await spotifyClient.get(`/albums`, {
    params: {
      market,
      ids: ids.join(","),
    },
  });
  return response.data as { albums: Album[] };
};

/**
 * Get Spotify catalog information about an album’s tracks. Optional parameters can be used to limit the number of tracks returned.
 * @param {string}  id - The Spotify ID of the album.
 * @param {number=} limit - The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.
 * @param {string=} market - An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.
If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter.
Note: If neither market or user country are provided, the content is considered unavailable for the client.
Users can view the country that is associated with their account in the account settings.
 * @param {number=} offset - The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.
 * @returns {PaginateResult<Track>} Pages of content
 */
export const getAlbumTracks = async ({
  id,
  ...params
}: {
  id: string;
  limit?: number;
  offset?: number;
  market?: string;
}) => {
  const response = await spotifyClient.get(`/albums/${id}/tracks`, {
    params,
  });
  return response.data as PaginateResult<Track>;
};

/**
 * Get a list of the albums saved in the current Spotify user's 'Your Music' library.
 * @param {number=} limit - The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.
 * @param {string=} market - An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.
If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter.
Note: If neither market or user country are provided, the content is considered unavailable for the client.
Users can view the country that is associated with their account in the account settings.
 * @param {number=} offset - The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.
 * @returns {PaginateResult<Album>} Pages of content
 */
export const getSavedAlbum = async (
  params: {
    limit?: number;
    offset?: number;
    market?: string;
  } = {}
) => {
  const response = await spotifyClient.get(`/me/albums`, {
    params,
  });
  return response.data as PaginateResult<Album>;
};

/**
 * Save one or more albums to the current user's 'Your Music' library.
 * @param {string[]} ids List of the Spotify IDs for the albums. Maximum: 20 IDs.
 */
export const saveAlbums = async (ids: string[]) => {
  const response = await spotifyClient.put(`/me/albums`, {
    ids,
  });
  return response.data as void;
};

/**
 * Remove one or more albums from the current user's 'Your Music' library.
 * @param {string[]} ids List of the Spotify IDs for the albums. Maximum: 20 IDs.
 */
export const removeAlbums = async (ids: string[]) => {
  const response = await spotifyClient.delete(`/me/albums`, {
    data: { ids },
  });
  return response.data as void;
};

/**
 * Check if one or more albums is already saved in the current Spotify user's 'Your Music' library.
 * @param {string[]} ids List of the Spotify IDs for the albums. Maximum: 20 IDs.
 */
export const checkSavedAlbums = async (ids: string[]) => {
  const response = await spotifyClient.get(`/me/albums`, {
    params: { ids },
  });
  return response.data as boolean[];
};

/**
 * Get a list of new album releases featured in Spotify (shown, for example, on a Spotify player’s “Browse” tab).
 * @param {number=} limit - The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.
 * @param {string=} country - A country: an ISO 3166-1 alpha-2 country code. Provide this parameter if you want the list of returned items to be relevant to a particular country. If omitted, the returned items will be relevant to all countries.
 * @param {number=} offset - The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.
 * @returns {PaginateResult<Album>} Pages of content
 */
export const getNewReleases = async (
  params: {
    country?: string;
    offset?: number;
    limit?: number;
  } = {}
) => {
  const response = await spotifyClient.get(`/browse/new-releases`, {
    params,
  });
  return response.data as PaginateResult<Album>;
};
