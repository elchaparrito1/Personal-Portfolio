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
    margin: 0 auto;
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

export const Container = styled.div`
    display: table;
    margin: 10vh 0 10vh 0;
    text-align: center;
    width: 92%;
    opacity: 2;
    padding: 10vh 0 15vh 0;
`;

export const MyContainer = styled.div`
    border: solid 2px black;
    height: 480px;
    top: 70px;
    left: 50px;
    bottom: 400px;
    position: fixed;
    width: 400px;

    -moz-box-shadow: 0 0 15px #ccc;
    -webkit-box-shadow: 0 0 15px #ccc;
    box-shadow: 0 0 15px #ccc;
`;

export const Table = styled.table`
    margin: 0 auto; 
    table-layout: fixed; 
    width: ${props => props.linkers ? "30%" : "25%"};

    @media only screen and (max-width: 320px) {
        
    }

    @media only screen and (min-width: 321px) and (max-width: 767px) {
       
    }

    @media only screen and (min-width: 767px) and (max-width: 1024px) {
        
    }
`;

export const Th = styled.th`
    font-family: "Lato", Helvetica, sans-serif;
    margin: 2px;
`;

export const Text = styled.h1`
    color: ${props => props.header ? "gray" : "black"};
    font-family: "Lato", Helvetica, sans-serif;
    font-size: ${props => props.header ? "2.5em" : "2em"};
    margin: 0 auto;
    text-align: center;
    width: 50%;
    margin-top: ${props => props.header ? "50px" : "60px"};

    @media only screen and (min-width: 320px) and (max-width: 767px) {
        font-size: ${props => props.header ? "2em" : "1.4em"};
    }

    @media only screen and (min-width: 767px) and (max-width: 1024px) {
        font-size: ${props => props.header ? "2.5em" : "1.4em"};
        
    }
`;

export const BoxText = styled(Text)`
    font-family: "Lato", Helvetica, sans-serif;
    text-decoration: underline;
    font-size: 1.5em;
`;

export const P = styled.p`
    color: ${props => props.heading ? "black" : "gray"};
    font-family: "Lato", Helvetica, sans-serif;
    font-size: 1.5em;
    text-align: left;
    width: ${props => props.indent ? "95%" : "100%"};
    margin-left: ${props => props.indent ? "30px" : ""};
    

    @media only screen and (min-width: 320px) and (max-width: 767px) {
        font-size: ;
    }

    @media only screen and (min-width: 767px) and (max-width: 1024px) {
        font-size: ;

    }
`;

export const BoxP = styled(P)`
    font-size: 1.2em;
    width: 80%
    margin: 0 auto;
`;

export const TextHeader = styled(Text)`
    font-size: 2em;
`;

export const Li = styled.li`
    color: gray;
    font-family: "Lato", Helvetica, sans-serif;
    font-size: 1.3em;
    list-style: none;
    margin: 10px;
    text-align: left;
`;

export const Photo = styled.img`
    width: 180px;
    height: 200px;
    border-radius: 50%;
`;

export const Icon = styled.img`
    height: 20px;
    width: 20px;

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
