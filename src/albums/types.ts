import { Artist } from "../artists/types";
import { Track } from "../tracks/types";
import { ExternalUrls, PaginateResult, Image } from "../types";

export type AlbumType = "album" | "single" | "compilation";

export type ReleaseDatePrecision = "year" | "month" | "day";

export type RestrictionReason = "market" | "product" | "explicit";

/**
 * @property {RestrictionReason} reason The reason for the restriction. Albums may be restricted if the content is not available in a given market, to the user's subscription type, or when the user's account is set to not play explicit content. Additional reasons may be added in the future.
 */
export type Restrictions = {
  readonly reason: string;
};

/**
 * @property {AlbumType} album_type - The type of the album.
 * @property {number} total_tracks - The number of tracks in the album.
 * @property {string[]} available_markets - The markets in which the album is available: ISO 3166-1 alpha-2 country codes. NOTE: an album is considered available in a market when at least 1 of its tracks is available in that market.
 * @property {ExternalUrls} external_urls - Known external URLs for this album
 * @property {string} href - A link to the Web API endpoint providing full details of the album.
 * @property {string} id - The Spotify ID for the album.
 * @property {Image[]} images - The cover art for the album in various sizes, widest first.
 * @property {string} name - The name of the album. In case of an album takedown, the value may be an empty string.
 * @property {string} release_date - The date the album was first released.
 * @property {ReleaseDatePrecision} release_date_precision - The precision with which release_date value is known.
 * @property {"album"} type - The object type.
 * @property {Restrictions=} restrictions - Included in the response when a content restriction is applied.
 * @property {string} uri - The Spotify URI for the album.
 * @property {Artist[]} artists - The artists of the album. Each artist object includes a link in href to more detailed information about the artist.
 * @property {Tracks} tracks - The tracks of the album.
 */
export interface Album {
  readonly album_type: string;
  readonly total_tracks: number;
  readonly available_markets: string[];
  readonly external_urls: ExternalUrls;
  readonly href: string;
  readonly id: string;
  readonly images: Image[];
  readonly name: string;
  readonly release_date: string;
  readonly release_date_precision: ReleaseDatePrecision;
  readonly restrictions?: Restrictions;
  readonly type: "album";
  readonly uri: string;
  readonly artists: Artist[];
  readonly tracks: PaginateResult<Track>;
}
