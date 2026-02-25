import "./globals.css";
import styled from "styled-components";
import Ling from '../assets/webp/링.webp'
import Tab from "../component/Tab";
import MusicBar from "../component/MusicBar";
import DownloadButton from "../component/DownloadButton";
import Image from "next/image";
import StyledComponentsRegistry from "@/utils/StyledComponentsRegistry";
import MyProfile from "@/component/myProfile/MyProfile";
import Header from '@/component/myProfile/Header'
import { IconBase } from "react-icons";

export const metadata = {
    // URL이 변경될 때마다 업데이트되는 메타데이터의 기본 URL을 설정 
    // 이는 SEO 및 소셜 미디어 공유에 도움이 됨
    // SEO영향이라기 보단 데이터를 정확히 읽도록 보장
    metadataBase: new URL('https://jungportfolio.shop'),
    title: {
        default: '이정필 포트폴리오',
        template: '%s | 이정필 포트폴리오',
    },
    description: '싸이월드를 오마주해 만든 포트폴리오 입니다.',

    //“이 페이지의 대표 URL은 이거다”를 선언해서 
    // 중복/분산된 평가(링크/신호)를 한 URL로 모으는 역할을 함. 
    // SEO플러스 라기보단 마이너스 방지를 위함
    alternates: {
        canonical: "/",
        Languages: {"ko": "/ko", "en": "/en"},
    },

    robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

    openGraph: {
        type: "website",
        url: "/",
        title: "렛츠고 | Frontend Developer Portfolio",
        description: "프로젝트, 기술 스택, 경력/활동, 연락처",
        siteName: "렛츠고 포트폴리오",
        images: [
        { url: "/og.png", width: 1200, height: 630, alt: "렛츠고 포트폴리오" },
        ],
        locale: "ko_KR",
    },

    icons: {
        icon: "/favicon.ico",
    },

    verification: {
        google: "GOOGLE_SITE_VERIFICATION_CODE",
    },

    content: "web developer, frontend developer, react, nextjs, typescript, javascript, html, css, styled-components, portfolio, 이정필",
}

const Layout = ({ children }: { readonly children: React.ReactNode }) => {
    return(
        <html lang="ko">
        <body>
        <StyledComponentsRegistry>
        <LayoutContainer>
            <DownloadButton/>
            <MusicBar/>
            <ContentContainer>
            <DottedLine>
                <Header/>
                <MyProfile/>
            </DottedLine>
                <Image src = {Ling} alt="Ling" style = {{position: 'absolute', left: '28.6%', top: '20%', width: '3rem', height: '3.7rem'}}/>
                <Image src = {Ling} alt="Ling" style = {{position: 'absolute', left: '28.6%', top: '25%', width: '3rem', height: '3.7rem'}}/>
                <Image src = {Ling} alt="Ling" style = {{position: 'absolute', left: '28.6%', top: '70%', width: '3rem', height: '3.7rem'}}/>
                <Image src = {Ling} alt="Ling" style = {{position: 'absolute', left: '28.6%', top: '75%', width: '3rem', height: '3.7rem'}}/>
            
                <BackGroundgray>
                    {children}
                </BackGroundgray>
            
                <Tab/>
            </ContentContainer>
        </LayoutContainer>
        </StyledComponentsRegistry>
        </body>
        </html>
    )
}

export default Layout


const LayoutContainer = styled.div`
    display: flex;
    position: relative;
    height: 100dvh;
    width: 100vw;
    background-image: linear-gradient(white 1px, transparent 1px), 
                    linear-gradient(90deg, white 1px, transparent 1px);
    background-size: 20px 20px;
    background-color: rgba(193, 193, 193) ;
    align-items: center;
    justify-content: center;
`

const ContentContainer = styled.div`
    display: flex;
    position: relative;
    border: 2px dashed white;
    border-radius: 20px;
    
    align-items: center;
    justify-content: center;
    padding: 20px;
    width: 85%;
    height: 90%;
    background-color: skyblue;
    box-sizing: border-box;
`

const BackGroundgray = styled.div`
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    height: 98%;
    width: 70%;
    border-radius: 5px;
    background-color: #F2F2F2;
    border: 1px solid black;
    border-radius: 30px;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 0.75rem;
`

const DottedLine = styled.div`
    display: flex;
    box-sizing: border-box;
    align-items: center;
    border: 1px solid black;
    border-radius: 30px;
    width: 30%;
    height: 98%;
    padding: 0.75rem;
    background-color: #F2F2F2;
    flex-direction: column;
`
