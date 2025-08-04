export const processList = [
  'FIRST_MESSAGE',
  'UNREGISTERED_CLIENT',
  'REGISTERED_CLIENT',
  'REGISTER_NAME',
  'REGISTER_PASSWORD',
] as const;

export type ProcessType = (typeof processList)[number];
