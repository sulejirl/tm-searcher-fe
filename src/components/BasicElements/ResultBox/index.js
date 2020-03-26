import styled from "styled-components";

const StyledResult = styled.div`
    display:flex;
    font-family: 'Exo 2', sans-serif;  
    border: 1px solid black;
    border-radius: 5px;
    padding:10px 0px;
    margin: 0.1vw 0px;
    font-size:1vw;
    width:40vw;
    text-align:center;
    cursor:pointer;
    align-items:center;
    @media (max-width: 800px) {
      width: 80vw;
      font-size:2vw
    } 
    &:hover {
      background-color:#b2fcff;
    }
    img {
      width:7%;
      margin:0.5vw;
    }
    div {
      display:flex;
      width:10vw;
      flex-direction:column;
      @media (max-width: 800px) {
        width: 20vw;
      } 
    }
`;
export default StyledResult;
