import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import styles from "./Score.module.css";

type ScoreProps = {
    score: number,
    error?: boolean,
    hitToggle: boolean,
};

// error: caso for true o usuario errou a questao, verificar sempre que o score é alterado
// hit acionado sempre que o estado de hitError muda
export default function Score({ score, error, hitToggle }: ScoreProps) {
    const [hit, setHit] = useState<boolean | undefined>(error); // hit padrão
    const [hitError, setHitError] = useState<boolean | undefined>(error);

    // evitar que o useEffect rode no primeiro render
    const isFirstRender = useRef<boolean>(true);

    useEffect(() => {
        if(isFirstRender.current){
            isFirstRender.current = false;
            return;
        }
        
        error ? setHit(true) : setHitError(true);

        const timer = setTimeout(() => { // altera pra false em 2.5s
            setHitError(false);
            setHit(false);
        }, 850);

        return () => clearTimeout(timer);
    }, [hitToggle]);

    return (
        <div className={`${styles.scoreContainer} ${hitError ? styles.errorHit : ""} ${hit ? styles.hit : ""}`}>
            <span className="w-min text-[1em] md:text-[1.35em] lg:text-[1.35em] font-medium">Score</span>
            <span className="w-min text-[1em] md:text-[1.35em] lg:text-[1.35em] font-semibold">{ score }</span>
        </div>
    );
}