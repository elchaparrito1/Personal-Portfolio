import styled from "styled-components";
import { Link } from "react-router-dom";

export const Row = styled.div`
    &::after {
        content: "";
        clear: both;
        display: table;
    }
    background-color: ${props => props.copyright ? "rgba(#686868, 0.5)" : "#686868"}
    margin: 0 0 15px 0;
    
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

export const Foot = styled.div`
    background-color: #686868;
    border-top: 1px solid #E7E7E7;
    text-align: center;
    padding: 50px;
    position: relative;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    width: 100%;
`;

export const Text = styled.h1`
    color: #1a1a1a;
    font-family: "Lato", Helvetica, sans-serif;
    font-size: ${props => props.copyright ? "1em" : "2em"}

    @media only screen and (min-width: 320px) and (max-width: 1024px) {
        font-size: ${props => props.copyright ? "1em" : "2em"};
    }

    @media only screen and (min-width: 767px) and (max-width: 1024px) {
        font-size: ${props => props.copyright ? "1.5em" : "2em"};
    }
`;

export const Links =  styled(Link)`
    color: #66e5aa
    font-family: "Lato", Helvetica, sans-serif;
    font-size: 1.4em;

    :hover {
        color: #66e5aa;
        opacity: 0.5;
    }

    @media only screen and (max-width: 320px) {
        font-size: 1em;
        margin: 0 auto;
        margin-left: ${props => props.link ? "0" : "5px"};
    }

    @media only screen and (min-width: 321px) and (max-width: 767px) {
        font-size: 1.3em;
        margin: 0 auto;
        margin-left: ${props => props.link ? "0" : "5px"};
    }

    @media only screen and (min-width: 767px) and (max-width: 1024px) {
        font-size: 2em;
        margin: 0 auto;
        margin-left: ${props => props.link ? "0" : "25px"};
    }

    
`;

export const Icon = styled.img`
    height: 30px;
    width: 30px;

    :hover {
        cursor: pointer;
    }

    @media only screen and (max-width: 320px) {
        height: 25px;
        width: 25px;
        margin-left: ${props => props.connect ? "0" : "20px"};
    }

    @media only screen and (min-width: 321px) and (max-width: 767px) {
        height: 25px;
        width: 25px;
        margin-left: ${props => props.connect ? "0" : "30px"};
    }

    @media only screen and (min-width: 767px) and (max-width: 1024px) {
        height: 35px;
        width: 35px;
        margin-left: ${props => props.connect ? "0" : "35px"};
    }
   
`;

// //For the EmailModal code
// export const Container = styled.div`
//     border-radius: 5px;
// `;

// export const Input = styled.input`
//     font-family: "Lato", Helvetica, sans-serif;
//     width: 100%;
//     padding: 12px;
//     border: 1px solid #ccc;
//     box-sizing: border-box;
//     margin-top: 6px;
//     margin-bottom: 16px;
//     resize: vertical;
    
//     :focus {
//         outline: none;
//         -webkit-appearance: none;
//         -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
//     }

// `;

// export const TextAr = styled.textarea`
//     font-family: "Lato", Helvetica, sans-serif;
//     width: 80%;
//     padding: 12px;
//     border: 1px solid #ccc;
//     box-sizing: border-box;
//     margin-top: 6px;
//     margin-bottom: 16px;
//     resize: vertical;
//     height: 200px; 

//     :focus {
//         background-color: pink;
//         outline: none;
//         -webkit-appearance: none;
//         -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
//     }
// `;

// export const Label = styled.label`
//     font-family: "Lato", Helvetica, sans-serif;
// `;

