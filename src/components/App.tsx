import React, { useCallback, useState } from "react";
import clsx from 'clsx';
import { useOvermind } from "../overmind";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import MapComponent from "./Map";
import LeftDrawerComponent from "./LeftDrawer";
import BottomDrawerComponent from "./BottomDrawer"
import CssBaseline from "@material-ui/core/CssBaseline";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    content: {
      flexGrow: 1,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
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
        <div className={classes.toolbar} />
          <MapComponent />
      </main>
      <BottomDrawerComponent />
    </div>
  );
};

export default App;
