/**
 * @property {string} href - A link to the Web API endpoint returning the full result of the request
 * @property {T[]} items - The requested content
 * @property {number} limit - The maximum number of items in the response (as set in the query or by default).
 * @property {string | null} next - URL to the next page of items. ( null if none)
 * @property {number} offset - The offset of the items returned (as set in the query or by default)
 * @property {string | null} previous - URL to the previous page of items. ( null if none)
 * @property {number} total - The total number of items available to return.
 */
export interface PaginateResult<T> {
  readonly href: string;
  readonly items: T[];
  readonly limit: number;
  readonly next: string | null;
  readonly offset: number;
  readonly previous: string | null;
  readonly total: number;
}
