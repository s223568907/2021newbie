import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core';

import tohome from './assets/images/to-home.png';
import tomap from './assets/images/to-map.png';
import top from './assets/images/studyTop.png';
import bottom from './assets/images/studyBottom.png';
import img1 from './assets/images/img1.jpg';
import img2 from './assets/images/img2.jpg';
import img3 from './assets/images/img3.jpg';
import img4 from './assets/images/img4.jpg';
import img5 from './assets/images/img5.jpg';
import img6 from './assets/images/img6.jpg';
import img7 from './assets/images/img7.jpg';

const useStyles = makeStyles(theme =>({
    headerContainer: {
        width: '100%',
        height: 9100,
        textAlign: 'center',
        boxSizing: 'border-box',
        backgroundColor: '#77cfb7',
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
        bottom: -8310,
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
        top: 219,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#77cfb7',
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
        backgroundColor: '#bbe7db',
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
    img: {
        display: 'inline-block',
        width: 1020,
    }
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

function DesktopStudy() {
    const classes = useStyles();
    var target =  (window.location.hash.length > 0 ? window.location.hash.substring(1) : "0");
    rollpage(parseFloat(target));
    return (
        <div>
            <Helmet title={`学习 - 新生手册`}/>
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
                        <a className={classes.title} href="/study">学习</a>
                        <div className={classes.blank}><br/></div>
                        <a className={classes.link} href="/study#210">新生养成教育</a>
                        <div className={classes.blank}><br/></div>
                        <a className={classes.link} href="/study#490">选课</a>
                        <div className={classes.blank}><br/></div>
                        <a className={classes.link} href="/study#3190">专业分流</a>
                        <div className={classes.blank}><br/></div>
                        <a className={classes.link} href="/study#3910">日常学习</a>
                        <div className={classes.blank}><br/></div>
                        <a className={classes.link} href="/study#4360">关于绩点</a>
                        <div className={classes.blank}><br/></div>
                        <a className={classes.link} href="/study#4890">二三四课堂</a>
                        <div className={classes.blank}><br/></div>
                        <a className={classes.link} href="/study#5200">评奖评优</a>
                        <div className={classes.blank}><br/></div>
                        <a className={classes.link} href="/study#5870">七大校区</a>
                        
                    </div>
                    <div className={classes.bigtitle}>
                        <a className={classes.title} href="/study">学习</a>
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
                    <div className={classes.title1}>一、新生养成教育（新生MOOC）</div>
                    <div className={classes.content1}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;每位新生在2021年8月7日-20日期间，登录“学在浙大”（网址：http://course.zju.edu.cn，使用浙江大学“统一身份认证”用户名和密码登录），进入“新生养成教育MOOC”课程，详细阅读《课程公告》，进行课程学习，也可从“浙大钉”APP进入“学在浙大”模块访问学习。完成课程所有章节的学习和测试，成绩合格者，可获得浙江大学本科生第二课堂0.5记点。原则上要求新生在入学注册报到前完成课程修读；对于不具备网上学习条件的新生，可在9月30日前完成课程学习。
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为了更好地适应大学阶段数学学习，请每位新生收到录取通知书后登录“爱课程-中国大学MOOC平台”主页（网址：http://www.icourses.cn/imooc/），搜索“浙江大学”，自行修读浙江大学开设的《高等数学先修课》。
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2021级港澳台本科新生报到后参加学校统一安排的新生始业教育。
                        <br/>
                    </div>
                    <div className={classes.title1}>二、选课</div>
                    <div className={classes.content1}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8月23日8:00-8月25日17:00进行。选课前，请认真学习《浙江大学2021级新生养成教育MOOC课程》有关章节，了解本大类（专业）培养方案设置及选课相关操作。
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;新生选课网：http://jwbinfosys.zju.edu.cn。
                    </div>
                    <div className={classes.title2}>1. 选课入门</div>
                    <div className={classes.content1}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在大学，选课是开始每个新学期学习的重要前奏，丰富的课程资源、抢手的课程和老师也难免让人应接不暇。因此，掌握一些基本的规则和技巧，能够帮助你更好地选课，从而为新学期的学习打下良好的基础。
                        <br/>
                        <b>（1）培养方案</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;所有专业分类的培养方案都可以从浙大本科生院（需要校内网或RVPN）查看和下载，浙大本科生院网址：https://bksy.zju.edu.cn/。
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本科专业培养方案（简称“培养方案”）会列出专业的培养目标、毕业要求、专业主干课程、推荐学制、最低毕业学分、授予学位、学科专业类别、支撑学科、以及最重要的“课程设置与学分分布”，里面会列出课程的课程名称、课程号、学分、周学时、建议学年学期等。
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在充分了解自己目标专业培养方案的基础上，着重关注建议“一（秋冬）”修读的课程和各类通识课程。进一步地，可以充分考虑自己未来的修读计划与在校情况，根据个人专业意向修读专业的前置课程，不过前置课程以后再修也是可以的。
                        <br/>
                        <b>（2）选课时间、地点、操作方式</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;选课通常分为三轮，冬学期前还会有第四轮，每个学期的选课通知会提前在浙大教务网（http://jwbinfosys.zju.edu.cn）上挂出，请务必认真阅读。每轮选课都有明确的时间段规定，大家一定要看清楚开始与截止时间，不要错过规定的选课时段。
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;由于浙大的选课实行的是“按优先级实行概率筛选”，优先级主要适用个别学院专业课和即将毕业的学长学姐，其他同学选中概率一律相等，与选课先后顺序无关。所以在每轮选课刚开放选课、选课系统较拥堵时，可以避开选课高峰时间，错时选课；但也不要拖延到最后截止时间前，以免由于网络拥堵而耽误申请。
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;此外记得关注预定教材的时间，一般除规定时段外不再接受预定教材。在教务网上预定的新书是原价的八折。书店订购的新书约八折，旧书半价。
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;至于地点，第一次新生选课时，学长组会指导大家进行选课。大家可以直接向学长组寻求指导与帮助。带电脑的同学以后可以在寝室通过自己的电脑进行选课；没有电脑的同学则可以去机房进行，只需登录教务网即可。
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;选课的具体操作方式：登录学号、密码登录教务管理系统（以下简称教务网：http://jwbinfosys.zju.edu.cn/），在新选课系统中进行选课操作。有关细节可以查阅教务网-文件下载-《新平台选课操作手册》。
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;务必保管好自己的登录密码，并对自己的选课行为负责。以及使用教务网查询课表和考试信息，特别是考试前及时查看教务网发布的信息，以教务网为准。
                        <br/>
                        
                    </div>
                    <div className={classes.title2}>2. 选课技巧</div>
                    <div className={classes.content1}>
                        <b>（1）选课助手插件</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;选课的一个重要辅助工具是求是潮发行的
                        <a style={{color:"black"}} href='https://enroll.zjuqsc.com/'>Enroll选课助手插件</a>
                        ，建议使用火狐（Firefox）浏览器，它提供“课程冲突判断”、“可选课程高亮”、“列表自动加载”、“小课表显示”、“课程排序功能”、和“教师评分查询”的功能，有效地利用选课助手可以大大减少选课的工作量。特别提示，鉴于信息更新，课表及考试查询，均以教务网结果为准。
                        <br/>
                        <b>（2）搜索引擎</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;同时选课系统自带的搜索引擎也是很有用的，在这里你可以快速按照“课程代码”、“课程名称”、“教师姓名”、“课程类别”、“上课时间”、“上课地点”、“学期”查询需要的课程。
                        <br/>
                        <b>（3）选课策略</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;大一新生对于大学的学习生活可能需要一段时间来适应，过多的课程会较为辛苦，拉低总成绩，当然过少的课程也会为往后的学习增加负担。一般推荐第一个秋冬学期总学分在25分左右为宜，不过考虑到选课系统对较热门课程的筛选，在选课前几轮可以尽量多选一些学分，多选的学分在后几轮合理退选即可。
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;特别是某些热门的通识课被刷的几率较高，在时间不冲突的情况下的确可以多选几门通识。选上的通识课较多时可以选择退课，但一定要赶在退课的规定时间内哦（以教务网通知为准）。
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在单轮内也可以通过合理的规划来减少选课工作量，一般推荐，先选必修课，再选选修课，最后选体育课程。同一门课程的志愿尽量选择相同教学时间的不同教学班，为其他课程的选择留出空余时间
                        <br/>
                        
                    </div>
                    <div className={classes.title2}>3. 选课规则补充说明</div>
                    <div className={classes.content1}>
                        <b>（1）预置课程</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;每个学期选课前系统会安排一张预置课表，涉及一些该大类或该专业的部门课程，预置课程的预置教学班是已选中的状态。之前轮次经过筛选留在课表里的课程教学班同样会转为已选中的状态。
                        <br/>
                        <b>（2）退选</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在前两轮和第三轮选课的前两个阶段可以自由退选课程。需要注意的是，已选中的课程一旦退选，再次选择就需要重新等待系统筛选，因此在明确可能的后果之前，一般不建议大一新生退选预置课程。
                        <br/>
                        <b>（3）选课志愿</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;可以有效利用每门课程的三个教学班志愿来选择更合心意的教学班，同一门课程筛选时按照顺序志愿规则筛选，在没有退选预置教学班的情况下，将更合心意的教学班排在靠前的志愿位，如果选上就会自动替代预置教学班，如果没有选上前面的教学班，也不会落入无课可上的境地。
                        <br/>
                        <b>（4）低学分定点选课</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一般在第三轮选课的第二阶段，会有低学分定点选课，简称“低分定点”或“低定”，一般是低于22学分（含22学分）可参加“低学分定点选课”，选到22学分以上为止，限选有余量的教学班。而且“低定”选课先到先得，选满为止；选课时暂为待定状态，选课结束后统一直接确认。
                        <br/>
                        <b>（5）补选</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一般同样是这一阶段，可以开展“网上申请补选”，包括容量已满教学班和上课时间冲突教学班两类补选申请，具体规则以教务网发布的通知为准。
                        <br/>
                        
                    </div>
                    <div className={classes.title2}>4. 注意事项</div>
                    <div className={classes.content1}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;选课时应注意课程的“预修要求”以及每个教学班的“上课地点”、“面向对象”、“教学方式”等标注信息。
                        <br/>
                        <b>（1）预修要求与修读顺序</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;许多课程可能有一定的预修要求，这就要求我们在大学期间选课和学习的过程中遵循一定的修读顺序。遵循修读顺序最简单的方法是按照培养方案上的推荐时间修读，另一个方法是自行对照每门课程的预修要求确定修读顺序。预修要求可以在选课系统中点击课程名称后查看课程简介的弹窗中看到，由于系统原因，很多预修要求为“无”的课程也会在点开课程简介弹窗前用红色字体标识“【有预修要求】”。在学有余力的情况下，可以尝试提前修读一些没有预修要求的课程，比如思政类课程。
                        <br/>
                        <b>（2）标注信息</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;“上课地点”需要注意的是尽量避免跨校区选课。如果必须跨校区上课，学校会发放车票。但注意并非所有跨校区的课都提供，例如上跨校区通识课的学生很难拿到校车票。另一方面注意连续两门课的上课地点，只有15分钟时间的课间，上课地点跨越东西区并不是件容易的事，需要做好充足的准备。
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;关注“面向对象”和“教学方式”是为了避免误选不不适合自己的特殊教学班，在有疑问、拿不准的情况下，及时向有疑问，应及时向教务处相关办公室、各学院（系）本科教学管理部门、导师或班主任进行咨询，以尽快解决问题。
                        <br/>
                        <b>（3）课程替代</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;某些高层次的课程可以替代低层次的课程，如数学分析可以替代微积分，微积分可以替代高等数学。具体规则详见教务网上的文件：浙江大学本科课程层次关系一览表。
                        <br/>
                        <b>（4）旁听与免听</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一些同学可能对其他专业的课程感兴趣，只要精力和时间充沛，你可以自由选择。但如果不能保证完成这些课的作业，担心总成绩受到影响，或者你仅仅想稍作了解，可以选择记下该门课程教学班的时间和地点，届时前去旁听。
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;还有一些同学基础比较好，为了节约时间，避免重复学习，在符合《浙江大学本科课程成绩评定与管理办法》第十六条规定的情况下，可在教务网上提交课程免听申请。一般免听课程可以不去上课，但需按时上交作业，最终也要参与考试考核。
                        <br/>
                    </div>
                    <div className={classes.title1}>三、专业分流</div>
                    <div className={classes.title2}>1. 专业确认</div>
                    <div className={classes.content1}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在第一学年秋学期第5-8周，是第一轮专业确认，第一轮确认只接收类内申请。专业确认开始后，学生需在“本科生信息服务平台”上一次性提交申请本大类所有专业的志愿排序，同时提交一份个人陈述。经过选拔后（参考各院系专业确认细则），学院会根据高考成绩，选拔成绩等相关信息在学院网站上公布该轮确认结果。
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在第一学年冬学期第2-4周，是第二轮专业确认，第二轮确认可接收类内或跨类申请。按下列程序进行：学生如对第一轮确认的专业没有更换意愿，则不需要提交申请，如果学生对第一轮专业有更换意愿，则需要在“本科生信息服务平台”上提交一个跨类或类内专业的志愿。报名结束后，各专业会开展选拔，并根据高考成绩，学生原本专业信息，选拔成绩等相关信息在学院网站上公布该轮确认结果。
                    </div>
                    <div className={classes.title2}>2. 转专业</div>
                    <div className={classes.content1}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在学生入学的两年内，每位学生都有一次申请转专业的机会，在学期期末，学校便会开展转专业活动。如学生有转专业的意愿，则需要在“本科生信息服务平台”上提交一个转专业申请，每次转专业仅能申请一个专业。报名结束后，各专业便会开展选拔，并根据学生的相关成绩在学院网站上公布转专业名单。需要注意的是，每位学生仅能进行一次转专业（第二轮专业确认不算在转专业内）。同时，在每学期期末，学校也会面向成绩优秀的同学开展竺可桢学院选拔的活动，混合班等竺院班级便会开放报名，通过选拔的学生即可被选入竺可桢学院。
                    </div>
                    <div className={classes.title2}>3. 辅修</div>
                    <div className={classes.content1}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在学生入学的两年内，春夏学期初学校会对有意向进行跨专业、跨学科学习的学有余力的学生开展辅修报名。如学生有报名辅修的意愿，需要在“本科生信息服务平台”上报名。辅修共分为四种，微辅修、辅修、双专业和双学位，学业要求依次提升，录取学生享有微辅修，辅修，双专业，双学位课程的选课优先级，同时在修读期间，每个长学期选课学分上限提高至40学分。
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;辅修报名共有两轮，学院会根据学生报名的辅修等级以及相关成绩进行选拔（双学位&gt;双专业&gt;辅修&gt;微辅修），招生容量为微辅修+辅修+双专业+双学位的总容量。在学生修读期间，可以申请调整修读类型或放弃修读。
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;至于竺可桢学院的辅修班，一般工高班，ITP，公共管理报名分别对应大一春夏，大二秋冬，大二春夏。
                        <br/>
                    </div>
                    <div className={classes.title1}>四、日常学习</div>
                    <div className={classes.title2}>1. 考试周</div>
                    <div className={classes.content1}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;学校在长学期期末会单独设置考试周，为所需要进行考试的科目提供时间。在考试周期间，学校并不会安排课程，以便应对安排考试。考试前，请登录教务网查询相关考试信息以及自己的座位号。
                    </div>
                    <div className={classes.title2}>2. 学习资料</div>
                    <div className={classes.content1}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;蓝田、丹青、云峰等学园旁边的打印店都会提供各科目历年考试试题以及复习资料，同时，每当临近期末，求是潮box便会与郁林教育合作，发放期末复习资料。
                    </div>
                    <div className={classes.title2}>3. 求是潮mobile</div>
                    <div className={classes.content1}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;求是潮mobile是浙江大学求是潮工作团队根据浙江大学学生需求开发出的一款App，提供查看课表，考试，座位信息，绩点等功能，在苹果与安卓应用商店中均有下载，目前功能和用户体验在持续优化。
                    </div>
                    <div className={classes.title2}>4. 自习地点</div>
                    <div className={classes.content1}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上完课之后，各位同学可以前往以下地点进行自习：基础图书馆、李摩西医学图书馆、大西区图书馆古籍馆、各学园生活区内自习室、东教西教的空余教室、西一西二教学楼4、5楼、教学楼走廊的公共桌椅。
                    </div>
                    <div className={classes.title1}>五、关于绩点</div>
                    <div className={classes.content1}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;绩点是评估学习成绩的一种方法，浙江大学课程的5分制绩点是百分制、五级制或二级制成绩的一种换算形式。
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;浙大课程考核成绩的评定可根据课程大纲要求和性质不同,采用百分制、五级制（优秀、良好、中等、及格、不及格，或A、B、C、D、F）或二级制（合格、不合格，或P、F）。学生修读课程考核成绩在60分及以上、及格（或D）及以上、合格（或P）的，该课程视为通过并获得相应课程学分。一般以百分制评定居多。具体详见学生手册。
                    </div>
                    <div className={classes.title2}>1. 对应绩点换算</div>
                    <div className={classes.content1}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当百分制成绩高于或等于95分时，课程绩点为5.0，称为满绩；当百分制成绩低于60分时，课程绩点为0，称为挂科；当百分制成绩高于或等于60分同时不足95分时，按照从60-61分为1.5，62-64分为1.8，65-67分为2.1，此后成绩每增加3分，绩点增加0.3。
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;五级制成绩对应绩点分别为：优秀（A）对应4.5，良好（B）对应3.5，中等（C）对应2.5，及格（C）对应1.5，不及格（D）对应0。
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;二级制成绩对应绩点分别为合格（P）3.0，不合格（F）0。 
                    </div>
                    <div className={classes.title2}>2. GPA</div>
                    <div className={classes.content1}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;平均学分绩点（Grade Point Average，即GPA）是专业确认、申请交流、评优评奖以及出国深造时的参考依据。
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GPA（主修专业课程平均学分绩点）=Σ主修专业课程学分绩点/Σ主修专业课程学分，其中课程学分绩点=课程绩点×绩点权重系数×课程学分。
                    </div>
                    <div className={classes.title1}>六、二三四课堂</div>
                    <div className={classes.content1}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;二课堂、三课堂、四课堂指的是在一课堂教学，即基本专业和通史课程外设置的教育教学实践活动。
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;二课堂指学生在校内参加的各类实践活动，包括学科竞赛、创新创业训练、学生社团活动、学生工作经历、文体活动等，一般可以通过加入各大社团组织、参加学校各大社团组织举行的活动（一般有二课堂分的活动会在活动宣传中标明）、参加各个体育项目在学期中举办的三好杯比赛以及学园、学校运动会等；
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;三课堂指学生在校外、境内参加的各类社会实际、就业创业实践实训等活动，以及校内外志愿服务活动；
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;四课堂指学生出国（境）参加的各类学习实践活动，包括联合培养、交换生项目、实习时间、创新创业交流、学术交流、文化交流等。本科学生的培养方案中设置二课堂4学分，三课堂四课堂各2学分
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;二、三课堂活动记点累计至一定分值可以获得相应的学分，并进行成绩考核（合格、优秀等的评级）。二、三、四课堂的成绩均不计入课程绩点。
                    </div>
                    <div className={classes.title1}>七、评奖评优</div>
                    <div className={classes.title2}>1. 优秀标兵</div>
                    <div className={classes.content1}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;每年学校会根据学生的表现授予各项标兵，包括：
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;学业优秀标兵：学习勤奋努力，学业成绩优秀；
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;学业进步标兵：学习中进步明显，原则上要求进步名次在20%以上；
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;社会工作标兵：在社会工作中表现优秀；
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;创新创业标兵：在科技创新或创业实践中表现优秀；
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;公益服务标兵：在公益服务中表现优秀；
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对外交流标兵：对外交流中表现优秀；
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注：获得标兵为获得其他奖学金的基本条件。
                        <br/>
                    </div>
                    <div className={classes.title2}>2. 校级奖学金</div>
                    <div className={classes.content1}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;校级奖学金根据获得标兵，学习成绩等标准评选，根据奖励金额分为一，二，三等奖学金。
                    </div>
                    <div className={classes.title2}>3. 国家奖学金</div>
                    <div className={classes.title2}>4. 竺可桢奖学金</div>
                    <div className={classes.content1}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;竺可桢奖学金是学校最高层次的奖学金，每学年评选本科生12名，奖励金额20000元。评选竺可桢奖学金要求学习与品行特别优秀，至少两次获得学校颁发的优秀学生荣誉称号和至少两次获优秀学生奖学金一等奖。
                    </div>
                    <div className={classes.title2}>5. 其它奖学金</div>
                    <div className={classes.content1}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;除去以上奖学金外，还有院设奖学金、研究奖学金、外设奖学金等一系列奖学金。
                        <br/>
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*奖学金具体信息请参照学生手册以及浙江大学学生评价细则。
                    </div>
                    <div className={classes.title1}>八、七个校区</div>
                    <div className={classes.content1}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;浙江大学共有七大校区。
                    </div>
                    <div className={classes.title2}>1. 紫金港校区</div>
                    <div className={classes.content1}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;最大的校区，所有新生都在这里就读。
                    </div>
                    <img className={classes.img} src={img1} alt=""/>
                    <div className={classes.title2}>2. 玉泉校区</div>
                    <div className={classes.content1}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;临近西湖，骑车约15分钟即可到达西湖旁边，原浙江大学所在地，部分高年级工科在这里就读。
                    </div>
                    <img className={classes.img} src={img2} alt=""/>
                    <div className={classes.title2}>3. 之江校区</div>
                    <div className={classes.content1}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;高年级法学在这里就读。
                    </div>
                    <img className={classes.img} src={img3} alt=""/>
                    <div className={classes.title2}>4. 华家池校区</div>
                    <div className={classes.content1}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;部分高年级医学院学生在这里就读。
                    </div>
                    <img className={classes.img} src={img4} alt=""/>
                    <div className={classes.title2}>5. 舟山校区</div>
                    <div className={classes.content1}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在舟山市，离其他校区较远，海洋部分学科在这里就读。
                    </div>
                    <img className={classes.img} src={img5} alt=""/>
                    <div className={classes.title2}>6. 西溪校区</div>
                    <div className={classes.content1}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;部分人文社科理科专业的高年级学生在这里就读。
                    </div>
                    <img className={classes.img} src={img6} alt=""/>
                    <div className={classes.title2}>7. 海宁国际校区</div>
                    <img className={classes.img} src={img7} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default DesktopStudy;