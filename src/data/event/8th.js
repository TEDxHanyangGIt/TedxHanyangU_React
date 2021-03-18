import {Event} from '@data/baseClass.js'
import _1 from '@poster/8_1.jpg'
import _2 from '@poster/8_2.jpg'

const event = new Event({
    eventNum: 8,
    title: 'FEVER',
    imgs: [_1, _2],
    lectures: [
        {
            "speaker": "최대호",
            "occupation": "'읽어보시집' 작가",
            "talk_title": "손글씨로 쓴 내 인생",
            "youtube": "https://www.youtube.com/watch?v=_bBNWDKLFBs"
        },
        {
            "speaker": "송대섭",
            "occupation": "동물바이러스 연구 박사",
            "talk_title": "바이러스 습격 사건",
            "youtube": "https://www.youtube.com/watch?v=isQvpEdTi2o"
        },
        {
            "speaker": "유승혜",
            "occupation": "걷고 쓰는 사람, 여행작가",
            "talk_title": "엄마, 우리 같이 오길 잘 했어",
            "youtube": "https://www.youtube.com/watch?v=bS6b21P7WX8"
        },
        {
            "speaker": "김민욱",
            "occupation": "난방텐트 (주)바이맘 대표",
            "talk_title": "나의 뜨거운 마음으로 모두에게 온기를",
            "youtube": "https://www.youtube.com/watch?v=g0UmYsOeMpc"
        },
        {
            "speaker": "안민우",
            "occupation": "메모하는 청년, 청년 사업가",
            "talk_title": "마음의 열을 다스리는 법",
            "youtube": "https://www.youtube.com/watch?v=B3dbfZnEC58"
        },
        {
            "speaker": "호조(권순호)",
            "occupation": "카카오톡 이모티콘 디자이너",
            "talk_title": "닥치고 그림이나 그려",
            "youtube": "https://www.youtube.com/watch?v=LFuIQQAdTWQ"
        }
    ]
})

export default event;