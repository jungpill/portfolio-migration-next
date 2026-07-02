"use client";

import styled from "styled-components";
import ImageCard from "../../component/ImageCard";
import Modal from "../../component/Modal";
import Jaychis from "../../component/project/Jaychis";
import PortFolilImg from '../../assets/webp/PortFoilo.webp'
import PortFolio from "../../component/project//PortFolio";
import { useState } from "react";
import Poisoning from "../../component/project/BugTrace";
import React from "react";
import AwsThumbnail from '../../assets/AWS_thumbnail.png'
import GpuThumbnail from '../../assets/GPU_thumbnail.png'

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
                    aria-labelledby="aws-title"
                    aria-describedby="aws-period aws-desc"
                    aria-haspopup="dialog"
                    aria-controls="project-modal"
                    >
                        <ImageCard
                        img={AwsThumbnail.src}
                        title="AWS 이미지"
                        />
                        <Title id="aws-title">AWS 작업 요약</Title>
                        <Text>AWS 비용 최적화 작업 수행</Text>
                    </Card>

                    <Card 
                    onClick = {() => {setModalChildren(<Poisoning/>)}} 
                    aria-labelledby="gpu-title"
                    aria-describedby="gpu-period gpu-desc"
                    aria-haspopup="dialog"
                    aria-controls="project-modal"
                    >
                        <ImageCard
                        img={GpuThumbnail.src}
                        title="GPU 이미지"
                        />
                        <Title id="gpu-title">GPU 작업 요약</Title>
                        <Text>GPU 서버 관리 작업 수행</Text>
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
    padding-bottom: .8rem;
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
`

const ProjectWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-left: 1.5rem;
    margin-top: 1rem;
    
    @media(max-width: 1200px){
        align-items: center;
    }
`

const Content = styled.div`
    display: grid;
    width: 100%;
    line-height: 2rem;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    @media(max-width: 1200px) {
        gap: 0;
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
