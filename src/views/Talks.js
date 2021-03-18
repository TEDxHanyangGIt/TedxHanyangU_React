import React from 'react';
import {withRouter} from "react-router-dom"

import Container from "@components/common/Container"

const Talks = (props) => {
    return (
        <Container cur_page={"talks"}>
            <div id="talks" className="page">
                <div>Talks</div>
            </div>
        </Container>
    )
}
export default withRouter(Talks);
