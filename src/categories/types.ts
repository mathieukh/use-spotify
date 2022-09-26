/**
 * @property {string} url - The source URL of the image.
 * @property {number} height - The image height in pixels.
 * @property {number} width - The image width in pixels.
 */
export type Icon = {
  readonly url: string;
};

/**
 * @property {string} href - A link to the Web API endpoint returning full details of the category.
 * @property {Icon[]} icons - The category icon, in various sizes.
 * @property {string} id - The Spotify category ID of the category.
 * @property {string} name - The name of the category.
 */
export type Category = {
  readonly href: string;
  readonly icons: Icon[];
  readonly id: string;
  readonly name: string;
};
