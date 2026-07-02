import styled from "styled-components";
import CustomTooltip from "../CustomTooltip";
import GpuThumbnail from '../../assets/GPU_thumbnail.png'
import Podman from '../../assets/icon_podman.png'
import Grafana from '../../assets/icon_grafana.png'
import Nginx from '../../assets/icon_nginx.png'

const Poisoning = () => {

    return(
        <PoisoningContainer>
            <img src = {GpuThumbnail.src} width='100%' height='50%' style = {{marginTop: '1rem'}} alt = 'GPU 서버 이미지'/>
            <Title>
                작업 내용
            </Title>
            <Content>
                GPU 서버 보안 재구성 및 모니터링 체계 구축
            </Content>

            <Title>
                기술 스택
            </Title>
            <Wrapper>
            <Content>
                <CustomTooltip title="Podman" position="bottom"><Icon src = {Podman.src} alt = 'Podman 아이콘'/></CustomTooltip>
            </Content>
            <Content>
                <CustomTooltip title="Grafana" position="bottom"><Icon src = {Grafana.src} alt = 'Grafana 아이콘'/></CustomTooltip>
            </Content>
            <Content>
                <CustomTooltip title="Nginx" position="bottom"><Icon src = {Nginx.src} alt = 'Nginx 아이콘'/></CustomTooltip>
            </Content>
            </Wrapper>
            <Hr/>
            <Title style = {{marginBottom:'1rem'}}>
                상세내용
            </Title>
            <Content>
                1. 반복적인 GPU 서버 침해사고 대응 및 운영 환경 재구성
            </Content>
            <Li>
                사내 GPU 서버에서 nginx 프로세스로 위장한 침해사고가 반복적으로 발생해 서버 운영 환경을 전면 재정비했습니다.
            </Li>
            <Li>
                GPU 서버 OS를 재설치하고 운영 환경을 초기화한 뒤, Tailscale 기반 사설 네트워크를 구성해 외부 노출을 최소화했습니다.
            </Li>
            <Li>
                SSH 비밀번호 로그인을 제거하고 PEM Key 기반 SSH 인증만 허용하도록 구성했습니다.
            </Li>
            <Li>
                재구성 이후 침해사고 발생 0건을 유지했습니다.
            </Li>
            <br/>

            <Content>
                2. Grafana 기반 GPU 서버 모니터링 구축
            </Content>
            <Li>
                반복적인 침해사고 이후 보안 사고 재발 방지와 장애 대응을 위해 실시간 모니터링 환경이 필요하다고 판단했습니다.
            </Li>
            <Li>
                Prometheus와 Grafana를 연동해 GPU 지표를 실시간으로 모니터링하고 장애 알림을 받을 수 있는 체계를 구축했습니다.
            </Li>
            <Li>
                AI 그룹 사용자가 학습 모드로 전환한 경우에는 임계치에 도달해도 불필요한 알림이 전송되지 않도록 구성했습니다.
            </Li>
            <br/>

            <Content>
                3. Docker 기반 환경을 Podman으로 대체
            </Content>
            <Li>
                소규모 조직 특성상 개발자에게 컨테이너 배포 권한이 필요했지만, Docker 권한은 Root 수준 권한 부여로 이어질 수 있어 보안 위험이 있다고 판단했습니다.
            </Li>
            <Li>
                Rootless 기반 Podman 환경을 적용해 컨테이너 권한과 호스트 권한을 분리했습니다.
            </Li>
            <Li>
                사용자 간 컨테이너 조회가 불가능해 점유 중인 포트를 확인하기 어려운 문제가 있었고, 개발자별 포트 할당 규칙을 수립해 운영 혼선을 줄였습니다.
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
