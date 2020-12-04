import React, { useCallback, useState } from "react";
import clsx from "clsx";
import { useOvermind } from "../overmind";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import MapComponent from "./Map";
import LeftDrawerComponent from "./LeftDrawer";
import BottomDrawerComponent from "./BottomDrawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Modal from "@material-ui/core/Modal";

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
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={!state.loaded}
      >
        <div />
      </Modal>
    </div>
  );
};

export default App;
