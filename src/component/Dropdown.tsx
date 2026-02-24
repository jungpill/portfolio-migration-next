"use client";

import { useState,useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const emotions = [
  { emoji: '😊', label: '행복' },
  { emoji: '😢', label: '슬픔' },
  { emoji: '😡', label: '화남' },
  { emoji: '😐', label: '무덤덤' },
  {emoji: '🥱', label: '피곤'}
];

const EmotionDropdown = () => {
    
    const [selectedEmotion, setSelectedEmotion] = useState(emotions[0]);
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (e:MouseEvent) => {
            const target = e.target as Node
            if(ref.current && !ref.current.contains(target)){
                setOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
    },[ref])

  return (
    <Wrapper ref = {ref}>
      <Label>TODAY IS...</Label>
      <EmotionSelector onClick={() => setOpen(prev => !prev)}>
        <span>{selectedEmotion.emoji}</span>
        <span>{selectedEmotion.label}</span>

        <AnimatePresence>
          {open && (
            <Dropdown
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {emotions.map((emotion, index) => (
                <DropdownItem
                  key={index}
                  onClick={(e) => {
                    setSelectedEmotion(emotion);
                    setOpen(false);
                    e.stopPropagation();
                  }}
                >
                  {emotion.emoji} {emotion.label}
                </DropdownItem>
              ))}
            </Dropdown>
          )}
        </AnimatePresence>
      </EmotionSelector>
    </Wrapper>
  );
};

export default EmotionDropdown;

const Wrapper = styled.div`
  border: 1px solid #add8e6;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  width: 90%;
  margin-right: auto;  
  margin-top: 1rem;
`;

const Label = styled.span`
  color: #87ceeb;
  font-weight: bold;
  margin-right: 10px;
`;

const EmotionSelector = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  position: relative;

  &:hover{
    background-color: #f0f0f0;
    border-radius: 8px;
  }
`;

const Dropdown = styled(motion.ul)`
  position: absolute;
  top: 30px;
  left: 0;
  background: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 6px 0;
  list-style: none;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  z-index: 10;
`;

const DropdownItem = styled.li`
  padding: 6px 12px;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background-color: #f0f0f0;
  }
`;