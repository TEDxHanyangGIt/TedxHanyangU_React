import {Event} from '@data/baseClass.js'
import _1 from '@poster/3_1.jpg'
import _2 from '@poster/3_2.jpg'

const event = new Event({
    eventNum: 3,
    title: '거짓-말(명사)',
    imgs: [_1, _2],
    lectures: [
        {
            "speaker": "윤영수",
            "occupation": "KBS 방송작가",
            "talk_title": "역사에 대한 참과 거짓",
            "youtube": "http://youtu.be/1xro4abasLU"
        },
        {
            "speaker": "이재석",
            "occupation": "서울경찰청 과학수사계 거짓말 탐지반 경위",
            "talk_title": "과학, 폴리그라프, 그리고 범죄",
            "youtube": "http://youtu.be/et32yx90tDo"
        },
        {
            "speaker": "서민",
            "occupation": "단국대학교 의학 교수",
            "talk_title": "과학자의 거짓말",
            "youtube": "http://youtu.be/DFhy66uOr8A"
        }
    ]
})

export default event;