// Define type of State
export type State = {
  mapCenter: { lat: number; lon: number };
  field: Array<any>;
};

// Initialize State
export const state: State = {
  mapCenter: { lat: 40.77884287, lon: -102.084164 },
  field: [
    { lat: 40.77868, lon: -102.085312 },
    { lat: 40.778583, lon: -102.090591 },
    { lat: 40.777673, lon: -102.092629 },
    { lat: 40.775544, lon: -102.094035 },
    { lat: 40.772749, lon: -102.093165 },
    { lat: 40.771498, lon: -102.091073 },
    { lat: 40.771563, lon: -102.083595 },
  ],
};
