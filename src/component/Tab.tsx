"use client";

import styled from "styled-components";
import { sizes } from "../styles/BreakPoints";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Tab = () => {

    const pathName = usePathname();

    return(
        <TabContainer>
            <Link href="/">
                <Item data-type="" $isActive={pathName === '/'}>홈</Item>
            </Link>
            <Link href="/profile">
                <Item data-type="Profile" $isActive={pathName === '/profile'}>프로필</Item>
            </Link>

            <Link href="/cover-letter">
                <Item data-type="CoverLetter" $isActive={pathName === '/cover-letter'}>자소서</Item>
            </Link>

            <Link href="/project">
                <Item data-type="Project" $isActive={pathName === '/project'}>프로젝트</Item>
            </Link>

            <Link href="/guest-book">
                <Item data-type="GuestBook" $isActive={pathName === '/guest-book'}>방명록</Item>
            </Link>
        </TabContainer>
    )
}

export default Tab;

const TabContainer = styled.ul`
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 4.5rem;
    min-height: 250px;
    right: 6%;
    top: 20%;

    @media(max-width: ${sizes.laptop}){
    right: 3%;
    }
`

const Item = styled.li<{$isActive: boolean}>`
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid black;
    background-color: ${props => props.$isActive ? 'white' : '#468baf'};
    color: ${props => props.$isActive ? '#468baf' : 'white'};
    margin-bottom: 8%;
    height: 2rem;
    border-radius: 5px;
    font-size: 0.9rem;
    padding: 5px;
    cursor: pointer;

    &:hover{
    background-color: skyblue;
    }
`