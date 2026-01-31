// ssr > sorteia um personagem inicial para o game e
// renderiza noss QuizClient 'game'
import fetchData from "../lib/api/rickandmort";
import QuizClient from "./QuizClient";

export default async function Home() {
  return (
    <QuizClient initialCharacter={await fetchData()} initialDrawnId={Math.floor(Math.random() * 3)} />
  );
}