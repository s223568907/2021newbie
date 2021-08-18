import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css';
import 'intersection-observer';

import { createMuiTheme } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden/Hidden';
import { MuiThemeProvider } from '@material-ui/core/styles';

import qhistory from 'qhistory';
import { stringify, parse } from 'qs';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router';

import * as serviceWorker from './serviceWorker';
import MobileApp from './MobileApp';
import DesktopApp from './DesktopApp';

import * as ReactGA from 'react-ga';

// noinspection JSUnusedGlobalSymbols
const history = qhistory(
    createBrowserHistory({
        getUserConfirmation: (_, callback) => {}
    }),
    stringify,
    parse
);
history.block((_, action) => {
    if (window.innerWidth > 640) return; // on mobile only
    if (action !== 'REPLACE') return '';
});

// ga
ReactGA.initialize('UA-145161942-2');
ReactGA.pageview(window.location.pathname + window.location.search);
history.listen(({ pathname, search }, type) => type !== 'REPLACE' && ReactGA.pageview(`${pathname}${search}`));

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#435BC9',
        },
        secondary: {
            main: '#435BC9',
        },
    }
});

ReactDOM.render((
    <MuiThemeProvider theme={theme}>
        <Router history={history}>
            <Hidden mdUp>
                <MobileApp />
            </Hidden>
            <Hidden smDown>
                <DesktopApp />
            </Hidden>
        </Router>
    </MuiThemeProvider>
), document.getElementById('root'));

serviceWorker.unregister();