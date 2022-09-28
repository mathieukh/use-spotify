import { spotifyClient } from "../client";
import { PaginateResult } from "../types";
import { Category } from "./types";

/**
 * Get a list of categories used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).
 * @param {string} country - A country: an ISO 3166-1 alpha-2 country code. Provide this parameter if you want to narrow the list of returned categories to those relevant to a particular country. If omitted, the returned items will be globally relevant.
 * @param {number} limit - The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.
 * @param {string} locale - The desired language, consisting of an ISO 639-1 language code and an ISO 3166-1 alpha-2 country code, joined by an underscore. For example: es_MX, meaning "Spanish (Mexico)". Provide this parameter if you want the category metadata returned in a particular language.
Note: if locale is not supplied, or if the specified language is not available, all strings will be returned in the Spotify default language (American English). The locale parameter, combined with the country parameter, may give odd results if not carefully matched. For example country=SE&locale=de_DE will return a list of categories relevant to Sweden but as German language strings.
 * @param {number}  offset - The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.
 * @returns {{ categories: PaginateResult<Category> }} A paged set of categories
 */
export const getSeveralBrowseCategories = async (
  params: {
    country?: string;
    limit?: number;
    locale?: string;
    offset?: number;
  } = {}
) => {
  const response = await spotifyClient.get(`/browse/categories`, { params });
  return response.data as { categories: PaginateResult<Category> };
};

/**
 * Get a single category used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).
 * @param {string} country - A country: an ISO 3166-1 alpha-2 country code. Provide this parameter if you want to narrow the list of returned categories to those relevant to a particular country. If omitted, the returned items will be globally relevant.
 * @param {string} locale - The desired language, consisting of an ISO 639-1 language code and an ISO 3166-1 alpha-2 country code, joined by an underscore. For example: es_MX, meaning "Spanish (Mexico)". Provide this parameter if you want the category metadata returned in a particular language.
Note: if locale is not supplied, or if the specified language is not available, all strings will be returned in the Spotify default language (American English). The locale parameter, combined with the country parameter, may give odd results if not carefully matched. For example country=SE&locale=de_DE will return a list of categories relevant to Sweden but as German language strings.
 * @returns {Category} A category
 */
export const getSingleBrowseCategories = async ({
  categoryId,
  ...params
}: {
  categoryId: string;
  country?: string;
  locale?: string;
}) => {
  const response = await spotifyClient.get(`/browse/category/${categoryId}`, {
    params,
  });
  return response.data as Category;
};
