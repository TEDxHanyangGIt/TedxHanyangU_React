import {Event} from '@data/baseClass.js'
import _1 from '@poster/11_1.jpg'
import _2 from '@poster/11_2.jpg'

const event = new Event({
    eventNum: 11,
    title: '心 CITY',
    imgs: [_1, _2],
    lectures: [
        {
            "speaker": "정원오",
            "occupation": "성동구청장",
            "talk_title": "젠트리피케이션 닥터, 성동구를 상생으로 치료하다.",
            "youtube": "https://www.youtube.com/watch?v=fpa7CzIe3xM"
        },
        {
            "speaker": "이원형",
            "occupation": "tvN '바벨250' PD",
            "talk_title": "꼭 언어가 통해야 마음이 통하나요?",
            "youtube": "https://www.youtube.com/watch?v=i5ungpGfJ5M"
        },
        {
            "speaker": "고지훈",
            "occupation": "LOUD 공공소통연구소",
            "talk_title": "서로의 마음을 이어가는 작은 소통 실천",
            "youtube": "https://www.youtube.com/watch?v=JZ9tDicYOpQ"
        },
        {
            "speaker": "박소령",
            "occupation": "퍼블리(PUBLY) CEO",
            "talk_title": "우리사회의 지적자본을 쌓는 사람들, PUBLY",
            "youtube": "https://www.youtube.com/watch?v=YS2cjfZNWqw"
        },
        {
            "speaker": "이영민",
            "occupation": "꽃눈과 시인의 포토포엠",
            "talk_title": "시각장애 학생들의 사진전 - 보이지 않는 것을 보다."
        },
        {
            "speaker": "양경수",
            "occupation": "작가",
            "talk_title": "그림으로 밥 먹고 살기",
            "youtube": "https://www.youtube.com/watch?v=_PconJ9l3os"
        }
    ]
})

export default event;