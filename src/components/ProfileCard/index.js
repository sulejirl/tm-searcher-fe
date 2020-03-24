import styled from "styled-components";

const StyledProfile = styled.div`
    display:flex;
    flex-wrap:wrap;
    flex-grow: 1;
    justify-content:space-around;
    font-family: 'Exo 2', sans-serif;  
    border: 1px solid black;
    font-size: 22px;
    box-shadow: 0px 0px 15px 2px rgba(0,0,0,0.5);
    border-radius: 10px;
    padding:10px;
    margin: 10px;
    @media (max-width: 640px) {
      font-size: 16px;
    }
`;
export default StyledProfile;
