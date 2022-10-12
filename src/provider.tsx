import React, { FC, PropsWithChildren } from "react";

export const SpotifyApiContext = React.createContext({ accessToken: "" });

export const SpotifyApiProvider: FC<
  PropsWithChildren<{ accessToken: string }>
> = ({ accessToken, children }) => (
  <SpotifyApiContext.Provider value={{ accessToken }}>
    {children}
  </SpotifyApiContext.Provider>
);
