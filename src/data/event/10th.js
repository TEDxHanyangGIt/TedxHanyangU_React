import {Event} from '@data/baseClass.js'
import _1 from '@poster/10_1.jpg'
import _2 from '@poster/10_2.jpg'

const event = new Event({
    eventNum: 10,
    title: 'Renaissance',
    imgs: [_1, _2],
    lectures: [
        {
            "speaker": "김동환",
            "occupation": "로봇기자 개발자",
            "talk_title": "로봇 저널리즘, 두려워할 필요 없어요",
            "youtube": "https://www.youtube.com/watch?v=LmYjAmNnVWY&list=PLsRNoUx8w3rNhy_Nr3Z6XlXzgFTpgjeZC&index=3"
        },
        {
            "speaker": "이성동",
            "occupation": "얼킨(ul:kin) 대표",
            "talk_title": "세상에 단 하나뿐인 예술을 입다",
            "youtube": "https://www.youtube.com/watch?v=iuyGcRSNq1Q&list=PLsRNoUx8w3rNhy_Nr3Z6XlXzgFTpgjeZC&index=1"
        },
        {
            "speaker": "곽유라&최정윤",
            "occupation": "플래쳐랩 공동대표",
            "talk_title": "섹스 토이가 나쁜건가요?",
            "youtube": "https://www.youtube.com/watch?v=cT8ezszGiJU&list=PLsRNoUx8w3rNhy_Nr3Z6XlXzgFTpgjeZC&index=4"
        },
        {
            "speaker": "현동진",
            "occupation": "웨어러블 로봇 개발자",
            "talk_title": "로봇의 중심에 인간을 놓다",
            "youtube": "https://www.youtube.com/watch?v=cHUTpBys1-c&list=PLsRNoUx8w3rNhy_Nr3Z6XlXzgFTpgjeZC&index=2"
        },
        {
            "speaker": "최민정",
            "occupation": "설레다 일러스트레이터",
            "talk_title": "그림으로 당신을 치유해줄게요",
            "youtube": "https://www.youtube.com/watch?v=WnMAbUUcMx4&list=PLsRNoUx8w3rNhy_Nr3Z6XlXzgFTpgjeZC&index=5"
        },
        {
            "speaker": "윤홍조",
            "occupation": "마리몬드 대표",
            "talk_title": "오늘 하루도 당신은 소중하고 아름답습니다"
        }
    ]
})

export default event;