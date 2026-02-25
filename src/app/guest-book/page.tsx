"use client";

import styled from "styled-components";
import GuestBookImage1 from "../../assets/webp/GuestBookImage.webp";
import GuestBookImage2 from "../../assets/webp/GuestBookImage2.webp";
import GuestBookImage3 from "../../assets/webp/GuestBookImage3.webp";
import GuestBookImage4 from "../../assets/webp/GuestBookImage4.webp";
import GuestBookImage5 from "../../assets/webp/GuestBookImage5.webp";
import CommentField from "../../component/CommentField";
import { useMemo, useState } from "react";
import { axiosInstance } from "../../api/axios";
import InputModal from "../../component/InputModal";
import { useGuestBookStore } from "../../store/useGuestBookStore";
import dayjs from "dayjs";
import { useAlertStore } from "../../store/useAlertStore";

const Page = () => {
  const { guestBookData, setGuestBookData, guestBookLoaded } = useGuestBookStore();
  const [isOpen, setIsOpen] = useState(false);

  // sessionStorage 대신 state로 관리 (UI 변화 없음)
  const [deleteTargetId, setDeleteTargetId] = useState<number | null>(null);

  const warnAlert = useAlertStore((p) => p.showWarn);
  const successAlert = useAlertStore((p) => p.showSuccess);

  // 매 렌더마다 배열 새로 만들 필요 없음
  const images = useMemo(
    () => [
      GuestBookImage1,
      GuestBookImage2,
      GuestBookImage3,
      GuestBookImage5,
      GuestBookImage4,
    ],
    []
  );

  const handleDelete = async (id: number, password: string) => {
    try {
      await axiosInstance.patch(`/guestbook/${id}`, { password });
      setGuestBookData(guestBookData.filter((item) => item.id !== id));
      successAlert("삭제되었습니다.");
    } catch (err) {
      warnAlert("비밀번호가 올바르지 않습니다.");
    } finally {
      setIsOpen(false);
      setDeleteTargetId(null);
    }
  };

  const openDeleteModal = (id: number) => {
    setDeleteTargetId(id);
    setIsOpen(true);
  };

  return (
    <GuestBookContainer
      aria-label="방명록"
    >
      <InputModal
        title={"삭제하시겠습니까?"}
        eventHandler={(password: any) => {
          if (deleteTargetId == null) return;
          handleDelete(deleteTargetId, password);
        }}
        setIsOpen={setIsOpen}
        visible={isOpen}
      />

      <GuestWrapper role="list">
        {!guestBookLoaded ? null : guestBookData?.length ? (
          guestBookData.map((guest, index) => {
            const titleId = `guest-title-${guest.id}`;
            const descId = `guest-desc-${guest.id}`;

            return (
              <GuestItem
                key={guest.id}
                as="article"
                role="listitem"
                aria-labelledby={titleId}
                aria-describedby={descId}
              >
                <Header as="header">
                  <MarginSpan id={titleId}>NO.{guest.id}</MarginSpan>
                  <MarginSpan>{guest.userId}</MarginSpan>
                  <span>({dayjs(guest.date).format("YYYY.MM.DD HH:mm")})</span>

                  {/* span -> button (UI는 똑같이 보이게 스타일) */}
                  <DeleteButton
                    type="button"
                    onClick={() => openDeleteModal(guest.id)}
                    aria-label={`NO.${guest.id} 방명록 삭제`}
                  >
                    삭제
                  </DeleteButton>
                </Header>

                <RowWrapper>
                  <ProfileImage
                    src={images[index % 5].src}
                    alt={`${guest.userId} 프로필 이미지`}
                  />
                  <Text id={descId}>{guest.content}</Text>
                </RowWrapper>
              </GuestItem>
            );
          })
        ) : (
          <EmptyText>아직 등록된 방명록이 없습니다.</EmptyText>
        )}
      </GuestWrapper>

      <CommentField />
    </GuestBookContainer>
  );
};

export default Page;

const GuestBookContainer = styled.div`
  display: flex;
  width: 95%;
  height: 90%;
  background-color: white;
  border: 2px solid skyblue;
  border-radius: 20px;
  padding: 0.5rem;
  align-items: center;
  flex-direction: column;
  margin-left: 1%;
  padding-bottom: 0.8rem;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0px;
  }

  opacity: 0;
  transform: translateX(40px);
  animation: pageIn 0.5s ease forwards;

  @keyframes pageIn {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const GuestWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70%;
  overflow-y: auto;
  scrollbar-gutter: stable;
  align-items: center;

  &::-webkit-scrollbar {
    width: 0px;
  }
`;

const GuestItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  margin-top: 2.5rem;
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

const EmptyText = styled.p`
  margin-top: 2rem;
  font-size: 0.9rem;
`;
