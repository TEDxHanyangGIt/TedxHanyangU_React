import React from 'react';
import {withRouter} from "react-router-dom"

import TEDxHanyangU8 from "@logo/TEDxHanyangU8.png"
import main from "@data/main"
import IconButton from '@material-ui/core/IconButton';
import {Instagram, Facebook, YouTube} from '@material-ui/icons';

const snsList = [
    {  
        name: "facebook",
        url: "https://www.facebook.com/TEDxHanyangU",
        icon: <Facebook className="icon"/>
    },
    {
        name: "instagram",
        url: "https://www.instagram.com/tedxhanyangu_2021",
        icon: <Instagram className="icon"/>
    },
    {
        name: "youtube",
        url: "https://www.youtube.com/channel/UCvOYpIsR8nDXfB9nZSp871w/featured",
        icon: <YouTube className="icon"/>
    },
]

const Profile = (props) => {
    const goSns = (e) => {
        window.open(e.currentTarget.getAttribute("url"), '_blank');
    } 

    return (
        <div className="cardWrap">
            <img  src={TEDxHanyangU8} alt="mainCardImg"/>
            <div className="text">
                <span className="title">Theme: {main.title}</span>
                <span className="italic">This event occurred on</span> 
                <span className="date">{main.date}</span>
                <span className="italic">and in <a href={main.map_link} target="_blank" rel="noopener noreferrer"><span className="place">{main.place}</span></a></span>
                <div className="sns">
                {snsList.map((sns) => (
                        <IconButton
                            key={sns.name}
                            onClick={goSns}
                            url={sns.url}
                        >
                            {sns.icon}
                        </IconButton>
                    ))
                    }
                </div>
            </div>
        </div>
    );
};

export default withRouter(Profile);
