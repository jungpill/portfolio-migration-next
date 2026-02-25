import styled from 'styled-components'
import test from "../assets/webp/미니홈피.webp";

export const metadata = {
    title: '이정필 포트폴리오',
    description: '싸이월드를 오마주해 만든 포트폴리오 입니다.',
    keywords: ['web developer', 'frontend developer', 'react', 'nextjs', 'typescript', 'javascript', 'html', 'css', 'styled-components', 'portfolio', '이정필'],
}

const Page = () => {

    const text = "유저의 입장에서 생각하며 최선의 방향을 고민하는 개발자 이정필입니다.";

    return(
        <BodyContainer>
            <TextContainer aria-label={text}>
                {Array.from(text).map((char, index) => (
                    <Letter
                        key={index}
                        style={{
                            ['--d' as any]: `${index * 50}ms`, // 한 글자씩 딜레이
                            fontSize: '1.45rem',
                            fontWeight: '700',
                        }}
                    >
                        {char === " " ? "\u00A0" : char}
                    </Letter>
                ))}
            </TextContainer>

            <Img src={test.src}/>

            <BalloonWrap>
                <Balloon>
                  할 수 있다 화이팅!!
                </Balloon>
            </BalloonWrap>
        </BodyContainer>
    )
}

export default Page

const BodyContainer = styled.div`
    display: flex;
    width: 95%;
    height: 90%;
    background-color: white;
    border: 2px solid skyblue;
    border-radius: 20px;
    padding: 0.5rem;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-left: 1%;
    padding-bottom: .8rem;
    position: relative;

    /* 페이지 전체 등장(기존 BodyContainer motion 효과 대체) */
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

const TextContainer = styled.div`
    display: inline-block;
`

const Letter = styled.h1`
    display: inline-block;
    opacity: 0;
    transform: translateY(5px);
    animation: letterIn 0.5s ease forwards;
    animation-delay: var(--d);

    @keyframes letterIn {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`

const Img = styled.img`
    width: 90%;
    height: 75%;
    margin-top: 2%; 
`

const BalloonWrap = styled.div`
    opacity: 0;
    animation: balloonIn 1s ease forwards;

    @keyframes balloonIn {
        to {
            opacity: 1;
        }
    }
`

const Balloon = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    background: white;
    color: black;
    padding: 10px;
    border-radius: 12px;
    width: 10rem;
    height: 2rem;
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
    top: 44%;
    right: 10%;
    white-space: pre-wrap;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15),
                0px -4px 10px rgba(0, 0, 0, 0.10),
                4px 0px 10px rgba(0, 0, 0, 0.10),
                -4px 0px 10px rgba(0, 0, 0, 0.10);

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 20px;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-top: 10px solid white;
  }
`;