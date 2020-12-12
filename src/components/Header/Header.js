import React from 'react';
import {AppBar,Toolbar,Typography,makeStyles} from '@material-ui/core'

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
  }));

function Header(props) {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h4" className={classes.title}>
                    Photo Gallery
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;