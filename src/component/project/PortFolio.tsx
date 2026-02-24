import styled from "styled-components";
import FramerMotion from '../../assets/webp/framer-motion.webp'
import React from '../../assets/webp/React.webp'
import Zustand from '../../assets/webp/Zustand.webp'
import styledComponent from '../../assets/webp/styledcomponents.webp'
import CustomTooltip from "../../component/CustomTooltip";
import TpyeScript from '../../assets/webp/TypeScript.webp'
import PortFolioImg from '../../assets/webp/PortFoilo.webp'

const PortFolio = () => {

    return(
        <JaychisContainer>
            <img src = {PortFolioImg.src} width='100%' height='50%' style = {{marginTop: '1rem'}} alt = '이미지 로드중'/>
            <Title>
                프로젝트명
            </Title>
            <Content>
                이정필 포트폴리오
            </Content>
            <Wrapper>
                <Wrapper>
                <Column>
                    <Title>
                        개발인원
                    </Title>
                    <Content>
                        1명
                    </Content>
                </Column>

                <Column>
                    <Title>
                        개발기간
                    </Title>
                    <Content>
                        25.04 ~ 25.04
                    </Content>
                </Column>

                <Column>
                    <Title>
                        깃허브 링크
                    </Title>
                    <Content >
                        <a href = 'https://github.com/jungpill/JungPillPortFolio' target='_blank' rel="noreferrer">
                        https://github.com/jungpill/PortFolio
                        </a>
                    </Content>
                </Column>
                </Wrapper>
            </Wrapper>

            <Title>
                기술 스택
            </Title>

            <Wrapper>
            <Content>
                <CustomTooltip title="React" position="bottom"><Icon src = {React.src} alt = '이미지 로드중'/></CustomTooltip>
            </Content>
            <Content>
                <CustomTooltip title="TypeScript" position="bottom"><Icon src = {TpyeScript.src } alt = '이미지 로드중'/></CustomTooltip>
            </Content>
            <Content>
                <CustomTooltip title="Zustand" position="bottom"><Icon src = {Zustand.src} alt = '이미지 로드중'/></CustomTooltip>
            </Content>
            <Content>
                <CustomTooltip title="styled-component" position="bottom"><Icon src = {styledComponent.src} alt = '이미지 로드중'/></CustomTooltip>
            </Content>
            <Content>
                <CustomTooltip title="Framer-Motion" position="bottom"><Icon src = {FramerMotion.src} alt = '이미지 로드중'/></CustomTooltip>
            </Content>
            </Wrapper>

            <Hr/>
            <Title style = {{marginBottom:'1rem'}}>
                상세내용
            </Title>
            
            <Content>
                1.프로젝트 내 이미지 webp로 자동 변환<br/>
            </Content>
            <Li>
            모든 이미지를 webp로 자동 변환 되도록 해 이미지 용량을 줄이고, 개발 효율성을 향상시켰습니다.
            </Li>
            <br/>

            <Content>
                2.사용자 경험을 고려한 UI/UX 개선
            </Content>
            <Li>
                애니메이션 적용 및 반응형 웹 디자인을 통해 사용자 경험을 개선하였습니다.
            </Li>
            <br/>

            <Content>
                3.깃허브 액션을 통한 CI / CD 파이프라인
            </Content>
            <Li>
            GitHub Actions을 통한 CI/CD 파이프라인 구축으로 배포 자동화와 개발 효율성을 향상 시켰습니다
            </Li>

            <Content>
                4.React로 개발된 프로젝트를 next.js로 마이그레이션
            </Content>
            <Li>
                React로 개발된 프로젝트를 Next.js로 리팩토링하여 SEO 최적화와 서버 사이드 렌더링을 구현하였습니다.
            </Li>
            <br/>

        </JaychisContainer>
    )
}

export default PortFolio;

const JaychisContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
     &::-webkit-scrollbar {
    width: 0px;
  }
`

const Title = styled.div`
    font-weight: 600;
    font-size: 1rem;
    line-height: 1rem;
    margin-top: 1rem;
    color: #22222280;
    margin-right: 3rem;
    margin-bottom: 6px;
`

const Content = styled.div`
    font-weight: 700;
    font-size: .9rem;
    color: black
`

const Wrapper = styled.div`
    display: flex;
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`

const Icon = styled.img`
    width: 60%;
    height: 60%;
    border-radius: 10px;
    --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
    --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), 
                var(--tw-ring-shadow, 0 0 #0000), 
                var(--tw-shadow);
    margin-top: .5rem;
`

const Hr = styled.hr`
    width: 100%;
    height: 0.1px;
    background-color: rgba(34,34,34)
`

const Li = styled.li`
    font-weight: 700;
    font-size: .8rem;
    line-height: 1.5rem;
    margin-left: .5rem;
    color: #22222280;
    margin-right: 3rem;
`
