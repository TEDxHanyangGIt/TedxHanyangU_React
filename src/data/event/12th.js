import {Event} from '@data/baseClass.js'
import _1 from '@poster/12_1.jpg'
import _2 from '@poster/12_2.jpg'

const event = new Event({
    eventNum: 12,
    title: '달의 뒷면',
    imgs: [_1, _2],
    lectures: [
        {
            "speaker": "김홍기",
            "occupation": "패션큐레이터",
            "talk_title": "단추, 작지만 놀라운 옷의 이면",
            "youtube": "https://youtu.be/3qKgVDbo7DQ"
        },
        {
            "speaker": "이지민",
            "occupation": "PR5번가 CEO",
            "talk_title": "진짜 한국의 술을 아십니까?",
            "youtube": "https://youtu.be/dGpjww3KsU4"
        },
        {
            "speaker": "소형석",
            "occupation": "SBS 모비딕 '양세형의 숏터뷰'' PD",
            "talk_title": "Attention, Adaption, Annotation 관심의 시장에 적응하기"
        },
        {
            "speaker": "허성용",
            "occupation": "아프리카인사이트 대표",
            "talk_title": "빈곤포르노, 그 불편한 진실",
            "youtube": "https://youtu.be/JuFamq6AHTU"
        },
        {
            "speaker": "김현식",
            "occupation": "물나무사진관 대표",
            "talk_title": "조선에서 태어난 사진",
            "youtube": "https://youtu.be/12WRBnN-92U"
        },
        {
            "speaker": "이혜정",
            "occupation": "교육과혁신연구소장",
            "talk_title": "'물 만난 물고기'를 만드는 물",
            "youtube": "https://youtu.be/hX98Qmc_4sg"
        }
    ]
})

export default event;