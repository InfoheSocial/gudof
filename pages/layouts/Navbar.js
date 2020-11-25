import React, { Fragment } from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowDownward from '@material-ui/icons/ArrowDownward'
import { ArrowDropDown } from "@material-ui/icons";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1, 
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  padding: {
    paddingRight:theme.spacing(3)
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
}));

export default function Navbar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={props.menuButton}>
            <MenuIcon />
          </IconButton>
         
          <Typography variant="h6" className={classes.title}>
            gudof
          </Typography>
          <Toolbar className="menuitems">
          <Typography edge="end" variant="h6" className={classes.padding}>
            Home
          </Typography>
          <Typography edge="end" variant="h6" className={classes.padding}>
            About
          </Typography>
          <Typography edge="end" variant="h6" className={classes.padding}>
            News
            <IconButton edge="start" color="inherit">
            <ArrowDropDown />
          </IconButton>
          </Typography>
          <Typography edge="end" variant="h6" className={classes.padding}>
            Next
            <IconButton edge="start" color="inherit">
            <ArrowDropDown />
          </IconButton>
          </Typography>
          </Toolbar>
        </Toolbar>
      </AppBar>
    </div>
  );
}