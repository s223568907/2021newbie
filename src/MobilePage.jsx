import React, { useCallback,  useState } from 'react';

import { makeStyles } from '@material-ui/core';

import menu from './assets/images/menu.png';

import classNames from 'classnames';

const useStyles = makeStyles(theme => ({
    buttons: {
        position: 'fixed',
        top:'5%',
        right: '10.5%',
    },
    button: {
        backgroundColor: 'transparent',
        padding: 0,
        cursor: 'pointer',
        border: 'none',
        outline:'none',
        marginRight: 24,
        opacity: 0.5,
        transition: 'opacity 125ms linear',
        willChange: 'opacity',
        '&:hover': {
            opacity: 1,
        },
    },
    buttonImage: {
        height: 48,
    },
    context: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        cursor: 'auto',
    },

    root: {
        width: '100%',
        //height: '100%',
        backgroundColor: '#FFFFFF',
        //textAlign: 'center',
    },
    headContainer:{
        width: '84%',
        position: 'absolute',
        paddingTop: '2%',
        paddingBottom: '2%',
        paddingLeft: '8%', 
        paddingRight: '8%', 
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontFamily: 'Noto Sans SC',
        backgroundColor: '#ffffff',
        //borderTop: '3px solid #435BC9',
    },
    container: {
        width: '50%',
        marginLeft: 'auto',
        marginRight: 'auto',
        position: 'fixed',

        left: 0,//left: '2.85%',//document.documentElement.clientHeight*0.1,//
        top: 0,//'20%',
        //height: '12.5em',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        textAlign: 'center',
        //boxSizing: 'border-box',

        //color: '#FFFFFF',
        fontFamily: 'Noto Sans SC',
        background:'#999999',
    },
    column: {
        height: '12.5em',//0.207*window.outerHeight ,
    },
    text: {
        [theme.breakpoints.up(0)]: {
            fontSize: 14,
        },
        [theme.breakpoints.up(350)]: {
            fontSize: 19,
        },
        [theme.breakpoints.up(500)]: {
            fontSize: 24,
        },
        [theme.breakpoints.up(700)]: {
            fontSize: 34,
        },
    },
    headText: {
       // border:'3px solid #54c9e2',
        [theme.breakpoints.up(0)]: {
            fontSize: 14,
        },
        [theme.breakpoints.up(350)]: {
            fontSize: 19,
        },
        [theme.breakpoints.up(500)]: {
            fontSize: 24,
        },
        [theme.breakpoints.up(700)]: {
            fontSize: 34,
        },
    },
    link: {
        textDecoration: 'none',
        color: '#485858',
        transition: 'color 100ms linear',
        '&:active': {
            color: '#54c9e2',
        },
    },
    headlink: {
        fontFamily: 'Noto Sans SC',
        fontWeight: 'bold',
        textDecoration: 'none',
        color: '#231716',
        transition: 'color 100ms linear',
        '&:hover, &:active': {
            color: '#54c9e2',
        },
    },
    title: {
        position: 'absolute',
        left: 0,
        top: '5.9%',
        width: '100%',
        cursor: 'auto',
    },
}));

const useStylesHamburger = makeStyles({
    root: {
        position: 'fixed',
        right: 16,
        bottom: 48,
        width: 44,
        height: 44,
        borderRadius: '50%',
        backgroundColor: '#3e3e3e',
        zIndex: 100,
        opacity:0.8,
    },
    icon: {
        position: 'absolute',
        left: '10%',
        top: '10%',
        width: '80%',
        height: '80%',
        objectFit: 'contain',
        //opacity:0.8,
    },
    overlay: {
        position: 'fixed',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#000000',
        opacity: 0,
        transition: 'opacity 350ms 50ms linear',
        willChange: 'opacity',
        zIndex: 101,
        pointerEvents: 'none',
        '&$opened': {
            opacity: 0.5,
            pointerEvents: 'unset',
        },
        webkitTapHighlightColor: 'transparent',
    },
    menu: {
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        height: 340,
        backgroundColor: '#3e3e3e',
        zIndex: 102,
        transform: 'translateY(100%)',
        transition: 'transform 450ms cubic-bezier(0.4, 0, 0.2, 1)',
        willChange: 'transform',
        '&$opened': {
            transform: 'translateY(0)',
        },

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
    },
    container: {
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        position: 'fixed',

        left: 0,//left: '2.85%',//document.documentElement.clientHeight*0.1,//
        top: 0,//'20%',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        textAlign: 'center',

        fontFamily: 'Noto Sans SC',

    },
    column: {
        height: '8em',//0.207*window.outerHeight ,
    },
    text: {
        lineHeight: '2.5em',
        letterSpacing: '0.2em',
        borderBottom: '0.5px solid #1e1e1e',
        width:'100%',
        fontSize: 19,
        
    },
    link: {
        textDecoration: 'none',
        color: '#dfdfdf',
        transition: 'color 100ms linear',
        '&:hover, &:active': {
            color: '#54c9e2',
        },
    },
    opened: {},
});

function Hamburger({list,type}) {
    const classes = useStylesHamburger();
    const [opened, setOpened] = useState(false);
    const open = useCallback(() => setOpened(true), []);
    const close = useCallback(() => setOpened(false), []);
    const mylist= list.map((item, i) =>
        <a href={'/'+type+i } style={{ textDecoration:'none'}}>
            <div className={classes.text}>
                <div className={classes.link}>{item}</div>
            </div>
        </a>
        // <Link to={'/'+type+i } style={{ textDecoration:'none'}}>
        //     <div className={classes.text}>
        //         <div className={classes.link}>{item}</div>
        //     </div>
        // </Link>
    );

    return <>
        <div className={classes.root} onClick={open}>
            <img className={classes.icon} src={menu} alt="Menu Button"/>
        </div>
        <div className={classNames(classes.overlay, { [classes.opened]: opened })} onClick={close}/>
        <div className={classNames(classes.menu, { [classes.opened]: opened })} onClick={close}>
            <div className={classes.container}>
                <div className={classes.column}>
                        {mylist}
                </div>
            </div>
        </div>
    </>;
}


function MobilePage({content,list,type}) {
    const classes = useStyles();
    return (
        <div>
            <img className={classes.title} src={content} alt=""/>
            
            
            <div className={classes.headContainer}>
                <div className={classes.headText}> 
                        <a className={classes.headlink} href={'/home'} >导航</a> </div>
                <div className={classes.headText}> 
                        <a className={classes.headlink} href={'/map'} >地图</a></div>
                <div className={classes.headText}>
                        <a className={classes.headlink} href={'/training0'} >军训</a></div>
                <div className={classes.headText}>
                        <a className={classes.headlink} href={'/register0'} >报到</a></div>
                <div className={classes.headText}> 
                        <a className={classes.headlink} href={'/life0'} >生活</a></div>
                <div className={classes.headText}>
                        <a className={classes.headlink} href={'/study0'} >学习</a></div>
            </div>

            

            <Hamburger list={list} type={type}/>        
        </div>
    );
}

export default MobilePage;
