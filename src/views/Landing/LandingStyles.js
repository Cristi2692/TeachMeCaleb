import styled from "@emotion/styled";
import backgroundImage from '../../assets/flanding.png';

export const StyledDiv = styled.div`
  background-image: url(${backgroundImage});
  background-size: 75%;
  background-repeat: no-repeat;
  background-position: center 15%;
  height: 100vh;

  @media (max-width: 930px) {
    background-size: 100%;
    background-position: center 5%;
  }
`;
