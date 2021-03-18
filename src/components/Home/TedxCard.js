import React from 'react';
import {withRouter} from "react-router-dom"

import TEDxHanyangU8 from "@logo/TEDxHanyangU8.png"
import Sns from "@components/Home/Sns"
import main from "@data/main.js"

const Profile = (props) => {
    return (
        <div className="cardWrap">
            <img  src={TEDxHanyangU8} alt="mainCardImg"/>
            <div className="text">
                <span className="title">Theme: {main.title}</span>
                <span className="italic">This event occurred on</span> 
                <span className="date">{main.date}</span>
                <span className="italic">and in <a href={main.map_link} target="_blank" rel="noopener noreferrer"><span className="place">{main.place}</span></a></span>
                <Sns _className={"profile-sns"}/>
            </div>
        </div>
    );
};

export default withRouter(Profile);
