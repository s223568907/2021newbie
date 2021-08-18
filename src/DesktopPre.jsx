import React from 'react';
import { Helmet } from 'react-helmet';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';

import homepage from './assets/images/homepage.jpg';
import tomap from './assets/images/to-map.png';
import tohome from './assets/images/to-home.png';

import DesktopFooter from './DesktopFooter';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        backgroundColor: '#000000',
    },
    container: {
        width: 1440,
        fontSize: 18,
        paddingLeft: 129.6, // 9%
        paddingRight: 129.6, // 9%

        marginLeft: 'auto',
        marginRight: 'auto',
        position: 'relative',
        height: 832.5,

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: '4.3em',
        boxSizing: 'border-box',
    },
    homebutton: {
        backgroundColor: 'transparent',//'#e0e0e0',
        padding: 0,
        cursor: 'pointer',
        border: 'none',
        outline:'none',
        position: 'absolute',
        left: 1060,
        top: 495,
    },
    mapbutton: {
        backgroundColor: 'transparent',//'#e0e0e0',
        padding: 0,
        cursor: 'pointer',
        border: 'none',
        outline:'none',
        position: 'absolute',
        left: 960,
        top: 610,
    },
    buttonImage: {
        height: 100,
    },
    homepage: {
        position: 'absolute',
        left: -20,
        top: 0,
        width: 1480,
        cursor: 'auto',
    },
}));

function DesktopPre(){
    const classes = useStyles();
    return(
        <div>
            <Helmet title="新生手册"/>
            <div className={classes.root}>
                <div className={classes.container}>
                    <img className={classes.homepage} src={homepage} alt=""/>
                    <Link to="/home">
                        <button className={classes.homebutton}>
                            <img src={tohome} className={classes.buttonImage} alt=""/>
                        </button>
                    </Link>
                    <Link to="/map">
                        <button className={classes.mapbutton}>
                            <img src={tomap} className={classes.buttonImage} alt=""/>
                        </button>
                    </Link>
                </div>
            </div>
            <DesktopFooter/>
        </div>
    )
}

export default DesktopPre;