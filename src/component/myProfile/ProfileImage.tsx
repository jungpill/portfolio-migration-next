import styled from "styled-components";
import image from '../../assets/webp/사진 푸른배경.webp'

const ProfileImage = () => {

    return(
        <ProfileImageWrapper>
            <StyledImage src = {image.src} alt = '이미지 로드중'/>
        </ProfileImageWrapper>
    )
}

export default ProfileImage

const ProfileImageWrapper = styled.div`
    width: 100%;
    height: 60%;
    margin-top: 1rem;
`

const StyledImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 20px;
    object-fit: cover;
`