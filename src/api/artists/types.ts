import { ExternalUrls, Image } from "../types";

/**
 * @property {string} href - This will always be set to null, as the Web API does not support it at the moment.
 * @property {number} total - The total number of followers.
 */
export type Followers = {
  readonly href: string;
  readonly total: number;
};

/**
 * @property {ExternalUrls} external_urls - Known external URLs for this artist.
 * @property {Followers} followers - Information about the followers of the artist.
 * @property {string[]} genres - A list of the genres the artist is associated with. If not yet classified, the array is empty.
 * @property {string} href - A link to the Web API endpoint providing full details of the artist.
 * @property {string} id - The Spotify ID for the artist.
 * @property {Image[]} images - Images of the artist in various sizes, widest first.
 * @property {string} name - The name of the artist.
 * @property {number} popularity - The popularity of the artist. The value will be between 0 and 100, with 100 being the most popular. The artist's popularity is calculated from the popularity of all the artist's tracks.
 * @property {'artist'} type - The object type.
 * @property {string} uri - The Spotify URI for the artist.
 */
export type Artist = {
  readonly external_urls: ExternalUrls;
  readonly followers: Followers;
  readonly genres: string[];
  readonly href: string;
  readonly id: string;
  readonly images: Image[];
  readonly name: string;
  readonly type: "artist";
  readonly uri: string;
};
