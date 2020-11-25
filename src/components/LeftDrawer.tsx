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

const drawerWidth = 240;

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
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    closeButton: {
      left: 12,
    },
    hide: {
      display: "none",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      background: "#3f51b5",
      color: theme.palette.text.secondary,
      position: "absolute",
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    toolbar: theme.mixins.toolbar,
  })
);

const LeftDrawerComponent = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const { state, actions } = useOvermind();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
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
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" component="h1">
            ADAP
          </Typography>
          <Box style={{ width: "5%" }}></Box>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton
            onClick={handleDrawerClose}
            className={classes.closeButton}
          >
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <MuiThemeProvider theme={THEME}>
          <Typography variant="h4" align="center" color="textSecondary">
            Fields
          </Typography>
          <Divider />
          <List>
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
