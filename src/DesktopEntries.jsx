import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { Link } from 'react-router-dom';

import homepage1 from './assets/images/homepage1.jpg';
import homepage2 from './assets/images/homepage2.jpg';
import homepage3 from './assets/images/homepage3.jpg';
import homepage4 from './assets/images/homepage4.jpg';

import maptoHome from './assets/images/map-to-home.png';

const useStyles = makeStyles(theme => ({
    root1: {
        width: '100%',
        background: 'linear-gradient(#b9b9bb, #FFFFFF)',
    },
    root2: {
        width: '100%',
        backgroundColor: '#c4a7dd',
    },
    root3: {
        width: '100%',
        background: 'linear-gradient(#FFFFFF, #e15b7c)',
    },
    root4: {
        width: '100%',
        backgroundColor: '#78cdb6',
    },
    container: {
        width: 1460,
        fontSize: 18,
        paddingLeft: 129.6, // 9%
        paddingRight: 129.6, // 9%

        marginLeft: 'auto',
        marginRight: 'auto',
        position: 'relative',
        height: 800,

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: '4.3em',
        boxSizing: 'border-box',
    },
    entryContainer1: {
        position: 'absolute',
        left: 0,
        top: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    entryContainer2: {
        position: 'absolute',
        right: -20,
        top: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        textAlign: 'right',
    },
    entryContainer3: {
        position: 'absolute',
        right: 0,
        top: 180,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        textAlign: 'right',
    },
    entryContainer4: {
        position: 'absolute',
        left: 0,
        top: 350,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    text: {
        lineHeight: '1.1em',
        letterSpacing: '0.2em',
        fontSize: 45,
        fontFamily: 'Noto Sans SC',
        fontWeight: 'Bold',
        //fontWeight: 500,
    },
    link: {
        textDecoration: 'none',
        color: '#000000',
        transition: 'color 100ms linear',
        '&:hover, &:active': {
            color: '#4fb8fe',
        },
    },
    homepage: {
        position: 'absolute',
        left: -20,
        top: 0,
        width: 1500,
        cursor: 'auto',
    },
    button: {
        backgroundColor: 'transparent',
        padding: 0,
        cursor: 'pointer',
        border: 'none',
        outline:'none',
        position: 'fixed',
        top: 10,
        left: 1250,
    },
    buttonImage: {
        height: 120,
    },
}));

function DesktopEntries() {
    const classes = useStyles();
    window.scrollTo(0, 0);
    return(
        <div>
            <div className={classes.root1}>
                <div className={classes.container}>
                    <img className={classes.homepage} src={homepage1} alt=""/>
                    <div className={classes.entryContainer1}>
                        <div className={classes.text}>
                            
                            <a className={classes.link} href="/training">????????????</a>
                            <br/>
                            <a className={classes.link} href="/training#630">????????????</a>
                            <br/>
                            <a className={classes.link} href="/training#1470">????????????</a>
                            <br/>
                            <a className={classes.link} href="/training#2450">??????TIPS</a>
                            
                        </div>
                    </div>
                </div>
            </div>

            <div className={classes.root2}>
                <div className={classes.container}>
                    <img className={classes.homepage} src={homepage2} alt=""/>
                    <div className={classes.entryContainer2}>
                        <div className={classes.text}>
                            
                            <a className={classes.link} href="/register">????????????????????????</a>
                            <br/>
                            <a className={classes.link} href="/register#1850">????????????</a>
                            <br/>
                            <a className={classes.link} href="/register#2480">????????????</a>
                            <br/>
                            <a className={classes.link} href="/register#3760">??????????????????</a>
                            <br/>
                            <a className={classes.link} href="/register#5340">??????????????????</a>
                            <br/>
                            <a className={classes.link} href="/register#6800">??????</a>
                            <br/>
                            <a className={classes.link} href="/register#8500">????????????</a>
                            
                        </div>
                    </div>
                </div>
            </div>

            <div className={classes.root3}>
                <div className={classes.container}>
                    <img className={classes.homepage} src={homepage3} alt=""/>
                    <div className={classes.entryContainer3}>
                        <div className={classes.row}>
                            <div className={classes.text}>
                                
                                <a className={classes.link} href="/life">????????????</a>
                                <br/>
                                <a className={classes.link} href="/life#930">????????????</a>
                                <br/>
                                <a className={classes.link} href="/life#3890">???</a>
                                <br/>
                                <a className={classes.link} href="/life#4340">???</a>
                                <br/>
                                <a className={classes.link} href="/life#5780">???</a>
                                <br/>
                                <a className={classes.link} href="/life#6810">???</a>
                                <br/>
                                <a className={classes.link} href="/life#7730">??????</a>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={classes.root4}>
                <div className={classes.container}>
                    <img className={classes.homepage} src={homepage4} alt=""/>
                    <div className={classes.entryContainer4}>
                        <div className={classes.text}>
                            
                            <a className={classes.link} href="/study">??????????????????</a>
                            <br/>
                            <a className={classes.link} href="/study#490">??????</a>
                            <br/>
                            <a className={classes.link} href="/study#3190">????????????</a>
                            <br/>
                            <a className={classes.link} href="/study#3910">????????????</a>
                            <br/>
                            <a className={classes.link} href="/study#4360">????????????</a>
                            <br/>
                            <a className={classes.link} href="/study#4890">???????????????</a>
                            <br/>
                            <a className={classes.link} href="/study#5200">????????????</a>
                            <br/>
                            <a className={classes.link} href="/study#5870">????????????</a>
                            
                        </div>
                    </div>
                </div>
            </div>
            <Link to="/">
                <button className={classes.button}>
                    <img src={maptoHome} className={classes.buttonImage} alt=""/>
                </button>
            </Link>
        </div>
    );
}

export default DesktopEntries;