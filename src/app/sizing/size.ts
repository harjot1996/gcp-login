export interface Size {
    size: number;
    properties: any;
}

export const one: Size = {
    size: 1,
    properties: {
        '--widthMultiplier': "1vw",
        '--heightMultiplier': "1vh",
        '--fontSize': "15px",
        '--color1': "#909090",
    },
}

export const two: Size = {
    size: 2,
    properties: {
        '--widthMultiplier': "1.1vw",
        '--heightMultiplier': "1.1vh",
        '--fontSize': "16px",
        '--color1': "#121212",
    },
}

export const three: Size = {
    size: 3,
    properties: {
        '--widthMultiplier': "1.2vw",
        '--heightMultiplier': "1.2vh",
        '--fontSize': "18px",
        '--multiplier': 1.2,
    },
}

export const four: Size = {
    size: 4,
    properties: {
        '--widthMultiplier': "1.3vw",
        '--heightMultiplier': "1.3vh",
        '--fontSize': "20px",
        '--multiplier': 1.2,
    },
}