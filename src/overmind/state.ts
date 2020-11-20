import oadaCacheOvermind from "@oada/oada-cache-overmind";
const oada = oadaCacheOvermind("oada");

// Define type of State
export type State = {
  mapCenter: { lat: number; lon: number };
  field: Array<any>;
  oada: any;
};

// Initialize State
export const state: State = {
  oada: oada.state,
  mapCenter: { lat: 40.77884287, lon: -102.084164 },
  get field() {
    const bookmarks = this.oada?.localhost?.bookmarks;
    if (bookmarks) {
      return bookmarks.agrinovus["field-index"].Field1.field.polygon;
    } else {
      return [];
    }
  },
};
