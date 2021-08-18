import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core';

import tohome from './assets/images/to-home.png';
import tomap from './assets/images/to-map.png';
import top from './assets/images/lifeTop.png';
import bottom from './assets/images/lifeBottom.png';

const useStyles = makeStyles(theme =>({
    headerContainer: {
        width: '100%',
        height: 8700,
        textAlign: 'center',
        boxSizing: 'border-box',
        background: 'linear-gradient(#FFFFFF, #e15b7c)',
    },
    buttons: {
        position: 'fixed',
        bottom: '10%',
        left: 28,
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
        height: 60,
    },
    top: {
        position: 'absolute',
        left: 200,
        top: 0,
        width: 1319,
        cursor: 'auto',
    },
    bottom: {
        position: 'absolute',
        left: 200,
        bottom: -7910,
        width: 1319,
        cursor: 'auto',
    },
    pagelist: {
        position: 'fixed',
        left: 0,
        top: 0,
        width: 200,
        height: '125%',
        cursor: 'auto',
        backgroundColor: '#FFFFFF',
    },
    container: {
        width: 180,
        marginLeft: 'auto',
        marginRight: 'auto',
        position: 'fixed',

        left: 10,//left: '2.85%',//document.documentElement.clientHeight*0.1,//
        top: 0,//'20%',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    bigtitle: {
        width: 200,
        position: 'fixed',
        top: 146,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#e56c8a',
    },
    title: {
        textDecoration: 'none',
        color: '#000000',
        fontFamily: 'Noto Sans SC',
        fontWeight: 'Bold',
        lineHeight: '1.5em',
        letterSpacing: '0.2em',
        fontSize: 45,
        transition: 'color 100ms linear',
        '&:hover, &:active': {
            color: '#54c9e2',
        },
    },
    link: {
        backgroundColor: '#fae0e6',
        textDecoration: 'none',
        color: '#000000',
        fontFamily: 'Noto Sans SC',
        lineHeight: '1.5em',
        letterSpacing: '0.1em',
        fontSize: 26,
        transition: 'color 100ms linear',
        '&:hover, &:active': {
            color: '#54c9e2',
        },
    },
    blank: {
        lineHeight: '0.2em',
        fontSize: 30,
    },
    text: {
        width: 1230,
        position: 'absolute',
        fontFamily: 'Noto Sans SC',
        top: 210,
        left: 250,
        textAlign: 'left',
    },
    title1: {
        fontSize: 34,
        lineHeight: '1.5em',
    },
    title2: {
        fontSize: 28,
        lineHeight: '1.5em',
    },
    content1: {
        fontSize: 24,
        lineHeight: '1.2em',
    },
}));

function rollpage(target){
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

function DesktopLife() {
    const classes = useStyles();
    var target =  (window.location.hash.length > 0 ? window.location.hash.substring(1) : "0");
    rollpage(parseFloat(target));
    return (
        <div>
            <Helmet title={`生活 - 新生手册`}/>
            <div className={classes.headerContainer}>
                
                <img className={classes.top} src={top} alt=""/>
                <img className={classes.bottom} src={bottom} alt=""/>

                <div className={classes.pagelist}>
                    <div className={classes.container}>
                        <a className={classes.title} href="/training">军训</a>
                        <div className={classes.blank}><br/></div>
                        <a className={classes.title} href="/register">报到</a>
                        <div className={classes.blank}><br/></div>
                        <a className={classes.title} href="/life">生活</a>
                        <div className={classes.blank}><br/></div>
                        <a className={classes.link} href="/life#210">浙大词典</a>
                        <div className={classes.blank}><br/></div>
                        <a className={classes.link} href="/life#930">常用信息</a>
                        <div className={classes.blank}><br/></div>
                        <a className={classes.link} href="/life#3890">衣</a>
                        <div className={classes.blank}><br/></div>
                        <a className={classes.link} href="/life#4340">食</a>
                        <div className={classes.blank}><br/></div>
                        <a className={classes.link} href="/life#5780">住</a>
                        <div className={classes.blank}><br/></div>
                        <a className={classes.link} href="/life#6810">行</a>
                        <div className={classes.blank}><br/></div>
                        <a className={classes.link} href="/life#7730">安全</a>
                        <div className={classes.blank}><br/></div>
                        
                        <a className={classes.title} href="/study">学习</a>
                    </div>
                    <div className={classes.bigtitle}>
                        <a className={classes.title} href="/life">生活</a>
                    </div>
                </div>
                <div className={classes.buttons}>
                    <Link to="/home">
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

                <div className={classes.text}>
                    <div className={classes.title1}>一、浙大词典</div>
                    <div className={classes.content1}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>BG</b>&nbsp;据传在很久很久以前，当浙大学子完成论文后准备请客吃饭时，都要在玉泉校区正门口那棵大松树下与众人集合。久而久之，那棵树渐渐有了自己的名字——“报告树”。后人因此将这个赴宴的过程叫做“听报告”，请客一词也被称为“报告”。报告的拼音缩写为BG，BG一词由此而来。如今在浙大，BG已经与“请客”划上了等号。
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>两个问题</b>&nbsp;竺可桢老校长提出的两个问题：“诸位在校，有两个问题应该自己问问：第一，到浙大来做什么？第二，将来毕业后做什么样的人？”
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>堕落街</b>&nbsp;浙大紫金港校区附近的一条著名小吃街，又被某些老师戏称为“垃圾街”。顾名思义，堕落街上除了正规店铺外，还有各种各样的小吃摊贩。虽然入口美味，但食品安全问题却令人担忧。正所谓：小吃怡情，大吃伤身。
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>北街</b>&nbsp;从蓝田学院大门口的北部通道出去，在紫金港校区正北方的一条集文印，咖啡馆， 干洗店，超市于一体的一条小街。（还有乐器售卖哦）。
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>小龟</b>&nbsp;浙大校园里的电动车，由于外形像乌龟，故被称为“小龟”。 
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>求是X</b>&nbsp;浙大校训为求是创新，所以浙大里充斥着求是x。例如：浙大的校徽叫做求是鹰；浙大的流浪狗叫做求是狗；浙大之江校区的虫子叫做求是虫；浙大的民间吉祥物叫做求是鸡。求是文化在浙大无处不在，快来发现你的求是X吧！
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>浙大鸡腿</b>&nbsp;浙大有名的小吃，各大烧烤摊有售。
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>学渣粽</b>&nbsp;有的学生一起床就快赶不上上课了，更别说去食堂吃早饭。为了填饱肚子，只好在学园门口的便利店里买个粽子当早饭，这种行为本身很学渣，故称“学渣粽”。
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>刷夜</b>&nbsp;何为刷夜？刷夜就是与朋友一同前往不断电的场所通宵学习。刷夜何为？刷夜是拖延症患者挽救绩点的最后挣扎。用漫漫长夜，补回所欠下的学习债。（不建议非理性刷夜，要根据自身身体情况而定。）
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>破冰</b>&nbsp;这个叫法起源于冰山理论，冰山理论是指人就像一座冰山一样，显意识的部分只占了很少比例，而占更多比例是不易被分辩的潜意识。破冰的作用在于把人的注意力引到当下，使人不容易被潜意识所影响，这样就可以达到团队融合的效果，避免团队间猜忌、疏远现象的发生。每个班级成立之初、每个组织在纳新结束后都会组织破冰活动来增进成员之间的感情。
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>打卡</b>&nbsp;运动打卡，一学期要满48次，打卡次数将计入体育成绩。
                        <br/>
                    </div>
                    <div className={classes.title1}>二、 常用信息</div>
                    <div className={classes.title2}>1. 办事网点</div>
                    <div className={classes.content1}>
                        <b>（1）综合</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>启真便利</b>&nbsp;各学园生活区。
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>浙大教育超市</b>&nbsp;大食堂一楼、小剧场沿街、医学院一楼、北街。
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>全家</b>&nbsp;丹青门口、翠柏门口、大西区生活区。
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;便利店、教超和校内全家均营业到晚11点，既可刷校园卡也可付现金、支付宝。
                        <br/>
                        <b>（2）食品</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>水果店</b>&nbsp;各学园生活区。
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>面包/甜品/茶饮店</b>&nbsp;东1、西1教学楼一楼、大西区食堂1楼、东2教学楼。
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>茶叶店</b>&nbsp;青溪4舍一楼。
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>品牌店</b>&nbsp;东区大食堂对面瑞幸咖啡、翠柏门口一鸣真鲜奶吧、大西区食堂对面星巴克、大西区食堂对面一鸣真鲜奶吧。
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一般情况下，面包店会一直开到约每晚12点，重大节假日说不定还会放假，这取决于老板的心情。蓝田门口的水果店有时候会开到两点，回来很晚也是可以买到吃的呢。
                        <br/>
                        <b>（3）文体</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>书店</b>&nbsp;图书馆外一楼晓风书屋、丹阳沿街、紫云沿街、蓝田沿街。开学之后购买教材可以到书店去淘淘宝， 有很多二手书五折出售，但是却都还很新，其中也不乏学霸笔记。
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>礼品文具</b>&nbsp;各学园生活区。
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>室内健身</b>&nbsp;风雨操场、各学园健身房、游泳馆健身房、东教学楼学生文化长廊。各学园健身房一般在学园其中一栋宿舍楼中，向全体学生免费开放，即使在男生宿舍楼中女生也是可以使用的；游泳馆健身房和东教育楼学生文化长廊健身房均需收费，也可以购买多次卡。均开设私教课程，课程价格均低于校外同级别课程价格。
                        <br/>
                        <b>（4）文印</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>自助打印</b>&nbsp;基础图书馆二楼和三楼、西1一楼、东2一楼、东4一楼。
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>生活区打印店</b>&nbsp;各学园生活区、小剧场一楼、白沙综合楼一楼。
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>教学区文印店</b>&nbsp;农生环动科院楼下绘图打印店。
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>绘图打印店</b>&nbsp;月牙楼三楼。
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;去打印带U盘担心中毒？不如试试浙大的
                        <a style={{color: "black"}} href='https://www.qsc.zju.edu.cn/box/'>云U盘产品Box</a>
                        吧。
                        <br/>
                        <b>（5）ATM</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>建行ATM</b>&nbsp;白沙综合楼一楼建行网点 、小剧场一楼、东6计财处旁。
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>农行ATM</b>&nbsp;白沙综合楼沿街农行网点、碧峰沿街、丹青门口。
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>中行ATM</b>&nbsp;小剧场一楼、休闲食堂（文化广场侧）门口。
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>中信银行ATM</b>&nbsp;风味食堂门口。
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如需将建设银行银行卡开通网银、快捷支付等功能，请到白沙综合楼一楼网点办理。
                        <br/>
                        <b>（6）邮递</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>白沙菜鸟驿站</b>&nbsp;信件/EMS&百世/申通/顺丰/中通/圆通/韵达、白沙邮局（邮政三墩支局）。邮政编码：310058。邮政服务时间：9:00-15:30，寒暑假服务时间：8:30-17:00。快递取件时间：24小时。8:30-19:00有人工取件和柜台咨询，19:00后仅设自助取件，从后门刷校卡即可进入。快递寄递时间：8:30-18:30。
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>京东派</b>&nbsp;京东/当当，北街港湾家园沿街。
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>北街北二门</b>&nbsp;天猫超市/极速达，北街北2门处。
                        <br/>
                        <b>（7）维修维护</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>配钥匙/修表/拉链</b>&nbsp;翠柏沿街。
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>修伞/拉杆箱</b>&nbsp;定时出现在云峰/丹青/蓝田门口。
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>修自行车</b>&nbsp;翠柏街角安琪儿自行车旁。
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>移动网点/短号办理/手机维修</b>&nbsp;白沙综合楼二楼。
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>电信网点/闪讯办理</b>&nbsp;大食堂北侧丹阳沿街。
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>计算机维修</b>&nbsp;蓝田沿街、白沙综合楼一楼二楼、堕落街、东三204“e志者”协会。
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>手机维修</b>&nbsp;北街、堕落街维修店。
                        <br/>
                        <b>（8）自行车、电动车售卖与维修</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>安琪儿</b>&nbsp;青溪宿舍与翠柏宿舍之间的路口。
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>望月车店</b>&nbsp;堕落街望月公寓内（售二手车，电动车）。
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>北街车行</b>&nbsp;北街临街店铺。
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;朵朵上会有许多人出售闲置的自行车/电动车。
                        <br/>
                        <b>（9）其它</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>照相馆</b>&nbsp;翠柏沿街。
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>眼镜店</b>&nbsp;蓝田沿街、白沙综合楼、小剧场后门、北街。
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>理发店</b>&nbsp;翠柏沿街、蓝田沿街、北街、西溪银泰（近大西区校门）。
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>正装租赁</b>&nbsp;北街、蓝田街上。
                        <br/>
                    </div>
                    <div className={classes.title2}>2.  校园网络</div>
                    <div className={classes.content1}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>校园VPN宽带</b>&nbsp;学校为每位新生都免费开通了校园VPN宽带，账号即为学号，初始密码为身份证后六位，同学们到校后在学生宿舍、教学区内可直接使用该VPN账号通过有线或无线网的方式访问所有校内外网络。
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>有线网络（VPN）</b>&nbsp;学校在宿舍为每个同学都配备了上网端口，大家只需自带网线就可以上网啦。目前有线网络有10M、30M、50M 三种套餐，每月对应的费用分别是10元、30元、50元。同学们可以根据需要任意选择其中一种。
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>无线网络（ZJUWLAN）</b>&nbsp;浙大校园无线网络全覆盖，开学第一个月新生可以免费使用。第一个月后将收取每个月10元的网络缴费。可以通过浙大钉办事大厅或者浙大校园卡app进行网络缴费。使用方法：连接 SSID名为“ZJUWLAN”的无线信号，连接后点击任一网页，就会自动跳转到认证页面，输入用户名和密码即可登录。
                        <br/>
                    </div>
                    <div className={classes.title2}>3. 重要网站汇总</div>
                    <div className={classes.content1}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>浙江大学官网</b>&nbsp;
                        <a style={{color: "black"}} href="http://www.zju.edu.cn/">http://www.zju.edu.cn/</a>
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>浙江大学党委学生工作部</b>&nbsp;
                        <a style={{color: "black"}} href="http://www.xgb.zju.edu.cn/">/http://www.xgb.zju.edu.cn</a>
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>浙江大学现代教务管理系统</b>&nbsp;
                        <a style={{color: "black"}} href="http://jwbinfosys.zju.edu.cn/">http://jwbinfosys.zju.edu.cn/</a>
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>浙江大学本科生院</b>&nbsp;
                        <a style={{color: "black"}} href="https://ugrs.zju.edu.cn/">https://ugrs.zju.edu.cn/</a>
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>浙江大学紫云碧峰学园</b>&nbsp;
                        <a style={{color: "black"}} href="https://yunfeng.zju.edu.cn/">https://yunfeng.zju.edu.cn/</a>
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>浙江大学丹阳青溪学园</b>&nbsp;
                        <a style={{color: "black"}} href="https://dqxy.zju.edu.cn/">https://dqxy.zju.edu.cn/</a>
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>浙江大学蓝田学园</b>&nbsp;
                        <a style={{color: "black"}} href="http://lantian.zju.edu.cn/ltoffice/main.htm">http://lantian.zju.edu.cn/ltoffice/main.htm</a>
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>浙江大学竺可桢学院</b>&nbsp;
                        <a style={{color: "black"}} href="http://ckc.zju.edu.cn/">http://ckc.zju.edu.cn/</a>
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>图书馆</b>&nbsp;
                        <a style={{color: "black"}} href="https://libweb.zju.edu.cn/">https://libweb.zju.edu.cn/</a>
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>浙江大学素质拓展网</b>&nbsp;
                        <a style={{color: "black"}} href="http://www.youth.zju.edu.cn/sztz/">http://www.youth.zju.edu.cn/sztz/</a>
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>浙江大学网络运行系统</b>&nbsp;
                        <a style={{color: "black"}} href="浙江大学网络运行系统">浙江大学网络运行系统</a>
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>浙江大学RVPN服务系统</b>&nbsp;
                        <a style={{color: "black"}} href="http://rvpn.zju.edu.cn">http://rvpn.zju.edu.cn</a>
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>浙江大学CC98论坛</b>&nbsp;
                        <a style={{color: "black"}} href="http://www.cc98.org">http://www.cc98.org</a>
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>浙江大学团委</b>&nbsp;
                        <a style={{color: "black"}} href="http://www.youth.zju.edu.cn">http://www.youth.zju.edu.cn</a>
                        <br/>
                    </div>
                    <div className={classes.title2}>4. 重要联系方式</div>
                    <div className={classes.content1}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>保卫处</b>&nbsp;0571-88206110
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>图书馆</b>&nbsp;0571-88206530
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>信息中心</b>&nbsp;0571-87952726
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>学籍中心</b>&nbsp;0571-88208655
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>课程中心</b>&nbsp;0571-88206187
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>教学资源管理中心</b>&nbsp;0571-88981122
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>通识教育中心</b>&nbsp;0571-88206095
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>心理健康教育与咨询中心</b>&nbsp;0571-88206286
                        <br/>
                    </div>
                    <div className={classes.title2}>5. 校内平台</div>
                    <div className={classes.content1}>
                        <b>（1）CC98</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;浙江大学CC98论坛是为校友提供交流平台的校园论坛，具有多个板块，满足同学们日常生活中的多种需求。现有设立网页版和手机小程序版本，需要通过学号实名注册，一个学号可以注册五个账号，需要链接校园网络才能登陆。
                        <br/>
                        <b>（2）朵朵校友圈</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;浙大云朵朵是为校友提供的社交平台，相比于CC98更加日常和随意，有朵朵十大、羊毛团、攒局等多种功能，可以让同学们在大学生活中结实更多的好友，也可以让你紧跟校园动态，关注校园里发生的新鲜事。需要通过学号实名注册，一个学号可以注册一个账号。
                        <br/>
                    </div>
                    <div className={classes.title1}>三、衣</div>
                    <div className={classes.title2}>1. 洗衣服</div>
                    <div className={classes.content1}>
                        <b>（1）手洗</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;手洗是省钱又干净的方法，也是无论如何都无法避免的，小编推荐可以和室友共同买一桶手洗专用洗衣液（一般来说开学教超会有优惠），然后买两个盆以作备用。
                        <br/>
                        <b>（2）洗衣机</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;部分宿舍是可以申请用洗衣机的（建议咨询楼长），可以趁父母还没走时候去附近商场买，当然更多人还是选择网购。在这里插入重要提示！网购洗衣机的时候一定要看好功率（宿舍用洗衣机有功率要求）、容量（千万避开婴儿衣物清洗机）、排水管（是否有以及是否和寝室管道匹配）、甩干功能（这个真的很重要）以及价格。
                        <br/>
                        <b>（3）洗衣房</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;宿舍区有洗衣房，价格不高，但是去洗的人比较多，衣物比较混乱，需要做好消毒工作和及时收取衣物。大洗衣房洗鞋。
                        <br/>
                    </div>
                    <div className={classes.title2}>2. 熨衣服</div>
                    <div className={classes.content1}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;部分宿舍楼下有提供免费的挂烫机（电熨斗是违章电器，不允许私自携带）。
                    </div>
                    <div className={classes.title1}>四、食</div>
                    <div className={classes.title2}>1. 食堂</div>
                    <div className={classes.content1}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;紫金港校区有八个食堂，分别是风味；休闲；三楼接待餐厅；东二楼；留学生食堂；临湖；麦香；大西区食堂，前五个都在大食堂之中。留学生食堂和大西区食堂在大西区，临湖食堂坐落于小剧场，麦香食堂位于紫金港南端的李摩西医学图书馆一楼。玉泉校区的食天一隅网红餐厅，也非常值得打卡哦。
                        <br/>
                        <b>（1）大食堂</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这里是同学们用餐的主战场，中午和晚上饭点的时候人会比较多，当然平时还会有一些校外人士光顾。逢节日时，食堂处还可购买特色食物，比如除夕夜会通宵提供饺子、汤圆等食物，中秋提供求是月饼，清明有青团，端午有粽子等等。
                        <br/>
                        <b>（2）临湖食堂</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;坐落于小剧场，紧靠启真湖，除了常规套餐外，一楼有蛋包饭、砂锅，二楼有牛排、乌冬面、鸡排饭等。
                        <br/>
                        <b>（3）留学生食堂</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;食堂共有三层，菜式非常丰富。临近还有星巴克的店哦。
                        <br/>
                        <b>（4）西区食堂</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;它是新建的食堂，环境干净漂亮，菜色丰富，以家常菜为主。
                        <br/>
                        <b>（5）东二楼麦斯威餐厅</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;是新建的食堂，就在东二麦斯威边上，方便12:15下课13:15上课的同学用餐，售卖8元、10元、12元、15元四种价位的套餐饭，当然如有特殊要求也可以和打饭的阿姨说。
                        <br/>
                        
                    </div>
                    <div className={classes.title2}>2. 校内其他便利站点</div>
                    <div className={classes.content1}>
                        <b>（1）便利店</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;丹青门口、翠柏门口、大西区宿舍区各有全家，另外各学园门口也设有教育超市。
                        <br/>
                        <b>（2）麦斯威</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;散落于校园各处的烘焙店，最大的一家位于东一、二教学楼连廊，也提供咖啡、奶茶、冰淇淋等食品。位于东一角落还有一家麦斯威的小分店，里面提供的鸡蛋仔冰淇淋和面包得到无数同学们的种草。
                        <br/>
                        <b>（3）创享驿站</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在文化长廊东四教学楼的位置，卖各种简餐，味道都还不错，有空也可以来这里换换口味。月牙楼内也设有一家创享驿站，有时候会卖东三面包房的欧包，同时也有方便面等简餐和小零食。
                        <br/>
                        <b>（4）东三面包房</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;位于学生文化长廊东三教学楼的位置，卖各种现烤欧包，日常供应各种零食，同学们可以通过添加店铺微信关注每天的烤包动态。东三面包房欧包十分热销，很多热销欧包需要时机和手速才能享受到。
                        <br/>
                        
                    </div>
                    <div className={classes.title2}>3. 周边餐饮</div>
                    <div className={classes.content1}>
                        <b>（1）堕落街</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;位于校医院后方，是同学们开荤的不二选择。这条街上有“黄焖鸡”、“小火锅”、“烤肉”、“酸菜鱼”、“东北菜”、“印度菜”等等各式各样的地方美食，味道不错的饭店还是很多的。还有各种小吃、肉夹馍、烤鱿鱼、凉皮、烧饼、芒果冰、奶茶等等。
                        <br/>
                        <b>（2）北街</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;北街主要有各种咖啡店，有的咖啡店可以通宵学习。买一杯价格大概在20-40的饮品就可以在咖啡店享受悠闲时光了。另外在蓝田身后的北街上也有几家馆子，如Tony’s house、重庆人家、北街烧烤等。
                        <br/>
                        <b>（3）银泰</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;银泰是一所定位较为高端的Shopping Mall，周边有城西银泰和西溪银泰，都离学校比较近，打车或骑车都可以。
                        <br/>
                        <b>（4）印象城</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;距离紫金港校区自行车十分钟的路程。里面有电影院和各种饭店还有沃尔玛超市。
                        <br/>
                        <b>（5）剑桥公社</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;从东门出去后直行15分钟就可以到达，这里有一些韩料店、烧烤店和小酒吧，如夏星、Mojito等。
                        <br/>
                        <b>（6）浙港、宝港生活广场</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;东二门出门左转，或者堕落街走到头右转的区域，路程稍远，但店面稍显正规，有周素珍馄饨、浙大炒粉干、地锅鸡、发展烩面、麦当劳等，也是中晚饭不错的去处。
                        <br/>
                        
                    </div>
                    <div className={classes.title1}>五、住</div>
                    <div className={classes.title2}>1. 宿舍基本情况</div>
                    <div className={classes.content1}>
                        <b>（1）蓝田</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有阳台，上床下桌。另有公共高矮柜各一。无独立卫生间，每一层楼共享一间公共盥洗室，洗澡需刷卡。
                        <br/>
                        <b>（2）云峰</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>碧峰1舍，碧峰2舍，紫云1舍，紫云2舍</b>
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有阳台，带独立卫生间，上床下桌。另有壁柜一套。
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>紫云3-5舍，碧峰3-5舍</b>
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;无阳台，带独立卫生间，一侧为上下铺床，一侧为四人位连体写字桌。
                        <br/>
                        <b>（3）丹青</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>丹阳</b>
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;无阳台，带独立卫生间，一侧为上下铺床，一侧为四人位连体写字桌。
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>青溪</b>
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有阳台，上床下桌，另有公共高矮柜各一个。青溪1-2舍没有独立卫生间，每层楼共用一个盥洗室，在架空层设公共浴室。青溪3-4舍有独立卫生间。
                        <br/>
                        <b>（4）白沙</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>白沙1舍，白沙2舍</b>
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;无阳台，带独立卫生间，一侧为上下铺床，一侧为四人位连体写字桌。
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>白沙3舍，白沙4舍</b>
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有阳台，带独立卫生间，上床下桌。一般为建筑工程学院本科生和全校部分研究生女生居住。
                        <br/>
                        <b>（5）西区</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;竺可桢学院的同学会入住西区。大西区宿舍一般为上床下桌，有独立卫生间，为2020年刚刚建立的宿舍，虽然离教学楼较远，但是宿舍设施较新，条件较好。
                        <br/>
                        
                    </div>
                    <div className={classes.title2}>2. 卫生</div>
                    <div className={classes.content1}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;楼长每星期会检查寝室的卫生状况，床铺、桌面等私人区域的整洁情况都会计入个人分数，对期末总评产生影响。一般值日生同学一周一轮，公寓的公众号会贴心的通知。浙大学生公寓管理服务中心公众号可以订水、缴费，相当方便。用过的空水桶和垃圾袋要自己丢下楼，保持寝室整洁，人人有责。
                    </div>
                    <div className={classes.title2}>3. 供电</div>
                    <div className={classes.content1}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一般寝室会在晚上11:35左右停电（次日早晨6:30接通），夏天和冬天寝室会通宵供电。
                    </div>
                    <div className={classes.title2}>4. 违章电器</div>
                    <div className={classes.content1}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;热的快、电热毯、暖手宝、电熨斗、电磁炉、电冰箱、卷发棒、夹板、煮蛋器、电饭锅、电热水壶等。如果违禁使用会被宿管阿姨没收，直到搬宿舍或毕业才能取回（放假前跟楼长说要带回家有时也可以拿回被没收的物品）。电吹风、台灯、饮水机是可以用的。
                    </div>
                    <div className={classes.title1}>六、行</div>
                    <div className={classes.title2}>1. 校内地点介绍</div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;详见地图。</div>
                    <div className={classes.title2}>2. 校内通行</div>
                    <div className={classes.content1}>
                        <b>（1）步行</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;从大食堂步行到达东一教学区需约15分钟，日常步行的话会有点累，不过比较容易瘦身，但鉴于紫金港校区真的很大，更建议步行与共享单车结合。另外，校内的南华园、启真湖、西区大草坪等地都是散步的好去处，记得去打卡哦。
                        <br/>
                        <b>（2）自行车</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因为紫金港真的非常大，自行车真的是性价比之王。许多新生都会选择在报到那天去校内的自行车店购买一辆（二手）自行车，既实惠又方便。另外学校附近比如望月公寓也有几个车行。日常教学楼及宿舍区都有专门停放自行车的车库，还有保安叔叔的管理，只要挂上防盗链，不用太担心会被偷走，不过比较容易找不到哦。
                        <br/>
                        <b>（3）小龟</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;小龟的价格虽比自行车高，但速度快，省力气，不过小龟的停放和充电也有许多麻烦，可以入校一段时间综合考虑后再决定是否购买（学校方面倒不是很提倡骑小龟呢，因为速度过快会有危险哦）。对新入学的同学们我们更建议买新国标的小龟。为了安全起见，小龟充电请在集中充电桩进行。
                        <br/>
                        <b>（4）小白</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;小白，是大家对校内观光车的爱称，每程1元，强烈推荐给不想买自行车和小龟的同学。小白贯通宿舍区、东西教学楼和大西区当你在路上看到有空座的小白，只要挥挥手小白就可以扫码上车。小白的运营时间、实时定位和具体站点可以通过“浙大生活”公众号获取。
                        <br/>
                        <b>（5）校内巴士</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有不少同学会在每个星期有一两节跨校区的课，这时候，就可以乘坐校内巴士在校区之间往返。在宿舍通向西区的路边以及生物实验大楼附近都设置有公交站，站牌上写有详细的班车信息。在求是潮app上也可查询，千万不能错过。校内巴士必须有学校发放的校车票才能使用。
                        <br/>
                        
                    </div>
                    <div className={classes.title2}>3. 校外通行</div>
                    <div className={classes.content1}>
                        <b>（1）网约车</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;网约车是可以进入校园的，大家不需要走到校门口就可以轻松打的，省了不少力气。节假日回家或者去火车站、机场如果找到同学拼车也是十分划算的。
                        <br/>
                        <b>（2）地铁</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;位于2号线的虾龙圩站、三坝站离学校都不远，可以选择乘坐地铁。
                        <br/>
                        
                    </div>
                    <div className={classes.title1}>七、安全</div>
                    <div className={classes.title2}>1. 防患于未然</div>
                    <div className={classes.content1}>
                        <b>（1）上门推销</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;校外到寝室虽然有重重门禁，但总有各种奇怪的人能设法进来，自称“学长”上门推销传说中的四六级读物、《英语报》、学科辅导资料或者生活用品等等……经典骗局，但是年年有新生上当受骗！浙大作为一个开放包容的大学，不会要求大家统一订购非教材的书刊杂志，而所有教材都需要大家在现代教务管理系统上自行挑选和预定。
                        <br/>
                        <b>（2）班群诈骗</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;“大家都是同学，帮忙买下点卡”……现今，很多骗子设法混入班级QQ群，并伪装为同学，通过群临时对话博取信任，利用新生之间尚未熟悉的现状诈骗钱财。在“同学”提出奇怪要求后，尤其是钱的问题，必须要当面求证确认，免遭损失。或者在云朵朵等这样的平台上，涉及到贵重物品交易和要求你脱离平台私下交易的，也最好是当面交付。
                        <br/>
                        <b>（3）单车偷盗</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;遇到自行车偷盗的情况，可以直接去东四的求是派出所登记报警。宿管阿姨或者校园物业会帮忙挪车，可以先尝试在周边找一找（一般来说是自己记错的可能性比较大，但出校园一定要记得锁车）。
                        <br/>
                        <b>（4）校园兜售</b><br/><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;此外，学校为每个班级都安排了约5人的学长组，大家在报到后就能与他们见面啦，有什么情况都不妨向他们问问。其他“怪蜀黍”的话可不要轻信！
                        <br/>
                    </div>
                    <div className={classes.title2}>2. 报警求助</div>
                    <div className={classes.content1}>
                        <b>校园110报警求助中心</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;紫金港校区：0571-88206110，东四教学楼一楼；
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;玉泉校区：0571-87951110，七舍一楼；
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;西溪校区：0571-88273110，老医院二楼；
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;华家池校区：0571-86971110，老图书馆一楼西侧；
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;之江校区：0571-86592777，之江校区二号楼北。
                        <br/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DesktopLife;