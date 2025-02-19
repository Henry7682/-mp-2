import styled from "styled-components";
import {Character} from "../interfaces/Charcters.ts";

const CharactersGrid = styled.div`
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    gap: 20px;
    padding: 20px;
    width: 100%;
    @media screen and (max-width: 750px) {
        grid-template-columns: 100%;
    }
`;

const CharacterCard = styled.div<{ status: string }>`
    background-color: ${(props) => (props.status === "Alive" ? 'lightgreen' : props.status === "Dead" ? 'tomato' : 'gray')};
    color: black;
    border-radius: 10px;
    padding: 15px;
    text-align: center;
`;

const CharacterImage = styled.img`
    width: 100%;
    border-radius: 10px;
    margin-bottom: 10px;
`;


export default function RickAndMorty({ data }: { data: Character[] }) {
    return (
        <CharactersGrid>
            {data.map((char: Character) => (
                <CharacterCard key={char.id} status={char.status}>
                    <h2>{char.name}</h2>
                    <CharacterImage src={char.image} alt={`image of ${char.name}`} />
                    <p><strong>Gender:</strong> {char.gender}</p>
                    <p><strong>Species:</strong> {char.species}</p>
                    <p><strong>Origin:</strong> {char.origin.name}</p>
                    <p><strong>Episode Count:</strong> {char.episode.length}</p>
                </CharacterCard>
            ))}
        </CharactersGrid>
    );
}


