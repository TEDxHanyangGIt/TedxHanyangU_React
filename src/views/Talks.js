import React, {Fragment, useState} from 'react';
import { connect } from 'react-redux';
import {withRouter} from "react-router-dom"

import {List, ListItem} from '@material-ui/core';

import { Swiper, SwiperSlide } from 'swiper/react';
import { toast } from 'react-toastify';
import Container from "@components/common/Container"

const Talks = (props) => {
    const {events} = props
    const [curEvent, setEvent] = useState(events[0])

    const goYoutube = (l) => {
        if (l.youtube !== null){
            window.open(l.youtube, '_blank');
        }else{
            toast.warn(
                <p id="no_youtube">
                    강연 영상이 라이센스 문제로 업로드되지 못하였습니다.
                </p>
            )
        }
    }

    return (
        <Container cur_page={"talks"}>
            <div id="talks" className="page">
                <Swiper
                    className="event-swiper"
                    effect="cube"
                    pagination={{type:'bullets', dynamicBullets: true}}
                    onSlideChange={(swiper) => setEvent(events[swiper.activeIndex])}
                >
                    {events.map((e, idx)=>(
                        <SwiperSlide key={`event_${idx}`} className="event">
                            {e.img}
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="event_info">
                    <p className="title">{curEvent.eventNum}th: <span className="title-bold">{curEvent.title}</span></p>
                    {curEvent.subtitle !== null ? <p className="subtitle">{curEvent.subtitle}</p>: <Fragment/>}
                    <List className="lectures">
                        {curEvent.lectures.map((l, index) => (
                            <ListItem
                                className="lecture"
                                key={`speaker_${curEvent.eventNum}_${index}`}
                                onClick={() => goYoutube(l)}
                                button={true}
                            >
                                <span className="mark">-</span> 
                                <div className="lecture-info">
                                    <p className="lecture-title">{l.title}</p>
                                    <p className="speaker">{`${l.speaker}`}<span className="occupation"> ({l.occupation})</span></p>
                                </div>
                            </ListItem>
                        ))}
                    </List>
                </div>
            </div>
        </Container>
    )
}
export default connect(state => ({
    events: state.events
}))(withRouter(Talks));
