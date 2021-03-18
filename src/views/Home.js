import React from 'react';
import {withRouter} from "react-router-dom"

import Container from "@components/common/Container"
import TedxCard from "@components/Home/TedxCard"
import About from "@components/Home/About"

const Home = (props) => {
    return (
        <Container cur_page={"home"}>
            <div id="home" className="page">
                <TedxCard />
                <About />
            </div>
        </Container>
    )
}
export default withRouter(Home);
