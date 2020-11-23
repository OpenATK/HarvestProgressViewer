import oadaCacheOvermind from "@oada/oada-cache-overmind";
const oada = oadaCacheOvermind("oada");

// Define type of State
export type State = {
  oada: any;
  connection: null | string;
  loaded: boolean;
  mapCenter: { lat: number; lon: number };
  field: Array<any>;
  fields: Array<string>;
  selectedField: null | number;
};

// Initialize State
export const state: State = {
  oada: oada.state,
  connection: null,
  loaded: false,
  selectedField: null,
  mapCenter: { lat: 40.77884287, lon: -102.084164 },
  get fields() {
    if (this.connection && this.loaded) {
      // Connected
      return Object.keys(
        this.oada[this.connection].bookmarks.agrinovus["field-index"]
      );
    } else {
      return [];
    }
  },
  get field() {
    if (this.connection && this.loaded && this.selectedField !== null) {
      const selectedFieldName = this.fields[this.selectedField];
      return this.oada[this.connection].bookmarks.agrinovus["field-index"][
        selectedFieldName
      ].field.polygon;
    } else {
      return [];
    }
  },
};
