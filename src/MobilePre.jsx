import React from 'react';
import { Helmet } from 'react-helmet';
import { makeStyles } from '@material-ui/styles';

import homepage from './assets/images/mobilehomepage.jpg';
import tomap from './assets/images/to-map.png';
import tohome from './assets/images/to-home.png';

import MobileFooter from './MobileFooter';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        backgroundColor: '#000000',
    },
    container: {
        width: '100%',

        marginLeft: 'auto',
        marginRight: 'auto',
        position: 'relative',
        paddingBottom: '210%',

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
    },
    homebutton: {
        backgroundColor: 'transparent',//'#e0e0e0',
        padding: 0,
        cursor: 'pointer',
        border: 'none',
        marginLeft: -45,
        outline:'none',
        position: 'absolute',
        left: '50%',
        top: '73.6%',
    },
    mapbutton: {
        backgroundColor: 'transparent',//'#e0e0e0',
        padding: 0,
        cursor: 'pointer',
        border: 'none',
        marginLeft: -45,
        outline:'none',
        position: 'absolute',
        left: '50%',
        top: '88%',
    },
    buttonImage: {
        height: 90,
    },
    homepage: {
        position: 'absolute',
        width: '100%',
        cursor: 'auto',
    },
}));

function MobilePre(){
    const classes = useStyles();
    return(
        <div>
            <Helmet title="新生手册"/>
            <div className={classes.root}>
                <div className={classes.container}>
                    <img className={classes.homepage} src={homepage} alt=""/>
                    <a href="/home">
                        <button className={classes.homebutton}>
                            <img src={tohome} className={classes.buttonImage} alt=""/>
                        </button>
                    </a>
                    <a href="/map">
                        <button className={classes.mapbutton}>
                            <img src={tomap} className={classes.buttonImage} alt=""/>
                        </button>
                    </a>
                </div>
            </div>
            <MobileFooter/>
        </div>
    )
}

export default MobilePre;