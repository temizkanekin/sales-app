import styled from 'styled-components'

export const Button:any = styled.button`
  background-color: ${(props:any) => props.buttonType === "success" ? "lightgreen" : props.buttonType === "fail" ? "#ffb2b2": "#1976d2"}; 
  color: ${(props:any) => props.buttonType === "success" ? "green" : props.buttonType === "fail" ? "red": "white"};
  font-weight: bold;
  width: ${(props:any) => props.large ? "130px" : props.medium ? "100px" : "75px"};
  height: 30px;
  border-radius: 4px;
  transition-duration: 0.4s;
  border:none;
  font-size: 12px;
  padding:.5rem;  

  &:disabled {
    opacity: .2;
    pointer-events: none;
  }
`