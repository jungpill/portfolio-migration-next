import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "방명록",
    description: "포트폴리오 방문자가 메시지를 남길 수 있는 방명록 페이지입니다.",
    alternates: {
        canonical: "/guest-book",
    },
    openGraph: {
        title: "방명록 | 이정필 포트폴리오",
        description: "방문자 메시지 및 댓글",
        url: "/guest-book",
    },
}

export default function GuestBookLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
