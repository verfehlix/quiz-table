import React from "react"
import styled from "styled-components"

const Title = styled.h1`
    text-align: center;
`

// "Team Karlsruhe",
// "Team Wiesloch ",
// "Team Pawelski",
// "Team Anna",
// "Team Max"

const categories = [
    "Musik",
    "Sport",
    "Kultur aus „Aller Welt“",
    "Wissenschaft",
    "Klatsch und Tratsch",
    "Wirtschaft",
    "Politik",
    "Film und Fernsehen",
    "Kunst",
    "Kulinarisches Auf und Ab",
    "Technik mit Tech-Nick"
]

const levels = ["100", "200", "300", "400", "500", "Schätzfrage"]

const TableContainer = styled.div`
    display: grid;

    grid-template-columns: repeat(11, 1fr);
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
    justify-items: center;

    padding: 2rem;
    border: 1px solid white;
`

const LevelItem = styled.div<{ colIndex: number; rowIndex: number }>`
    grid-column-start: ${(props: { colIndex: number; rowIndex: number }) => props.colIndex};
    grid-column-end: ${(props: { colIndex: number; rowIndex: number }) => props.colIndex};

    grid-row-start: ${(props: { colIndex: number; rowIndex: number }) => props.rowIndex};
    grid-row-end: ${(props: { colIndex: number; rowIndex: number }) => props.rowIndex};

    text-align: center;
    display: grid;
    align-items: center;
    justify-items: center;

    padding: 2rem;
    border: 1px solid white;
`

export const App: React.FC = () => {
    return (
        <div className="App">
            <Title>Silvester Quiz 2020</Title>
            <TableContainer>
                {categories.map((category, index) => (
                    <HeaderItem index={index} key={category}>
                        {category}
                    </HeaderItem>
                ))}
                {categories.map((category, colIndex) =>
                    levels.map((level, rowIndex) => (
                        <LevelItem
                            colIndex={colIndex}
                            rowIndex={rowIndex + 2}
                            key={`${category}-${level}`}
                        >
                            {level}
                        </LevelItem>
                    ))
                )}
            </TableContainer>
        </div>
    )
}
