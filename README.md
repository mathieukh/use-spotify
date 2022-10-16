<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

[![Stars][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<h3 align="center">@khalypso/use-spotify</h3>

  <p align="center">
    Typed clients over Spotify API with react hooks.
    <br />
    <br />
    <a href="https://github.com/mathieukh/use-spotify/issues">Report Bug</a>
    ·
    <a href="https://github.com/mathieukh/use-spotify/issues">Request Feature</a>
  </p>
</div>

## About The Project

A simple way to use the [Spotify web API](https://developer.spotify.com/documentation/web-api/) with typed responses and variables thanks to [TypeScript](https://www.typescriptlang.org/).

Each API can be used directly or throught hooks, the last one handling the need to update the access token when needed.

It relies on [Axios](https://axios-http.com/) to perform the requests.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [React](https://reactjs.org/)
- [Axios](https://axios-http.com/)
- [TypeScript](https://www.typescriptlang.org/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

You can easily add the package on your project to start using it

### Prerequisites

```sh
yarn add axios
```

### Installation

```sh
yarn add @khalypso/use-spotify
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

You can use each API without the need to go throught hooks.

You will have to handle by yourself the renewal of each client when the access token won't be usable anymore.

```typescript
import { createSpotifyClient, AlbumsApi } from "@khalypso/use-spotify";

const spotifyClient = createSpotifyClient("YOUR-TOKEN");

const albumsApi = AlbumsApi.fromClient(spotifyClient);

const album = await albumsApi.getAlbum({ id: "4aawyAB9vmqN3uQ7FjRGTy" });
```

Throught the hooks, the renewal of each client is done behind the hood.

```typescript
import { FC, useEffect, useMemo, useState } from "react";
import { SpotifyApiProvider, useAlbumsApi } from "@khalypso/use-spotify";

const SaveAlbumButton: FC<{ id: string }> = (id) => {
  const albumsApi = useAlbumsApi();
  return (
    <button
      onclick={() => {
        albumsApi.saveAlbums([id]);
      }}
    >
      Save
    </button>
  );
};

const HomePage: FC = () => (
  <SpotifyApiProvider accessToken={"YOUR-TOKEN"}>
    <SaveAlbumButton id={"4aawyAB9vmqN3uQ7FjRGTy"} />
  </SpotifyApiProvider>
);
```

Be aware that you might want to use a library as [react-query](https://tanstack.com/query/v4) to perform the request by itself and only use the data.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

Project Link: [https://github.com/mathieukh/use-spotify](https://github.com/mathieukh/use-spotify)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[stars-shield]: https://badgen.net/github/stars/mathieukh/use-spotify
[stars-url]: https://github.com/mathieukh/use-spotify/stargazers
[issues-shield]: https://badgen.net/github/issues/mathieukh/use-spotify
[issues-url]: https://github.com/mathieukh/use-spotify/issues
[license-shield]: https://badgen.net/github/license/mathieukh/use-spotify
[license-url]: https://github.com/mathieukh/use-spotify/blob/main/LICENSE
[product-screenshot]: images/screenshot.png
