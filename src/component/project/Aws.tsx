import styled from "styled-components";
import CustomTooltip from "../CustomTooltip";
import AwsThumbnail from '../../assets/AWS_thumbnail.png'
import Aws from '../../assets/aws.png'
import Podman from '../../assets/icon_podman.png'
import Grafana from '../../assets/icon_grafana.png'
import Nginx from '../../assets/icon_nginx.png'
import Terraform from '../../assets/icon_terraform.png'

const Jaychis = () => {

    return(
        <JaychisContainer>
            <img src = {AwsThumbnail.src} width='100%' height='50%' style = {{marginTop: '1rem'}} alt = 'AWS 이미지'/>
            <Title>
                작업 내용 
            </Title>
            <Content>
                AWS 비용 최적화 및 Terraform 기반 인프라 관리 체계 도입
            </Content>

            <Title>
                기술 스택
            </Title>
            <Wrapper>
            <Content>
                <CustomTooltip title="AWS" position="bottom"><Icon src = {Aws.src} alt = 'AWS 아이콘'/></CustomTooltip>
            </Content>
            <Content>
                <CustomTooltip title="Terraform" position="bottom"><Icon src = {Terraform.src} alt = 'Terraform 아이콘'/></CustomTooltip>
            </Content>
            </Wrapper>
            <Hr/>
            <Title style = {{marginBottom:'1rem'}}>
                상세내용
            </Title>
            <Content>
                1. 문제 상황 분석 및 최적화 대상 식별
            </Content>
            <Li>
            AWS 운영 비용이 월 평균 330만 원 수준으로 발생해 실제 서비스 규모 대비 인프라 비용이 과도한 상태였습니다.
            </Li>
            <Li>
            미사용 컨테이너, 과도한 스펙의 EC2 인스턴스, 불필요한 볼륨 등 장기간 정리되지 않은 리소스가 운영 담당자 변경 과정에서 누락되어 현황 파악이 어려운 상태였습니다.
            </Li>
            <br/>

            <Content>
                2. AWS 리소스 사용 현황 기반 비용 최적화
            </Content>
            <Li>
            CPU 사용률과 리소스 운영 현황을 분석해 평균 CPU 사용률이 30% 미만인 인스턴스를 식별했습니다.
            </Li>
            <Li>
            서비스 영향도와 사용 목적을 확인한 뒤 총 3단계에 걸쳐 인스턴스 다운사이징을 수행했습니다.
            </Li>
            <Li>
            삭제 예정 인스턴스와 볼륨은 AMI 및 스냅샷으로 백업한 뒤 정리해 장애 대응 가능성을 확보했습니다.
            </Li>
            <br/>

            <Content>
                3. Terraform 기반 IaC 관리 체계 도입
            </Content>
            <Li>
                향후 과도한 리소스 운영을 방지하기 위해 Terraform 기반 IaC 환경을 구성했습니다.
            </Li>
            <Li>
                VPC, Subnet, Security Group, EC2 등 주요 AWS 리소스 생성 과정을 코드화했습니다.
            </Li>
            <Li>
                리소스 생성 기준을 표준화해 운영 중 리소스 관리 누락 가능성을 줄였습니다.
            </Li>
            <br/>

            <Content>
                4. 운영 비용 절감 성과
            </Content>
            <Li>
            AWS 월 운영 비용을 330만 원에서 130만 원 수준으로 낮춰 약 60% 절감했습니다.
            </Li>
            <Li>
            연간 기준 약 2,400만 원의 비용 절감 효과를 달성했습니다.
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
