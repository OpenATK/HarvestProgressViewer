import React, { useCallback, useState } from "react";
import { useOvermind } from "../overmind";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import MapComponent from "./Map";
import DrawerComponent from "./Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
    },
  })
);

const App = () => {
  const { state, actions } = useOvermind();
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <DrawerComponent />
      <main className={classes.content}>
        <MapComponent />
      </main>
    </div>
  );
};

export default App;
