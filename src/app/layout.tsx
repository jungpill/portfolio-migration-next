import "./globals.css";
import styled from "styled-components";
import Ling from '../assets/webp/링.webp'
import Tab from "../component/Tab";
import MusicBar from "../component/MusicBar";
import DownloadButton from "../component/DownloadButton";
import Image from "next/image";
import StyledComponentsRegistry from "@/utils/StyledComponentsRegistry";

const Layout = ({ children }: { readonly children: React.ReactNode }) => {
    return(
        <html lang="kr">
        <body>
        <StyledComponentsRegistry>
        <LayoutContainer>
            <DownloadButton/>
            <MusicBar/>
            <ContentContainer>
            <DottedLine>
            </DottedLine>
                <Image src = {Ling} alt="Ling" style = {{position: 'absolute', left: '29.2%', top: '20%', width: '3rem', height: '3.7rem'}}/>
                <Image src = {Ling} alt="Ling" style = {{position: 'absolute', left: '29.2%', top: '25%', width: '3rem', height: '3.7rem'}}/>
                <Image src = {Ling} alt="Ling" style = {{position: 'absolute', left: '29.2%', top: '70%', width: '3rem', height: '3.7rem'}}/>
                <Image src = {Ling} alt="Ling" style = {{position: 'absolute', left: '29.2%', top: '75%', width: '3rem', height: '3.7rem'}}/>
            
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
    width: 100%;
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
    padding: 10px 0 10px 0;
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
    width: 25%;
    height: 98%;
    padding: 0.75rem;
    background-color: #F2F2F2;
    flex-direction: column;
`
