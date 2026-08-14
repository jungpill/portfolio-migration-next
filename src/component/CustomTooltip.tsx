"use client";

import React, { useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

interface Props {
  readonly title: string;
  readonly position: 'top' | 'bottom';
  readonly children:React.ReactElement;
}

const CustomTooltip = ({title,position,children}:Props) => {
  const tooltipId = useId();
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const [positioned, setPositioned] = useState(false);

  const updatePosition = useCallback(() => {
    const trigger = triggerRef.current;
    const tooltip = tooltipRef.current;

    if (!trigger || !tooltip) {
      return;
    }

    const triggerRect = trigger.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();
    const gap = 8;
    const viewportPadding = 8;

    const minLeft = viewportPadding + tooltipRect.width / 2;
    const maxLeft = window.innerWidth - viewportPadding - tooltipRect.width / 2;
    const centeredLeft = triggerRect.left + triggerRect.width / 2;
    const left = Math.min(Math.max(centeredLeft, minLeft), maxLeft);
    const top = position === "top"
      ? triggerRect.top - tooltipRect.height - gap
      : triggerRect.bottom + gap;

    setCoords({ top: Math.max(top, viewportPadding), left });
    setPositioned(true);
  }, [position]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!visible) {
      setPositioned(false);
      return;
    }

    updatePosition();

    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [updatePosition, visible]);

  const showTooltip = () => {
    setVisible(true);
  };

  const hideTooltip = () => {
    setVisible(false);
  };

  return (
    <Wrapper>
      <Trigger
        ref={triggerRef}
        aria-describedby={visible ? tooltipId : undefined}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onFocusCapture={showTooltip}
        onBlurCapture={hideTooltip}
      >
        {children}
      </Trigger>
      {mounted && visible && createPortal(
        <TooltipBubble
          ref={tooltipRef}
          id={tooltipId}
          role="tooltip"
          $positioned={positioned}
          style={{
            top: coords.top,
            left: coords.left,
          }}
        >
          {title}
        </TooltipBubble>,
        document.body
      )}
    </Wrapper>
  );
};

export default CustomTooltip;


const Wrapper = styled.div`
  width: 50px;
  height: 50px;
  font-size: 0.8rem;
  line-height: 1.5rem;
`

const Trigger = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TooltipBubble = styled.div<{ $positioned: boolean }>`
  position: fixed;
  transform: translateX(-50%);
  background: rgba(17, 24, 39, 0.95);
  color: #fff;
  padding: 6px 10px;
  border-radius: 8px;
  font-size: 0.75rem;
  line-height: 1;
  white-space: nowrap;
  pointer-events: none;
  opacity: ${({ $positioned }) => ($positioned ? 1 : 0)};
  visibility: ${({ $positioned }) => ($positioned ? "visible" : "hidden")};
  transition: opacity 0.15s ease;
  z-index: 1020;
`;
