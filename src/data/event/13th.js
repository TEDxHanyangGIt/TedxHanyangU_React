import {Event} from '@data/baseClass.js'
import _1 from '@poster/13_1.jpg'
import _2 from '@poster/13_2.jpg'

const event = new Event({
    eventNum: 13,
    title: '제 8요일',
    imgs: [_1, _2],
    lectures: [
        {
            "speaker": "오선경",
            "occupation": "성공독섴코칭센터 대표",
            "talk_title": "멋지고 충분한, 제8요일의 책읽기",
            "youtube": "https://www.youtube.com/watch?v=7S8BvsRDVVE"
        },
        {
            "speaker": "양재웅",
            "occupation": "W진병원 원장",
            "talk_title": "행복한 연애",
            "youtube": "https://www.youtube.com/watch?v=JDTciL0PVXU"
        },
        {
            "speaker": "최낙삼",
            "occupation": "좋은상품연구소 소장",
            "talk_title": "CSV의 효율적 전략과 구체적 실현",
            "youtube": "https://www.youtube.com/watch?v=t0SRA5lwZ54"
        },
        {
            "speaker": "소보",
            "occupation": "싱어송라이터",
            "talk_title": "평범해서 더 특별한, 제8요일",
            "youtube": "https://www.youtube.com/watch?v=JJxQCIcbqTk"
        },
        {
            "speaker": "김병기",
            "occupation": "아이들과미래재단 경영전략실",
            "talk_title": "스포츠 교육을 매개로 한 변화 마을과 아이들",
            "youtube": "https://www.youtube.com/watch?v=wlaQRrn7ZYg"
        },
        {
            "speaker": "정신희",
            "occupation": "이화여대 여성학강사",
            "talk_title": "우리는 모두 '엄마'다",
            "youtube": "https://www.youtube.com/watch?v=1Qk9RcgT3vI"
        }
    ]
})

export default event;