/**
 * @property {string} id - The device ID.
 * @property {boolean} is_active - If this device is the currently active device.
 * @property {boolean} is_private_session - If this device is currently in a private session.
 * @property {boolean} is_restricted - Whether controlling this device is restricted. At present if this is "true" then no Web API commands will be accepted by this device.
 * @property {string} name - A human-readable name for the device. Some devices have a name that the user can configure (e.g. "Loudest speaker") and some devices have a generic name associated with the manufacturer or device model.
 * @property {string} type - Device type, such as "computer", "smartphone" or "speaker".
 * @property {number} volume_percent - The current volume in percent. >=0 <= 100
 *
 */
export type Device = {
  readonly id: string;
  readonly is_active: boolean;
  readonly is_private_session: boolean;
  readonly is_restricted: boolean;
  readonly name: string;
  readonly type: string;
  readonly volume_percent: number;
};

export type RepeatState = "off" | "track" | "context";
export type ShuffleState = "on" | "off";
export type Offset = { position: number} | { uri: string}
