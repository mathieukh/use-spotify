import { AxiosInstance } from "axios";

export class GenresApi {
  private constructor(private readonly spotifyClient: AxiosInstance) {}

  public static fromClient(spotifyClient: AxiosInstance) {
    return new GenresApi(spotifyClient);
  }

  /**
   * Retrieve a list of available genres seed parameter values for recommendations.
   * @returns {{ genres: string[] }} A set of genres
   */
  getGenres = async () => {
    const response = await this.spotifyClient.get(
      `/recommendations/available-genre-seeds`
    );
    return response.data as { genres: string[] };
  };
}
