import Subtitle from "./Subtitle";
import Title from "./Title";

type ModalProps = {
    children: React.ReactNode,
    closeModal?: () => void,
}

export default function Modal({ children, closeModal }: ModalProps) {
    return (
        <div className="w-screen h-screen flex items-center justify-center absolute z-3 bg-black/95">
            <div className="w-[95%] h-[90%] md:h-[80%] md:w-[40%] flex flex-col px-8! bg-[#1E1E1E] border border-[#B8DBD9] rounded-sm">
                <div className="w-full flex justify-end py-5!">
                    <span
                        className="border-2 w-10 h-10 flex justify-center items-center font-bold cursor-pointer rounded-full hover:scale-110 transition-transform duration-300"
                        onClick={closeModal}
                    >
                        X
                    </span>
                </div>
                {children}
            </div>
        </div>
    );
}