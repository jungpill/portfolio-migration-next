"use client";

import React from "react";
import styled from "styled-components";

interface Props {
  readonly title: string;
  readonly position: 'top' | 'bottom';
  readonly children:React.ReactElement;
}

const CustomTooltip = ({title,position,children}:Props) => {
  return (
    <Wrapper>
      <Trigger>
        {children}
        <TooltipBubble $position={position} role="tooltip">
          {title}
        </TooltipBubble>
      </Trigger>
    </Wrapper>
  );
};

export default CustomTooltip;


const Wrapper = styled.div`
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

const Trigger = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover > div,
  &:focus-within > div {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) translateY(0);
  }
`;

const TooltipBubble = styled.div<{ $position: "top" | "bottom" }>`
  position: absolute;
  left: 50%;
  ${({ $position }) => ($position === "top" ? "bottom: calc(100% + 8px);" : "top: calc(100% + 8px);")}
  transform: translateX(-50%) translateY(${({ $position }) => ($position === "top" ? "4px" : "-4px")});
  background: rgba(17, 24, 39, 0.95);
  color: #fff;
  padding: 6px 10px;
  border-radius: 8px;
  font-size: 0.75rem;
  line-height: 1;
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.15s ease, transform 0.15s ease, visibility 0.15s ease;
  z-index: 20;
`;
