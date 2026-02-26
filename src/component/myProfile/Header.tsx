"use client";

import styled from "styled-components";
import { useEffect } from 'react'
import { axiosInstance } from "../../api/axios";
import { useGuestBookStore } from "../../store/useGuestBookStore";

const MyProfileHeader = () => {

    const setGuestBookData = useGuestBookStore((p) => p.setGuestBookData)
    const setGuestBookLoaded = useGuestBookStore((p) => p.setGuestBookLoaded)
    const guestBookLoaded = useGuestBookStore((p) => p.guestBookLoaded)
    const visitor = useGuestBookStore((p) => p.visitor)
    const visitorLoaded = useGuestBookStore((p) => p.visitorLoaded)
    const visitorLoading = useGuestBookStore((p) => p.visitorLoading)
    const setVisitor = useGuestBookStore((p) => p.setVisitor)
    const setVisitorLoaded = useGuestBookStore((p) => p.setVisitorLoaded)
    const setVisitorLoading = useGuestBookStore((p) => p.setVisitorLoading)

    const Getvisitor = async () => {
        setVisitorLoading(true)
        try {
          const response = await axiosInstance.post('/visitor/increment')
          setVisitor(response.data)
          setVisitorLoaded(true)
        } catch (error) {
          console.error('Error:', error);
        } finally {
          setVisitorLoading(false)
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

    const postVisitor = async() => {
        try{
            await axiosInstance.post('/visitor-ip-log')
        }catch(err){
            console.error(err)
        }
    }

    useEffect(() => {
        if (!visitorLoaded && !visitorLoading) {
            Getvisitor();
            postVisitor();
        }
    },[visitorLoaded, visitorLoading])

    useEffect(() => {
        if (!guestBookLoaded) {
            getGuestBookData();
        }
    },[guestBookLoaded])

    return(
        <HeaderWrapper>
            <TodayVisitorCount>
                <Visitor>Today..</Visitor> <p>{visitor.today}</p> <Visitor>| Total..</Visitor> <p>{visitor.total}</p>
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
