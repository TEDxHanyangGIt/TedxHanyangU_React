import {Event} from '@data/baseClass.js'
import _1 from '@poster/9_1.jpg'
import _2 from '@poster/9_2.jpg'

const event = new Event({
    eventNum: 9,
    title: 'KNOCK',
    imgs: [_1, _2],
    lectures: [
        {
            "speaker": "라이언각",
            "occupation": "살사 댄서",
            "talk_title": "광불광득:미치지 아니하면 얻지 못한다"
        },
        {
            "speaker": "자메즈",
            "occupation": "랩퍼",
            "talk_title": "내가 어디있든 그냥 하고 싶어. 노래가"
        },
        {
            "speaker": "정덕희",
            "occupation": "탱그램 팩토리 대표",
            "talk_title": "제조업에 노크한 디자이너"
        },
        {
            "speaker": "지웅배",
            "occupation": "우주연구원",
            "talk_title": "당신과 우주는 얼마나 멀리 떨어져 있을까요?"
        },
        {
            "speaker": "사우스빅",
            "occupation": "복고풍 디자이너",
            "talk_title": "위트있는 디자인, 뭐라고 생각해?"
        },
        {
            "speaker": "이기업",
            "occupation": "자유로운 대학생",
            "talk_title": "내가 두근거리는 오늘"
        }
    ]
})

export default event;