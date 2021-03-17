import React, {useEffect}from 'react';
import {withRouter} from "react-router-dom"

import TEDxHanyangU8 from "@logo/TEDxHanyangU8.png"
import IconButton from '@material-ui/core/IconButton';
import {LinkedIn, GitHub, Instagram, Facebook} from '@material-ui/icons';

const email = "94wogus@gmail.com"
const workEmail = "94wogus@quantit.io"

const snsList = [
    {  
        name: "Facebook",
        url: "https://www.facebook.com/TEDxHanyangU",
        icon: <LinkedIn className="icon"/>
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/jaehyunback/?hl=ko",
        icon: <Instagram className="icon"/>
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/jaehyunback/?hl=ko",
        icon: <Instagram className="icon"/>
    },
]

const Profile = (props) => {
    const goSns = (e) => {
        window.open(e.currentTarget.getAttribute("path"), '_blank');
    } 

    return (
        <div className="mainCard">
            <div className="cardImg">
                <img  src={TEDxHanyangU8} alt="mainCardImg"/>
            </div>
            {/* <div className="profile">
                <div>
                    <span>JaeHyun.Back</span> / Developer(Quantit)
                </div>
                <div>
                    email: <a href={`mailto:${email}`} title="개인 이메일">{email}</a>
                </div>
                <div>
                    work-email: <a href={`mailto:${workEmail}`} title="업무용 이메일">{workEmail}</a>
                </div>
                <div className="snsList">
                    {snsList.map((sns) => (
                        <IconButton
                            key={sns.name}
                            onClick={goSns}
                            path={sns.url}
                        >
                            {sns.icon}
                        </IconButton>
                    ))
                    }
                </div> */}
            {/* </div> */}
        </div>
    );
};

export default withRouter(Profile);
