import React from 'react';

const Poster = (props) => {
    const {imgs, eventNum} = props

    return (
        <div className="poster">
            {imgs.map((img, idx) => (
                <img src={img} alt={`${eventNum}_${idx}`} key={`poster_${eventNum}_${idx}`}></img>
            ))}
        </div>
    )
}

export default Poster;