// helper utilizado alterar o estado de isModalVisible

import style from "./Helper.module.css";

type HelperProps = {
    toggleModal: () => void
}

export default function Helper({ toggleModal }: HelperProps) {
    return (
        <div className={style.helper} onClick={toggleModal}>
            <span className="text-[#1E1E1E] text-xl md:text-3xl"><b>?</b></span>
        </div>
    );
}