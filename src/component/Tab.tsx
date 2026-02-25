"use client";

import styled from "styled-components";
import { sizes } from "../styles/BreakPoints";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Tab = () => {
    const pathname = usePathname();

    return(
        <TabContainer>
            <Link href="/">
                <Item $isActive={pathname === '/'}>홈</Item>
            </Link>
            <Link href="/profile">
                <Item data-type="Profile" $isActive={'/profile' === pathname}>프로필</Item>
            </Link>

            <Link href="/cover-letter">
                <Item data-type="CoverLetter" $isActive={'/cover-letter' === pathname}>자소서</Item>
            </Link>

            <Link href="/project">
                <Item data-type="Project" $isActive={'/project' === pathname}>프로젝트</Item>
            </Link>

            <Link href="/guest-book">
                <Item data-type="GuestBook" $isActive={'/guest-book' === pathname}>방명록</Item>
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
    right: 0;
    top: 20%;
    transform: translateX(70%);
    z-index: 9999;
    margin: 0;
    padding: 0;
    list-style: none;

    @media(max-width: ${sizes.laptop}){
    transform: translateX(0);
    right: 0.5rem;
    }
`

const Item = styled.li<{$isActive: boolean}>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid black;
  background-color: ${props => (props.$isActive ? 'white' : '#468baf')};
  color: ${props => (props.$isActive ? '#468baf' : 'white')};
  margin-bottom: 8%;
  height: 2rem;
  border-radius: 5px;
  font-size: 0.9rem;
  padding: 5px;

  &:hover {
    background-color: skyblue;
  }

  /* ✅ 핵심: 링크가 li 전체를 덮게 */
  a {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }
`;
