import { makeStyles } from '@material-ui/styles';
import React from 'react';

const useStyles = makeStyles(theme => ({
    root: {
        [theme.breakpoints.up('xs')]: {
            width: 1480,
        },
        [theme.breakpoints.up(1480)]: {
            width: '100%',
        },
        backgroundColor: '#FFFFFF',
    },
    container: {
        width: 1440,
        fontSize: 18,
        paddingLeft: 129.6, 
        paddingRight: 129.6, 
        marginLeft: 'auto',
        marginRight: 'auto',
        position: 'relative',
        height: '12.5em',

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: '2em',
        boxSizing: 'border-box',

        color: '#000000',
        fontFamily: 'sans-serif',
    },
    column: {
        width: '12.5em',
    },
    text: {
        fontSize: 14,
        lineHeight: '1.5em',
        fontFamily: 'Noto Sans SC',
    },
    subtitle: {
        marginBottom: '1em',
        fontSize: 18,
    },
    link: {
        textDecoration: 'none',
        color: '#000000',
        transition: 'color 100ms linear',
        '&:hover, &:active': {
            color: '#54c9e2',
        },
    },
}));

function DesktopFooter() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <div className={classes.column}>
                    <div className={classes.subtitle}>版权所有</div>
                    <div className={classes.text}>
                        浙江大学求是潮<br/>
                        浙江大学党委学生工作部<br/>
                        <a className={classes.link}
                           href="http://www.beian.miit.gov.cn"
                           target="_blank"
                           rel="noreferrer noopener"
                        >浙ICP备05074421号-1</a><br/>
                        &copy;2000-2021 求是潮工作团队
                    </div>
                </div>
                <div className={classes.column}>
                    <div className={classes.subtitle}>友情链接</div>
                    <div className={classes.text}>
                        <a className={classes.link}
                           href="http://www.zju.edu.cn/"
                           target="_blank"
                           rel="noreferrer noopener"
                        >浙江大学</a>
                        <br/>
                        <a className={classes.link}
                           href="https://www.qsc.zju.edu.cn/"
                           target="_blank"
                           rel="noreferrer noopener"
                        >浙江大学求是潮网站</a><br/>
                        <a className={classes.link}
                           href="http://xszz.zju.edu.cn"
                           target="_blank"
                           rel="noreferrer noopener"
                        >浙江大学学工部</a>
                    </div>
                </div>
                <div className={classes.column}>
                    <div className={classes.subtitle}>旗下产品</div>
                    <div className={classes.text}>
                        <a className={classes.link}
                           href="https://m.zjuqsc.com/get/"
                           target="_blank"
                           rel="noreferrer noopener"
                        >Mobile求是潮手机站</a><br/>
                        <a className={classes.link}
                           href="https://box.zjuqsc.com/"
                           target="_blank"
                           rel="noreferrer noopener"
                        >Box云优盘</a><br/>
                        <a className={classes.link}
                           href="https://enroll.zjuqsc.com/"
                           target="_blank"
                           rel="noreferrer noopener"
                        >Enroll选课助手</a>
                    </div>
                </div>
                <div className={classes.column}>
                    <div className={classes.subtitle}>关于我们</div>
                    <div className={classes.text}>
                        设计实现：阿囍 云雀 渣瓦<br/>
                        技术实现：suse<br/>
                        文案：阿玛 阿T 鸡剑<br/>
                        Powered by 求是潮工作团队
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DesktopFooter;