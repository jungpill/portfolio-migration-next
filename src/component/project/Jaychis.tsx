import styled from "styled-components";
import 제이치스 from '../../assets/webp/Jaychis.webp'
import React from '../../assets/webp/React.webp'
import Redux from '../../assets/webp/Redux.webp'
import Styled from '../../assets/webp/styledcomponents.webp' 
import Antd from '../../assets/webp/AntDesign.webp'
import CustomTooltip from "../../component/CustomTooltip";
import TypeScript from '../../assets/webp/TypeScript.webp'

const Jaychis = () => {

    return(
        <JaychisContainer>
            <img src = {제이치스.src} width='100%' height='50%' style = {{marginTop: '1rem'}} alt = 'Jaychis 프로젝트 이미지'/>
            <Title>
                프로젝트명
            </Title>
            <Content>
                Jaychis 
            </Content>
            <Wrapper>
                <Wrapper>
                    <Column>
                        <Title>
                            개발인원
                        </Title>
                        <Content>
                            3명
                        </Content>
                    </Column>

                    <Column>
                        <Title>
                            개발기간
                        </Title>
                        <Content>
                            24.09 ~ 25.01
                        </Content>
                    </Column>

                    <Column>
                        <Title>
                            깃허브 링크
                        </Title>
                        <Content >
                            <a href = 'https://github.com/jaychis/nest-front' target='_blank' rel="noreferrer">
                            https://github.com/jaychis/nest-front
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
                <CustomTooltip title="React" position="bottom"><Icon src = {React.src} alt = 'React 아이콘'/></CustomTooltip>
            </Content>
            <Content>
                <CustomTooltip title="TypeScript" position="bottom"><Icon src = {TypeScript.src} alt = 'TypeScript 아이콘'/></CustomTooltip>
            </Content>
            <Content>
                <CustomTooltip title="Redux" position="bottom"><Icon src = {Redux.src} alt = 'Redux 아이콘'/></CustomTooltip>
            </Content>
            <Content>
                <CustomTooltip title="Antd" position="bottom"><Icon src = {Antd.src} alt = 'Ant Design 아이콘'/></CustomTooltip>
            </Content>
            <Content>
                <CustomTooltip title="Styled-Component" position="bottom"><Icon src = {Styled.src} alt = 'Styled Components 아이콘'/></CustomTooltip>
            </Content>
            </Wrapper>
            <Hr/>
            <Title style = {{marginBottom:'1rem'}}>
                상세내용
            </Title>
            <Content>
                1.카카오 API 사용을 통한 로그인 및 공유하기 기능
            </Content>
            <Li>
            카카오 OAuth 인증을 기반으로 기존 계정 존재 여부에 따라 로그인 성공 또는 회원가입 페이지로 유도하여 초기 진입장벽을 낮췄습니다
            </Li>
            <Li>
            카카오 공유하기를 통해 사용자가 게시글을 쉽게 공유할 수 있도록 개발 신규 유저 유입 30%증가
            </Li>
            <br/>

            <Content>
                2.무한스크롤 최적화 
            </Content>
            <Li>
            Dom 요소가 증가함에 따라 렌더링 속도가 지연되는 문제 발생
            </Li>
            <Li>
            react virtualized 라이브러리를 이용하여 화면에 보이는 Dom요소만 렌더링 하는 방식으로 변경
            </Li>
            <Li>
            React Developer Tools를 통한 속도 측정에서 렌더링 시간이 15ms에서 2.8ms로 단축
            </Li>
            <br/>

            <Content>
                3.초기로딩속도 개선
            </Content>
            <Li>
                lighthouse로 측정한 성능 점수 49점 -{">"} 92점으로 약 88% 개선 
            </Li>
            <Li>
                동적 로딩을 통한 메인번들 사이즈 감소, Tree Shaking를 통한 불필요한 코드 제거 
            </Li>
            <Li>
                Font Swap속성을 통한 렌더링 완료시 폰트 적용 
            </Li>
            <br/>

            <Content>
                4.2개의 서버를 통해 안정성 확보 
            </Content>
            <Li>
            로컬 환경에서는 괜찮았지만 배포 이후 버그가 발생하거나 예상과 다른 UI가 적용될 수 있다는 점을 인지
            </Li>
            <Li>
            서버를 stage와 prod로 분리하여 stage 서버에서 테스트를 거친 후 prod로 배포하여 버그를 최소화하고 사용자 경험을 개선시켰습니다.
            </Li>
            <br/>

            <Content>
                5.이미지 최적화
            </Content>
            <Li>
            커뮤니티 특성상 불특정 다수의 유저가 이미지를 업로드하여 용량 문제로 초기 로딩 속도가 저하되는 문제가 발생
            </Li>
            <Li>
            이미지를 s3에 업로드하기 전 webp 형식으로 변환하는 기능을 구현하여 이미지 용량을 30%압축 하였습니다.
            </Li>
            <br/>

            <Content>
                6.커스텀 Hook
            </Content>
            <Li>
            반복적으로 사용되는 로직을 효율적으로 관리하고 코드의 재사용성을 높이기 위해 커스텀 Hook을 개발하여 사용하였습니다.
            </Li>
            <br/>

            <Content>
                7.테스트 코드 작성
            </Content>
            <Li>
            Jest와 testing-library를 활용하여 단위 테스트 코드를 작성하였습니다.
            </Li>
            <Li>
            코드 변경 시 발생할 수 있는 버그를 사전에 예방하고 유지 보수 효율성을 향상시켰습니다.
            </Li>
        </JaychisContainer>
    )
}

export default Jaychis;

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
    margin-bottom: 6px;
    color: #22222280;
    margin-right: 3rem;
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