"use client";

import styled from "styled-components";
import {useState, useEffect} from 'react'
import { axiosInstance } from "../../api/axios";
import { useGuestBookStore } from "../../store/useGuestBookStore";

const MyProfileHeader = () => {

    const setGuestBookData = useGuestBookStore((p) => p.setGuestBookData)

    const [visitor, setVisitor] = useState({
        today: '',
        total: ''
    })

    const Getvisitor = async () => {
        try {
          const response = await axiosInstance.post('/visitor/increment')
          setVisitor(response.data)
        } catch (error) {
          console.error('Error:', error);
        }
    };

    const getGuestBookData = async () => {
        try{
            const response = await axiosInstance.get('guestbook')
            setGuestBookData(response.data)
        }catch(err){
            console.error(err)
        }
    }

    const postVisitor = async() => {
        try{
            await axiosInstance.post('/visitor-ip-log')
        }catch(err){
            console.error(err)
        }
    }

    useEffect(() => {
        Getvisitor();
        getGuestBookData();
        postVisitor();
    },[])

    return(
        <HeaderWrapper>
            <TodayVisitorCount>
                <Visitor>Today..</Visitor> {visitor.today} <Visitor>| Total..</Visitor> {visitor.total}
            </TodayVisitorCount>
        </HeaderWrapper>
    )
}

export default MyProfileHeader

const HeaderWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 30px;
    flex-direction: row;
    justify-content: center; 
    align-items: center;
`

const TodayVisitorCount = styled.span`
    display: flex;
    color: red;
    font-weight: 600;
    line-height: 1.5rem;
    font-size: 0.8rem;
    margin: 0;
`

const Visitor = styled.p`
    color: black;
    margin-right: 5px;
    margin-left: 5px;
`