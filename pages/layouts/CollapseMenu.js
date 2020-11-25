import { Collapse, Divider, List, ListItem,ListItemIcon,ListItemText } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { ArrowDropDown, ArrowDropUp } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
    list: {
      border: 1, 
    },
    listwidth: {
        maxWidth:350,
    }

}))
export default function CollapseMenu() {
    const [list,setList] = React.useState(ListDetails)
    const [bool,setBool] = React.useState(true)
    const classes = useStyles();
    const expand = (id) => {
        let newList = list;
        newList.map(
            item => (item.id===id && (item.show = !item.show))
        )
        setList(newList)
        setBool(!bool)
        
        
        
    }
    return (
        <div>
            <List className={classes.listwidth}>
               {list.map(
                   item => 
                   <div>
                    <Divider/>
                   <ListItem button className={classes.list} key={item.id} onClick={()=>expand(item.id)}>
                       <ListItemText primary={item.title}/>
                       <ListItemIcon>
                           {item.show ?<ArrowDropUp/>: <ArrowDropDown/> }
                       </ListItemIcon>

                   </ListItem>
                   <Collapse  timeout="auto" unmountOnExit={true} in={item.show}>
                            <List>
                                {item.subitems.map(
                                    subitem => 
                                    <ListItem>
                                        <ListItemText primary={subitem}/>
                                    </ListItem>
                                )}
                            </List>
                    </Collapse>
                   </div>
               )}
            </List>
        </div>
    )
}

const ListDetails = [
    {id:1,title:'Capacity',subitems:['Item1','Item2','Item3'],show:false},
    {id:2,title:'Energy Rating',subitems:['Item1','Item2','Item3'],show:false},
    {id:3,title:'Type',subitems:['Item1','Item2','Item3'],show:false}


]