import React from 'react';
import { useDispatch, connect } from 'react-redux';
import {withRouter} from "react-router-dom"
import { toggleDrawer } from '@store/action'

import {
    Drawer, List, ListItem, ListItemText,
    Divider
} from '@material-ui/core';

import logo4 from "@logo/TEDxHanyangU4.png"

const MenuList = [
    {
        key: "about",
        name: "About Us",
        path: "/about"
    }
];



const LeftMenu = (props) => {
    const dispatch = useDispatch();
    const { menuSwitch, cur_page, history } = props;

    const closeDrawer = () => {
        dispatch(toggleDrawer(false))
    };

    const goPage = (event) => {
        dispatch(toggleDrawer(false))
        history.push(event.currentTarget.getAttribute("path"))
    };

    return (
        <Drawer id="drawer" anchor="left" open={menuSwitch} onClose={closeDrawer}>
            <List className="menuList">
                <ListItem className="logo4">
                    <img src={logo4} alt="logo-img"></img>
                </ListItem>
                <Divider style={{marginTop: 20}}></Divider>
                {MenuList.map((menu) => (
                    <ListItem
                        key={menu.key}
                        path={menu.path}
                        button={true}
                        className={menu.key === cur_page ? "menu cur_page": "menu"}
                        onClick={goPage}
                    >
                        <ListItemText 
                            disableTypography={true}
                            primary={menu.name}
                        />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};

export default connect(state => ({
    menuSwitch: state.menuSwitch,
    cur_page: state.cur_page
}))(withRouter(LeftMenu));
