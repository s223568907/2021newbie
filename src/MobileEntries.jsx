import { makeStyles } from '@material-ui/styles';
import React from 'react';

import homepage from './assets/images/background.png';
import tohome from './assets/images/map-to-home.png';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        backgroundColor: '#ffffff',
        //borderTop: '3px solid #435BC9',
    },
    container: {
        width: '100%',

        position: 'relative',
        paddingBottom: '865%',

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
    },
    entryContainer1: {
        position: 'absolute',
        left: '1%',//915.5,
        top: '0%',//top:-2143,/
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    entryContainer2: {
        position: 'absolute',
        right: '1%',//915.5,
        top: '25%',//top:-2143,/
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        textAlign: 'right',
    },
    entryContainer3: {
        position: 'absolute',
        right: '1%',//915.5,
        top: '53.5%',//top:-2143,/
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        textAlign: 'right',
    },
    entryContainer4: {
        position: 'absolute',
        left: '1%',//915.5,
        top: '78.5%',//top:-2143,/
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    text: {
        lineHeight: '1.5em',
        letterSpacing: '0.2em',
        fontFamily: 'Noto Sans SC',
        fontWeight: 'Bold',
        
        [theme.breakpoints.up(0)]: {
            fontSize: 24,
        },
        [theme.breakpoints.up(350)]: {
            fontSize: 26,
        },
        [theme.breakpoints.up(500)]: {
            fontSize: 32,
        },
        [theme.breakpoints.up(700)]: {
            fontSize: 34,
        },
        
    },
    link: {
        textDecoration: 'none',
        color: '#000000',
        transition: 'color 100ms linear',
        '&:hover, &:active': {
            color: '#54c9e2',
        },
    },
    buttons: {
        position: 'fixed',
        right: '1%',
        paddingTop: '1%',
    },
    button: {
        backgroundColor: 'transparent',//'#e0e0e0',
        padding: 0,
        cursor: 'pointer',
        border: 'none',
        outline:'none',
    },
    buttonImage: {
        [theme.breakpoints.up('xs')]: {
            width: 150,
          },
          [theme.breakpoints.up('sm')]: {
            width: 200,
          },
    },
    homepage: {
        position: 'absolute',
        width: '100%',
        cursor: 'auto',
    },
}));

function MobileEntries() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <img className={classes.homepage} src={homepage} alt=""/>
                        
                <div className={classes.entryContainer1}>
                    <div className={classes.text}>
                        
                        <a className={classes.link} href="/training0">????????????</a>
                        <br/>
                        <a className={classes.link} href="/training1">????????????</a>
                        <br/>
                        <a className={classes.link} href="/training2">????????????</a>
                        <br/>
                        <a className={classes.link} href="/training3">??????TIPS</a>
                        
                    </div>
                </div>

                <div className={classes.entryContainer2}>
                    <div className={classes.text}>
                        
                        <a className={classes.link} href="/register0">????????????????????????</a>
                        <br/>
                        <a className={classes.link} href="/register1">????????????</a>
                        <br/>
                        <a className={classes.link} href="/register2">????????????</a>
                        <br/>
                        <a className={classes.link} href="/register3">??????????????????</a>
                        <br/>
                        <a className={classes.link} href="/register4">??????????????????</a>
                        <br/>
                        <a className={classes.link} href="/register5">??????</a>
                        <br/>
                        <a className={classes.link} href="/register6">????????????</a>
                        
                    </div>
                </div>

                <div className={classes.entryContainer3}>
                    <div className={classes.row}>
                        <div className={classes.text}>
                            
                            <a className={classes.link} href="/life0">????????????</a>
                            <br/>
                            <a className={classes.link} href="/life1">????????????</a>
                            <br/>
                            <a className={classes.link} href="/life2">???</a>
                            <br/>
                            <a className={classes.link} href="/life3">???</a>
                            <br/>
                            <a className={classes.link} href="/life4">???</a>
                            <br/>
                            <a className={classes.link} href="/life5">???</a>
                            <br/>
                            <a className={classes.link} href="/life6">??????</a>
                            
                        </div>
                    </div>
                </div>

                <div className={classes.entryContainer4}>
                    <div className={classes.text}>
                        
                        <a className={classes.link} href="/study0">??????????????????</a>
                        <br/>
                        <a className={classes.link} href="/study1">??????</a>
                        <br/>
                        <a className={classes.link} href="/study2">????????????</a>
                        <br/>
                        <a className={classes.link} href="/study3">????????????</a>
                        <br/>
                        <a className={classes.link} href="/study4">????????????</a>
                        <br/>
                        <a className={classes.link} href="/study5">???????????????</a>
                        <br/>
                        <a className={classes.link} href="/study6">????????????</a>
                        <br/>
                        <a className={classes.link} href="/study7">????????????</a>
                        
                    </div>
                </div>

                <div className={classes.buttons}>
                    <a href="/">
                        <button className={classes.button}>
                            <img src={tohome} className={classes.buttonImage} alt=""/>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default MobileEntries;
