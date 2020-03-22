import styled from "styled-components";

const StyledValueBox = styled.div`
    display:flex;
    font-family: 'Exo 2', sans-serif;  
    flex-direction:column;
    width:40%;
    padding:5%;
    align-items:center;
    @media (max-width: 640px) {
      font-size: 10px;
    }
`;
export default StyledValueBox;
