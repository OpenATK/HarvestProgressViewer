import React from "react";
import clsx from "clsx";
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
  withStyles,
} from "@material-ui/core/styles";
import { useOvermind } from "../overmind";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import Collapse from "@material-ui/core/Collapse";
import HelpIcon from "@material-ui/icons/Help";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import logo from "./odap-demo-logo.png";

const drawerWidth = 200;

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const lightTheme = createMuiTheme({
  palette: {
    type: "light",
  },
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      display: "flex",
      flexGrow: 1,
      justifyContent: "space-between",
      zIndex: 2,
      background: "#1082B8",
    },
    appTitleBig: {
      margin: theme.spacing(1),
      fontWeight: 600,
      lineHeight: 1,
    },
    appTitleSmall: {
      margin: theme.spacing(1),
      fontSize: 11,
      fontWeight: 600,
      lineHeight: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    helpButton: {},
    hide: {
      display: "none",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaperBig: {
      width: drawerWidth,
      background: "#1082B8",
      zIndex: 2,
      top: 64,
      paddingBottom: 200,
    },
    drawerPaperSmall: {
      width: drawerWidth,
      background: "#1082B8",
      zIndex: 2,
      top: 56,
      paddingBottom: 180,
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
    logo: {
      height: "48px",
      width: "167px",
    },
    dialogTitle: {
      alignItems: "center",
    },
  })
);

const LeftDrawerComponent = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [inProgressMenuOpen, setInProgressMenuOpen] = React.useState(false);
  const [notStartedMenuOpen, setNotStartedMenuOpen] = React.useState(false);
  const [doneMenuOpen, setDoneMenuOpen] = React.useState(false);
  const [infoOpen, setInfoOpen] = React.useState(false);
  const { state, actions } = useOvermind();
  const bigScreen = useMediaQuery("(min-width:600px)");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const inProgressHandleClick = () => {
    setInProgressMenuOpen(!inProgressMenuOpen);
  };

  const notStartedHandleClick = () => {
    setNotStartedMenuOpen(!notStartedMenuOpen);
  };

  const doneHandleClick = () => {
    setDoneMenuOpen(!doneMenuOpen);
  };

  const infoHandleClickOpen = () => {
    setInfoOpen(true);
  };

  const infoHandleClose = () => {
    setInfoOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.appBar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerClose}
            edge="start"
            className={clsx(classes.menuButton, !open && classes.hide)}
          >
            <ChevronLeftIcon />
          </IconButton>
          <div>
            <img src={logo} alt="logo" className={classes.logo} />
          </div>
          <Typography
            variant="h5"
            className={clsx(classes.appTitleBig, !bigScreen && classes.hide)}
          >
            Harvest Progress Monitor
          </Typography>
          <Typography
            variant="h6"
            className={clsx(classes.appTitleSmall, bigScreen && classes.hide)}
          >
            <div>
              Harvest <br /> Progress <br /> Monitor
            </div>
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={infoHandleClickOpen}
            edge="end"
            className={classes.helpButton}
          >
            <HelpIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div>
        <MuiThemeProvider theme={lightTheme}>
          <Dialog
            fullScreen={!bigScreen}
            open={infoOpen}
            onClose={infoHandleClose}
            aria-labelledby="help"
            color="inherit"
          >
            <DialogTitle id="help">
              {
                "The OATS Data Automation Platform - Harvest Progress Monitor Demo"
              }
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                To view a list of the available field records, please click on
                the menu icon on the top left corner of the screen. Fields will
                be sorted by their progress status. To view the progress of a
                specific field, please select the field on the fields list. Once
                selected, the current progress will appear on the bottom bar. To
                view more details of a field progress, please click on the arrow
                on the bottom bar.
              </DialogContentText>
              <DialogContentText>
                ODAP is a web-based platform for data automation, covering data
                collection, transmission, analysis, and visualization. It is a
                coordinated attempt of developing, utilizing, and improving
                open-source hardware and software to conquer the data automation
                problem in digital agriculture.
              </DialogContentText>
              <DialogContentText>
                ODAP is a creation of Team OATS for the Producer-Led Innovation
                Challenge hosted by AgriNovus.
              </DialogContentText>
              <DialogContentText>
                2020 - Ver. 0.1.0 - Harvest Progress Monitor Demo
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={infoHandleClose}>
                OK
              </Button>
            </DialogActions>
          </Dialog>
        </MuiThemeProvider>
      </div>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: clsx(
            bigScreen && classes.drawerPaperBig,
            !bigScreen && classes.drawerPaperSmall
          ),
        }}
      >
        <MuiThemeProvider theme={darkTheme}>
          <Typography variant="h4" align="center" color="textSecondary">
            Fields
          </Typography>
          <Divider />
          <List>
            <ListItem button onClick={inProgressHandleClick}>
              <ListItemIcon>
                <PlayArrowIcon />
              </ListItemIcon>
              <ListItemText primary="In progress" />
            </ListItem>
            <Collapse in={inProgressMenuOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {state.fieldsDetail.map((obj, index) => {
                  if (obj.percentage > 0 && obj.percentage <= 0.99)
                    return (
                      <ListItem
                        button
                        key={obj.name}
                        onClick={() => actions.selectField(index)}
                        className={classes.nested}
                      >
                        <ListItemIcon>
                          <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary={obj.name}
                          color="textSecondary"
                        />
                      </ListItem>
                    );
                })}
              </List>
            </Collapse>
            <ListItem button onClick={notStartedHandleClick}>
              <ListItemIcon>
                <PlayArrowIcon />
              </ListItemIcon>
              <ListItemText primary="Not Started" />
            </ListItem>
            <Collapse in={notStartedMenuOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {state.fieldsDetail.map((obj, index) => {
                  if (obj.percentage == 0)
                    return (
                      <ListItem
                        button
                        key={obj.name}
                        onClick={() => actions.selectField(index)}
                        className={classes.nested}
                      >
                        <ListItemIcon>
                          <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary={obj.name}
                          color="textSecondary"
                        />
                      </ListItem>
                    );
                })}
              </List>
            </Collapse>
            <ListItem button onClick={doneHandleClick}>
              <ListItemIcon>
                <PlayArrowIcon />
              </ListItemIcon>
              <ListItemText primary="Done" />
            </ListItem>
            <Collapse in={doneMenuOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {state.fieldsDetail.map((obj, index) => {
                  if (obj.percentage > 0.99)
                    return (
                      <ListItem
                        button
                        key={obj.name}
                        onClick={() => actions.selectField(index)}
                        className={classes.nested}
                      >
                        <ListItemIcon>
                          <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary={obj.name}
                          color="textSecondary"
                        />
                      </ListItem>
                    );
                })}
              </List>
            </Collapse>
          </List>
        </MuiThemeProvider>
        <Divider />
      </Drawer>
    </div>
  );
};

export default LeftDrawerComponent;
