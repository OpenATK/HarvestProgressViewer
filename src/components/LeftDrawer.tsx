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
import Box from "@material-ui/core/Box";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Collapse from '@material-ui/core/Collapse';
import HelpIcon from '@material-ui/icons/Help';

const drawerWidth = 200;

const THEME = createMuiTheme({
  palette: {
    type: "dark",
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
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: "none",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaperBig: {
      width: drawerWidth,
      background: '#3f51b5',
      zIndex: 2,
      top: 64,
    },
    drawerPaperSmall: {
      width: drawerWidth,
      background: '#3f51b5',
      zIndex: 2,
      top: 56,
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
    },
  })
);

const LeftDrawerComponent = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const { state, actions } = useOvermind();
  const bigScreen = useMediaQuery('(min-width:600px)');

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    setOpen(!open);
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
            edge='start'
            className={clsx(classes.menuButton, 
                            !open && classes.hide)}
            >
            <ChevronLeftIcon />
          </IconButton>
          <Typography variant="h4" component="h1">
            ODAP
          </Typography>
          <IconButton 
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerClose}
            edge='end'>
            <HelpIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: clsx(bigScreen && classes.drawerPaperBig, 
                      !bigScreen && classes.drawerPaperSmall),
        }}
      >
        <MuiThemeProvider theme={THEME}>
          <Typography variant="h4" align="center" color="textSecondary">
            Fields
          </Typography>
          <Divider />
          <List>
            <ListItem
              button
              onClick={handleClick}>
              <ListItemIcon>
                <PlayArrowIcon />
              </ListItemIcon>
              <ListItemText primary="In progress" />
              
            </ListItem>
            <ListItem
              button>
              <ListItemIcon>
                <PlayArrowIcon />
              </ListItemIcon>
              <ListItemText primary="Not Started" />
            </ListItem>
            <ListItem
              button>
              <ListItemIcon>
                <PlayArrowIcon />
              </ListItemIcon>
              <ListItemText primary="Done" />
            </ListItem>
            {state.fields.map((text, index) => (
              <ListItem
                button
                key={text}
                onClick={() => actions.selectField(index)}
              >
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary={text} color="textSecondary" />
              </ListItem>
            ))}
          </List>
        </MuiThemeProvider>
        <Divider />
      </Drawer>
    </div>
  );
};

export default LeftDrawerComponent;
