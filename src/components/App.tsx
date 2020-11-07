import React, { useCallback, useState } from "react";
import { useOvermind } from "../overmind";
import { withStyles } from "@material-ui/core/styles";
import MapComponent from "./Map";

const App = () => {
    const { state, actions } = useOvermind();
    return (
        <div>
            <MapComponent />
        </div>
    );
};

export default App;
