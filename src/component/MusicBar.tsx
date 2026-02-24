import React, { useRef, useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import stop from "../assets/webp/stop.webp";
import square from "../assets/webp/square.webp";
import next from '../assets/webp/next.webp'
import play from '../assets/webp/play.webp'
import { bgmMap, tracks } from "../assets/music";
import WarnModal from "./WarnModal";
import { sizes } from "../styles/BreakPoints";

const MusicBar = () => {
  const [active, setActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hasShownModal, setHasShownModal] = useState(false);
  const [index, setIndex] = useState(0);
  const advancingRef = useRef(false);

  const audioRef = useRef<HTMLAudioElement>(null);
  const current = tracks[index];

  const handleRemote = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const type = target.getAttribute("data-type");

    switch (type) {
      case "play":
        if (!hasShownModal) setIsOpen(true);
        else setActive(true);
        break;
      case "stop":
        setActive(false);
        break;
      case "square":
        if (audioRef.current) audioRef.current.currentTime = 0;
        break;
      case "next":
        goNext();
        break;
      case "back":
        goBack();
        break;
      default:
        break;
    }
  };

  const handleClose = () => setIsOpen(false);

  const handleConfirm = () => {
    setHasShownModal(true);
    setIsOpen(false);
    setActive(true);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.currentTime = 0; // 인덱스 변경 시 초기화
    if (active) {
      audio.play().catch(() => setActive(false));
    } else {
      audio.pause();
    }
  }, [active, index]);

  const goNext = useCallback(() => {
    if (advancingRef.current) return; // 중복 방지
    advancingRef.current = true;
    setIndex((prev) => (prev + 1) % tracks.length);
    setTimeout(() => {
      advancingRef.current = false;
    }, 120);
  }, [/* tracks가 동적으로 바뀌면 여기에 tracks.length 넣기 */]);

  const goBack = useCallback(() => {
    if (advancingRef.current) return;
    advancingRef.current = true;
    setIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
    setTimeout(() => {
      advancingRef.current = false;
    }, 120);
  }, [/* tracks가 동적으로 바뀌면 여기에 tracks.length 넣기 */]);

  return (
    <MusicBarContainer>
      <WarnModal visible={isOpen} close={handleClose} confirm={handleConfirm} />

      <TitleBox>
        {current.artist} - {current.title}
      </TitleBox>

      <IconBox onClick={handleRemote}>
        <Icon
          data-type={!active ? "play" : "stop"}
          src={!active ? play : stop}
          alt="재생/정지"
        />
        <Icon data-type="square" src={square} alt="처음으로" />

        {/* ▼ 여기 수정: 왼쪽(이전) 버튼은 back, 오른쪽(다음) 버튼은 next */}
        <Icon
          data-type="back"
          src={next}
          style={{ transform: "rotate(180deg)" }}
          alt="이전"
        />
        <Icon data-type="next" src={next} alt="다음" />
      </IconBox>

      <audio ref={audioRef} src={current.src} onEnded={goNext} />
    </MusicBarContainer>
  );
};

export default MusicBar;

const MusicBarContainer = styled(motion.div)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 8rem;
  height: 4rem;
  background-color: darkgray;
  right: 0.8%;
  top: 10%;
  font-size: 10px;
  border-radius: 4px;

  @media (max-width: ${sizes.laptop}) {
    right: 0;
    width: 6rem;
    font-size: 8px;
  }
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
  width: 90%;
  border: 1px solid black;
  background-color: white;
  border-radius: 4px;
  font-weight: 600;
`;

const IconBox = styled.div`
  display: flex;
  padding-top: 0.3rem;
  gap: 5px;
`;

const Icon = styled.img`
  width: 15px;
  height: 15px;
  cursor: pointer;
`;