import {Event} from '@data/baseClass.js'
import _1 from '@poster/1_1.jpg'
import _2 from '@poster/1_2.jpg'

const event = new Event({
    eventNum: 1,
    title: 'Expect the unexpected',
    imgs: [_1, _2],
    lectures: [
        {
            "speaker": "박철준",
            "occupation": "ARCHIBAN 건축도시연구원",
            "talk_title": "대중문화공간 한강 아레나",
            "youtube": "https://youtu.be/a53eLY69gc0"
        },
        {
            "speaker": "한선천",
            "occupation": "한양대학교 무용과 재학",
            "talk_title": "현대무용으로 소통하기",
            "youtube": "https://youtu.be/gLAhE8RtrIk"
        },
        {
            "speaker": "유영만",
            "occupation": "한양대학교 교수학습개발센터장",
            "talk_title": "여러분에게 지식생태학을 소개합니다",
            "youtube": "https://youtu.be/NWLlbmANlgk"
        },
        {
            "speaker": "정태성",
            "occupation": "개인택시운송사업자",
            "talk_title": "5성급 택시",
            "youtube": "https://youtu.be/WODUC0XxfhM"
        }
    ]
})

export default event;