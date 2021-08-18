import React from 'react';
import { Helmet } from 'react-helmet';
import DesktopEntries from './DesktopEntries';
import DesktopFooterBlack from './DesktopFooterBlack';



function DesktopHome() {
    return (
        <div>
            <Helmet title="导航 - 新生手册"/>
            <DesktopEntries/>
            <DesktopFooterBlack/>
        </div>
    );
}

export default DesktopHome;