import { spotifyClient } from "../../api";
import { Device, RepeatState } from "./types";

/**
 * Transfer playback to a new device and determine if it should start playing.
 * @param {string} device_id - ID of the device on which playback should be started/transferred.
 * @param {boolean=} play - true: ensure playback happens on new device.
false or not provided: keep the current playback state.
 */
export const transferPlayback = async ({
  device_id,
  ...data
}: {
  device_id: string;
  play?: boolean;
}) => {
  const response = await spotifyClient.put("/me/player", {
    data: {
      device_ids: [device_id],
      ...data,
    },
  });
  return response.data as void;
};

/**
 * Get information about a user’s available devices.
 * @returns {{devices: Device[]}} A set of devices
 */
export const getAvailableDevices = async () => {
  const response = await spotifyClient.get(`/me/player/devices`);
  return response.data as { devices: Device[] };
};

export type Offset = { position: number} | { uri: string}

/**
 * Start a new context or resume current playback on the user's active device.
 * @param {string=} device_id - The id of the device this command is targeting. If not supplied, the user's currently active device is the target.
 * @param {string=} context_uri - Optional. Spotify URI of the context to play. Valid contexts are albums, artists & playlists.
 * @param {string[]=} uris - Optional. List of the Spotify track URIs to play.
 * @param {Offset=} offset - Optional. Indicates from where in the context playback should start. Only available when context_uri corresponds to an album or playlist object "position" is zero based and can’t be negative. 
 * @param {number=} position_ms - The position in milliseconds to seek to. Must be a positive number. Passing in a position that is greater than the length of the track will cause the player to start playing the next song.
 */
export const startOrResumePlayback = async ({device_id, ...data}: { device_id?: string; context_uri?: string; uris?: string[]; offset?: Offset; position_ms?: number }) => {
  const response = await spotifyClient.put(`/me/player/play`, { params: { device_id }, data });
  return response.data as void;
};

/**
 * Pause playback on the user's account.
 * @param {string=} device_id - The id of the device this command is targeting. If not supplied, the user's currently active device is the target.
 */
export const pausePlayback = async (params: { device_id?: string }) => {
  const response = await spotifyClient.put(`/me/player/pause`, { params });
  return response.data as void;
};

/**
 * Skips to next track in the user’s queue.
 * @param {string=} device_id - The id of the device this command is targeting. If not supplied, the user's currently active device is the target.
 */
export const skipToNext = async (params: { device_id?: string }) => {
  const response = await spotifyClient.post(`/me/player/next`, { params });
  return response.data as void;
};

/**
 * Skips to previous track in the user’s queue.
 * @param {string=} device_id - The id of the device this command is targeting. If not supplied, the user's currently active device is the target.
 */
export const skipToPrevious = async (params: { device_id?: string }) => {
  const response = await spotifyClient.post(`/me/player/previous`, { params });
  return response.data as void;
};

/**
 * Seeks to the given position in the user’s currently playing track.
 * @param {string=} device_id - The id of the device this command is targeting. If not supplied, the user's currently active device is the target.
 * @param {number} position_ms - The position in milliseconds to seek to. Must be a positive number. Passing in a position that is greater than the length of the track will cause the player to start playing the next song.
 */
export const seekToPosition = async (params: {
  position_ms: number;
  device_id?: string;
}) => {
  const response = await spotifyClient.put(`/me/player/seek`, { params });
  return response.data as void;
};

/**
 * Set the repeat mode for the user's playback. Options are repeat-track, repeat-context, and off.
 * @param {RepeatState} state track, context or off.
track will repeat the current track.
context will repeat the current context.
off will turn repeat off.
 * @param {string=} device_id - The id of the device this command is targeting. If not supplied, the user's currently active device is the target.
 */
export const setRepeatMode = async (params: {
  state: RepeatState;
  device_id?: string;
}) => {
  const response = await spotifyClient.put(`/me/player/repeat`, { params });
  return response.data as void;
};

/**
 * Set the volume for the user’s current playback device.
 * @param {boolean} volume_percent - The volume to set. Must be a value from 0 to 100 inclusive.
 * @param {string=} device_id - The id of the device this command is targeting. If not supplied, the user's currently active device is the target.
 */
export const setPlaybackVolume = async (params: {
  volume_percent: number;
  device_id?: string;
}) => {
  const response = await spotifyClient.put(`/me/player/volume`, { params });
  return response.data as void;
};

/**
 * Toggle shuffle on or off for user’s playback.
 * @param {boolean} state - true : Shuffle user's playback.
false : Do not shuffle user's playback.
 * @param {string=} device_id - The id of the device this command is targeting. If not supplied, the user's currently active device is the target.
 */
export const toggleShufflePlayback = async (params: {
  state: boolean;
  device_id?: string;
}) => {
  const response = await spotifyClient.put(`/me/player/shuffle`, { params });
  return response.data as void;
};

/**
 * Add an item to the end of the user's current playback queue.
 * @param {string} uri - The uri of the item to add to the queue. Must be a track or an episode uri.
 * @param {string=} device_id - The id of the device this command is targeting. If not supplied, the user's currently active device is the target.
 */
export const addItemToPlaybackQueue = async (params: {
  uri: string;
  device_id?: string;
}) => {
  const response = await spotifyClient.post(`/me/player/queue`, { params });
  return response.data as void;
};
