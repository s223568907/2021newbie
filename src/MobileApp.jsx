import React from 'react';
import { Route, Switch } from 'react-router';

import MobilePre from './MobilePre';
import MobileHome from './MobileHome';
import MobileMap from './MobileMap';
import MobilePage from './MobilePage';

import training0 from './assets/images/training0.jpg';
import training1 from './assets/images/training1.jpg';
import training2 from './assets/images/training2.jpg';
import training3 from './assets/images/training3.jpg';


import register0 from './assets/images/register0.jpg';
import register1 from './assets/images/register1.jpg';
import register2 from './assets/images/register2.jpg';
import register3 from './assets/images/register3.jpg';
import register4 from './assets/images/register4.jpg';
import register5 from './assets/images/register5.jpg';
import register6 from './assets/images/register6.jpg';


import life0 from './assets/images/life0.jpg';
import life1 from './assets/images/life1.jpg';
import life2 from './assets/images/life2.jpg';
import life3 from './assets/images/life3.jpg';
import life4 from './assets/images/life4.jpg';
import life5 from './assets/images/life5.jpg';
import life6 from './assets/images/life6.jpg';


import study0 from './assets/images/study0.jpg';
import study1 from './assets/images/study1.jpg';
import study2 from './assets/images/study2.jpg';
import study3 from './assets/images/study3.jpg';
import study4 from './assets/images/study4.jpg';
import study5 from './assets/images/study5.jpg';
import study6 from './assets/images/study6.jpg';
import study7 from './assets/images/study7.jpg';


function MobileApp() {
    const list1=['组织架构','军训内容','物品准备','实用TIPS'];
    const list2=['浙大钉和注册流程','疫情防控','报到流程','必备物品清单','学校附近酒店','交通','购物中心'];
    const list3=['浙大词典','常用信息','衣','食','住','行','安全'];
    const list4=['新生养成教育','选课','专业分流','日常学习','关于绩点','二三四课堂','评奖评优','七大校区'];
    return (
        <Switch>
            <Route path="/" exact component={MobilePre}/>
            <Route path="/home" component={MobileHome}/>
            <Route path="/map" component={MobileMap}/> 
            
            <Route exact path="/training0" render={() =>(
                <MobilePage content={training0} list={list1} type="training"/>
            )}/>
            <Route exact path="/training1" render={() =>(
                <MobilePage content={training1} list={list1} type="training"/>
            )}/>
            <Route exact path="/training2" render={() =>(
                <MobilePage content={training2} list={list1} type="training"/>
            )}/>
            <Route exact path="/training3" render={() =>(
                <MobilePage content={training3} list={list1} type="training"/>
            )}/>
            
            <Route exact path="/register0" render={() =>(
                <MobilePage content={register0} list={list2} type="register"/>
            )}/>
            <Route exact path="/register1" render={() =>(
                <MobilePage content={register1} list={list2} type="register"/>
            )}/>
            <Route exact path="/register2" render={() =>(
                <MobilePage content={register2} list={list2} type="register"/>
            )}/>
            <Route exact path="/register3" render={() =>(
                <MobilePage content={register3} list={list2} type="register"/>
            )}/>
            <Route exact path="/register4" render={() =>(
                <MobilePage content={register4} list={list2} type="register"/>
            )}/>
            <Route exact path="/register5" render={() =>(
                <MobilePage content={register5} list={list2} type="register"/>
            )}/>
            <Route exact path="/register6" render={() =>(
                <MobilePage content={register6} list={list2} type="register"/>
            )}/>
            
            <Route exact path="/life0" render={() =>(
                <MobilePage content={life0} list={list3} type="life"/>
            )}/>
            <Route exact path="/life1" render={() =>(
                <MobilePage content={life1} list={list3} type="life"/>
            )}/>
            <Route exact path="/life2" render={() =>(
                <MobilePage content={life2} list={list3} type="life"/>
            )}/>
            <Route exact path="/life3" render={() =>(
                <MobilePage content={life3} list={list3} type="life"/>
            )}/>
            <Route exact path="/life4" render={() =>(
                <MobilePage content={life4} list={list3} type="life"/>
            )}/>
            <Route exact path="/life5" render={() =>(
                <MobilePage content={life5} list={list3} type="life"/>
            )}/>
            <Route exact path="/life6" render={() =>(
                <MobilePage content={life6} list={list3} type="life"/>
            )}/>
            
            <Route exact path="/study0" render={() =>(
                <MobilePage content={study0} list={list4} type="study"/>
            )}/>
            <Route exact path="/study1" render={() =>(
                <MobilePage content={study1} list={list4} type="study"/>
            )}/>
            <Route exact path="/study2" render={() =>(
                <MobilePage content={study2} list={list4} type="study"/>
            )}/>
            <Route exact path="/study3" render={() =>(
                <MobilePage content={study3} list={list4} type="study"/>
            )}/>
            <Route exact path="/study4" render={() =>(
                <MobilePage content={study4} list={list4} type="study"/>
            )}/>
            <Route exact path="/study5" render={() =>(
                <MobilePage content={study5} list={list4} type="study"/>
            )}/>
            <Route exact path="/study6" render={() =>(
                <MobilePage content={study6} list={list4} type="study"/>
            )}/>
            <Route exact path="/study7" render={() =>(
                <MobilePage content={study7} list={list4} type="study"/>
            )}/>
            


        </Switch>
  );
}

export default MobileApp;