import React, { Fragment } from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowDownward from '@material-ui/icons/ArrowDownward'
import { ArrowDropDown, MenuBookOutlined, SearchOutlined } from "@material-ui/icons";
import { Box, FilledInput, FormControl, Grid, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, TextField, useMediaQuery } from "@material-ui/core";
import json2mq from "json2mq";
const hp = 250;
const vp = 50;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1, 
  },
  
  box: {
      paddingRight:hp,
      paddingLeft:hp,
      paddingTop:vp,
      paddingBottom:vp
  },
  boxNoPadding : {
      padding:theme.spacing(1),
      paddingTop:10
  },
  margin: {
    marginBottom: theme.spacing(1),
  },
  adornedStart:{
      margin:theme.spacing(0),
      width:250,
  },
  paper : {
      minWidth:300,
  }

}));

const items = [
    'First','Second','Third','Fourth','Fifth','Sixth','Seventh'
]
export default function ListofItems(props) {
    const matches = useMediaQuery(
        json2mq({
          minWidth: 1000,
        }),
      );
  const classes = useStyles();
    const search = [
        {value:"all",label:"ALL"},
        {value:"second",label:"NEXT"}

    ]
  return (
    <Fragment>
       <Grid container spacing={0}  className={matches ? classes.box : classes.boxNoPadding}>
            <Grid item xs={12} sm={12}>
                    <FormControl fullWidth className={classes.margin} variant="outlined">
                        <OutlinedInput 
                            id="outlined-adornment-amount"
                            startAdornment={
                                <InputAdornment>
                                <FormControl>
                                <TextField
                                  id="search"
                                  select
                                  defaultValue="all"
                                  InputProps= {{
                                      disableUnderline:true,
                                  }}
                                //   variant="filled"
                                >
                                  {search.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                      {option.label}
                                    </MenuItem>
                                  ))}
                                </TextField>
                                </FormControl>
                                </InputAdornment>
                            }
                            endAdornment={
                                <SearchOutlined></SearchOutlined>
                            }
                        />
                    </FormControl>

                        
            </Grid>
            <Box height={80}/>
            <Grid item xs={12} sm={12}>
            <Box bgcolor={"#cccccc"} color="#000000" p={2}>
                 <Typography align="center">
                     Browse parts by Category
                 </Typography>
                 <Box height={50}/>
                 <Grid container spacing={1}>
                   {
                       items.map(
                           item=>
                           <Grid item xs={6} sm={3}>
                                <Box align="center" border={1} bgcolor={"#ffffff"} color={"#7f7f7f"} p={2}>
                                    <IconButton color="primary">
                                        <MenuBookOutlined/>
                                    </IconButton>
                                    <Box height={10}/>
                                    {item}
                                </Box>
                           </Grid>
                       )
                   }
                </Grid>

            </Box>
            </Grid>
       </Grid>
            
    </Fragment>
  );
}