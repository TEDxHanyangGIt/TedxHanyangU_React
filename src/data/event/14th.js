import {Event} from '@data/baseClass.js'
import _1 from '@poster/14_1.jpg'
import _2 from '@poster/14_2.jpg'

const event = new Event({
    eventNum: 14,
    title: 'CRUSH',
    subtitle: 'out the old idea, on the new idea',
    imgs: [_1, _2],
    lectures: [
        {
            "speaker": "이정화",
            "occupation": "한국아동심리코칭센터 대표",
            "talk_title": "꼭 그래야만 하나요?",
            "youtube": "https://www.youtube.com/watch?v=B3spAFaItYE"
        },
        {
            "speaker": "이은아",
            "occupation": "나는 (It’s about me!’) 대표",
            "talk_title": "어떤 비장애형제들의 이야기",
            "youtube": "https://www.youtube.com/watch?v=X9sfFhqixSw"
        },
        {
            "speaker": "이상은",
            "occupation": "비언어커뮤니케이션 전문가",
            "talk_title": "아는 사람에게만 보이는 비밀언어, 바디랭귀지",
            "youtube": "https://www.youtube.com/watch?v=MVspV59JTpM&t=10s"
        },
        {
            "speaker": "강석진",
            "occupation": "국립 경상대 건축학과 교수",
            "talk_title": "”CRIME X DESIGN = CPTED”",
            "youtube": "https://www.youtube.com/watch?v=ENXnA8bSaDs"
        },
        {
            "speaker": "박외진",
            "occupation": "주식회사 ‘아크릴’ 대표",
            "talk_title": "감성, 공감. 그리고 인공지능",
            "youtube": "https://www.youtube.com/watch?v=cq9V7pXxr-w"
        }
    ]
})

export default event;