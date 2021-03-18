import {Event} from '@data/baseClass.js'
import _1 from '@poster/16_1.jpg'

const event = new Event({
    eventNum: 16,
    title: '[발화:發話]',
    subtitle: '비밀의 화원에 당신을 초대합니다.',
    imgs: [_1],
    lectures: [
        {
            "speaker": "민은정",
            "occupation": "INTERBRAND CCO",
            "talk_title": "언어는 브랜드의 집",
            "youtube": "https://www.youtube.com/watch?v=3k5ivlu00xc"
        },
        {
            "speaker": "조소현",
            "occupation": "변호사",
            "talk_title": "법, 아름다운 화원을 위한 약속",
            "youtube": "https://www.youtube.com/watch?v=syAc_lnp0to"
        },
        {
            "speaker": "김응수",
            "sub_speaker": "카메라타 솔",
            "occupation": "한양대학교 교수",
            "talk_title": "비발디 사계 中\n여름이 주는 감정의 효과",
            "youtube": "https://www.youtube.com/watch?v=t6Wh8VygPcs"
        },
        {
            "speaker": "김동현",
            "occupation": "넥슨 코리아 카트 라이브 유닛 PM",
            "talk_title": "역주행의 키워드 읽어내기,\n문화의 제 2의 전성기를 열다",
            "youtube": "https://www.youtube.com/watch?v=XpkZXroOKfw"
        },
        {
            "speaker": "최동호",
            "occupation": "한양대학교 교수",
            "talk_title": "내 이름을 걸고 연구를 한다",
            "youtube": "https://www.youtube.com/watch?v=Yu_1Np9YgXs"
        }
    ]
})

export default event;