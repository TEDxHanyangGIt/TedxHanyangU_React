import React from 'react';
import { useDispatch, connect } from 'react-redux';
import {withRouter} from "react-router-dom"
import { toggleDrawer } from '@store/action'

import {Button} from '@material-ui/core';
import {Menu, MenuOpen} from '@material-ui/icons';

import logo2 from "@logo/TEDxHanyangU2.png"

const Header = (props) => {
    const dispatch = useDispatch();
    const { menuSwitch, history } = props;

    const goHome = () => {
        if (history.location.pathname !== "/" ){
            history.push('/')
        }
    }

    const openDrawer = () => {
        dispatch(toggleDrawer(true))
    };

    return (
        <div id="header">
            <Button className="logoWarp" onClick={goHome}>
                <img src={logo2} alt="logo-img"></img>
            </Button>
            <Button onClick={openDrawer}>
                {menuSwitch
                ?<MenuOpen />
                :<Menu/>
                }
            </Button>
        </div>
    );
};

export default connect(state => ({
    menuSwitch: state.menuSwitch
}))(withRouter(Header));
