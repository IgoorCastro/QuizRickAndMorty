const API_LINK = "https://rickandmortyapi.com/api/character";
const maxChacater = 826;

export interface Character {
    id: number;
    name: string;
    image: string;
    location: {
        name: string;
    };
};

const randomNumber = (): number => Math.floor(Math.random() * maxChacater) + 1;


const fetchData = async (): Promise<Character[]> => {
    const ids = Array.from({ length: 3 }, () =>
    Math.floor(Math.random() * maxChacater) + 1
  );

  const res = await fetch(`${API_LINK}/[${ids.join(",")}]`, {
    cache: "no-store",
  });

  return res.json();
}

export default fetchData;