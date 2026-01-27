import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import styles from "./Score.module.css";

type ScoreProps = {
    score: number,
    error?: boolean,
    hitErrorToogler: boolean,
}

// error: caso for true o usuario errou a questao, verificar sempre que o score é alterado
export default function Score({ score, error, hitErrorToogler }: ScoreProps) {
    const [hit, setHit] = useState<boolean | undefined>(error); // hit padrão
    const [hitError, setHitError] = useState<boolean | undefined>(error);

    // evitar que o useEffect rode com um useRef
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
        }, 450);

        return () => clearTimeout(timer);
    }, [hitErrorToogler]);

    return (
        <div className={`${styles.scoreContainer} ${hitError ? styles.errorHit : ""} ${hit ? styles.hit : ""}`}>
            <h4 className="w-min">Score</h4>
            <h5 className="w-min">{ score }</h5>
        </div>
    );
}