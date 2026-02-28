import styled from "styled-components";
import 중독 from '../../assets/webp/중독.webp'
import CustomTooltip from "../CustomTooltip";
import TypeScript from '../../assets/webp/TypeScript.webp'
import Zustand from '../../assets/webp/Zustand.webp'
import Tailwind from '../../assets/webp/Tailwind.webp'
import React from '../../assets/webp/React.webp'

const Poisoning = () => {

    return(
        <PoisoningContainer>
            <img src = {중독.src} width='100%' height='50%' style = {{marginTop: '1rem'}} alt = 'BugTrace 이미지'/>
            <Title>
                프로젝트명
            </Title>
            <Content>
                BugTrace
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
                            2026.01 ~ 2026.02
                        </Content>
                    </Column>
                    &nbsp;
                    <Column>
                        <Title>
                            깃허브 링크
                        </Title>
                        <Content >
                            <a href = "https://github.com/jungpill/BugTrace" target='_blank' rel="noreferrer">
                            https://github.com/jungpill/BugTrace
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
                <CustomTooltip title="TpyeScript" position="bottom"><Icon src = {TypeScript.src} alt = '이미지 로드중'/></CustomTooltip>
            </Content>
            <Content>
                <CustomTooltip title="Zustand" position="bottom"><Icon src = {Zustand.src} alt = '이미지 로드중'/></CustomTooltip>
            </Content>
            <Content>
                <CustomTooltip title="tailwind css" position="bottom"><Icon src = {Tailwind.src} alt = '이미지 로드중'/></CustomTooltip>
            </Content>
            
            </Wrapper>
            <Hr/>
            <Content>
                1.재현 가능성 향상
            </Content>
            <Li>
                에러 발생 전 큐(Circular Queue)에 사용자의 동작을 수집하고 에러 발생시 그동안 수집된 사용자의 동작과 에러를 저장
            </Li>
            <br/>
            <Content>
                2.크롬 Extension(확장 프로그램) 출시      
            </Content>
            <Li>
                크롬 확장프로그램으로 개발하여 개발자가 아닌 기획/QA 인력들도 쉽게 사용 가능
            </Li>

            <br/>
            <Content>
                3.최소 권한 원칙 적용
            </Content>
            <Li>
                 사용자 버튼 클릭 시 현재 탭에만 동작 하도록 설계해 권한 범위를 축소하여 보안성 향상
            </Li>
            <Li>
                 도메인별 활성화로 불필요한 수집을 차단하고, QA 대상 서비스만 선택적으로 관측 가능하도록 설계 
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
    width: 2rem;
    height: 1.5rem;
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
  position: relative;
  padding-left: 1.2em;
  font-weight: 700;
  font-size: 0.8rem;
  line-height: 1.5rem;
  margin-left: 0.5rem;
  margin-right: 3rem;
  color: black;
  list-style: none;
  color: #22222280;

  &::before {
    content: '•';
    position: absolute;
    left: 0;
    top: 0;
    line-height: 1.5rem;
  }
`;
