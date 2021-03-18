import React from 'react';
import { Divider } from '@material-ui/core';
import Sns from "@components/Home/Sns"

const About = (props) => {
    return (
        <div className="about">
            <div className="content">
                <div className="subject">
                    <p align="right">About <span className="red">Tedx</span></p>
                </div>
                <Divider orientation="vertical"></Divider>
                <div className="text">
                    <div className="wrap">
                        <p><span>TED</span>는 <span>Technology</span>, <span>Entertainment</span>, <span>Design</span>의 약자로, TED는 자신이 하는 일에 열정을 가진 사람들이</p>
                        <p><span>Ideas Worth Spreading'</span>이라는 슬로건 아래에서 18분간 발표하고 이야기를 나누는 자리입니다.</p>
                        <p className="top-margin"><span>TEDx</span>의 <span>'x'</span>는 <span>독립적으로 조직된 TED 이벤트</span>를 뜻하며, TED의 기본 가이드라인을 활용하여,</p>
                        <p><span>자발적으로 TED를 기획하고자 하는 사람들</span>이 모여 만드는 이벤트입니다.</p>
                    </div>
                    <div className="wrap">
                        <p>TED, short for Technology, Entertainment, Design, is a conference where speakers with passion for their work presents their ideas under the slogan 'Ideas Worth Spreading' for 18 minutes.</p>
                        <p className="top-margin">The 'x' in TEDx represents the idea of an independent TED-like event organized by individuals under TED specific guidelines.</p>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="subject">
                    <p align="right">
                        About <span className="red">Tedx </span> 
                        HanyangU
                    </p>
                </div>
                <Divider orientation="vertical"></Divider>
                <div className="text">
                    <div className="wrap">
                        <p><span>TEDxHanyangU</span>는 한양대학교의 교육 이념인 <span>사랑의 실천</span>을 바탕으로, 다양한 학문의 지식을 통해 폭넓은 교육을 받은 근면정직한 교양인으로 성장하는 데 보탬이 되는 아이디어 공유의 장을 펼치고자 노력합니다.</p>
                        <p className="top-margin">학문적 이론에 집중하는 교양인을 넘어서, 생각하고 배운 바를 실천에 옮기는 실천적 교양인이 되고자 하는 <span>TEDxHanyangU</span>는 <span>교수학습개발센터</span>의 지원을 받아 다양한 아이디어를 가진 학우들과 학내에</p>
                        <p><span>'Ideas Worth Spreading'</span>이라는 가치를 실현하고 있습니다.</p>
                    </div>
                    <div className="wrap">
                        <p>TEDxHanyangU was organized based on Hanyang University's ideals of education, Love in Action, to create a conference for sharing ideas that will help students grow into dilligent and honest beings through widening their academic persective. </p>
                        <p className="top-margin">With support from 'The Center for Teaching & Learning', TEDxHanyangU hopes to celebrate 'Ideas Worth Spreading' and encourage fellow students to not only focus on academia but use knowledge for the good of the society.</p>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="subject">
                    <p align="right">
                        Contact our<span className="red"> Team</span>
                    </p>
                </div>
                <Divider orientation="vertical"></Divider>
                <div className="text">
                    <div className="wrap">
                        <p><span>Facebook, Instagram, Youtube</span>에서도 TEDxHanyangU를 만나볼 수 있습니다.</p>
                        <p>각 채널에 방문하여 TEDxHanyangU의 <span>새로운 소식 및 연사님들의 카드뉴스</span>와 <span>이전 이벤트 영상</span>을 확인하세요.</p>
                    </div>
                    <div className="wrap">
                        <p>You can also meet TEDxHanyangU on Facebook, Instagram, and Youtube.</p>
                        <p>Visit each channel to see what's new from TEDxHanyangU, the speakers' card news, and videos from previous events.</p>
                    </div>
                    <div className="wrap">
                        <Sns _className={"about-sns"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;
