"use client";

import React, { useState} from "react";
import styled from "styled-components";

interface CancelOrderModalProps {
    eventHandler: (password: string) => void;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    title: string;
    visible?: boolean;
}

const InputModal = ({ 
  title,
  eventHandler, 
  setIsOpen,
  visible,}: CancelOrderModalProps
  ) => {

  const [password, setPassword] = useState('')

  const handleClose = () => {
    setPassword('')
    setIsOpen(false)
  }
 
  return (
        <ModalContainer visible={visible} onClick={handleClose}>
            <ModalBox onClick={(e) => e.stopPropagation()}>
            <TitleWrapper>
                <Title>{title}</Title>
            </TitleWrapper>
            <Input
            placeholder="비밀번호를 입력하세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <ButtonGroup>
            <OkButton onClick = {() => {eventHandler(password)}}>확인</OkButton>
            <CancelButton onClick={handleClose}>아니오</CancelButton>
            </ButtonGroup>
            </ModalBox>
        </ModalContainer>
  );
};

export default InputModal;

const ModalContainer = styled.div<{visible?: boolean}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1002;
  pointer-events: ${props => props.visible  ? 'auto' : 'none'};

  opacity: ${props => props.visible ? 1 : 0};
  transition: opacity 0.6s ease;
`;

const ModalBox = styled.div`
  background: white;
  padding-top: 15px;
  padding-bottom: 30px;
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 8px;
  box-sizing: border-box;
  width: 500px;
  z-index: 1002;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`

const Title = styled.h2`
  margin-bottom: 10px;
  font-size: 1rem;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-bottom: 20px;
  box-sizing: border-box;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 10px;
`;

const OkButton = styled.button`
  background-color: #1e90ff;
  color: white;
  padding: 12px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 78px;
  box-sizing: border-box;
`;

const CancelButton = styled.button`
  background-color: #f44336;
  color: white;
  padding: 12px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 78px;
  box-sizing: border--box;
`;