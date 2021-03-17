import React from 'react';
import {withRouter} from "react-router-dom"

import Container from "@components/common/Container"
import TedxCard from "@components/Home/TedxCard"

const Home = (props) => {
    return (
        <Container cur_page={"home"}>
            <div id="home" className="main">
                <TedxCard />
            </div>
        </Container>
    )
}
export default withRouter(Home);
