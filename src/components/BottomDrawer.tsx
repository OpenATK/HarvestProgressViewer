import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, Theme, createStyles, withStyles } from '@material-ui/core/styles';
import { useOvermind } from "../overmind";
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import LinearProgress, { LinearProgressProps } from '@material-ui/core/LinearProgress';
import Box from '@material-ui/core/Box';
import { selectField } from '../overmind/actions';

const drawerHeight = 280;

const THEME = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });

const BorderLinearProgress = withStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 25,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#FFFFFF',
    },
  }),
)(LinearProgress);

function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <BorderLinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography
          variant="body2"
          color="textPrimary">
            {`${Math.round(props.value,)}%`}
        </Typography>
      </Box>
    </Box>
    );
  }

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'height'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      top: 'auto',
      bottom: 0,
      alignItems: 'center',
      zIndex: 3,
      background: '#1082B8'
    },
    appBarShift: {
      transition: theme.transitions.create(['margin', 'height'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      zIndex: 3,
    },
    appBarProgress: {
      transition: theme.transitions.create(['margin', 'height'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      zIndex: 3,
      alignItems: 'center',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    bottomBarButton:{
      alignItems: 'center',
    },
    hide: {
      display: 'none',
    },
    drawer: {
      height: drawerHeight,
      flexShrink: 0,
    },
    drawerPaper: {
      height: drawerHeight,
      background: '#1082B8',
      alignItems: 'center',
      width: '100%',
    },
    drawerEmptyField:{
      height: drawerHeight - 160,
      background: '#1082B8',
      alignItems: 'center',
    },
    progressBar: {
      width: '75%',
      padding: theme.spacing(2,0,4),
    }
  }),
);

function showProgress(state){
  
  if(state.selectedField === null){
    return false;
  }
  else{
    return true;
  }
}

const BottomDrawerComponent = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const { state, actions } = useOvermind();
  const [progress, setProgress] = React.useState(10);
  const showProgressBar = showProgress(state);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <MuiThemeProvider theme={THEME}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open, [classes.appBarProgress]: showProgressBar
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.bottomBarButton, open  && classes.hide)}
          >
            <ExpandLessIcon />
          </IconButton>
        </Toolbar>
        <div className={clsx(!showProgressBar && classes.hide, classes.progressBar)}>
          <LinearProgressWithLabel 
            value={progress} />
        </div>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor='bottom'
        open={open}
        classes={{
          paper: clsx(classes.drawerPaper, !showProgressBar && classes.drawerEmptyField),
        }}
      >
        <div className={classes.bottomBarButton}>
          <IconButton onClick={handleDrawerClose}>
            <ExpandMoreIcon />
          </IconButton>
        </div>
        <Divider />
        <Typography
          variant='h6'
          color="textSecondary"
          style={{ fontWeight: 600 }}
          gutterBottom>
          {state.selectedField !== null? state.fields[state.selectedField] : "(No field has been selected)"}
        </Typography>
        <div className={clsx(!showProgressBar && classes.hide)}>
          <Typography
            color="textSecondary">
            Harvest Progress 
          </Typography>
        </div>
        <div className={clsx(!showProgressBar && classes.hide, classes.progressBar)}>
          <LinearProgressWithLabel value={state.progress.percentage} />
        </div>
        <div className={clsx(!showProgressBar && classes.hide)}>
          <Typography
            color="textSecondary">
            Harvest Time: xxx hr
          </Typography>
          <Typography
            color="textSecondary">
            Total Area: xxx ac
          </Typography>
          <Typography
            color="textSecondary">
            Harvested Area: xxx ac
          </Typography>
        </div>
        </Drawer>
      </MuiThemeProvider>
    </div>
  );
}

export default BottomDrawerComponent;
