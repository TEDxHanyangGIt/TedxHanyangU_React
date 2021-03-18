import React from 'react';
import Poster from "@components/Talks/Poster"

export class Event {
    constructor({eventNum, title, imgs, lectures, subtitle=null}) {
      this.eventNum = eventNum;
      this.title = title;
      this.img = <Poster imgs={imgs} eventNum={eventNum}/>
      this.subtitle = subtitle;
      this.lectures = lectures.map((lecture) => (
        new Lecture(lecture)
      ))
    }
}

class Lecture{
    constructor(lecture){
      this.speaker = lecture["speaker"];
      this.occupation = lecture["occupation"];
      this.title = lecture["talk_title"];
      this.youtube = lecture.hasOwnProperty("youtube") ? lecture["youtube"] : null;
    }
}