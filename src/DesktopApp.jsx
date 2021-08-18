import React from 'react';
import { Route, Switch } from 'react-router';

import DesktopPre from './DesktopPre';
import DesktopHome from './DesktopHome';
import DesktopMap from './DesktopMap';

import DesktopTraining from './DesktopTraining';
import DesktopRegister from './DesktopRegister';
import DesktopLife from './DesktopLife';
import DesktopStudy from './DesktopStudy';

function DesktopApp() {
    return (
        <Switch>
            <Route path="/" exact component={DesktopPre}/>
            <Route path="/home" component={DesktopHome}/>
            <Route path="/map" component={DesktopMap}/>
            
            <Route path="/training" component={DesktopTraining}/>
            <Route path="/register" component={DesktopRegister}/>
            <Route path="/life" component={DesktopLife}/>
            <Route path="/study" component={DesktopStudy}/>
        </Switch>
  );
}

export default DesktopApp;