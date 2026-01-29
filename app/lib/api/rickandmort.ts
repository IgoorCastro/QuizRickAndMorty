// rota da API
// retorna um objeto do tipo Character
const API_LINK = "https://rickandmortyapi.com/api/character";
const maxChacater = 826; // numero maximo de personagens para req

export interface Character {
  id: number;
  name: string;
  image: string;
  location: {
    name: string;
  };
};

const fetchData = async (): Promise<Character[]> => { // retorna uma promise com uma lista de Chars
  const randomId = () => Math.floor(Math.random() * maxChacater) + 1;
  const ids = `[${randomId()}, ${randomId()}, ${randomId()}]`;

  // cache: no-store pois precisamos dos dados dinamicos
  // ou seja, precisamos de uma nova lista a cada fetch
  // não ha necessidade de no cache
  return await fetch(`${API_LINK}/${ids}`, {
    cache: "no-store",
  }).then(data => data.json());
}

export default fetchData;