import {Event} from '@data/baseClass.js'
import _1 from '@poster/17_1.jpg'

const event = new Event({
    eventNum: 17,
    title: 'Palette',
    imgs: [_1],
    lectures: [
        {
            "speaker": "현은령",
            "occupation": "한양대학교 부교수",
            "talk_title": "과학 기술 혁신 시대 다함께 누리기: 장애인을 위한 디자인"
        },
        {
            "speaker": "김두리",
            "occupation": "한양대학교 조교수",
            "talk_title": "한계를 뛰어넘다, 나노 포토그래퍼의 이야기",
            "youtube": "https://www.youtube.com/watch?v=XahNshN3gDA"
        },
        {
            "speaker": "나태흠",
            "occupation": "사회적 기업 안테나 대표",
            "talk_title": "도시 재생, 내 삶의 재생",
            "youtube": "https://www.youtube.com/watch?v=rujg_eT0o2Y"
        },
        {
            "speaker": "최세훈",
            "occupation": "한양대학교 원자력 공학도",
            "talk_title": "최적화와 소통: 일본 오염수와 ALARA",
            "youtube": "https://www.youtube.com/watch?v=qA9owg1jCtU"
        },
        {
            "speaker": "최석영",
            "occupation": "뉴미디어아트 스튜디오 감성 놀이터 대표",
            "talk_title": "새로운 도전, 심리치유VR",
            "youtube": "https://www.youtube.com/watch?v=H1MMPtdOKsc"
        },
        {
            "speaker": "박하영",
            "occupation": "에델만 코리아 부사장",
            "talk_title": "Why Brand-Audience Relationship is Key",
            "youtube": "https://www.youtube.com/watch?v=KW-dpBfQwiA"
        }
    ]
})

export default event;