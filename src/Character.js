import React from "react"
import styled from 'styled-components'

const StyledH2 = styled.h2`
&:hover {
  transform: scale(1.5);
  transition: all 1s ease-in-out;
  color:black;
}
transition: all 1s ease-in-out;
`
const StyledDiv = styled.div`
background-color: white;
width: 50%;
text-align: center;
justify-content: center;
`
const OtherDiv = styled.div`
display:flex;
justify-content: space-evenly;
box-sizing: border-box;
text-align: center;
margin: 1%;
`
const Character = ({details}) => {
    return (
      <OtherDiv>
        <StyledDiv> 
        <header> 
          <StyledH2>{details.name}</StyledH2>
        </header>
          <p>Birth-year: {details.birth_year}</p>
          <p>Eye Color: {details.eye_color}</p>
          <p>Gender: {details.gender}</p>
          <p>Hair Color: {details.hair_color}</p>
        </StyledDiv>
    </OtherDiv>
    )
    }
    
    export default Character