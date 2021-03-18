import {Event} from '@data/baseClass.js'
import _1 from '@poster/7_1.jpg'
import _2 from '@poster/7_2.jpg'

const event = new Event({
    eventNum: 7,
    title: '초록(GREEN)',
    imgs: [_1, _2],
    lectures: [
        {
            "speaker": "임형준",
            "occupation": "유엔세계식량계획 한국사무소장",
            "talk_title": "모든나라가 green이 되는 세상을 꿈꾸다",
            "youtube": "https://youtu.be/97sdmcrp0Xk"
        },
        {
            "speaker": "이주은",
            "occupation": "미술사학자",
            "talk_title": "초록 - 악마의 색에서 천사의 색으로",
            "youtube": "https://youtu.be/JePC3h4hhgw"
        },
        {
            "speaker": "김상철",
            "occupation": "그린카 본부장",
            "talk_title": "세상을 변화시킨 Green, 자동차에서 함께 꿈꾸다",
            "youtube": "https://youtu.be/dgb-A4gKEnk"
        },
        {
            "speaker": "김가현",
            "occupation": "싱어송라이터 락쿤",
            "talk_title": "Editing the brain in Sandrohy",
            "youtube": "https://youtu.be/xK9Klzjv-kk"
        },
        {
            "speaker": "서동일",
            "occupation": "오큘러스 VR 한국지사장",
            "talk_title": "VR - The new digital mudium",
            "youtube": "https://youtu.be/GUSnC6nXZ3U"
        },
        {
            "speaker": "김대호",
            "occupation": "공공 PR & DESIGN 컨설턴트",
            "talk_title": "지구와 인간을 위한 공존의 길",
            "youtube": "https://youtu.be/-9FhrKBEWo0"
        }
    ]
})

export default event;