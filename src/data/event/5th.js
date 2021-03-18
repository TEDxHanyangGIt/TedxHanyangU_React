import {Event} from '@data/baseClass.js'
import _1 from '@poster/5_1.jpg'
import _2 from '@poster/5_2.jpg'

const event = new Event({
    eventNum: 5,
    title: '움(UM); 트다',
    imgs: [_1, _2],
    lectures: [
        {
            "speaker": "최종언",
            "occupation": "오픈크리에이터즈 공동대표",
            "talk_title": "차원이 움트다",
            "youtube": "https://youtu.be/iyl8QqGaR-Q"
        },
        {
            "speaker": "이나리",
            "occupation": "은행권청년창업재단 기업가정신센터장",
            "talk_title": "D캠프, 생태계/열린터가 움트다",
            "youtube": "https://youtu.be/6yLDRl8ZepQ"
        },
        {
            "speaker": "윤여환",
            "occupation": "충남대학교 회화과 교수",
            "talk_title": "생명/화폭에 움트다",
            "youtube": "https://youtu.be/ZUqJfMDUhS4?list=PLsRNoUx8w3rNRPnAGAfHYDRCJ272aQTmG"
        },
        {
            "speaker": "김찬수",
            "occupation": "남녀소통연구소 대표",
            "talk_title": "감정이 움트다",
            "youtube": "https://youtu.be/tgJ6LbqmqH8"
        },
        {
            "speaker": "구민근",
            "occupation": "FAIR SPACE 대표",
            "talk_title": "소유가 아닌 공유, 공간기부가 움트다",
            "youtube": "https://youtu.be/zZZU7r331wE"
        }
    ]
})

export default event;