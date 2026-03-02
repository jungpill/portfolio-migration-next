import styled from "styled-components";
import type { Metadata } from "next";
import JavaScript from '../../assets/webp/JavaSCript.webp'
import TypeScript from '../../assets/webp/TypeScript.webp'
import React from '../../assets/webp/React.webp'
import Redux from '../../assets/webp/Redux.webp'
import Styled from '../../assets/webp/styledcomponents.webp'
import ReactQuery from '../../assets/webp/react-query.webp'
import GitHub from '../../assets/webp/icons8-github의-30.webp'
import Zustand from '../../assets/webp/Zustand.webp'
import AntDesign from '../../assets/webp/AntDesign.webp'
import Jira from '../../assets/webp/Jira.webp'
import Confluence from '../../assets/webp/Confluence.webp'
import chart_js from '../../assets/webp/chart.js.webp'
import Aws from '../../assets/webp/aws.webp'
import Gcp from '../../assets/webp/gcp.webp'
import CustomTooltip from "../../component/CustomTooltip";
import Next from '../../assets/webp/icon_next.webp'

export const metadata: Metadata = {
    title: "프로필",
    description: "이정필의 기술 스택, 경력, 교육 이력을 소개하는 페이지입니다.",
    alternates: {
        canonical: "/profile",
    },
    openGraph: {
        title: "프로필 | 이정필 포트폴리오",
        description: "기술 스택, 경력, 교육 이력",
        url: "/profile",
        images: [{
            url: "/favicon.ico",
            width: 1200,
            height: 630,
            alt: "프로필 | 이정필 포트폴리오"
        }]
    },
}

const Page = () => {

    const techList = [
        { title: "React", icon: React },
        { title: "Next.js", icon: Next},
        { title: "JavaScript", icon: JavaScript },
        { title: "TypeScript", icon: TypeScript },
        { title: "Redux", icon: Redux },
        { title: "Zustand", icon: Zustand },
        { title: "React Query", icon: ReactQuery },
        { title: "Styled Components", icon: Styled },
        { title: "chart.js", icon: chart_js },
        { title: "Ant Design", icon: AntDesign },
        { title: "Confluence", icon: Confluence },
        { title: "Jira", icon: Jira },
        { title: "GitHub", icon: GitHub },
        { title: 'Aws', icon: Aws},
        { title: 'Gcp', icon: Gcp}
    ];

    return(
        <ProfileContainer aria-labelledby="profile-title">
            <ProfileWrapper>

                {/* 접근성 향상을 위해 시각적으로 숨긴 제목 추가 */}
                <h1 id="profile-title" style={{position:'absolute', left:'-9999px'}}>
                    프로필
                </h1>
                {/* 기술 스택 및 도구 */}
                <section aria-labelledby="tech-title">
                    <Title as="h2" id="tech-title" style={{marginBottom: '1rem'}}>기술 스택 및 도구</Title>
                    
                        <ul style={{display: 'flex', flexWrap: 'wrap',  padding: 0, margin: 0, listStyle: 'none'}}> 
                            {techList.map((tech) => (
                            <li key={tech.title} style={{margin: 0, padding: 0, listStyle: 'none'}}>
                            <CustomTooltip
                                title={tech.title}
                                position="bottom"
                                children={<Icon src={tech.icon.src} alt={tech.title} />}
                            />
                            </li>
                        ))}
                        </ul>
                    
                </section>

                {/* 경력 */}
                <section aria-labelledby="career-title">
                    <Title as="h3" id="career-title">경력</Title>
                    <div>
                        <Text as="h4">(주) 투비유니콘</Text>
                        <p>프론트엔드 개발</p>
                        <time dateTime="2025-06">2025.06</time> ~ 재직중
                    </div>
                </section>
                
                {/* 교육 */}
                <section aria-labelledby="education-title">
                    <Title as="h3" id="education-title">교육</Title>
                    <div>
                        <Text as="h4">성결대학교</Text>
                        <p>졸업 | 대학교(학사)</p>
                        <p>컴퓨터공학과 2023. 03. ~ 2025. 02</p>
                    </div>
                </section>

            </ProfileWrapper>
        </ProfileContainer>
    )
}

export default Page


const ProfileContainer = styled.article`
    display: flex;
    width: 95%;
    height: 90%;
    background-color: white;
    border: 2px solid skyblue;
    border-radius: 20px;
    align-items: center;
    flex-direction: column;
    margin-left: 1%;
    padding-bottom: .8rem;
    overflow-y: scroll;
    box-sizing: border-box;
    
    &::-webkit-scrollbar {
    width: 0px;
    }

    opacity: 0;
    transform: translateX(40px);
    animation: pageIn 0.5s ease forwards;

    @keyframes pageIn {
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`

const ProfileWrapper = styled.div`
    display: flex;
    margin-left: 4%;
    flex-direction: column;
    width: 100%;
    height: 100%;
`

const Title = styled.h3`
    font-weight: 600;
    line-height: 2rem;
    font-size: 1.2rem;
    margin: 5% 0 0 0;
    color: #007AFF;
`

const Text = styled.p`
    font-weight: 600;
    font-size: 1rem;
`

const Icon = styled.img`
    width: 3rem;
    height: 2.5rem;
    border-radius: 10px;
    --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
    --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), 
                var(--tw-ring-shadow, 0 0 #0000), 
                var(--tw-shadow);

    @media(min-width: 1920px){
        width: 70px;
        height: 60px;
    }
`
