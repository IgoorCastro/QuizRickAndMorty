// import drawCharacter from "../lib/drawIndex";
import fetchData, { Character } from "../lib/rickandmort";
import QuizClient from "./QuizClient";

export default async function Home() {
  const characterList:Character[] = await fetchData();
  const drawCharacter = (maxId: number) =>  Math.floor(Math.random() * maxId);

  const resetCharacterList = async () => await fetchData();
  // selecionar um personagem para ser advinhado
  const drawId = drawCharacter(3);

  return (
    <QuizClient character={characterList} drawnChar={drawId} />
  );
}