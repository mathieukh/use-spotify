import { AxiosInstance } from "axios";

export class MarketsApi {
  private constructor(private readonly spotifyClient: AxiosInstance) {}

  public static fromClient(spotifyClient: AxiosInstance) {
    return new MarketsApi(spotifyClient);
  }

  getAvailableMarkets = async () => {
    const response = await this.spotifyClient.get(`/markets`);
    return response.data as { markets: string[] };
  };
}
