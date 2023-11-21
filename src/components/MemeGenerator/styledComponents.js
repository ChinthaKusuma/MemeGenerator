// Style your components here
import styled from 'styled-components'

export const MemeGeneratorContainer = styled.div`
  display: flex;
  min-height: 100vh;
  padding: 50px;
  justify-content: space-between;
`

export const Heading = styled.h1`
  color: #35469c;
  font-weight: bold;
`

export const Para = styled.p`
  color: white
  font-weight: bold;
  font-size: ${props => props.font}px;
`

export const Input = styled.input`
  //   color: #35469c;
  //   font-weight: bold;
  width: 25vw;
  padding: 10px;
`
export const Option = styled.option`
  //   color: #35469c;
  //   font-weight: bold;
  width: 25vw;
  padding: 10px;
`
export const Select = styled.select`
  //   color: #35469c;
  //   font-weight: bold;
  width: 25vw;
  padding: 10px;
`
export const Button = styled.button`
  border-radius: 12px;
  padding: 10px;
  color: white;
  background-color: #0b69ff;
  border: 0px;
`
export const Image = styled.img`
  height: 50px;
  width: 50px;
`
export const BackGroundImage = styled.div`
  background-image: url(${props => props.url});
  background-size: cover;
  width: 500px;
  height: 500px;
  padding: 20px;
`
export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: ${props => props.font}px;

  height: 480px;
  width: 500px;
`
