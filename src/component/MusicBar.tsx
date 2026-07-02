"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import stop from "../assets/webp/stop.webp";
import square from "../assets/webp/square.webp";
import next from '../assets/webp/next.webp'
import play from '../assets/webp/play.webp'
import { tracks } from "../assets/music/index";
import WarnModal from "./WarnModal";
import { sizes } from "../styles/BreakPoints";

const MusicBar = () => {
  const [active, setActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hasShownModal, setHasShownModal] = useState(false);
  const [index, setIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const advancingRef = useRef(false);
  const activeRef = useRef(active);

  const audioRef = useRef<HTMLAudioElement>(null);
  const current = tracks[index];

  const syncDuration = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const nextDuration = audio.duration;

    if (Number.isFinite(nextDuration) && nextDuration > 0) {
      setDuration(nextDuration);
    }
  }, []);

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
        if (audioRef.current) {
          audioRef.current.currentTime = 0;
          setCurrentTime(0);
        }
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
    activeRef.current = active;
  }, [active]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (active) {
      audio.play().catch(() => setActive(false));
    } else {
      audio.pause();
    }
  }, [active]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    setCurrentTime(0);
    setDuration(0);
    audio.load();

    if (activeRef.current) {
      audio.play().catch(() => setActive(false));
    }
  }, [index]);

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio) return;

    setCurrentTime(audio.currentTime);
    syncDuration();
  };

  const handleLoadedMetadata = () => {
    syncDuration();
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement> | React.FormEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    syncDuration();

    const nextTime = Number(e.currentTarget.value);
    audio.currentTime = nextTime;
    setCurrentTime(nextTime);
  };

  const formatTime = (seconds: number) => {
    if (!Number.isFinite(seconds)) return "0:00";

    const minutes = Math.floor(seconds / 60);
    const restSeconds = Math.floor(seconds % 60).toString().padStart(2, "0");

    return `${minutes}:${restSeconds}`;
  };

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

      <SeekBox>
        <TimeText>{formatTime(currentTime)}</TimeText>
        <SeekBar
          type="range"
          min="0"
          max={duration || 0}
          step="1"
          value={Math.min(currentTime, duration || 0)}
          onInput={handleSeek}
          onChange={handleSeek}
          aria-label="노래 재생 위치"
        />
        <TimeText>{formatTime(duration)}</TimeText>
      </SeekBox>

      <IconBox onClick={handleRemote}>
        <Icon
          data-type={!active ? "play" : "stop"}
          src={(!active ? play : stop).src}
          alt="재생/정지"
        />
        <Icon data-type="square" src={square.src} alt="처음으로" />

        {/* ▼ 여기 수정: 왼쪽(이전) 버튼은 back, 오른쪽(다음) 버튼은 next */}
        <Icon
          data-type="back"
          src={next.src}
          style={{ transform: "rotate(180deg)" }}
          alt="이전"
        />
        <Icon data-type="next" src={next.src} alt="다음" />
      </IconBox>

      <audio
        ref={audioRef}
        src={encodeURI(current.src)}
        onEnded={goNext}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onDurationChange={handleLoadedMetadata}
        onCanPlay={handleLoadedMetadata}
        preload="metadata"
      />
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
  width: 9.5rem;
  height: 5.25rem;
  background-color: darkgray;
  right: 0.8%;
  top: 10%;
  font-size: 10px;
  border-radius: 4px;
  z-index: 1002;

  @media (max-width: ${sizes.laptop}) {
    right: 0;
    width: 8rem;
    font-size: 8px;
  }
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 38%;
  width: 90%;
  border: 1px solid black;
  background-color: white;
  border-radius: 4px;
  font-weight: 600;
  padding: 0 0.25rem;
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const SeekBox = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1.7rem 1fr 1.7rem;
  gap: 0.2rem;
  width: 90%;
  margin-top: 0.25rem;
`;

const TimeText = styled.span`
  color: #111;
  font-size: 0.55rem;
  line-height: 1;
  text-align: center;
  font-weight: 600;
`;

const SeekBar = styled.input`
  width: 100%;
  height: 0.35rem;
  margin: 0;
  cursor: pointer;
  accent-color: #222;
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
