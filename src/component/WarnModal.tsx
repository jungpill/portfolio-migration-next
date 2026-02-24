import styled from "styled-components";

interface Props {
  visible: boolean;
  close: () => void;
  confirm: () => void; 
}

const WarnModal = ({ visible, close, confirm }: Props) => {
  return (
    <ModalContainer visible={visible} onClick={() => close()}>
      <ModalWrapper visible={visible} onClick={(e) => e.stopPropagation()}>
        <Title>확인 버튼 클릭시 노래가 재생됩니다!</Title>
        <Des>볼륨을 확인해주세요!</Des>

        <Footer>
          <CancleButton onClick={() => close()}>취소</CancleButton>
          <ConfirmButton onClick={() => confirm()}>확인</ConfirmButton>
        </Footer>
      </ModalWrapper>
    </ModalContainer>
  );
};

export default WarnModal;

const ModalContainer = styled.div<{visible: boolean}>`
    position: fixed;
    z-index: 1000;
    display: flex;
    background-color: rgba(0, 10, 10, .4);
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    justify-content: center;
    align-items: center;

    pointer-events: ${props => props.visible  ? 'auto' : 'none'};

    opacity: ${props => props.visible ? 1 : 0};
    transition: opacity 0.5s ease;
`

const ModalWrapper = styled.div<{visible: boolean}>`    
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: white;
    width: 440px;
    border-radius: 10px;
    padding: 20px 28px;
    gap: 12px;
`

const Title = styled.h2`
    display: flex;
    font-size: 1rem;
    font-weight: 600;
    align-items: center;
    gap: 6px;
    width: 100%;
`

const Des = styled.div`
    font-size: 0.9rem;
    color: #000;
    font-weight: 500;
`

const Footer = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    gap: 8px;
`

export const ConfirmButton = styled.button`
    padding: 12px 8px;
    box-sizing: border-box;
    background-color: #3B82F6;
    color: white;
    width: 87px;
    height: 100%;
    border: none;
    border-radius: 6px;
    white-space: nowrap;
    cursor: pointer;
    font-weight: 500;
`
export const CancleButton = styled.button`
    padding: 12px 8px;
    box-sizing: border-box;
    background-color: #F3F4F6;
    color: #4B5563;
    width: 87px;
    height: 100%;
    border-radius: 6px;
    white-space: nowrap;
    border: none;
    cursor: pointer;
    font-weight: 500;
`