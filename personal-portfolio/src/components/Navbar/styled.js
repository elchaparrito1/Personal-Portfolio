import styled from "styled-components";
import { Link } from "react-router-dom";


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

export const Pages = styled.th`
    animation: fadeInRight .7s 0.5s ease both;
    color: black;
    float: right;
    font-family: "Lato", Helvetica, sans-serif;
    font-size: 20px;
    margin: ${props => props.contact ? "25px 100px 0 0" : "25px 30px 0 0"};
    position: relative;
    text-decoration: none;
    z-index: 1;
    
`;

export const SideLinks =  styled(Link)`
    color: ${props => props.home ? "black" : "#66e5aa"};
    font-family: "Lato", Helvetica, sans-serif;
    display: inline-block;
    margin-top: ${props => props.contact ? "30px" : ""};
`;

export const Links = styled(SideLinks)`
::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: ${props => props.home ? "black" : "#66e5aa"};
    transition: width .3s;
    margin-top: 4px;
}

:hover {
    color: ${props => props.home ? "black" : "#66e5aa"};
    opacity: 1;
}

:hover::after {
    width: 100%;
}
`;


export const List = styled.tr`
background-color: none;
list-style-type: none;

&:hover ${Links} {
    opacity: 0.5;
}

&:hover ${Links}:hover {
    opacity: 1;
}
`;

//Hamburger icon navbar styling

export const HamburgerPages = styled(Pages)`
    margin: 10px 0 0 0;
`;

export const Hamburger = styled.span`
    font-size: 40px; 
    cursor: pointer; 
    margin: 0 0 0 15px; 
    display: inline-block;
    color: #111;

    @media only screen and (min-width: 320px) and (max-width: 767px) {
        font-size: 30px;
    }

`;


