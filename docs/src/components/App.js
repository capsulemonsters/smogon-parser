"use strict";

import React from 'react';
import styled from '../styled';
import AppBar from './AppBar';
import Board from "./Board";
import Footer from "./Footer";

const styles = (theme) => ({
    root: {}
});

class AppComponent extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <AppBar/>
                <Board/>
                <Footer/>
            </div>
        );
    }
}

export default styled(AppComponent, styles);
