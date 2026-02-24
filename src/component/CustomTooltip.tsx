import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; 
import styled from "styled-components";

interface Props {
  readonly title: string;
  readonly position: 'top' | 'bottom';
  readonly children:React.ReactElement;
}

const CustomTooltip = ({title,position,children}:Props) => {
  return (
    <Styled>
      <Tippy content = {title} placement={position}>
        {children}
      </Tippy>
    </Styled>
  );
};

export default CustomTooltip;


const Styled = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 1rem;
  font-size: 0.8rem;
  line-height: 1.5rem;
  margin-top: 2rem;
  @media(min-width: 1920px){
    margin-right: 2.5rem;
  }
`
