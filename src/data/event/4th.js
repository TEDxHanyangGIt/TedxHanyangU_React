import {Event} from '@data/baseClass.js'
import _1 from '@poster/4_1.jpg'
import _2 from '@poster/4_2.jpg'

const event = new Event({
    eventNum: 4,
    title: '제페토 할아버지',
    imgs: [_1, _2],
    lectures: [
        {
            "speaker": "선우명호",
            "occupation": "한양대학교 ACE Lab 연구원",
            "talk_title": "미래자동차 기술에 꿈을 불어넣다",
            "youtube": "https://youtu.be/DgGcPv6cy-k"
        },
        {
            "speaker": "박진호",
            "occupation": "씨네메이트 컬러리스트",
            "talk_title": "영화에 숨을 불어넣다",
            "youtube": "https://youtu.be/rMZOXI-bflA"
        },
        {
            "speaker": "김효진",
            "occupation": "그린디자이너",
            "talk_title": "버려진 것에 숨을 불어넣다",
            "youtube": "https://youtu.be/-JbYiP7IZbE"
        },
        {
            "speaker": "안희창",
            "occupation": "한양대학교 병원 재건성형의",
            "talk_title": "새 삶에 숨을 불어넣다",
            "youtube": "https://youtu.be/EEl7-gp4srY"
        }
    ]
})

export default event;