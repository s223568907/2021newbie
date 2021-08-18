import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core';

import tohome from './assets/images/to-home.png';
import tomap from './assets/images/to-map.png';
import top from './assets/images/registerTop.png';
import bottom from './assets/images/registerBottom.png';
import img1 from './assets/images/img1.png';
import img2 from './assets/images/img2.png';
import img3 from './assets/images/img3.png';

const useStyles = makeStyles(theme =>({
    headerContainer: {
        width: '100%',
        height: 9100,
        textAlign: 'center',
        boxSizing: 'border-box',
        backgroundColor: '#c5a8de',
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
        //height: 3450,
        cursor: 'auto',
    },
    bottom: {
        position: 'absolute',
        left: 200,
        bottom: -8310,
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
        top: '73px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#c5a8de',
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
        backgroundColor: '#e2d4ee',
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
    img1: {
        display: 'inline-block',
        height: 150,
    },
    img3: {
        display: 'inline-block',
        height: 400,
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

function DesktopRegister() {
    const classes = useStyles();
    var target =  (window.location.hash.length > 0 ? window.location.hash.substring(1) : "0");
    rollpage(parseFloat(target));
    return (
        <div>
            <Helmet title={`报到 - 新生手册`}/>
            <div className={classes.headerContainer}>
                
                <img className={classes.top} src={top} alt=""/>
                <img className={classes.bottom} src={bottom} alt=""/>

                <div className={classes.pagelist}>
                    <div className={classes.container}>
                        <a className={classes.title} href="/training">军训</a>
                        <div className={classes.blank}><br/></div>
                        <a className={classes.title} href="/register"><br/></a>
                        <div className={classes.blank}><br/></div>
                        <a className={classes.link} href="/register#200">浙大钉和注册流程</a>
                        <div className={classes.blank}><br/></div>
                        <a className={classes.link} href="/register#1850">疫情防控</a>
                        <div className={classes.blank}><br/></div>
                        <a className={classes.link} href="/register#2480">报到流程</a>
                        <div className={classes.blank}><br/></div>
                        <a className={classes.link} href="/register#3760">必备物品清单</a>
                        <div className={classes.blank}><br/></div>
                        <a className={classes.link} href="/register#5340">学校附近酒店</a>
                        <div className={classes.blank}><br/></div>
                        <a className={classes.link} href="/register#6800">交通</a>
                        <div className={classes.blank}><br/></div>
                        <a className={classes.link} href="/register#8500">购物中心</a>
                        <div className={classes.blank}><br/></div>
                        <a className={classes.title} href="/life">生活</a>
                        <div className={classes.blank}><br/></div>
                        <a className={classes.title} href="/study">学习</a>
                    </div>
                    <div className={classes.bigtitle}>
                        <a className={classes.title} href="/register">报到</a>
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
                    <div className={classes.title1}>一、浙大钉和注册流程</div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2021级浙江大学本科新生入学相关事宜均发布在“浙大钉”APP，请各位新生务必在规定时间内登录“浙大钉”APP，阅读《入学须知》，并按要求完成网上相关操作，学校如有最新通知在“浙大钉”APP即时发布，请新生及时查阅。</div>
                    <div className={classes.title2}>1．网上注册时间</div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8月5日-8月13日。</div>
                    <div className={classes.title2}>2．浙江大学统一身份认证用户名和初始密码</div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;用户名为录取通知书中的学号，内地学生初始密码为zju+身份证号后六位，港澳台地区学生初始密码为zju+港澳居民来往内地通行证号后六位或zju+台湾居民来往大陆通行证号后六位。</div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;示例：zju12345X（包括数字和英文字符共9位）。</div>
                    <div className={classes.title2}>3．网上注册步骤</div>
                    <div className={classes.content1}><b>（1）确认手机号码</b></div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请扫描下图“个人自助服务系统”二维码，通过浙江大学统一身份认证和初始密码验证，核实并确认个人手机号码。如需变更手机号码，可随时登录“个人自助服务系统”修改。</div>
                    <img className={classes.img1} src={img1} alt=""></img>
                    <div className={classes.content1}><b>（2）下载及登录“浙大钉”APP</b></div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;扫描下图“浙大钉”二维码下载APP，请使用确认过的手机号码注册并登录，已注册手机号码用户可以直接登录。</div>
                    <img className={classes.img1} src={img2} alt=""></img>
                    <div className={classes.content1}><b>（3）登录浙江大学工作台</b></div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;进入“浙大钉”APP，点击底部中间栏目，如下图所示，首次登录会跳转浙江大学统一身份认证登录页面，请使用浙江大学统一身份认证用户名和初始密码登录，如未出现，点击左上角箭头位置切换至“浙江大学”；如无“浙江大学”选项，请拨打网上注册咨询电话进行处理。</div>
                    <img className={classes.img3} src={img3} alt=""></img>
                    <div className={classes.content1}><b>（4）网上注册</b></div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;进入浙江大学工作台，选择“教育教学”栏目，点击“迎新”进行新生网上注册。包含以下内容：</div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;①基础信息采集、证件照采集、安全考试、宿舍申请（含卧具申请）、经济困难生“绿色通道”申请（含学费缓交办理）；</div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;②缴费：学费、住宿费、学生基本医疗保险参保费等（报到现场不设收费点）；</div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;③接站信息、行李托运信息填写。</div>
                    <div className={classes.content1}><b>（5）网上注册咨询电话及邮箱</b></div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;网上注册咨询电话：0571-87951669。</div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;邮箱：xwmaster@zju.edu.cn。</div>
                    <div className={classes.title1}>二、疫情防控</div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;根据上级文件精神和属地政府疫情防控工作要求，请新生务必做好以下疫情防控措施。今后属地政府防控要求如有相应调整，学校将在“浙大钉”APP中另行通知。</div>
                    <div className={classes.title2}>1. 健康打卡与健康码申领</div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;完成网上注册后，须在工作台“疫情防控”栏目，每日中午12:00前完成“健康打卡”填报；并请提前申领校区所在地健康码。</div>
                    <div className={classes.title2}>2. “浙大通行码”申请</div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;根据疫情防控要求，校园实行相对封闭管理，系统会根据新生的健康打卡情况于开学前自动生成“浙大通行码”，新生凭码方可进入校园。新生可通过“浙大钉”APP中“疫情防控-浙大通行码”查看通行码状态。</div>
                    <div className={classes.title2}>3.  疫情中高风险区新生暂缓报到</div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;国内中高风险地区所在设区市或县（市、区）及疫情管控区域（具体以学校钉钉上的通知为准）的新生，以及来杭途中会经停上述区域的学生，暂不来校，具体来校时间等待学校进一步通知。</div>
                    <div className={classes.title2}>4．新生疾病情况报告</div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;来校报到前若出现发热、咳嗽等呼吸道症状，请报告所在学园、院系有关辅导员老师，待痊愈后再来校报到。如有问题，请联系0571-88206282。</div>
                    <div className={classes.title2}>5．其它注意事项</div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;根据疫情防控要求，新生陪同人员和自备车不进入校园。新生来校报到要谨慎选择交通工具，途中做到勤洗手、戴口罩、与陌生人保持安全距离，做好个人防护。注意人身财产安全，妥善保管个人财物，不轻信陌生人，注意防盗防骗。符合疫苗接种条件的新生，在条件许可的情况下，鼓励在当地完成疫苗接种后来校。</div>
                    <div className={classes.title1}>三、报到流程</div>
                    <div className={classes.title2}>1．现场报到</div>
                    <div className={classes.content1}><b>（1）现场报到时间</b></div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2021年8月20日-21日（8:00-17:30）,请按时报到，不要提前来校。新生必须凭录取通知书、身份证和浙大通行码从紫金港校区东大门（申花路口）进校报到。</div>
                    <div className={classes.content1}><b>（2）现场报到注册及咨询地点</b></div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;杭州市余杭塘路866号，浙江大学紫金港校区各学园（详见现场指引）。</div>
                    <div className={classes.title2}>2．包裹（行李）托运、接站安排</div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;学校于8月18日-22日统一安排提取接运包裹（行李）。于8月20日-21日分别在杭州火车东站、火车城站、火车南站、地铁虾龙圩站（B出口）和紫金港校区东大门（申花路口）等设立迎新接待点迎接新生（家长不接）。学校届时将根据疫情防控相关要求及时调整包裹（行李）托运、接站安排，具体事宜请关注“浙大钉”APP中“迎新”-“行李托运”、“接站安排”栏目，及时了解最新信息。</div>
                    <div className={classes.title2}>3．中国银行浙江大学联名借记卡办理须知</div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为保证学习期间各类奖助学金发放、学杂费收退以及校园卡自动转账，中国银行将于8月22日起为新生办理中国银行浙江大学联名借记卡，具体事宜请关注“我的浙大”APP中“迎新”-“银行卡”栏目。</div>
                    <div className={classes.title2}>4．特殊情况</div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因故不能按时报到者，必须事先以中国邮政特快专递（EMS）或挂号信的形式向学籍中心提出书面请假（地址：杭州市余杭塘路866号浙江大学紫金港校区东1B-121-1本科生院学籍中心，邮编：310058），请假时间不得超过两周。未请假或请假逾期未报到者，除因不可抗力等正当理由外，视为放弃入学资格。</div>
                    <div className={classes.title2}>5、学费缴纳</div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;报到现场不设收费点，请自助缴费，方式如下：</div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（1）“浙大钉”APP内自助缴费；</div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（2）支付宝或微信扫描二维码自助缴费；</div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（3）关注“浙江大学计财处”微信公众号智能财务自助缴费；</div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（4）登录浙江大学收费平台（http://pay.zju.edu.cn）按提示自助缴费。</div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注意事项：</div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（1）除“浙大钉”APP缴费外，其他缴费方式用户名均为学号，初始密码为大写ZJU+下划线+证件号后六位（字母大写）。示例：ZJU_12345X（包括数字和特殊字符等10位）。</div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（2）因银行限额支付，请确保支付宝、微信钱包余额足够缴费，或分笔多次缴费；已开通中国银行手机银行的学生，推荐使用手机银行完成大额学费缴纳。</div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（3）港澳台学生无法使用上述前三种方式自助缴费的，可登录浙江大学收费平台使用银联在线支付完成缴费。线下缴费根据疫情防控工作要求后续另行通知。</div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;学杂费按学年收取，缴费成功后，将开具电子票据发送至校内邮箱。学生也可登录计划财务处综合财务管理平台（http://cwcx.zju.edu.cn），在“高级财务查询—我的收费查询”中查询、下载并打印。</div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请按时缴纳学费，家庭经济困难的新生，可在“浙大钉”APP进行新生网上注册时选择“绿色通道”，并办理学费缓交等。</div>
                    <div className={classes.title2}>6、关于新生医疗保险</div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;杭州市大学生医保结算年度为9月1日至次年8月31日。因此，为确保新生9月1日起享受大学生医保待遇,请选择参保的新生，务必于8月29日前在浙大钉完成自助缴费（90元/学年），学校医疗保险办公室根据缴费名单统一办理参保。参保学生不发医疗本，请自行用手机下载“国家医保服务平台”APP或在手机支付宝APP搜索“医保电子凭证”，激活医保电子凭证，在本市定点医疗机构刷码结算，享受杭州市大学生医保待遇。</div>
                    <div className={classes.title1}>四、必备物品清单</div>
                    <div className={classes.title2}>1. 必备证件及资料</div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>录取通知书</b><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>身份证</b><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>证件照</b>&nbsp;开学填表格需要不少照片，一寸、两寸的都要，最好蓝底、白底、红底的都有，尽量保留电子版，以备不时之需<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>中学学籍档案</b>&nbsp;入学后交所在学园或院系<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>团建材料</b>&nbsp;团员证、入团申请书等相关材料，涉及后续学生档案的整理<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>户口迁移证等迁户口材料*</b>&nbsp;户口迁移采取自愿原则，可迁至学校，也可保留在原户籍地。学校集体户口地址为：浙江省杭州市西湖区余杭塘路866号<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>经济困难申请材料</b>入学后需申请经济困难生认定的学生，如是建档立卡贫困户子女，请携带相关证明材料的复印件，提交至所在学院、学园；如已在国家开发银行办理生源地国家助学贷款，入学后需在ETA平台（网址：http://eta.zju.edu.cn）上传回执码；如已在非国家开发银行办理生源地国家助学贷款，需携带回执单，入学后前往紫金港校区行政服务办事大厅112室29号窗口办理相关手续<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>*关于迁户口：</b><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;由于迁户口至学校就意味着出国签证等事情都要在杭州办，毕业后迁户口也可以直接签到事业单位所在地。因此，比较建议除一线城市及农村户口外的同学可以考虑迁户口。<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注意户口迁入学校只有在新生入学统一迁户口这一次机会哦，之后大学阶段是不能办理户口迁入的。迁户口遵从自愿原则，不妨与父母一起商量决定。
                    </div>
                    <div className={classes.title2}>2. 电子产品</div>
                    <div className={classes.content1}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>笔记本电脑</b>&nbsp;基本上是必需的，无论是选课，做作业还是查收邮件都需要笔记本。现在全浙大都已经覆盖了ZJUWLAN无线网络，上网非常方便。当然不要忘记电脑锁、插线板、U盘和各种USB连接线。请确保插线板为第三版新国标。<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>手机、平板等设备</b><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>相机、音乐播放器等多媒体设备</b>&nbsp;不要忘了充电器和储存卡！<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>充电宝</b>&nbsp;紫金港生活必备神器。由于非夏季时间段实行的熄灯制度（一般23:35之后断电），所以不想第二天早上因为闹钟没有响起而迟到的同学们请在熄灯后用充电宝充满手机的电。<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>电吹风</b>&nbsp;唯一可以带的较大功率的电器，不过请不要带违禁电器，如热得快、电饭锅、电热毯等（在寝室楼下有微波炉，可以用来进行简单的食品加热） 。 <br/>
                    </div>
                    <div className={classes.title2}>3. 文具</div>
                    <div className={classes.content1}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>作业本和实验手册</b>&nbsp;校会有统一配发。对于某些特殊的大类，可能会需要特殊工具（比如科创、艺设大类需要的专业绘图工具），不过在学校就能买到<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>台灯</b>&nbsp;平日学习和工作的神器。由于紫金港在非夏季时间段内实行熄灯制度，可以考虑准备充电或用电池的台灯或者是USB供电的LED灯，到校购买亦可（要符合安全用电要求）。<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>词典或者电子词典</b>&nbsp;英语达人和外院大神必备。<br/>
                    </div>
                    <div className={classes.title2}>4. 床上用品 </div>
                    <div className={classes.content1}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;浙大并没有床褥的统一要求，家近的同学不妨自带被褥、床单、枕头、凉席等等。寝室单人床的尺寸是195cm * 85cm，有意定做卧具的同学可以参考一下哦。<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对于嫌麻烦或者家离学校比较远的同学，不如参照邮寄资料在新生服务网订购卧具包，一次性解决卧具问题。不过还是推荐备一份床单和被套以防潮哟。卧具包内容包括（被套+床单+枕套）*2 盖胎*1 垫胎*1 云丝被*1 云丝枕芯*1 盖胎套*1 （尼龙蚊帐+蚊帐钩）*1 热水壶*1 竹席*1 卧具包*1。<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;离学校远的同学也可以考虑在杭州当地定制卧具。
                    </div>
                    <div className={classes.title2}>5. 日用杂物</div>
                    <div className={classes.content1}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>衣物清洁</b>&nbsp;洗衣液、洗衣皂、衣架、晾晒夹、挂钩等等洗护用具，如果没有特别需求不妨到校后再考虑购买，各宿舍楼下也有洗衣房供同学们使用<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>个人洗护</b>&nbsp;洗发水、护发素、沐浴露、洗面奶、各类护肤品、牙具、脸盆、香皂、皂盒、毛巾浴巾等等。同样，如果没有特别需求不妨到校后再考虑购买<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>居家日用</b>&nbsp;雨伞、小锁、水瓶、水、抹布、驱虫、清扫用具等等。清扫用具宿舍合买一份即可。<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>防暑必备</b>&nbsp;防治中暑以及由此引发的腹泻，也能缓解水土不服的不适感。解暑药如藿香正气水，止泻药如南洋克痢痧胶囊，开胃药如健胃消食片。<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>感冒防治</b>&nbsp;杭州天气多变，受寒受热均易感冒。请准备好风湿风热以及风寒感冒的感冒药。<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>损伤必备</b>&nbsp;创可贴、止痛喷雾剂、各类止痛膏等。
                    </div>
                    <div className={classes.title1}>五、学校附近酒店</div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;搬进宿舍前住哪里呢？不必担心，紫金港周边十分繁华，酒店很多，总有一家适合你。</div>
                    <div className={classes.title2}>1. 商务酒店</div>
                    <div className={classes.content1}>
                        <b>（1）圆正•启真酒店</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;预订电话：（0517）88982888<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;价格：500元起<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;浙大控股集团下四星级酒店，位于学校校医院旁边，环境好，价格较高。<br/>
                        <b>（2）紫金港大酒店</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;预订电话：（0571）89977088<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;价格：300元起<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;准四星酒店，较豪华，离学校较近，临近公路，相对较吵。<br/>
                        <b>（3）杭州威斯希顿大酒店</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;预订电话：（0571）28291111<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;价格：250元起<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;离学校和地铁口较近，安静舒适，价格适中。<br/>
                        <b>（4）紫金港国际饭店</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;预订电话：（0571）89710000<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;价格：350元起<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;四星酒店，较豪华，在学校正门对面。<br/>
                        <b>（5）杭州橡果酒店</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;预订电话：（0571）89731111<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;价格：250元起<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;酒店步行5分钟即到杭州城西银泰城；驱车5分钟可抵浙大紫金港校区，交通相对便捷。<br/>
                        <b>（6）开元曼居酒店（紫金港店）</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;价格：200元起<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这家酒店拥有特色的主题房间，干净舒适。<br/>
                        <b>（7）君庭大酒店</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;价格：900元起<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;离校很近，交通方便，环境很好，价格偏高。<br/>
                        <b>（8）智尚臻选酒店（杭州紫金港银泰城店）</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;预订电话：（0571）85127809<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;价格：250元起<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;离校很近，周边有大型商场，设备智能，干净舒适。
                    </div>
                    <div className={classes.title2}>2. 经济型酒店</div>
                    <div className={classes.content1}>
                        <b>（1）布丁酒店(紫金港一店\紫金港二店) </b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;预订电话：（0571）28336502\（0571）28007777<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;价格：90元起<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;离紫金港校区很近，干净整洁，周边餐厅很多。<br/>
                        <b>（2）汉庭酒店（浙大紫金港店\文新地铁站店） </b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;预订电话：（0571）28056999\（0571）58112288<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;价格：180元起<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;交通方便，环境整洁。<br/>
                        <b>（3）望月旅馆 </b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;预定电话：（0517）56818868<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;价格：80元起<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;从校医院旁的大门出校后即为俗称的“堕落街”，街旁即为望月公寓，内有很多旅馆。住宿条件一般，安全实惠。<br/><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;以上酒店价格仅供参考，实际价格以到店或电话咨询为准。开学季房源相对紧张，有需要的建议提前预订。
                    </div>
                    <div className={classes.title1}>六、交通</div>
                    <div className={classes.content1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;浙江大学紫金港校区地址： 浙江省杭州市西湖区余杭塘路866号。进校从紫金港校区东二门（申花路口）进入。</div>
                    <div className={classes.title2}>1. 从城站火车站到紫金港</div>
                    <div className={classes.content1}>
                        <b>（1）坐校车 ★★★★★ </b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在到校期间会有学长组负责接站，学长学姐将会在站口举浙江大学的牌子接站，请注意指示牌。而后可以随队等候校车，将有校车负责接送到校。行程中有问题可以向学长学姐们咨询，还能认识同届新生。具体情况请仔细查阅邮寄资料。<br/>
                        <b>（2）坐地铁 ★★★★☆ </b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;火车站旁边即地铁站，乘坐地铁1号线（临平方向），到达凤起路站下车后，在凤起路站内转乘2号线（良渚方向），到达虾龙圩站下车，从C出口出，步行800m。<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;城站地铁站乘坐5号线（金星方向），到达建国北路站下车后，在建国北路站内转乘2号线（良渚方向），到达虾龙圩站下车，从C出口出，步行800m即可。<br/>
                        <b>（3）坐公交 ★★★★</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;杭州的公交车会比较拥挤且可能遇到道路施工，但价格便宜，也较方便。具体方案：1.少换乘：从城站火车站公交站乘坐900路，在机动车辆管理所下车，步行549m即可到达。2.少步行：从城站火车站公交站乘坐185路，在杨六村站下车转乘93路（浙大紫金港校区方向），在浙大紫金港校区下车，步行。<br/>
                        <b>（4）出租车 ★★★☆</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;出租车舒适快捷，但价格较贵（60元左右）。在指定的出租车乘车点排队的人较多，但更加正规；而在站外会有黑车，经常会中途拼客、等客等，浪费时间。另外，若是下午三四点钟到杭州，这个时候是大多数出租车师傅交班的时间，在乘车点可能会很难排到车。<br/>
                    </div>
                    <div className={classes.title2}>2.从火车东站到紫金港</div>
                    <div className={classes.content1}>
                        <b>（1）坐校车 ★★★★★ </b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;学校在火车东站设立了“校外迎新接待点”，会有校车接送。<br/>
                        <b>（2）坐公交 ★★★★ </b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;从火车东站公交站乘坐93路/k93路，在浙大紫金港校区站下车，步行50m即可。<br/>
                        <b>（3）坐地铁 ★★★ </b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;乘坐地铁1号线（湘湖方向）在打铁关站下车，站内换乘5号线（金星方向）在三坝站下车，步行1.1km即可。<br/>
                    </div>
                    <div className={classes.title2}>3.从杭州南站到紫金港</div>
                    <div className={classes.content1}>
                        <b>（1）坐校车 ★★★★★ </b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;学校在火车东站设立了“校外迎新接待点”，会有校车接送。<br/>
                        <b>（2）坐公交+地铁 ★★★★ </b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;从火车南站西公交站乘坐123路/k123路（火车东站东方向），在汇德隆银隆百货公交站下车，步行100m在杭发厂地铁站（C2口）换乘地铁2号线（良渚方向），到达虾龙圩站下车，从C出口出，步行800m即可。<br/>
                        <b>（3）坐地铁 ★★★ </b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;火车南站地铁站乘坐5号线（金星方向），到达人民广场站下车后，在人民广场站内转乘2号线（良渚方向），到达虾龙圩站下车，从C出口出，步行800m即可。<br/>
                    </div>
                    <div className={classes.title2}>4.从萧山国际机场到紫金港</div>
                    <div className={classes.content1}>
                        <b>（1）机场大巴 ★★★★★ </b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;坐机场大巴在武林门民航售票处站下车，步行300米至武林门站坐290路到府新花园北站，而后步行至浙大紫金港。机场大巴每人约20元，从武林门打车到紫金港约50元（价格仅供参考，视当时交通状况而定）。<br/>
                        <b>（2）出租车★★★★ </b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;费用为160左右，视具体路况而定。<br/>
                        <b>（3）地铁★★★ </b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;步行至萧山国际机场地铁站，乘坐7号线在建设三路下车，换乘2号线地铁至虾龙圩下车。从B口离开地铁站。步行1.5公里到达紫金港校区。时间约2小时，地铁乘坐费用约9元。<br/>
                    </div>
                    <div className={classes.title2}>5.从汽车站到紫金港</div>
                    <div className={classes.content1}>
                        <b>（1）汽车南站 </b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;从婺江路站乘地铁1号线（文泽路方向），在西湖文化广场下车（B西北口出），步行至市交警支队公交车站，乘坐74路，在浙大紫金港校区站下车，步行50m。或在汽车南站乘坐59路，在东坡路庆春路口站下车，步行211m至小车桥站，乘坐10路，在浙大紫金港校区站下车，步行50m。<br/>
                        <b>（2）汽车西站 </b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;少换乘：步行989m至天目山古墩路路口站，乘坐89路，在浙大紫金港校区站下车，步行50m。少步行：从汽车西站公交站乘坐70路，在府苑新村站下车，乘坐89路，在浙大紫金港校区站下车，步行50m。<br/>
                        <b>（3）汽车北站 </b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;从汽车北站公交站乘坐91路，在萍水西街竟舟北路站下，乘坐129路在浙大紫金港校区站下车，步行到紫金港校区。或是步行1.3km后到达和睦地铁站乘坐5号线（金星方向）到达三坝地铁站，步行1.1km。<br/>
                        <b>（4）九堡客运中心 </b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;乘坐地铁1号线（湘湖方向）在西湖文化广场下车（B西北口出），步行至市交警支队公交车站，乘坐74路，在浙大紫金港校区站下车，步行50m即可。
                    </div>
                    <div className={classes.title1}>七、购物中心</div>
                    <div className={classes.content1}>
                        <b>（1）西溪银泰城 </b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;近紫金港校区，从西门步行约10分钟。平时人流较少，品牌较为丰富，以中档品牌为主。餐饮多，有电影院。<br/>
                        <b>（2）城西银泰城 </b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;近紫金港校区，骑车约15分钟，品牌丰富，以中高档为主，餐饮多，有电影院。<br/>
                        <b>（3）龙湖西溪天街 </b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;近紫金港校区，骑车约20分钟，相比西溪银泰还要再远一点，吃喝玩乐都还比较丰富的综合体。 <br/>
                        <b>（4）印象城 </b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;近紫金港校区，骑车约15分钟，有最近的海底捞，附近性价比最高的KTV等等。 <br/>
                        <b>（5）湖滨银泰 </b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;位于西湖边，坐地铁至龙翔桥地铁站。面积大、品牌多，以中高档品牌、奢侈品牌为主，有很多适合打卡的网红餐厅，假期人流量大。环境好，适合拍照。<br/>
                        <b>（6）嘉里中心 </b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;近西湖，位于地铁凤起路站，品牌较为丰富，以中高档品牌为主，餐饮丰富。环境好，适合拍照。近凤起路步行街，周边多游玩小吃。
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DesktopRegister;