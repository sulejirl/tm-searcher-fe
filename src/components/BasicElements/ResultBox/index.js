import styled from "styled-components";

const StyledResult = styled.div`
    display:flex;
    font-family: 'Exo 2', sans-serif;  
    border: 1px solid black;
    border-radius: 5px;
    padding:10px 0px;
    margin: 0.1vw 0px;
    font-size:0.8vw;
    width:30vw;
    text-align:center;
    cursor:pointer;
    align-items:center;
    &:hover {
      background-color:#b2fcff;
    }
    img {
      width:7%;
      margin:0.5vw;
    }
    div {
      display:flex;
      flex-direction:column;
    }
`;
export default StyledResult;
