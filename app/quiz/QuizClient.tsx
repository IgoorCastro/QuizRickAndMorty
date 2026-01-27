'use client'

import fetchData, { Character } from "../lib/rickandmort";
import Button from "../components/ui/Button/Button";
import QuizContainer from "../components/quiz/QuizContainer";
import Title from "../components/ui/Title";
import Subtitle from "../components/ui/Subtitle";
import DisplayImage from "../components/quiz/DisplayImage";
import Options from "../components/quiz/Options";
import Score from "../components/quiz/Score/Score";
import { addScore, subScore } from "../lib/calculateScore";
import styles from "./quiz.module.css";
import { useState } from "react";
import Modal from "../components/ui/Modal";
import { modalInfo } from "../lib/gameInfo";

type QuizClientProps = {
    character: Character[],
    drawnChar: number,
}

export default function QuizClient({ character }: QuizClientProps) {
    const drawId = (maxId: number) =>  Math.floor(Math.random() * maxId);
    const [char, setChar] = useState<Character[]>(character);
    const [score, setScore] = useState<number>(0);
    const [drawnId, setDrawnId] = useState<number>(() => drawId(3));// sorteia um ID para ser advinhado
    const [error, setError] = useState<boolean>();
    const [isModalVisible, SetIsModalVisible] = useState<boolean>(true);
    const [hitError, setHitError] = useState<boolean>(true);

    const drawnChar: Character = char[drawnId]; // character escolhido para o game

    const resetQuestion = async () => { // altera a questão
        setChar(await fetchData());
        setDrawnId(drawId(3));
    }

    const hit = () => setHitError(prevStatus => !prevStatus);

    const handlerAnswer = (name: string) => { // handler de resposta
        if (drawnChar.name === name) { // resposta correta
            setScore(addScore(score, 15));
            resetQuestion();
            setError(false);
            hit();
            return;
        }

        setError(true);
        hit();
        setScore(subScore(score, 0.15));
        resetQuestion();
    }

    const nextQuest = () => {
        resetQuestion();
        setError(true);
        setScore(subScore(score, 0.10));
        hit();
    }

    const toggleModal = () => {
        SetIsModalVisible((prevStatus) => !prevStatus);
    }

    return (
        <div className={styles.mainContainer}>
            {isModalVisible && (
                <Modal closeModal={toggleModal}>
                    <div className="flex flex-col justify-center items-center mb-5!">
                        <Title>
                            Quiz - Rick and Mort
                        </Title>
                        <Subtitle className="underline underline-offset-8">
                            Informações do jogo
                        </Subtitle>
                    </div>

                    <div className="w-full h-full flex flex-col justify-around items-center">
                        <div className="w-full h-auto flex flex-col justify-center items-start">
                            {modalInfo.map((item, index) => (
                                <p key={index}><b>{index + 1} </b> - {item}</p>
                            ))}
                        </div>

                        <p ><b>Desenvolvido por: <a href="https://www.linkedin.com/in/igor-kaue-castro/" target="_blank"><u>Igor Castro</u></a></b></p>

                        <div className="w-full flex flex-col justify-center items-center relative z-1">
                            <Button onClick={toggleModal}>START</Button>
                        </div>
                    </div>
                </Modal>
            )}
            <QuizContainer>
                <Score score={score} error={error} hitErrorToogler={hitError} ></Score>
                <Title>Quiz - Rick and Morty</Title>
                <Subtitle>Quem é o personagem?</Subtitle>

                <div className="relative w-[50%] md:w-[35%] aspect-square drop-shadow-xl/50 border-2 border-[#B8DBD9]" >
                    <DisplayImage src={char[drawnId].image} alt="" />
                </div>

                <Options characters={char} handler={handlerAnswer} />

                <div className="flex">
                    <Button onClick={nextQuest}>Proximo</Button>
                </div>
            </QuizContainer>
        </div>
    );
}