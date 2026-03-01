"use client";

import styled from "styled-components";
import ImageCard from "../../component/ImageCard";
import JaychisImg from '../../assets/webp/JaychisImg.webp';
import Modal from "../../component/Modal";
import Jaychis from "../../component/project/Jaychis";
import 싹둑싹둑Img from '../../assets/webp/싹둑싹둑.webp'
import PortFolilImg from '../../assets/webp/PortFoilo.webp'
import Cut from "../../component/project//Cut";
import PortFolio from "../../component/project//PortFolio";
import { useState } from "react";
import 중독 from '../../assets/webp/중독.webp'
import Poisoning from "../../component/project/BugTrace";
import { sizes } from "../../styles/BreakPoints";
import React from "react";

const Page = () => {
    const [modalChildren, setModalChildren] = useState<React.ReactNode | null>(null)

    return(
        <ProjectContainer aria-labelledby="project-title">

            {/* 접근성 향상을 위한 숨겨진 제목 */}
            <h1 id="project-title" style={{position: 'absolute', left: '-9999px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden'}}>
                프로젝트 목록
            </h1>
        <Modal
        setModalChildren={setModalChildren}
        >
            {modalChildren}
        </Modal>

            <ProjectWrapper>
                <Content>
                    <Card 
                    onClick = {() => {setModalChildren(<Jaychis/>)}} 
                    aria-labelledby="jaychis-title"
                    aria-describedby="jaychis-period jaychis-desc"
                    aria-haspopup="dialog"
                    aria-controls="project-modal"
                    >
                        <ImageCard
                        img={JaychisImg.src}
                        title="Jaychis 이미지"
                        />
                        <Title id="jaychis-title">Jaychis</Title>
                        <Text>2024.09 ~ 2025.01</Text>
                        <Text>가장 많이 검색된 주제, 가장 많은 댓글이 달린 게시글 등을 보여주는 백오피스 커뮤니티</Text>
                    </Card>

                    <Card 
                    onClick = {() => {setModalChildren(<Cut/>)}} 
                    aria-labelledby="cut-title" 
                    aria-describedby="cut-period cut-desc" 
                    aria-haspopup="dialog" 
                    aria-controls="project-modal"
                    >
                        <ImageCard
                        img={싹둑싹둑Img.src}
                        title="싹둑싹둑 이미지"
                        />
                        <Title id="cut-title">싹둑싹둑</Title>
                        <Text>2024.02 ~ 2024.06</Text>
                        <Text>판매자와 디자이너의 매칭을 통해 의류 구매 및 리폼을 동시에 진행 가능한 웹 플랫폼
                        </Text>
                    </Card>

                    <Card 
                    onClick = {() => {setModalChildren(<Poisoning/>)}} 
                    aria-labelledby="poisoning-title"
                    aria-describedby="poisoning-period poisoning-desc"
                    aria-haspopup="dialog"
                    aria-controls="project-modal"
                    >
                        <ImageCard
                        img={중독.src}
                        title="BugTrace 이미지"
                        />
                        <Title id="poisoning-title">BugTrace</Title>
                        <Text>2026.01 ~ 2026.02</Text>
                        <Text>사용자의 이벤트를 수집하는 프로그램으로
                        에러별로 사용자의 행동을 보여줘 재현이 어려운 에러의 재현을 돕습니다.</Text>
                    </Card>

                    <Card 
                    onClick = {() => {setModalChildren(<PortFolio/>)}} 
                    aria-labelledby="portfolio-title"
                    aria-describedby="portfolio-period portfolio-desc"
                    aria-haspopup="dialog"
                    aria-controls="project-modal"
                    >
                        <ImageCard
                        img={PortFolilImg.src}
                        title="이정필의 싸이월드 포트폴리오 이미지"
                        />
                        <Title id="portfolio-title">싸이월드 포트폴리오</Title>
                        <Text>2025.04 ~ 2025.04</Text>
                        <Text>포트폴리오를 웹으로 구현 </Text>
                    </Card>

                </Content>
            </ProjectWrapper>
        </ProjectContainer>
    )
}

export default Page


const ProjectContainer = styled.div`
    display: flex;
    width: 95%;
    height: 90%;
    background-color: white;
    border: 2px solid skyblue;
    border-radius: 20px;
    align-items: center;
    flex-direction: column;
    margin-left: 1%;
    overflow-y: scroll;
    padding: 0.5rem;
    box-sizing: border-box;

    &::-webkit-scrollbar {
    width: 0px;
  }

  @media(max-width: ${sizes.laptop}){
    padding-top: 1rem;
    }
`

const ProjectWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-left: 1.5rem;
    margin-top: 1rem;
    @media(max-width: ${sizes.laptop}){
    align-items: flex-start;
    justify-content: flex-start;
    }
`

const Content = styled.div`
    display: grid;
    width: 100%;
    line-height: 2rem;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    @media (max-width: ${sizes.laptop}) {
        grid-template-columns: 1fr; 
    }
`

const Card = styled.button`
  display: flex;
  flex-direction: column;
  width: 90%;
  padding: 1rem;
  cursor: pointer;
  border-radius: 8px;
  background: #fff;
  border: none;

  /* 핵심 */
  align-items: flex-start;   /* 자식 요소 왼쪽 정렬 */
  text-align: left;          /* 버튼 내부 텍스트 줄바꿈도 왼쪽 정렬 */
  
  /* 버튼 기본 스타일 제거(브라우저마다 다름) */
  appearance: none;
  -webkit-appearance: none;

  &:hover {
    background-color: #f0f0f0;
  }

  @media (max-width: ${sizes.laptop}) {
    width: 30%;
    margin-right: 100px;
  }
`;

const Title = styled.h2`
    font-weight: 600;
    line-height: 2rem;
    font-size: 1rem;
    margin: 0.5rem 1rem 0 0;
`

const Text = styled.p`
    font-weight: 400;
    line-height: 1.2rem;
    font-size: 0.7rem;
    margin: 0;
`
