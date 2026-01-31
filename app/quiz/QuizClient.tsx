'use client'

import fetchData, { Character } from "../lib/api/rickandmort";
import Button from "../components/ui/Button/Button";
import QuizContainer from "../components/quiz/QuizContainer";
import Title from "../components/ui/Title";
import Subtitle from "../components/ui/Subtitle";
import DisplayImage from "../components/quiz/DisplayImage";
import Options from "../components/quiz/Options";
import Score from "../components/quiz/Score/Score";
import { addScore, subScore } from "../lib/calculateScore";
import styles from "./quiz.module.css";
import { Suspense, use, useCallback, useEffect, useState } from "react";
import Modal from "../components/ui/Modal";
import { modalInfo } from "../lib/gameInfo";
import Helper from "../components/quiz/Help/Helper";
import ModalGameInfo from "../components/quiz/ModalGameInfo";
import Skeleton from "../components/ui/Skeleton";

type QuizClientProps = {
    initialCharacter: Character[],
    initialDrawnId: number,
}

export default function QuizClient({ initialCharacter, initialDrawnId }: QuizClientProps) {
    const [char, setChar] = useState<Character[]>(initialCharacter);
    const [score, setScore] = useState<number>(0);
    const [drawnId, setDrawnId] = useState<number>(initialDrawnId);// inicia com Id sorteado no SS
    const [error, setError] = useState<boolean>(); // true: resposta errada - false: resposta correta
    const [hitToggle, setHitToggle] = useState<boolean>(true);
    // isModalVisible controla a visibilidade da Modal
    // como é um state, vai gerar sempre o re-render na pagina quando for alterada
    const [isModalVisible, setIsModalVisible] = useState<boolean>(true);
    const [isImageLoading, setIsImageLoading] = useState<boolean>(true);
    const drawnChar: Character = char[drawnId];// character sorteado a cada re-render

    // altera o estado hit e 
    const hit = () => setHitToggle(prevStatus => !prevStatus);

    const resetQuestion = async () => { // altera a questão
        setIsImageLoading(true);
        const newCharList = await fetchData();
        setChar(newCharList);
        setDrawnId(Math.floor(Math.random() * 3)); // 0 ~ 2
    };

    const checkAnswer = (name: string) => { // verifica se a resposta escolhida está de acordo
        if (drawnChar.name === name) { // resposta correta
            setScore(addScore(score, 15)); // + 15 pontos
            setError(false);
        } else {
            setScore(subScore(score, 0.15)); // 15%
            setError(true);
        }
    };

    const handlerAnswer = (name: string) => { // handler de resposta
        checkAnswer(name);
        hit();
        resetQuestion();
    };

    const nextQuest = () => {
        resetQuestion();
        setError(true);
        setScore(subScore(score, 0.10)); // 10%
        hit();
    };

    const toggleModal = () => { // controle da modal
        setIsModalVisible((prevStatus) => !prevStatus);
    }

    return (
        <div className={styles.mainContainer}>
            <ModalGameInfo isModalVisible={isModalVisible} toggleModal={toggleModal} />

            <QuizContainer>
                <div className="relative w-[93%] flex items-center justify-center">
                    <Title>Quiz - Rick and Morty</Title>
                    <div className="w-8 md:w-14 lg:w-11 aspect-square flex justify-center items-center absolute z-1 right-0">
                        <Helper toggleModal={toggleModal} />
                    </div>
                </div>
                <div className="w-[95%] flex justify-center items-center">
                    <Score score={score} error={error} hitToggle={hitToggle} ></Score>
                </div>
                <div className="w-full h-auto flex flex-col items-center gap-1">
                    <Subtitle>Quem é o personagem?</Subtitle>
                    <div className="relative w-[55%] md:w-[35%] aspect-square flex justify-center items-center drop-shadow-xl/50 border-2 border-[#B8DBD9]" >
                        {isImageLoading && <Skeleton className="w-[30%] aspect-square" />}
                        <DisplayImage
                            src={char[drawnId].image}
                            alt="Quiz - Rick and Morty"
                            onLoad={() => setIsImageLoading(false)}
                            className={`
                            transition-opacity duration-300
                            ${isImageLoading ? `opacity-0` : `opacity-100`}  
                        `}
                        />
                    </div>
                </div>

                <Options characters={char} onClick={handlerAnswer} isLoading={isImageLoading} />

                <div className="flex">
                    <Button onClick={nextQuest}>Proximo</Button>
                </div>
            </QuizContainer>
        </div>
    );
}