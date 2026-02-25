import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "프로젝트",
    description: "이정필이 진행한 프로젝트 목록과 상세 내용을 확인할 수 있는 페이지입니다.",
    alternates: {
        canonical: "/project",
    },
    openGraph: {
        title: "프로젝트 | 이정필 포트폴리오",
        description: "프로젝트 목록 및 상세 소개",
        url: "/project",
    },
}

export default function ProjectLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
