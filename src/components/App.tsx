import React, { useState } from "react"
import styled from "styled-components"

const Title = styled.h1`
    text-align: center;
`

const categories = [
    { name: "Musik", team: "Team Pawelski" },
    { name: "Sport", team: "Team Max" },
    { name: "Kultur aus „Aller Welt“", team: "Team Anna" },
    { name: "Klatsch und Tratsch", team: "Team Wiesloch" },
    { name: "Wirtschaft", team: "Team Wiesloch" },
    { name: "Politik", team: "Team Anna" },
    { name: "Film und Fernsehen", team: "Team Pawelski" },
    { name: "Kunst", team: "Team Karlsruhe" },
    { name: "Kulinarisches Auf und Ab", team: "Team Max" },
    { name: "Technik mit Tech-Nick", team: "Team Karlsruhe" }
]

const levels = ["100", "200", "300", "400", "500", "Schätzfrage"]

const FancyBorder = styled.div`
    padding: 1rem;
    margin: 1rem;
    border: 5px dotted #f5f6fa;
    border-radius: 1rem;
`

const InnerBorder = styled.div`
    padding: 1rem;
    border: 5px dotted yellow;
    border-radius: 1rem;
`

const TableContainer = styled.div`
    display: grid;

    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(7, 1fr);
    gap: 5px 5px;
`

const HeaderItem = styled.div<{ index: number }>`
    grid-column-start: ${(props: { index: number }) => props.index};
    grid-column-end: ${(props: { index: number }) => props.index};
    grid-row: 1;

    text-align: center;
    display: grid;
    align-items: center;
    justify-items: stretch;

    padding: 1rem;
    border: 4px solid #f5f6fa;

    font-weight: bold;
`

const LevelItem = styled.div<{ colIndex: number; rowIndex: number; clicked: boolean }>`
    grid-column-start: ${(props: { colIndex: number; rowIndex: number; clicked: boolean }) =>
        props.colIndex};
    grid-column-end: ${(props: { colIndex: number; rowIndex: number; clicked: boolean }) =>
        props.colIndex};

    grid-row-start: ${(props: { colIndex: number; rowIndex: number; clicked: boolean }) =>
        props.rowIndex};
    grid-row-end: ${(props: { colIndex: number; rowIndex: number; clicked: boolean }) =>
        props.rowIndex};

    text-align: center;
    display: grid;
    align-items: center;
    justify-items: center;

    padding: 2rem;
    border: ${(props: { colIndex: number; rowIndex: number; clicked: boolean }) =>
        props.clicked ? "1px solid transparent" : "1px solid #f5f6fa"};
    border-radius: 0.5rem;

    background-color: ${(props: { colIndex: number; rowIndex: number; clicked: boolean }) =>
        props.clicked ? "#555a66" : "#2a4791"};

    cursor: ${(props: { colIndex: number; rowIndex: number; clicked: boolean }) =>
        props.clicked ? "" : "pointer"};

    transition: background-color 250ms linear, transform 250ms linear;

    color: ${(props: { colIndex: number; rowIndex: number; clicked: boolean }) =>
        props.clicked ? "darkgrey" : "#f5f6fa"}; //

    &:hover {
        background-color: ${(props: { colIndex: number; rowIndex: number; clicked: boolean }) =>
            props.clicked ? "#555a66" : "#4066c8;"};
        transform: ${(props: { colIndex: number; rowIndex: number; clicked: boolean }) =>
            props.clicked ? "" : "scale(1.125) rotate(2deg);"};
    }
`

const TeamDisplay = styled.p`
    color: grey;
    font-style: italic;
    font-weight: lighter;
`

export const App: React.FC = () => {
    const [storedDataGrid, setStoredDataGrid] = useState<boolean[][]>(() => {
        try {
            const item = window.localStorage.getItem("dataGrid")
            return item
                ? JSON.parse(item)
                : new Array(categories.length).fill([...new Array(levels.length).fill(false)])
        } catch (error) {
            console.log(error)
            return new Array(categories.length).fill([...new Array(levels.length).fill(false)])
        }
    })

    const setDataGrid = (valueToStore: boolean[][]) => {
        try {
            setStoredDataGrid(valueToStore)
            window.localStorage.setItem("dataGrid", JSON.stringify(valueToStore))
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="App">
            <Title>Silvester Quiz 2020</Title>
            <FancyBorder>
                <InnerBorder>
                    <TableContainer>
                        {categories.map((category, index) => (
                            <HeaderItem index={index} key={category.name}>
                                <p>{category.name}</p>
                                <TeamDisplay>{category.team}</TeamDisplay>
                            </HeaderItem>
                        ))}
                        {categories.map((category, colIndex) =>
                            levels.map((level, rowIndex) => (
                                <LevelItem
                                    clicked={storedDataGrid[colIndex][rowIndex]}
                                    onClick={() => {
                                        const newBla = JSON.parse(JSON.stringify(storedDataGrid))
                                        newBla[colIndex][rowIndex] = !storedDataGrid[colIndex][
                                            rowIndex
                                        ]
                                        setDataGrid(newBla)
                                    }}
                                    colIndex={colIndex}
                                    rowIndex={rowIndex + 2}
                                    key={`${category.name}-${level}`}
                                >
                                    {level}
                                </LevelItem>
                            ))
                        )}
                    </TableContainer>
                </InnerBorder>
            </FancyBorder>
            <button
                onClick={() => {
                    setDataGrid(
                        new Array(categories.length).fill([...new Array(levels.length).fill(false)])
                    )
                }}
            >
                RESET
            </button>
        </div>
    )
}
