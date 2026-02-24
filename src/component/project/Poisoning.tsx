import styled from "styled-components";
import 중독 from '../../assets/webp/중독.webp'
import CustomTooltip from "../../component/CustomTooltip";
import TypeScript from '../../assets/webp/TypeScript.webp'
import Zustand from '../../assets/webp/Zustand.webp'
import styledComponent from '../../assets/webp/styledcomponents.webp'
import React from '../../assets/webp/React.webp'

const Poisoning = () => {

    return(
        <PoisoningContainer>
            <img src = {중독.src} width='100%' height='50%' style = {{marginTop: '1rem'}} alt = '이미지 로드중'/>
            <Title>
                프로젝트명
            </Title>
            <Content>
                Addiction
            </Content>
            <Wrapper>
                <Wrapper>
                    <Column>
                        <Title>
                            개발인원
                        </Title>
                        <Content>
                            6명
                        </Content>
                    </Column>

                    <Column>
                        <Title>
                            개발기간
                        </Title>
                        <Content>
                            진행중
                        </Content>
                    </Column>

                    <Column>
                        <Title>
                            깃허브 링크
                        </Title>
                        <Content >
                            <a href = 'https://github.com/addiction1215' target='_blank' rel="noreferrer">
                            https://github.com/addiction1215
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
                <CustomTooltip title="React-Native" position="bottom"><Icon src = {React.src} alt = '이미지 로드중'/></CustomTooltip>
            </Content>
            <Content>
                <CustomTooltip title="TpyeScript" position="bottom"><Icon src = {TypeScript.src} alt = '이미지 로드중'/></CustomTooltip>
            </Content>
            <Content>
                <CustomTooltip title="Zustand" position="bottom"><Icon src = {Zustand.src} alt = '이미지 로드중'/></CustomTooltip>
            </Content>
            <Content>
                <CustomTooltip title="styled-component" position="bottom"><Icon src = {styledComponent.src} alt = '이미지 로드중'/></CustomTooltip>
            </Content>
            
            </Wrapper>
            <Hr/>
            <Content>
                1.Oauth2 구현
            </Content>
            <Li>
                구글, 카카오, 네이버 로그인 기능을 구현하였습니다
            </Li>
            <br/>
            <Content>
                2.데이터 시각화            
            </Content>
            <Li>
                차트 라이브러리를 이용하여 재사용 가능한 차트 컴포넌트를 개발하고 쉽게 데이터 시각화를 구현하였습니다. 
            </Li>

            <br/>
            <Content>
                3.크로스 플랫폼을 통한 앱 개발
            </Content>
            <Li>
                크로스 플랫폼을 통한 개발을 통해 개발 속도를 높이고 유지보수를 용이하게 하였습니다.
            </Li>

        </PoisoningContainer>
    )
}

export default Poisoning;

const PoisoningContainer = styled.div`
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
