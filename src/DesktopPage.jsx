import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core';

import tohome from './assets/images/map-to-home.png';
import tomap from './assets/images/to-map.png';
import pagelist from './assets/images/pagelist.jpg';

const useStyles = makeStyles(theme => ({
    headerContainer: {
        width: '100%',
        textAlign: 'center',
        backgroundColor: '#FFFFFF',
        boxSizing: 'border-box',
        //overflow:'auto',
    },
    header: {
        position: 'relative',
        height: '100%',
        [theme.breakpoints.up('md')]: {
            width: 960,
        },
        [theme.breakpoints.up('lg')]: {
            width: 1200,
        },
        '@media(min-width: 1440px)': {
            width: 1440,
        },
        display: 'inline-block',
    },
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
    content: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: 1484,
        //height: 3450,
        cursor: 'auto',
    },
    pagelist: {
        position: 'fixed',
        left: 0,
        top: 0,
        //width: '13.5%',
        height: 1095,//'125%',//1.14*window.outerHeight 
        cursor: 'auto',
    },

    root: {
        width: '100%',
        //height: '100%',
        backgroundColor: '#FFFFFF',
        //textAlign: 'center',
    },
    container: {
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        position: 'fixed',

        left: 42.5,//left: '2.85%',//document.documentElement.clientHeight*0.1,//
        top: 175,//'20%',
        //height: '12.5em',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        //paddingTop: '2em',
        //boxSizing: 'border-box',

        //color: '#FFFFFF',
        fontFamily: 'sans-serif',
    },
    column: {
        height: '12.5em',//0.207*window.outerHeight ,
    },
    text: {
        lineHeight: '160%',
        fontSize: 14,
    },
    link: {
        textDecoration: 'none',
        color: '#485858',
        transition: 'color 100ms linear',
        '&:hover, &:active': {
            color: '#54c9e2',
        },
    },
    download: {
        //textDecoration: 'none',
        fontSize: 17,
        color: '#485858',
        transition: 'color 100ms linear',
        '&:hover, &:active': {
            color: '#54c9e2',
        },
    },
}));

function rollpage(target)
{
    var i = window.scrollY;
    var step = (target-i)/50.0 , count = 0;
    var int = setInterval(function() {
        window.scrollTo(0, i);
        i += step;
        count++;
        if (count >= 51) clearInterval(int);
    }, 5);
    window.scrollTo(0, target);
}


function DesktopPage({content, title}) {
    const classes = useStyles();
    //const scroll = useScroll();
    //const id = this.props.location.state.target;
    var target =  (window.location.hash.length > 0 ? window.location.hash.substring(1) : "0");
    rollpage(parseFloat(target));
    return (
        <div>
            <Helmet title={`${title} - 新生手册`}/>
            <div className={classes.headerContainer}>
                <div className={classes.header}>
                    <img className={classes.content} src={content} alt=""/>
                    <img className={classes.pagelist} src={pagelist} alt=""/>
                </div>
                <div className={classes.buttons}>
                    <Link to="/">
                        <button className={classes.button}>
                            <img src={tohome} className={classes.buttonImage} alt=""/>
                        </button>
                    </Link>
                    <Link to="/map">
                        <button className={classes.button}>
                            <img src={tomap} className={classes.buttonImage} alt=""/>
                        </button>
                    </Link>
                </div>
            </div>
            
            <div className={classes.root}>
            <div className={classes.container}>
                <div className={classes.column}>
                    
                    <div className={classes.text}>
                        <a className={classes.link} href="/registration#220"
                        >浙大钉和报到流程</a>
                        <br/>
                        <a className={classes.link} href="/registration#1225"//810
                        >&emsp;必备物品清单&emsp;</a>
                        <br/>
                        <a className={classes.link} href="/registration#2155"
                        >&emsp;学校附近酒店&emsp;</a>
                        <br/>
                        <a className={classes.link} href="/registration#2865"
                        >&emsp;&emsp;&emsp;交通&emsp;&emsp;&emsp;</a>
                        <br/>
                        <a className={classes.link} href="/registration#3755"
                        >&emsp;&emsp;杭州景点&emsp;&emsp;</a>
                        <br/>
                        <a className={classes.link} href="/registration#4650"
                        >&emsp;在浙大的一天&emsp;</a>
                        <br/>
                        <a className={classes.link} href="/registration#4988"
                        >&ensp;三个学园+竺院&ensp;</a>
                        
                    </div>
                </div>
                <div className={classes.column}>
                   
                    <div className={classes.text}>
                        <a className={classes.link} href="/life#210"
                        >&emsp;&emsp;浙大词典&emsp;&emsp;</a>
                        <br/>
                        <a className={classes.link} href="/life#1135"
                        >&emsp;&emsp;常用信息&emsp;&emsp;</a>
                        <br/>
                        <a className={classes.link} href="/life#2380"
                        >&emsp;&emsp;&emsp;&ensp;衣&emsp;&emsp;&emsp;&ensp;</a>
                        <br/>
                        <a className={classes.link} href="/life#3055"
                        >&emsp;&emsp;&emsp;&ensp;食&emsp;&emsp;&emsp;&ensp;</a>
                        <br/>
                        <a className={classes.link} href="/life#3670"
                        >&emsp;&emsp;&emsp;&ensp;住&emsp;&emsp;&emsp;&ensp;</a>
                        <br/>
                        <a className={classes.link} href="/life#4160"
                        >&emsp;&emsp;&emsp;&ensp;行&emsp;&emsp;&emsp;&ensp;</a>
                        <br/>
                        <a className={classes.link} href="/life#4875"
                        >&emsp;&emsp;&emsp;安全&emsp;&emsp;&emsp;</a>
                        
                    </div>
                </div>
                <div className={classes.column}>
                    
                    <div className={classes.text}>
                        <a className={classes.link} href="/study#220"
                        >&emsp;新生养成教育&emsp;</a>
                        <br/>
                        <a className={classes.link} href="/study#420"
                        >&emsp;&emsp;&emsp;选课&emsp;&emsp;&emsp;</a>
                        <br/>
                        <a className={classes.link} href="/study#1660"
                        >&emsp;&emsp;专业分流&emsp;&emsp;</a>
                        <br/>
                        <a className={classes.link} href="/study#2080"
                        >&emsp;&emsp;日常学习&emsp;&emsp;</a>
                        <br/>
                        <a className={classes.link} href="/study#2440"
                        >&emsp;&emsp;关于绩点&emsp;&emsp;</a>
                        <br/>
                        <a className={classes.link} href="/study#2833"
                        >&emsp;&emsp;评奖评优&emsp;&emsp;</a>
                        <br/>
                        <a className={classes.link} href="/study#3225"
                        >&emsp;&emsp;七大校区&emsp;&emsp;</a>
                        <br/><br/><br/>&emsp;&ensp;
                        <a className={classes.download}
                        href="/docs/2020newbie V2.21.pdf" download="2020newbie V2.21.pdf">文档下载</a>
                    </div>
                </div>
            </div>
            </div>            
        </div>
    );
}

export default DesktopPage;
