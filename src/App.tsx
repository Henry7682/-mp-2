import RickAndMorty from "./components/RickAndMorty.tsx";
import styled from "styled-components";
import {useEffect, useState} from "react";
import {Character} from "./interfaces/Charcters.ts";

const PageContainer = styled.div`
    width: 90%;
    margin: auto;
    text-align: center;
    background-color: white;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Header = styled.header`
    background-color: black;
    color: white;
    padding: 20px;
    width: 100%;
    font-size: calc(16px + 2vh);
    font-weight: bold;
`;

const Footer = styled.footer`
    margin-top: auto;
    background-color: black;
    color: white;
    padding: 10px;
    width: 100%;
    text-align: center;
`;

export default function App(){

    // useState Hook to store Data.
    const [data, setData] = useState<Character[]>([]);

    // useEffect Hook for error handling and re-rendering.
    useEffect(() => {
        async function fetchData(): Promise<void> {
            const rawData = await fetch("https://rickandmortyapi.com/api/character");
            const {results} : {results: Character[]} = await rawData.json();
            setData(results);
        }
        fetchData()
            .then(() => console.log("Data fetched successfully"))
            .catch((e: Error) => console.log("There was the error: " + e));
    }, [data.length]);

    return (
        <PageContainer>
            <Header>Rick and Morty Characters</Header>
            <RickAndMorty data={data} />
            <Footer>2025 Rick & Morty API Viewer</Footer>
        </PageContainer>
    );
}

