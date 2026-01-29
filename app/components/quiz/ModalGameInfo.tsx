// modal informativa sobre o jogo
// adicionar mais inforamações no 
// array de lib/gameInfo

import { modalInfo } from "@/app/lib/gameInfo"
import Modal from "../ui/Modal"
import Subtitle from "../ui/Subtitle"
import Title from "../ui/Title"
import Button from "../ui/Button/Button"

type ModalGameInfoProps = {
    isModalVisible: boolean,
    toggleModal: () => void,
};

export default function ModalGameInfo({ isModalVisible, toggleModal }: ModalGameInfoProps) {
    return (
        <Modal toggleModal={toggleModal} isModalVisible={isModalVisible}>
            <div className="flex flex-col justify-center items-center mb-5!">
                <Title>
                    Quiz - Rick and Morty
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
    );
}