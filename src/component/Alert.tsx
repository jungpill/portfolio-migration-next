import {useEffect} from 'react';
import styled from 'styled-components';
import {useAlertStore, type AlertType} from '../zustand/useAlertStore';
import { IoIosWarning } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";

const Alert = () => {

  const type = useAlertStore((s) => s.type)
  const clear = useAlertStore((s) => s.clear) 
  const message= useAlertStore((s) => s.message)

  useEffect(() => { 
    if(type === null) return 
    const id = setTimeout(() => { 
      clear() 
    },2500)
     return () => clearTimeout(id); 
  },[type])

  return (
    <Overlay $type={type}>
      <ModalContainer $type={type}>
        <Header>
          {type === 'success' && <FaCheckCircle color={'#3B82F6'} size={30}/>}
          {type === 'warn' && <IoIosWarning color={'red'} size={30} />}
        </Header>
        <Body>
          {message}
        </Body>
       
      </ModalContainer>
    </Overlay>
  );
};

export default Alert;


const Overlay = styled.div<{ $type: AlertType }>`
  position: fixed;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1002;

  pointer-events: none;
  transform: ${({ $type }) => ($type !== null ? 'translateY(40px)' : 'translateY(16px)')};
  opacity: ${({ $type }) => ($type !== null ? 1 : 0)};
  transition: transform 0.5s ease, opacity 0.7s ease;
  will-change: transform, opacity;
`;

const ModalContainer = styled.div<{ $type: AlertType }>`
  display: flex;
  background: white;
  padding: 24px;
  border-radius: 8px;
  width: 480px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  gap: 14px;
  align-items: center;
  background: #33383F;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
`;

const Body = styled.div`
  font-size: 14px;
  color: #fff;
  align-items: center;
  font-weight: 600;
`;