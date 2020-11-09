import { Action } from "overmind";

export const selectField: Action<number> = ({ state }, id) => {
  if (id == 0) {
    state.field = [
      { lat: 40.77868, lon: -102.085312 },
      { lat: 40.778583, lon: -102.090591 },
      { lat: 40.777673, lon: -102.092629 },
      { lat: 40.775544, lon: -102.094035 },
      { lat: 40.772749, lon: -102.093165 },
      { lat: 40.771498, lon: -102.091073 },
      { lat: 40.771563, lon: -102.083595 },
    ];
  } else {
    state.field = [
      { lat: 40.793286, lon: -102.074583 },
      { lat: 40.793156, lon: -102.089561 },
      { lat: 40.786301, lon: -102.08308 },
      { lat: 40.781361, lon: -102.074969 },
    ];
  }
};
