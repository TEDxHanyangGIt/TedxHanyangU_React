import {Event} from '@data/baseClass.js'
import _1 from '@poster/2_1.jpg'
import _2 from '@poster/2_2.jpg'

const event = new Event({
    eventNum: 2,
    title: '오감도',
    imgs: [_1, _2],
    lectures: [
        {
            "speaker": "김은경",
            "occupation": "채소 소믈리에",
            "talk_title": "미각-자연의 맛을 느끼다",
            "youtube": "https://youtu.be/yfi0Hi38TQ0"
        },
        {
            "speaker": "장민승",
            "occupation": "공공미술가",
            "talk_title": "청각-Sphere 프로젝트",
            "youtube": "https://youtu.be/FsVcyr-p02g"
        },
        {
            "speaker": "임원철",
            "occupation": "조향사",
            "talk_title": "후각-모든 것이 사라져도 가장 마지막까지 남아있는 것, 향기",
            "youtube": "https://youtu.be/gIibfZWm20w"
        },
        {
            "speaker": "유대영",
            "occupation": "VJ",
            "talk_title": "시각-눈과 귀가 즐거워지는 시간",
            "youtube": "https://youtu.be/etK5e5Hjg4w"
        }
    ]
})

export default event;