"use client";

import styled from "styled-components";
import dayjs from "dayjs";
import { StaticImageData } from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface CardProps {
    content: string;
    date: string;
    id: number;
    userId: string;
    image: StaticImageData;
    guestBookLoaded: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setDeleteTargetId: React.Dispatch<React.SetStateAction<number | null>>;
}

const Card = ({ content, date, id, userId,image,guestBookLoaded,setIsOpen, setDeleteTargetId }: CardProps) => {

    const titleId = `guest-title-${id}`;
    const descId = `guest-desc-${id}`;

    const openDeleteModal = (id: number) => {
        setDeleteTargetId(id);
        setIsOpen(true);
    };

    if(!guestBookLoaded) {
        return(
            <div style={{ display: 'flex',width: "85%", padding: "16px", margin: "0 auto",flexDirection: "column" }}>
                <Skeleton />
                <div style={{
                    display: "flex",
                    width: "100%",
                    flexDirection: "row",
                    gap: "1rem",
                }}>
                    <Skeleton height={150} width={180} />
                    <div style={{ flex: 1 }}>
                        <Skeleton count={6} />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            <GuestItem
                key={id}
                as="article"
                role="listitem"
                aria-labelledby={titleId}
                aria-describedby={descId}
                >
                <Header as="header">
                    <MarginSpan id={titleId}>NO.{id}</MarginSpan>
                    <MarginSpan>{userId}</MarginSpan>
                    <span>({dayjs(date).format("YYYY.MM.DD HH:mm")})</span>

                    {/* span -> button (UI는 똑같이 보이게 스타일) */}
                    <DeleteButton
                    type="button"
                    onClick={() => openDeleteModal(id)}
                    aria-label={`NO.${id} 방명록 삭제`}
                    >
                    삭제
                    </DeleteButton>
                </Header>

                <RowWrapper>
                    <ProfileImage
                    src={image.src}
                    alt={`${userId} 프로필 이미지`}
                    />
                    <Text id={descId}>{content}</Text>
                </RowWrapper>
            </GuestItem>
        </>
    )
}

export default Card;

const GuestItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  margin-top: 1rem;
  font-size: 0.8rem;
  background-color: #f2f2f2;
  width: 85%;
`;

const RowWrapper = styled.div`
  display: flex;
  width: 85%;
  justify-content: center;
`;

const ProfileImage = styled.img`
  width: 130px;
  height: 130px;
  margin-top: 2%;
  border: 1px solid black;
  border-radius: 20px;
`;

const Text = styled.div`
  font-weight: 600;
  line-height: 2rem;
  font-size: 1rem;
  width: 100%;
  word-break: keep-all;
  overflow-wrap: anywhere;
  white-space: normal;
  text-align: justify;
  margin: 3% 0 0 2%;
`;

const MarginSpan = styled.span`
  margin-right: 0.5rem;
`;

// span처럼 보이는 button
const DeleteButton = styled.button`
  margin-left: auto;
  margin-right: 5px;
  cursor: pointer;

  background: transparent;
  border: 0;
  padding: 0;
  font: inherit;
  color: inherit;

  /* 키보드 포커스는 보이게 두는 걸 권장(접근성). */
  &:focus-visible {
    outline: 2px solid #007aff;
    outline-offset: 2px;
    border-radius: 4px;
  }
`;
