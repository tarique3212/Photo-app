import React from 'react';
import {makeStyles,GridList,GridListTile} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 1000,
      height: 500,
    },
  }));
  

function Gallery({tileData}) {
    
    const classes = useStyles();
    return (
        <GridList cellHeight={400} className={classes.gridList} cols={2} 
        style={{border:"3px solid lightgray",borderRadius:"5px",margin:"20px"}}>
        {tileData.map((tile) => (
        <GridListTile key={tile.id} cols={tile.cols || 1}>
        <img src={tile.urls.small} alt={tile.title} key={tile.id}/>
        </GridListTile>
        ))}
        </GridList>
    );
}

export default Gallery;