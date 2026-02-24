"use client"

import styled from 'styled-components'
import { motion } from "framer-motion";
import test from "../assets/webp/미니홈피.webp";
const HOME = () => {

    const text = "유저의 입장에서 생각하며 최선의 방향을 고민하는 개발자 이정필입니다.";

    const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.05 }, // 0.1초 간격으로 하나씩 등장
    },
    };

    const letterVariants = {
    hidden: { opacity: 0, y: 10 }, // 처음에는 아래에 있고 투명함
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }, // 부드럽게 올라오면서 나타남
    };

    return(
        <BodyContainer
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.5 }}
        >
            <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            >
            {text.split("").map((char, index) => (
                <motion.span key={index} variants={letterVariants} style ={{fontSize: '1.45rem', fontWeight: '700',}} >
                {char}
                </motion.span>
            ))}
            </motion.div>
            <Img src={test.src}/>
            
            <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{ duration: 1 }}
            >
                <Balloon>
                  할 수 있다 화이팅!!
                </Balloon>
            </motion.div>
        </BodyContainer>
    )
}

export default HOME

const BodyContainer = styled(motion.div)`
    display: flex;
    width: 90%;
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
`

const Img = styled.img`
    width: 90%;
    height: 75%;
    margin-top: 2%; 
`

const Balloon = styled.div`
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
    left: 20px; /* 왼쪽에 꼬리 붙이기 */
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-top: 10px solid white;
  }
`;
