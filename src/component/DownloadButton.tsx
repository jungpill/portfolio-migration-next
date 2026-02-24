import styled from "styled-components";
import { FaArrowDown } from 'react-icons/fa';

const DownloadButton = () => {

    const ArrowIcon = FaArrowDown as unknown as React.FC;

    return(
    <Container>
    <SubmitButton>
    <ArrowIcon  />
        <a href ='pdf/이정필 포트폴리오.pdf' download>
            포트폴리오 다운로드
        </a>
    </SubmitButton>
    </Container>)
}

export default DownloadButton;

const Container = styled.button`
     position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 3.5rem;
    background: none;
    border: none;
    right: 0;
    top: 0;
    font-size: 8px;
`;

const SubmitButton = styled.button`
  background-color: #1c1e2a; // 짙은 남색/검정 배경
  font-weight: 500;
  padding: 12px 24px;
  border: none;
  border-radius: 10px; // 완전한 pill 형태
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: background-color 0.2s;

  a{
   color: #fff;
   }

  &:hover {
    background-color: #f0f0f0;
    a {
      color: #000;
    }
  }

  &:active {
    transform: scale(0.98);
  }

  svg {
    color: #6c85ff; // 화살표 색상 (보라빛 도는 파랑)
    font-size: 16px;
  }
`;