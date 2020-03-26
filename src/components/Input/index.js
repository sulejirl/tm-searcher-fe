import styled from "styled-components";
import TextField from '@material-ui/core/TextField';

const StyledField = styled(TextField)`
  && {
    font-family: 'Exo 2', sans-serif;    
    margin-top:5%;
    width:40vw;
    font-size:1vw;
    @media (max-width: 800px) {
      width: 80vw;
    } 
  }
`;
export default StyledField;
