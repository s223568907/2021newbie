import React from 'react';
import { Helmet } from 'react-helmet';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import map from './assets/images/map.jpg';
import maptoHome from './assets/images/map-to-home.png';

import DesktopFooter from './DesktopFooter';

const useStyles = makeStyles(theme => ({
    headerContainer: {
        width: '100%',
        textAlign: 'center',
        backgroundColor: '#000000',
        // display: 'flex',
        // boxSizing: 'border-box',
    },
    header: {
        position: 'relative',
        width: 1460,
        height: 1350,
        display: 'inline-block',
        backgroundColor: '#000000',
    },
    buttons: {
        position: 'absolute',
        top: 40,
        left: 1100,
    },
    button: {
        backgroundColor: 'transparent',
        padding: 0,
        cursor: 'pointer',
        border: 'none',
        outline:'none',
    },
    buttonImage: {
        height: 120,
    },
    map: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: 1460,
        //height: 3450 * scale,
        cursor: 'auto',
    },
    maptitle: {
        position: 'absolute',
        left: -20,
        top: 0,
        height: 114,
        cursor: 'auto',
    },
}));

function DesktopMap() {
    const classes = useStyles();
    //const { width: winW, height: winH } = useWindowSize();
    return (
        <div>
            <Helmet title={`地图 - 新生手册`}/>
            <div className={classes.headerContainer}>
                <div className={classes.header}>
                    <img className={classes.map} src={map} alt=""/>
                    <div className={classes.buttons}>
                        <Link to="/">
                            <button className={classes.button}>
                                <img src={maptoHome} className={classes.buttonImage} alt=""/>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        <DesktopFooter />
        </div>
    )
}

export default DesktopMap;