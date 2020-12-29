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
    { name: "Musik", team: "Team ???" },
    { name: "Sport", team: "Team ???" },
    { name: "Kultur aus „Aller Welt“", team: "Team ???" },
    { name: "Wissenschaft", team: "Team ???" },
    { name: "Klatsch und Tratsch", team: "Team ???" },
    { name: "Wirtschaft", team: "Team ???" },
    { name: "Politik", team: "Team ???" },
    { name: "Film und Fernsehen", team: "Team ???" },
    { name: "Kunst", team: "Team ???" },
    { name: "Kulinarisches Auf und Ab", team: "Team ???" },
    { name: "Technik mit Tech-Nick", team: "Team ???" }
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
    justify-items: stretch;

    padding: 1rem;
    border: 4px solid #f5f6fa;

    font-weight: bold;
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
    border: 1px solid #f5f6fa;
    border-radius: 0.5rem;

    background-color: #2a4791;

    cursor: pointer;

    transition: background-color 250ms linear, transform 250ms linear;

    &:hover {
        background-color: #4066c8;
        transform: scale(1.125) rotate(2deg);
    }
`

export const App: React.FC = () => {
    return (
        <div className="App">
            <Title>Silvester Quiz 2020</Title>
            <FancyBorder>
                <InnerBorder>
                    <TableContainer>
                        {categories.map((category, index) => (
                            <HeaderItem index={index} key={category.name}>
                                {category.name}
                                <br />
                                <br />
                                {category.team}
                            </HeaderItem>
                        ))}
                        {categories.map((category, colIndex) =>
                            levels.map((level, rowIndex) => (
                                <LevelItem
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
        </div>
    )
}
