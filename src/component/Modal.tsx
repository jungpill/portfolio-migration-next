"use client"

import React,{ useRef} from "react";
import styled from "styled-components";
import useOutsideClick from "../hook/UseOutSideClick";
import close from '../../src/assets/webp/close.webp'
import "../app/globals.css"

type ModalProps = {
  children: React.ReactNode | null;
  setModalChildren: React.Dispatch<
    React.SetStateAction<React.ReactNode | null>
  >;
};

const Modal = ({
    children,
    setModalChildren
    }:ModalProps) => {

    const ref = useRef<HTMLDivElement>(null);
    useOutsideClick({ref:ref})

    return(
        <ModalContainer visible={children !== null} onClick={() => setModalChildren(null)}>
            <ModalWrapper ref = {ref} onClick={(e) => e.stopPropagation()} visible={children !== null}>
                <img 
                src = {close.src} 
                width='30px' 
                height='30px' 
                style={{ 
                    cursor: 'pointer',
                    opacity: children ? 1 :  0
                }} 
                onClick={() => {setModalChildren(null)}} alt = '이미지 로드중'
                 />
                {children}
            </ModalWrapper>
        </ModalContainer>
    )
}

export default Modal;

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
    align-items: flex-end;
    background: white;
    height: 80%;
    width: 40%;
    border-radius: 10px;
    padding: 20px;
`
