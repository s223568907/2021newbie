import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    footer: {
        width: '100%',
        height: 50,
        backgroundColor: '#000000',
        color: '#ffffff',
        fontSize: 12,
        fontFamily: 'Noto Sans SC',
        position: 'relative',
        lineHeight: 1.5,
    },
    content: {
        margin: '11px 0',
        position: 'absolute',
        left: 15,
        top: 0,
        '& a': {
            color: 'inherit',
            textDecoration: 'none',
        }
    },
});

function MobileFooter() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.footer}>
                <div className={classes.content}>
                    <div>
                        &copy;2021 浙江大学 求是潮 All right reserved.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MobileFooter;
