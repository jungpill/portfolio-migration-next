"use client";

import styled from "styled-components";
import { motion } from "framer-motion";
import GuestBookImage1 from '../../assets/webp/GuestBookImage.webp'
import GuestBookImage2 from '../../assets/webp/GuestBookImage2.webp'
import GuestBookImage3 from '../../assets/webp/GuestBookImage3.webp'
import GuestBookImage4 from '../../assets/webp/GuestBookImage4.webp'
import GuestBookImage5 from '../..//assets/webp/GuestBookImage5.webp'
import CommentField from "../../component/CommentField";
import { useState,  useRef } from "react";
import { axiosInstance } from "../../api/axios";
import InputModal from "../../component/InputModal";
import { useGuestBookStore } from "../../store/useGuestBookStore";
import dayjs from 'dayjs';
import { useAlertStore } from "../../store/useAlertStore";

const Page = () => {

    const { guestBookData, setGuestBookData } = useGuestBookStore();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const ref = useRef<HTMLDivElement>(null);

    const image = [
        GuestBookImage1,
        GuestBookImage2,
        GuestBookImage3,
        GuestBookImage5,
        GuestBookImage4
    ]

    const warnAlert = useAlertStore((p) => p.showWarn)
    const successAlert = useAlertStore((p) => p.showSuccess)

    const handleDelete = async (index: number, password: string) => {
        try{
            const response = await axiosInstance.patch(`/guestbook/${index}`, {password: password})
            setGuestBookData(guestBookData.filter((item) => item.id !== index))
            successAlert('삭제되었습니다.')
        }catch(err){
            warnAlert('비밀번호가 올바르지 않습니다.');
        }
        finally{setIsOpen(false)}
    }

    const handleIsOpen = (e:any) => {
        sessionStorage.setItem('deleteKey', e)
        setIsOpen(true)
    }

    return(
        <>
        <GuestBookContainer
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.5 }}
        >
            <InputModal title={'삭제하시겠습니까?'} 
            eventHandler={(password:any) => {
            const index = Number(sessionStorage.getItem("deleteKey"));
            handleDelete(index, password);
            }} 
            setIsOpen={setIsOpen}
            visible={isOpen}
            /> 
            <GuestWrapper>
                {guestBookData ? guestBookData.map((GuestBook,index) => {
                    return(
                        <>
                        <Header key = {index}>
                        <MarginSpan>NO.{GuestBook.id}</MarginSpan> 
                        <MarginSpan>{GuestBook.userId}</MarginSpan> 
                        ({dayjs(GuestBook.date).format('YYYY.MM.DD HH:mm')}) 
                        <span style = {{
                            marginLeft: 'auto', 
                            marginRight: '5px', 
                            cursor: 'pointer'
                            }} 
                            onClick={() => {handleIsOpen(GuestBook.id)}}
                            ref={ref}
                            >
                            삭제
                        </span>
                        </Header>
                        <RowWrapper>
                            <ProfileImage src = {image[index % 5].src} alt = '이미지 로드중'/>
                            <Text>{GuestBook.content}</Text>
                        </RowWrapper>
                </>
                    )
                }) : '아직 등록된 방명록이 없습니다.'}
            </GuestWrapper>
            <CommentField/>
        </GuestBookContainer>
        </>
    )
}

export default Page;

const GuestBookContainer = styled(motion.div)`
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
    padding-bottom: .8rem;
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
`

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
`

const Header = styled.div`
    display: flex;
    align-items: center;
    padding: 5px;
    margin-top: 2.5rem;
    font-size: .8rem;
    background-color: #F2F2F2;
    width: 85%;
`

const RowWrapper =styled.div`
    display: flex;
    width: 85%;
    justify-content: center;
`

const ProfileImage = styled.img`
    width: 130px;
    height: 130px;
    margin-top: 2%;
    border: 1px solid black;
    border-radius: 20px;
`

const Text = styled.div`
    font-weight: 600;
    line-height: 2rem;
    font-size: 1rem;
    width: 100%;
    word-wrap: break-word;
    word-break: keep-all; /* 한글 줄바꿈을 더 자연스럽게 */
    white-space: normal; /* 공백을 정리하면서 줄바꿈 적용 */
    text-align: justify;
    margin: 3% 0 0 2%;
`

const MarginSpan = styled.span`
    margin-right: .5rem;
`

