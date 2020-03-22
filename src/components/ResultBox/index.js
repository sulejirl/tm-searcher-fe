import styled from "styled-components";

const StyledResult = styled.div`
    display:flex;
    font-family: 'Exo 2', sans-serif;  
    border: 1px solid black;
    border-radius: 5px;
    padding:10px 0px;
    margin: 1px 0px;
    width:30%;
    cursor:pointer;
    align-items:center;
    &:hover {
      background-color:#b2fcff;
    }
    img {
      width:7%;
      margin:5px;
    }
    div {
      display:flex;
      flex-direction:column;
      width: 30%;
      @media (max-width: 640px) {
        font-size: 10px;
      }
    }
    @media (max-width: 640px) {
      font-size: 10px;
    }
`;
export default StyledResult;
