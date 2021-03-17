import React from 'react';
import {withRouter} from "react-router-dom"

import Container from "@components/common/Container"

const About = (props) => {
    return (
        <Container cur_page={"about"}>
            <div id="about" className="main">
                <div>About</div>
            </div>
        </Container>
    )
}
export default withRouter(About);
