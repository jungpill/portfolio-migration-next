"use client";

import styled from "styled-components";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Tab = () => {

    const pathName = usePathname();

    return(
        <TabContainer>
            <Item $isActive={pathName === '/'}>
                <Link href="/">홈</Link>
            </Item>
            <Item $isActive={pathName === '/profile'}>
                <Link href="/profile">프로필</Link>
            </Item>

            <Item $isActive={pathName === '/cover-letter'}>
                <Link href="/cover-letter">자소서</Link>
            </Item>

            <Item $isActive={pathName === '/project'}>
                <Link href="/project">프로젝트</Link>
            </Item>

            <Item $isActive={pathName === '/guest-book'}>
                <Link href="/guest-book">방명록</Link>
            </Item>
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
    top: 20%;
    list-style: none;
    padding: 0;
    margin: 0;
    right: -3%;
`

const Item = styled.li<{$isActive: boolean}>`
    
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
    
    a {
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color: inherit;
  }
`
