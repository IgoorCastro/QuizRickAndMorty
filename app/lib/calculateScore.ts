
// addScore deve receber um valor inteiro para soma, ex: currentScore + 15
export function addScore(currentScore: number, addScore: number): number {
    console.log("Add Score: ", currentScore);
    return currentScore += addScore;
}

// subScore deve receber o valor em % já em forma decimal, ex: currentScore - ( currentScore * 0.15 )
// no exemplo temos: 15% de perca de pontos por erro
export function subScore(currentScore: number, subScore: number): number {
    console.log("Sub Score: ", currentScore);
    return Math.floor(currentScore - ( currentScore * subScore )); 
}