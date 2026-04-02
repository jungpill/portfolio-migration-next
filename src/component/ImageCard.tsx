import styled from "styled-components";
import { sizes } from "../styles/BreakPoints";

const ImageCard = ({
    img,
    title   
    }: {img:string, title:string}) => {

    return(
        <ImageCardContainer>
            <Img src = {img} alt = {title} loading="eager"/>
        </ImageCardContainer>
    )
}

export default ImageCard


const ImageCardContainer = styled.div`
    display: flex;
    width: 100%;
    height: 15rem;

    @media(max-width: 1200px) {
        width: 200px;
        height: 200px;
    }
`

const Img = styled.img`
    width: 100%;
    height: 100%;
    border: 2px solid black;
    
    border-radius: 10px;
`