import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from "react-router-dom"
import routes from '@/router';

import Button from '@material-ui/core/Button';

const HeaderMenu = (props) => {
    const { cur_page, history } = props;
    const goPage = (event) => {
        history.push(event.currentTarget.getAttribute("path"))
    };

    return (
        <div className="header-menu">
        {routes.map((r) => (
            <Button
                key={r.name}
                path={r.path}
                className={r.name === cur_page ? "menu cur_page": "menu"}
                onClick={goPage}
            >
                {r.label}
            </Button>
        ))}
        </div>
    );
};

export default connect(state => ({
    cur_page: state.cur_page
}))(withRouter(HeaderMenu));
