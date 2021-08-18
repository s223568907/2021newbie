import React from 'react';
import { Helmet } from 'react-helmet';
import MobileFooter from './MobileFooter';
import MobileEntries from './MobileEntries';

function MobileHome() {
    return (
        <div>
            <Helmet title="导航 - 新生手册"/>
            <MobileEntries/>
            <MobileFooter/>
        </div>
    );
}

export default MobileHome;