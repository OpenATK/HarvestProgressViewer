import { Action } from "overmind";

export const selectField: Action<number> = ({ state }, id) => {
    state.selectedField = id;
    state.mapCenter.lat = state.field[0][0][0];
    state.mapCenter.lon = state.field[0][0][1];
    state.moveDone = false;
};

export const moveDone: Action<void> = ({ state }) => {
    state.moveDone = true;
};
