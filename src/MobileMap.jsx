import React from 'react';
import { makeStyles } from '@material-ui/core';

import map from './assets/images/map.jpg';
import maptoHome from './assets/images/map-to-home.png';

const useStyles = makeStyles(theme => ({
    headerContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFFFF',
    },
    buttons: {
        position: 'fixed',
        paddingTop: '3%',
        //top: 0,
        left:'50%',
    },
    button: {
        backgroundColor: 'transparent',
        cursor: 'pointer',
        border: 'none',
        //marginRight: 24,
        outline:'none',
        opacity:0.8,
    },
    buttonImage: {
        [theme.breakpoints.up('xs')]: {
            width: 200,
          },
          [theme.breakpoints.up('sm')]: {
            width: 400,
          },
    },
    map: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: 1276,
    },
}));

function MobileMap() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.headerContainer}>
                    <img className={classes.map} src={map} alt=""/>
                    <div className={classes.buttons}>
                        <a href='/'>
                            <button className={classes.button}>
                                <img src={maptoHome} className={classes.buttonImage} alt=""/>
                            </button>
                        </a>
                    </div>
            </div>
        </div>
    )
}

export default MobileMap;