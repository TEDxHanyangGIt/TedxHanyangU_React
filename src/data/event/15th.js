import {Event} from '@data/baseClass.js'
import _1 from '@poster/15_1.jpg'
import _2 from '@poster/15_2.jpg'

const event = new Event({
    eventNum: 15,
    title: '[잇다, 있다]:',
    subtitle: 'Connect the ideas, and we are alive',
    imgs: [_1, _2],
    lectures: [
        {
            "speaker": "김민식",
            "occupation": "MBC PD",
            "talk_title": "잘못 탄 기차가 목적지에 데려다준다",
            "youtube": "https://www.youtube.com/watch?v=boUexJJVj_8"
        },
        {
            "speaker": "김민경",
            "occupation": "한양대학교 교수",
            "talk_title": "견고한 벽 : 더 쌓을 것인가? 뛰어넘을 것인가",
            "youtube": "https://www.youtube.com/watch?v=eG_nQzXMJKo"
        },
        {
            "speaker": "정상수",
            "occupation": "사회복지법인 금란 이사장",
            "talk_title": "너와 나. 우리가 걸을 때의 길",
            "youtube": "https://www.youtube.com/watch?v=L7nBz0PB10w"
        },
        {
            "speaker": "권태윤",
            "occupation": "한국 APOPO 대표",
            "talk_title": "안전한 내일 : 쥐를 이용한 지뢰 제거 방법",
            "youtube": "https://www.youtube.com/watch?v=QjhAlNIaQaQ"
        },
        {
            "speaker": "기우진",
            "occupation": "사회적 기업 (주)러블리페이퍼 대표",
            "talk_title": "당신의 이웃은 누구입니까?",
            "youtube": "https://www.youtube.com/watch?v=yQS2sRcWEMc"
        },
        {
            "speaker": "서현",
            "occupation": "한양대학교 교수",
            "talk_title": "집이 담은 이야기",
            "youtube": "https://www.youtube.com/watch?v=at70hMnIldk"
        }
    ]
})

export default event;