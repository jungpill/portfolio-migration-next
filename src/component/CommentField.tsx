"use client"

import styled from "styled-components";
import { axiosInstance } from "../api/axios";
import { useState, type Dispatch, type SetStateAction } from "react";
import { useAlertStore } from "../store/useAlertStore";
import { useGuestBookStore } from "../store/useGuestBookStore";

interface SubmitType {
    readonly userId: string;
    readonly password: string;
    readonly content: string;
}

export interface GuestbookEntry {
    id: number;
    userId: string;
    password: string;
    content: string;
    date: string; 
  }

const CommentField = () => {

    const [submitData, setSubmitData] = useState<SubmitType>({
        userId: '', 
        password: '', 
        content: ''
    });
    const showSuccessAlert = useAlertStore((s) => s.showSuccess)
    const showWarnAlert = useAlertStore((s) => s.showWarn);
    const setGuestBookData = useGuestBookStore((s) => s.setGuestBookData);
    const guestBookData = useGuestBookStore((s) => s.guestBookData);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleSubmit = async() => {
        if(!submitData.content || !submitData.password || !submitData.userId) {
            return showWarnAlert('모든 정보를 입력해주세요.')
        }
        if (isLoading) return;
        setIsLoading(true);

        try{
            const response = await axiosInstance.post('/guestbook', submitData)
            setSubmitData({userId: '', password: '', content: ''})
            setGuestBookData((prev) => [...prev, response.data])
            showSuccessAlert('방명록이 작성 되었습니다.')
        }catch(err){
            console.log(err)
            showWarnAlert('방명록 작성에 실패하였습니다. 잠시 후 다시 시도해주세요.')
        }finally{
            setIsLoading(false);
        }
    }

    return(
    <CommentFieldContainer>
        <RowWrapper style = {{marginBottom: '1rem'}}>
            <VisitorInput placeholder="닉네임" value={submitData.userId} onChange = {(e) => {setSubmitData({...submitData, userId: e.target.value})}} type='text'/>
            <VisitorInput placeholder="패스워드" value={submitData.password}  onChange = {(e) => {setSubmitData({...submitData, password: e.target.value})}} type="password"/>
        </RowWrapper>
        
        <RowWrapper>
            <CommentArea placeholder="피드백은 언제나 환영입니다! 많은 조언 부탁드려요" value={submitData.content}  onChange = {(e) => {setSubmitData({...submitData, content: e.target.value})}}/>
            <SubmitButton onClick = {handleSubmit}>
                확인
            </SubmitButton>
        </RowWrapper>
    </CommentFieldContainer>
    )
}

export default CommentField;

const CommentFieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 3%;
    width: 85%;
    background-color: #F2F2F2;
    padding: 1rem;
`

const CommentArea = styled.textarea`
    width: 90%;
    border-radius: 8px;
    border: none;
    padding: 0.75rem;
`

const SubmitButton = styled.button`
    padding: 15px;
    width: 4rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 1rem;
    background-color: white;
    border-radius: 5px;
    border: none;
    cursor: pointer;
`

const RowWrapper = styled.div`
    display: flex;
    align-items: flex-end;
`

const VisitorInput = styled.input`
    width: 8rem;
    height: 1.2rem;
    margin-right: 1rem;
    border-radius: 4px;
    border: none;
`


