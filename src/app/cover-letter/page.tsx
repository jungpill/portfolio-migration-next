import styled from "styled-components";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "자기소개",
    description: "이정필의 성격, 문제 해결 경험, 성장 과정이 담긴 자기소개 페이지입니다.",
    alternates: {
        canonical: "/cover-letter",
    },
    openGraph: {
        title: "자기소개 | 이정필 포트폴리오",
        description: "성격, 경험, 성장 과정",
        url: "/cover-letter",
    },
}

const CoverLetter = () => {
  return (
    <CoverLetterContainer as="article" aria-labelledby="coverletter-title">
      {/* 접근성 향상을 위한 숨겨진 페이지 제목 */}
      <SrOnly as="h1" id="coverletter-title">
        자기소개
      </SrOnly>

      <CoverLetterWrapper>

         {/* 섹션 1 */}
        <section aria-labelledby="sec-half">
          <Title as="h2" id="sec-half">
            성장과정
          </Title>

          <Paragraph>
            회사에는 프론트엔드 개발자로 입사했지만, 업무를 진행하며 사내 서버 운영과 클라우드 관리에 개선이 필요하다는 점을 발견했습니다. 불편함을 느끼는 데 그치지 않고, 현재 운영 환경에서 발생하는 
            비용, 보안, 관리 측면의 문제를 정리해 대표님께 정식으로 개선 보고서를 작성하며 문제 원인과 개선 방향을 구체화했고, 이를 계기로 서버 관리 업무까지 역할을 확장하게 되었습니다.
            역할 전환 이후에는 먼저 AWS 비용 구조 개선을 진행하며 실사용량 대비 과도하게 할당된 인스턴스와 유휴 리소스를 찾아 사이징을 조정하고, 상시 가동이 필요 없는 리소스를 정리하면서 
            AWS 월 운영 비용을 60% 감소시켰습니다. 이후 GPU 서버 접근 보안을 강화하고 Prometheus, Grafana기반 모니터링 환경을 구축하며, 장애나 이상 징후에 빠르게 대응할 수 있는 운영 체계로 개선했습니다
            이러한 경험을 통해 인프라는 단순히 서버를 안정적으로 띄우는 일이 아니라, 비용과 리소스 효율까지 함께 책임지는 영역이라는 것을 체감하였고, 안정적인 운영 환경을 유지하는 인프라 엔지니어로 
            성장하기 위해 계속해서 개인 서버 환경에 VM과 Nginx, Docker를 활용해 배포 구조를 직접 구성하며 운영 경험을 쌓고 있습니다. 
            앞으로도 문제를 발견하는 데 그치지 않고, 원인을 분석하고 개선 방향을 실행으로 옮기며 안정성과 효율성을 함께 높일 수 있는 인프라 엔지니어로 성장하고 싶습니다
          </Paragraph>
        </section>

        {/* 섹션 2 */}
        <section aria-labelledby="sec-effort">
          <Title as="h2" id="sec-effort">
            성격의 장단점
          </Title>

          <Paragraph>
           저의 장점은 문제를 그냥 넘기지 않고 원인을 끝까지 파악하려는 태도입니다. 업무를 수행할 때 단
          순히 눈앞의 문제만 해결하기보다, 왜 문제가 발생했는지와 다시 발생하지 않으려면 어떤 구조가 필
          요한지를 고민합니다. 실제로 회사에서 서버 운영과 클라우드 리소스 관리의 문제를 발견했을 때도 
          비용, 보안, 운영 측면에서 원인을 정리하고 개선 방향을 제안하며 업무 영역을 확장한 경험이 있습
          니다.

          </Paragraph>

          <Paragraph>
          반면 문제를 깊게 파악하려는 성향 때문에 초반 분석에 시간을 많이 쓰는 경우가 있습니다. 실제로 
          인수인계 문서가 없는 서버 환경의 구조를 파악하는 과정에서 분석에 시간이 필요했고, 이러한 진행 
          상황을 충분히 공유하지 않아 업무가 지연되는 것으로 오해받은 적이 있습니다. 이후 파악한 내용을 
          문서화해 둔 자료를 공유하며 오해를 풀었고, 최근에는 문제의 우선순위를 먼저 정하고 즉시 조치가 
          필요한 부분과 장기적으로 개선할 부분을 나누어 업무를 진행하고 있습니다. 이를 통해 깊이 있는 
          분석과 빠른 실행 사이의 균형을 맞추고자 합니다
          </Paragraph>
        </section>

      </CoverLetterWrapper>
    </CoverLetterContainer>
  );
};

export default CoverLetter;

const CoverLetterContainer = styled.article`
  display: flex;
  width: 95%;
  height: 90%;
  background-color: white;
  border: 2px solid skyblue;
  border-radius: 20px;
  align-items: center;
  flex-direction: column;
  margin-left: 1%;
  padding-bottom: 0.8rem;
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
`;

const CoverLetterWrapper = styled.div`
  display: flex;
  margin-left: 4%;
  flex-direction: column;
  width: 95%;
  height: 100%;
`;

/* 시각적으로 숨기되 스크린리더에서 읽히는 텍스트 */
const SrOnly = styled.span`
  position: absolute;
  left: -9999px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;

const Title = styled.h2`
  font-weight: 600;
  line-height: 2rem;
  font-size: 1.2rem;
  margin: 5% 0 2% 0;
  color: #007aff;
`;

/* 본문 문단 */
const Paragraph = styled.p`
  font-weight: 600;
  line-height: 2rem;
  font-size: 1rem;
  width: 95%;

  overflow-wrap: anywhere;
  white-space: normal;
  text-align: left;

  margin: 0;

  /* 문단 간격 */
  & + & {
    margin-top: 1rem;
  }
`;