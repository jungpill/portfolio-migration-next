import styled from "styled-components";
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
        <ProfileContainer>
            <ProfileWrapper>
                <Title>
                    기술 스택 및 도구
                </Title>
                
                <Content>
                    {techList.map((tech) => (
                        <div key={tech.title} >
                        <CustomTooltip
                            title={tech.title}
                            position="bottom"
                            children={<Icon src={tech.icon.src} alt={tech.title} />}
                        />
                        </div>
                    ))}
                </Content>
                
                <Title>
                    경력
                </Title>
                <Content style = {{display: 'flex', flexDirection: 'column'}} >
                <Text>(주) 투비유니콘</Text><br/>
                프론트엔드 개발 <br/>
                2025.06 ~ 재직중
                </Content>

                <Title>
                    교육
                </Title>
                <Content style = {{display: 'flex', flexDirection: 'column'}} >
                <Text>성결대학교</Text><br/>
                졸업 | 대학교(학사) <br/>
                컴퓨터공학과 2023. 03. ~ 2025. 02
                </Content><br/>
                <Content style = {{display: 'flex', flexDirection: 'column'}} >
                   <Text> ICT 한이음 멘토링</Text><br/>
                    정부사업 한이음을 통해 약 8개월간 SW 기업전문가(멘토)와 팀을 이루어 프로젝트를 수행(24.03 ~ 24.11) 
                </Content>
            </ProfileWrapper>
        </ProfileContainer>
    )
}

export default Page


const ProfileContainer = styled.div`
    display: flex;
    width: 95%;
    height: 90%;
    background-color: white;
    border: 2px solid skyblue;
    border-radius: 20px;
    padding: 0.5rem;
    align-items: center;
    flex-direction: column;
    margin-left: 1%;
    padding-bottom: .8rem;
    overflow-y: scroll;
    
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

const Title = styled.div`
    font-weight: 600;
    line-height: 2rem;
    font-size: 1.2rem;
    margin: 5% 0 0 0;
    color: #007AFF;
`

const Text = styled.p`
    font-weight: 600;
    font-size: 1rem;
    margin-bottom: -1.5rem;
`

const Content = styled.div`
    display: flex;
    width: 90%;
    margin-left: 2%;
    line-height: 2rem;
    flex-wrap: wrap;
    white-space: pre-line;

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
        width: 4rem;
        height: 3rem;
    }
`