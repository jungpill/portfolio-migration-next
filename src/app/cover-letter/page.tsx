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
        <section aria-labelledby="sec-effort">
          <Title as="h2" id="sec-effort">
            노력하면 된다
          </Title>

          <Paragraph>
            제 성격의 장점은 노력과 끈기입니다. 새로운 기술이나 기능을 적용하면서
            예상치 못한 문제가 발생해도 포기하지 않고 문제의 원인을 찾기 위해
            노력합니다.
        
            쇼핑몰 프로젝트에서 액세스 토큰이 만료될시 리프레시 토큰을 이용하여
            액세스 토큰을 재발급받는 기능 구현을 담당했지만 알 수 없는 이유로
            계속적인 네트워크 오류가 발생하였습니다.
         

         
            해당 오류를 해결하기 위해 일주일간 계속적인 코드 수정과 네트워크 창
            분석을 통해 크롬 브라우저에서 쿠키가 제대로 삭제되지 않는다는 것을
            알아내 해결한 경험이 있습니다.
         

            이 경험을 통해 복잡한 문제를 해결하는데 노력과 끈기가 얼마나 중요한지
            깨닫게 되었고 만약 귀사에 입사하여 새로운 문제를 맞닥뜨리더라도 노력과
            끈기로 극복해 나가는 모습을 보여드리겠습니다.
            </Paragraph>

          <Paragraph>
            제 성격의 단점은 한 가지 문제에 과도하게 몰입하는 경향입니다. 프로젝트를
            진행하며 버그를 해결하다 밤늦게까지 작업해 다음날 컨디션이 저하된
            경험이 있습니다. 최근에는 이런 성향을 줄이고자 문제가 잘 해결되지 않으면
            잠시 멈추고 현재 상황을 정리한 뒤 팀원이나 멘토에게 조언을 구하는 규칙을
            만들었습니다. 앞으로도 시간 관리를 함께 고려하는 개발자로 성장하겠습니다.
          </Paragraph>
        </section>

        {/* 섹션 2 */}
        <section aria-labelledby="sec-half">
          <Title as="h2" id="sec-half">
            반쪽짜리 개발자
          </Title>

          <Paragraph>
            전공을 바꿔 컴퓨터공학과로 편입한 후 전공 학생들에 비해 개발에 대한
            지식이 부족했습니다. 하지만 졸업작품 팀 프로젝트는 맡은 역할을 충실히
            수행하겠다는 다짐으로 프로젝트 시작 3개월 전부터 먼저 개발 공부를
            시작하였고 그 기간 동안 React, Javascript, Typescript 등 프론트엔드에서
            기본이 되는 기술들을 중점으로 공부하였습니다.
          
            잘 모르는 내용에 대해서는 ICT한이음 프로젝트를 통해 알게된 멘토분에게
            자문을 구해가며 공부 방향을 잡았습니다.
          
            그 결과 의류 플랫폼 팀 프로젝트에서 핵심이 되는 메인 페이지, 상세페이지,
            마이페이지 등의 기능 구현을 담당 하였고 그 과정속에서 CRUD 기반의 데이터
            흐름, 컴포넌트 구조 설계, 상태 관리 등 실무적인 프론트엔드 개발 경험을
            쌓을 수 있었습니다.
        
            이후 해당 프로젝트는 26개의 팀이 참여한 졸업작품 경진대회에서 3위를
            수상했으며 이 경험은 저에게 개발에 대한 자신감을 심어주는 계기가
            되었습니다.
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