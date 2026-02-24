import styled from "styled-components";
import 싹둑싹둑 from '../../assets/webp/싹둑싹둑.webp'
import React from '../../assets/webp/React.webp'
import Zustand from '../../assets/webp/Zustand.webp'
import Tail from '../../assets/webp/Tailwind.webp' 
import Antd from '../../assets/webp/AntDesign.webp'
import CustomTooltip from "../../component/CustomTooltip";
import Javascript from '../../assets/webp/JavaSCript.webp'
import ReactQuery from '../../assets/webp/react-query.webp'

const Cut = () => {

    return(
        <JaychisContainer>
            <img src = {싹둑싹둑.src} width='100%' height='50%' style = {{marginTop: '1rem'}} alt = '이미지 로드중'/>
            <Title>
                프로젝트명
            </Title>
            <Content>
                싹둑싹둑
            </Content>
            <Wrapper>
                <Wrapper>
                    <Column>
                        <Title>
                            개발인원
                        </Title>
                        <Content>
                            4명
                        </Content>
                    </Column>

                    <Column>
                        <Title>
                            개발기간
                        </Title>
                        <Content>
                            24.02 ~ 24.06
                        </Content>
                    </Column>

                    <Column>
                        <Title>
                            깃허브 링크
                        </Title>
                        <Content >
                            <a href = 'https://github.com/jjsOrganization' target='_blank' rel="noreferrer">
                            https://github.com/jjsOrganization
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
                <CustomTooltip title="JavaScript" position="bottom"><Icon src = {Javascript.src} alt = '이미지 로드중'/></CustomTooltip>
            </Content>
            <Content>
                <CustomTooltip title="Zustand" position="bottom"><Icon src = {Zustand.src} alt = '이미지 로드중'/></CustomTooltip>
            </Content>
            <Content>
                <CustomTooltip title="Antd" position="bottom"><Icon src = {Antd.src} alt = '이미지 로드중'/></CustomTooltip>
            </Content>
            <Content>
                <CustomTooltip title="Tailwind-css" position="bottom"><Icon src = {Tail.src} alt = '이미지 로드중'/></CustomTooltip>
            </Content>
            <Content>
                <CustomTooltip title = 'ReactQuery' position="bottom"><Icon src = {ReactQuery.src} alt = '이미지 로드중'/></CustomTooltip>
            </Content>
            </Wrapper>
            <Hr/>
            <Title style = {{marginBottom:'1rem'}}>
                상세내용
            </Title>
            <Content>
                1.좋아요 응답시간 99% 개선<br/>
            </Content>
            <Li>
            좋아요 API 평균 응답 시간이 351ms로, 사용자 인터랙션 후 UI 반응이 지연되는 문제가 발생했습니다
            </Li>
            <Li>
            사용자가 좋아요 버튼을 클릭할 때 서버 응답을 기다리지 로컬 상태에서 즉시 좋아요 수를 증가 / 감소시켜 API 호출 수를 최적화하고 처리 속도를 99% 향상시켰습니다.
            </Li>
            <br/>

            <Content>
                2.아토믹 디자인 패턴
            </Content>
            <Li>
            컴포넌트 재사용성을 높이기 위해 아토믹 디자인 패턴을 적용했습니다.
            </Li>
            <Li>
            컴포넌트를 최대한 Atoms, Molecules, Organisms로 구분하였고 복잡한 UI를 가진 폼의 경우 단일 Template으로 통합 하였습니다.
            </Li>
            <br/>

            <Content>
                3.깃허브 액션을 통한 CI / CD 파이프라인
            </Content>
            <Li>
            매번 수동으로 배포를 하는것 보다는 배포 자동화를 통해 개발 효율성을 향상 시킬 필요가 있다고 생각 하였습니다
            </Li>
            <Li>
            GitHub Actions을 통한 CI/CD 파이프라인 구축으로 배포 자동화와 개발 효율성을 향상 시켰습니다
            </Li>
            <br/>

            <Content>
                4.Zustand를 통한 전역 상태관리
            </Content>
            <Li>
            프로젝트의 규모가 크지 않아 복잡한 상태 관리나 다단계 상태 변화가 필요한 상황이 아니었기에  Redux나 Recoil보다는 보일러 플레이트 코드가 적고 가벼운 Zustand를 사용하였습니다.
            </Li>
            <br/>

            <Content>
                5.문서화
            </Content>
            <Li>
            요구사항과 복잡한 로직을 가진 기능들을 이해하기 쉽게 하기 위해 UseCaseDiagram, Sequence, System Architecture 등 문서화 작업을 진행했습니다
            </Li>
            <br/>
        </JaychisContainer>
    )
}

export default Cut;

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
    color: black;
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