import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core';

import tohome from './assets/images/to-home.png';
import tomap from './assets/images/to-map.png';
import top from './assets/images/trainingTop.png';
import bottom from './assets/images/trainingBottom.png';

const useStyles = makeStyles(theme =>({
    headerContainer: {
        width: '100%',
        textAlign: 'center',
        boxSizing: 'border-box',
        background: 'linear-gradient(#b9b9bb, #FFFFFF)',
        height: 3300,
    },
    buttons: {
        position: 'fixed',
        bottom:'5%',
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
        //height: 3450,
        cursor: 'auto',
    },
    bottom: {
        position: 'absolute',
        left: 200,
        bottom: -2500,
        width: 1319,
        //height: 3450,
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
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#a0a0a0',
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
        backgroundColor: '#d3d3d3',
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
        top: 235,
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

function DesktopTraining() {
    const classes = useStyles();
    var target =  (window.location.hash.length > 0 ? window.location.hash.substring(1) : "0");
    rollpage(parseFloat(target));
    return (
        <div>
            <Helmet title={`军训 - 新生手册`}/>
            <div className={classes.headerContainer}>

                <img className={classes.top} src={top} alt=""/>
                <img className={classes.bottom} src={bottom} alt=""/>
                
                <div className={classes.pagelist}>
                    <div className={classes.container}>
                        <a className={classes.title} href="/training"><br/></a>
                        <div className={classes.blank}><br/></div>
                        <a className={classes.link} href="/training#220">组织架构</a>
                        <div className={classes.blank}><br/></div>
                        <a className={classes.link} href="/training#630">军训内容</a>
                        <div className={classes.blank}><br/></div>
                        <a className={classes.link} href="/training#1470">物品准备</a>
                        <div className={classes.blank}><br/></div>
                        <a className={classes.link} href="/training#2450">实用TIPS</a>
                        <div className={classes.blank}><br/></div>
                        <a className={classes.title} href="/register">报到</a>
                        <div className={classes.blank}><br/></div>
                        <a className={classes.title} href="/life">生活</a>
                        <div className={classes.blank}><br/></div>
                        <a className={classes.title} href="/study">学习</a>
                    </div>
                    <div className={classes.bigtitle}>
                        <a className={classes.title} href="/training">军训</a>
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
                    <div className={classes.title1}>一、组织架构</div>
                    <div className={classes.title2}>1. 师-团-连-排-班</div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;军训时，新生按照军训编制进行划分，总体为“浙江大学学生军训师”，根据不同学院分为若干团，每个团又分为若干个连。军训时，一般以连为单位进行活动，由教官担任连长，辅导员等老师担任连指导员，由老师或者学长学姐担任副连长和副指导员。每个连都有自己专属的连旗和口号，连下根据人数再细分为排、班。</div>
                    <div className={classes.title2}>2. 连部</div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;军训初期会组建连部，主要负责审理稿件、拍摄照片、剪辑视频、艺术稿制作等宣传工作。如果你在拍照、写稿、绘画或制作视频等方面有一技之长，可向指导员申请加入连部；因身体原因不能参加军训或需要半训的同学，要记得尽早向教官报告，也可进入连部工作。但进入连部并不意味着负担减轻，连部也要承担相应的工作，包括写稿、审稿或绘画、剪片等。连部所产出稿件的质量也是军训的评比标准之一，优秀作品可以为自己的连赢得加分，也会在公告栏和进行展示。另外，进入连部也意味着无法参加一些有趣的军训活动。因此，是否要加入连部，需要根据自身情况作出选择。</div>
                    <div className={classes.title1}>二、军训内容</div>
                    <div className={classes.title2}>1. 日常训练</div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;每日训练从清晨开始，往年通常为五点半于各连规定的固定地点集合，晨练后按顺序安排早餐。上午及下午为各自训练时间，由各连教官自行安排。中午午餐后有充足午休时间。军训初期的日常训练内容一般是站军姿、立定稍息、四向转体、齐步走等基础项目。后期会选出一部分同学参与方阵练习，另一部分进行军体拳、格斗术等拳法训练，为最后的阅兵仪式做准备。教官们一般都会把训练场选在相对阴凉的地方，训练时间间隙也会给出充分的休息时间，但在训练时就务必要听从教官指令并认真完成任务了。另外，训练过程中不得使用手机，建议直接把手机放在寝室，不要带去训练场。</div>
                    <div className={classes.title2}>2. 日常评比</div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>宿舍内务评比。</b>军训期间，几乎每天会进行内务检查，师部也会进行不定期抽查，因此时刻保持寝室整洁尤为重要。内务评分的标准极为严苛，书桌、书架、鞋架、地面、窗台甚至门板上沿……任何能够触摸到的地方都务必要擦洗、除尘。注意不要遗漏柜子顶部与床之间的空隙，寝室内也不得随意张贴物品。除此之外，军训对物品摆放的位置也有严格要求，建议尽量把东西收纳在带柜门的柜子中，减少外部可见物品数量。记得认真听副连提出的各项卫生要求并做好记录，整理完毕的你一定会很有成就感！</div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>通讯稿评比。</b>高强度的军训考验体能的同时，同学们也可以根据实际情况撰写军训通讯稿件。主题需与军训相关，但内容形式等可有创新。优秀稿件不仅能刊登在军训网，也可为所在的连部赢得相应等级的加分。</div>
                    <div className={classes.title2}>3. 特色活动</div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>军训师大合唱。</b>军训期间，会举行大合唱比赛，合唱曲目包括《浙江大学校歌》与各连自选曲目。先由每个连组建一支合唱队参加团部合唱比赛，优秀的队伍将进入师部的合唱决赛。大多数同学会参与其中，在每天训练结束后，合唱队会安排相应的合唱练习。经过这段难忘的排练，每个人心中都将回荡着“大不自多，海纳江河”的旋律。</div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>防恐消防综合演习。</b>军训中期会安排一次消防演练，具体包括听见警报后限时集合、灭火器使用规范、模拟房屋逃生等，为应对可能的突发事件做好准备。</div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>文体活动。</b>军训中期会组织不同连之间的文体比赛，具体项目包括拔河等，是一次考验同学之间配合的默契程度和集体凝聚力的绝佳机会。</div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>思想教育。</b>结束每天白日训练后，晚上每个连的辅导员或者副连、副指会组织同学在教室内集中进行理想信念教育活动。在此期间，有意向入党的新生可以向指导员咨询入党流程，为成为合格共产党员而努力。</div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*军训特色活动以初步安排通知为参考，具体安排执行前将另行通知。</div>
                    <div className={classes.title1}>三、物品准备</div>
                    <div className={classes.title2}>1. 衣物</div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>训练服。</b>统一的迷彩服会在军训之前发放，包括一件长袖迷彩外衣，一条迷彩长裤，一件短袖训练服，一顶迷彩帽，一双迷彩鞋。但是训练时每天出汗量很大，衣服洗后不容易晾干，建议可以根据需要在翠柏的紫金体育购买可供换洗的训练服。</div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>鞋垫。</b>军训统一分发的鞋子较硬，鞋底较薄，为防止长时间训练导致脚底疼痛起泡，建议购买足量且足够厚度的鞋垫。一次性鞋垫务必隔几天进行更换。</div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>黑袜子和腰带。</b>军训期间要求着装统一，佩戴腰带并穿黑色袜子，且不能露出脚踝。可以提前在网上购买或者到校内翠柏的紫金体育购买。</div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>针线/夹子。</b>军训期间，难免出现服装破损或不合身的问题。手巧的同学可以准备针线盒，缝补调整；手拙的同学可以备一些夹子，用来调整袖口、帽子等大小。</div>
                    <div className={classes.title2}>2. 防晒</div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>防晒霜。</b>烈日炎炎，做好防晒工作和保护皮肤也不容忽视。建议选择SPF 30 PA++ 或 SPF 50 PA++ 以上的防晒产品，可根据自身肤质进一步选择合适的产品。此外，可尽量选择瓶身小巧的防晒产品，便于随身携带，及时补涂，防止晒伤。</div>
                    <div className={classes.title2}>3. 防蚊</div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>花露水。</b>夏日训练时蚊虫较多，可在出门前将花露水喷在身上，能够在一定时间内有效驱蚊。</div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>风油精。</b>风油精可止痒消肿，瓶身小巧便于随身携带，能够有效缓解蚊虫叮咬，还能在烈日里提神醒脑。</div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>蚊帐。</b>紫金港夏日夜晚蚊子猖獗，寝室也无法幸免。到校时即可装上驱蚊必备的蚊帐，别忘了每晚睡前检查一下蚊帐口是否密封。</div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>蚊香。</b>推荐使用无色无味蚊香液，安全性更高。</div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>电蚊拍。</b>若寝室里的蚊子仍持续打扰夜晚休息，可使用电蚊拍，同时注意使用安全。</div>
                    <div className={classes.title2}>4. 解暑</div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>冰贴。</b>夏日避暑神器，可贴在额头或脖颈处进行物理降温。</div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>纸巾/湿巾/小毛巾。</b>训练时汗如雨下，口袋里备一些纸巾、湿巾或者小毛巾擦汗很有必要。</div>
                    <div className={classes.title2}>5. 食物</div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>矿泉水。</b>军训期间，根据规定只允许携带统一规格的1.5L农夫山泉矿泉水。可每天进行购买，各学园教育超市和便利店均可买到。为防止训练时和其他同学的水搞混，建议提前用马克笔或折角作明显记号。</div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>润喉片。</b>军训难免需要喊口号，加入合唱队的同学更有频繁的训练，可准备润喉片、润喉糖保护嗓子。</div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>糖果巧克力。</b>准备一些小糖果或巧克力，可在晨练前食用，防止未吃早饭血糖过低而发生晕倒。</div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>干粮。</b>军训日程紧凑，训练强度较大，晚饭时间较早，可以准备一些面包零食，及时补充能量。</div>
                    <div className={classes.title1}>四、实用Tips</div>
                    <div className={classes.title2}>1. 如何取得高绩点</div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;军训结束时，每个连会根据同学们的军训表现评选出一、二、三等军功，并按照百分制给出大家的军训绩点。这是每位同学进入大学所拿到的第一个绩点。以下分享一些获得较好成绩的小窍门：</div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>平时训练。</b>积极参加平时训练，刻苦认真，努力给教官和指导员留下好印象，这也是初入大学绝佳的锻炼机会。 </div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>内务。</b>寝室齐心达到卫生标准，顺利通过内务检查。</div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>集体活动。</b>多多参与合唱、走方阵等集体活动，这些活动能带给你不一样的体验，体会到强烈的集体荣誉感，也会让你收获宝贵的友谊。</div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>通讯稿。</b>写作方面有一技之长的同学抓住施展才华的机会，优秀的通讯稿能为自己加分，更能增添连部的荣光。</div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>职务。</b>每个连部会选出相应的副排长、班长，可以积极参与竞选，担任职务的同时还能熟悉大类里的其他同学。</div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>哨兵。</b>军训期间，每个连都会派一些同学进行巡查或者作为食堂、枪械库的哨兵，感兴趣的同学可以抓住机会向副连、副指等报名。</div>
                    <div className={classes.title2}>2. 其它建议</div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>多睡觉。</b>军训期间每天都会较为疲惫，加上晚上十一二点睡觉，早上五点起床，会感觉夜晚的睡眠时间十分不充足，所以建议抓紧一切能够回宿舍休息的时间补觉！</div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>时刻关注身体健康。</b>军训为期半个月，且期间气温较高，每天训练强度大，所以大家应随时关注自己的身体健康，若感到身体不适应该及时向教官和指导员提出，量力而行。在锻炼身体素质的过程中，身体健康才是最重要的！</div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>放平心态，享受过程。</b>时长半个月的军训虽然又苦又累，却也将成为大学生活中最难忘的记忆。你可能再也不会体验起早贪黑的作息，再也无法感受到如军训般强烈集体荣誉感的时刻，再也不会有这样一段不为学业所困单纯忙碌的生活。你能结交到许多小伙伴，找到今后一同上课的课友，当你回顾时，你想起苦涩难捱的时刻，也想起一起努力获得各项荣誉的时刻，而那些将长久留在你的记忆，伴随着你继续前行。</div>
                </div>
            </div>
        </div>
    );
}

export default DesktopTraining;