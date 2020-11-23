import { Action } from "overmind";

export const selectField: Action<number> = ({ state }, id) => {
    state.selectedField = id;
};
