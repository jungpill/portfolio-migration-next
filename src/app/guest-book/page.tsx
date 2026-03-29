"use client";

import styled from "styled-components";
import GuestBookImage1 from "../../assets/webp/GuestBookImage.webp";
import GuestBookImage2 from "../../assets/webp/GuestBookImage2.webp";
import GuestBookImage3 from "../../assets/webp/GuestBookImage3.webp";
import GuestBookImage4 from "../../assets/webp/GuestBookImage4.webp";
import GuestBookImage5 from "../../assets/webp/GuestBookImage5.webp";
import CommentField from "../../component/CommentField";
import { useEffect, useMemo, useState } from "react";
import { axiosInstance } from "../../api/axios";
import InputModal from "../../component/InputModal";
import { useAlertStore } from "../../store/useAlertStore";
import Card from "./components/Card";

interface GuestbookEntry {
  id: number;
  userId: string;
  password: string;
  content: string;
  date: string; 
}

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [guestBookLoaded, setGuestBookLoaded] = useState(false);
  const [guestBookData, setGuestBookData] = useState<GuestbookEntry[]>([{
      id: 0,
      userId: "",
      password: "",
      content: "",
      date: "",
  }]);

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

  const getGuestBookData = async () => {
          try{
              const response = await axiosInstance.get('guestbook')
              setGuestBookData(response.data)
          }catch(err){
              console.error(err)
          }finally{
              setGuestBookLoaded(true)
          }
      }
  
  useEffect(() => {
      if (!guestBookLoaded) {
          getGuestBookData();
      }
  },[guestBookLoaded])

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
          guestBookData.sort((a,b) => a.id - b.id).map((guest, index) => {

            return (
              <>
                <Card
                  key={guest.id}
                  content={guest.content}
                  date={guest.date}
                  id={guest.id}
                  userId={guest.userId}
                  image={images[index % images.length]}
                  setIsOpen={setIsOpen}
                  setDeleteTargetId={setDeleteTargetId}
                />
              </>
            );
          })
        ) : (
          <EmptyText>아직 등록된 방명록이 없습니다.</EmptyText>
        )}
      </GuestWrapper>

      <CommentField
      setGuestBookData={setGuestBookData}
      />
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
  align-items: center;
  flex-direction: column;
  margin-left: 1%;
  padding-bottom: 0.8rem;
  overflow-y: scroll;
  box-sizing: border-box;

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
  height: 80%;
  overflow-y: auto;
  scrollbar-gutter: stable;
  align-items: center;

  &::-webkit-scrollbar {
    width: 0px;
  }
`;

const EmptyText = styled.p`
  margin-top: 2rem;
  font-size: 0.9rem;
`;
