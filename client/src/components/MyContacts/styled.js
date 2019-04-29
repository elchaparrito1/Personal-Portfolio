import styled from "styled-components";

export const Row = styled.div`
    &::after {
        content: "";
        clear: both;
        display: table;
    }
    
`;

function getWidthString(span) {
    if (!span) return;

    let width = span / 12 * 100;
    return `width ${width}%;`;
}

export const Column = styled.div`
    float: left;
    ${({ xs }) => (xs ? getWidthString(xs) : "width: 100%")};

    @media only screen and (min-width: 768px) {
        ${({ sm }) => sm && getWidthString(sm)};
    }

    @media only screen and (min-width: 992px) {
        ${({ md }) => md && getWidthString(md)};
    }

    @media only screen and (min-width: 1200px) {
        ${({ lg }) => lg && getWidthString(lg)};
    }

`;

export const Box = styled.div`
    font-family: "Lato", Helvetica, sans-serif;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    padding: 10px;
    height: 360px;
    margin: 5vh 0 5vh 0;
    text-align: center;
    background-color: #bfbfbf;
    width: 90%;

    :hover {
        cursor: pointer;
        background-color: black;
        color: #edeae7;
    }

    @media only screen and (min-width: 320px) and (max-width: 767px) {
        font-size: 1.2em;
        width: 100%
        height: 350px;
    }

    @media only screen and (min-width: 767px) and (max-width: 1024px) {
        font-size: 1.4em;
        width: 60%;
        margin: 5vh auto 0 auto;
    }
`;

export const Timer = styled(Box)`
    font-size: 2em;
    height: 200px;
    width: 60%;
    margin: 0 auto;
    text-align: center;
    vertical-align: center;

    :hover {
        cursor: auto;
        background-color: #bfbfbf;
        color: black;
    }

    @media only screen and (min-width: 320px) and (max-width: 767px) {
        font-size: 1.5em;
        width: 100%
        height: 100px;
    }

    @media only screen and (min-width: 767px) and (max-width: 1024px) {
        font-size: 1.5em;
        width: 100%;
        height: 100px;
    }
`;

export const Head = styled.h3`
    width: 70%;
    margin-bottom: 25px;
    margin: 0 auto;

    @media only screen and (min-width: 320px) and (max-width: 767px) {
        font-size: 1.5em;
    }

    @media only screen and (min-width: 767px) and (max-width: 1024px) {
        font-size: 1.5em;
    }
`;

export const Text = styled.p`
    width: 75%;
    margin: 0 auto;
    font-size: 1.5em;
    text-align: center;
    vertical-align: center;

    @media only screen and (min-width: 320px) and (max-width: 767px) {
        font-size: 1.2em;
        width: 80%;
    }

    @media only screen and (min-width: 767px) and (max-width: 1024px) {
        font-size: 1.3em;
    }
`;

export const TimerText = styled(Text)`
    font-size: 1.6em;
    margin: 0 auto;
    vertical-align: center;
    
    @media only screen and (min-width: 320px) and (max-width: 767px) {
        font-size: 1em;
        width: 100%;
    }

    @media only screen and (min-width: 767px) and (max-width: 1023px) {
        font-size: 1.3em;
        width: 100%;
    }
    
    @media only screen and (min-width: 1024px) {
        font-size: 1.5em;
        width: 100%;
    }
`;

export const A = styled.a`
    color: #003366;
    text-decoration: none;
`;