type QuizContainerProps = {
    children: React.ReactNode
}

export default function QuizContainer({children}: QuizContainerProps) {
    return (
        <div className="w-[95%] h-[90%] md:w-[75%] lg:w-[57%] xl:w[45%] flex flex-col items-center justify-center gap-5 md:gap-7 border-2 border-[#B8DBD9] py-5! bg-black/25 relative z-1 drop-shadow-xl/50">
            {children}
        </div>
    );
}