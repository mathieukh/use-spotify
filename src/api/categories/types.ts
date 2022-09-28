import { Image } from "../../types";

/**
 * @property {string} href - A link to the Web API endpoint returning full details of the category.
 * @property {Icon[]} icons - The category icon, in various sizes.
 * @property {string} id - The Spotify category ID of the category.
 * @property {string} name - The name of the category.
 */
export type Category = {
  readonly href: string;
  readonly icons: Image[];
  readonly id: string;
  readonly name: string;
};
