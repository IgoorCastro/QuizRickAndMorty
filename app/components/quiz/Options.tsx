import { Character } from "@/app/lib/api/rickandmort";
import Button from "../ui/Button/Button";

type OptionsProps = {
    characters: Character[],
    handler: (name: string) => void,
};

// retorna os botões com a quantidade de characters que for necessário
// callback retorna o nome do character selecionado (para compração)
// quando montada, handler recebe uma função com o parametro do nome
// do personagem, facilitando a comparação
export default function Options({ characters, handler }: OptionsProps) {
    return (
        <div className="w-full h-auto flex flex-col sm:flex-row justify-center items-center gap-3">
            {
                characters.map((char: Character) => (
                    <Button key={char.id} onClick={() => handler(char.name)} > {char.name} </Button>
                ))
            }
        </div>
    );
}