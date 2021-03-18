import {Event} from '@data/baseClass.js'
import _1 from '@poster/6_1.jpg'
import _2 from '@poster/6_2.jpg'

const event = new Event({
    eventNum: 6,
    title: 'HANDLE',
    imgs: [_1, _2],
    lectures: [
        {
            "speaker": "김윤영",
            "occupation": "서울대학교 기계항공공학부 교수",
            "talk_title": "그림을 설계하다",
            "youtube": "https://youtu.be/A1sx7gUZ-Xc"
        },
        {
            "speaker": "최현석",
            "occupation": "ELBON THE TABLE 총괄 셰프",
            "talk_title": "CRAZY ON YOURSELF",
            "youtube": "https://youtu.be/U6pgPSvCYgY"
        },
        {
            "speaker": "최소현",
            "occupation": "PERCEPTION 대표이사",
            "talk_title": "누구나 디자이너가 될수 있다",
            "youtube": "https://youtu.be/40YTGAkSeFA"
        },
        {
            "speaker": "이신혁",
            "occupation": "PROJECT SH 감독",
            "talk_title": "일상에 양념치기",
            "youtube": "https://youtu.be/JqxOwfqk5GU"
        },
        {
            "speaker": "박상돈",
            "occupation": "BEAT BOXER ",
            "talk_title": "A NEXT STEP IN THE MUSIC WORLD",
            "youtube": "https://youtu.be/LuQh76oZ8Tg"
        },
        {
            "speaker": "조항우",
            "occupation": "아트라스 BX 카레이서 겸 감독",
            "talk_title": "DRIVE TO WIN",
            "youtube": "https://youtu.be/8p1WTiat2no"
        }
    ]
})

export default event;