import React from 'react';
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

const Sns = (props) => {
    const {_className} = props
    const goSns = (e) => {
        window.open(e.currentTarget.getAttribute("url"), '_blank');
    }

    return(
        <div className={_className}>
        {snsList.map((sns) => (
            <IconButton
                key={sns.name}
                onClick={goSns}
                url={sns.url}
            >
                {sns.icon}
            </IconButton>
        ))}
        </div>
    )
}

export default Sns;