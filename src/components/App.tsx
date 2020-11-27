import React, { useCallback, useState } from "react";
import clsx from 'clsx';
import { useOvermind } from "../overmind";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import MapComponent from "./Map";
import LeftDrawerComponent from "./LeftDrawer";
import BottomDrawerComponent from "./BottomDrawer"
import CssBaseline from "@material-ui/core/CssBaseline";

const drawerWidth = 200;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    content: {
      flexGrow: 1,
      marginLeft: -drawerWidth,
      zIndex: 1,
    },
  })
);

const App = () => {
  const { state, actions } = useOvermind();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <LeftDrawerComponent />
      <main className={classes.content}>
        <MapComponent />
      </main>
      <BottomDrawerComponent />
    </div>
  );
};

export default App;
