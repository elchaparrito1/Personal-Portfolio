import styled from "styled-components";
import img from "../../images/abstract-background.jpg";

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
    margin-bottom: ${props => props.name ? "100px" : "20px"};
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

export const Parallax = styled.div`
    background:
      linear-gradient(
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.3)
    ), url(${img}) no-repeat center;
    background-attachment: fixed;
    background-color: black;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    z-index: -1;
`;

export const ParentDiv = styled.div`
    display: table;
    height: 100vh;
    width: 100%;

    position: absolute;
    top: 0;
`;

export const ChildDiv = styled.div`
    display: table-cell;
    vertical-align: middle;
`;

export const Header = styled.h1`
    animation: fadeInDown .7s 0.5s ease both;
    color: black;
    font-family: Lato:400,900, Helvetica, sans-serif;
    font-size: ${props => props.primary ? "3em" : "5.5em"};
    margin-bottom: 50px;
    text-align: center;

    @media only screen and (min-width: 320px) and (max-width: 767px) {
        font-size: ${props => props.primary ? "1.8em" : "2.8em"};
    }

    @media only screen and (min-width: 767px) and (max-width: 1024px) {
        font-size: ${props => props.primary ? "4em" : "6em"};
    }
    
`;

export const Text = styled.p`
    animation: fadeInUp .7s .5s ease both;
    color: black;
    font-family: Roboto+Slab, Helvetica, sans-serif;
    font-size: 2.6em;
    text-align: center;

    @media only screen and (min-width: 320px) and (max-width: 767px) {
        font-size: 1.5em;
    }

    @media only screen and (min-width: 767px) and (max-width: 1024px) {
        font-size: 3em;
    }

`;

export const Line = styled.hr`
    color: #66e5aa;
    width: 50%;

    @media only screen and (min-width: 320px) and (max-width: 767px) {
        width: 65%;
    }

    @media only screen and (min-width: 767px) and (max-width: 1024px) {
        width: 75%;
    }

`;


// @media only screen and (max-width: 320px) {
//     font-size: ${props => props.primary ? "1.8em" : "2.8em"};
// }

// @media only screen and (min-width: 321px) and (max-width: 480px) {
//     font-size: ${props => props.primary ? "2em" : "3em"};
// }

// @media only screen and (min-width: 768px) and (max-width: 1024px) {
//     font-size: ${props => props.primary ? "3em" : "4em"};
// }

// @media only screen and (min-width: 1224px) {
    
// }

// @media only screen and (min-width: 1824px) {
    
// }