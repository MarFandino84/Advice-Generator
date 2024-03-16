import styled from "styled-components"


export const MainContainer = styled.div`
width: 20em;
max-width: 92vw;
max-height: 85vh;

border-radius: 8px;
background-color: var(--DarkGrayishBlue);

padding: 1.5rem;

display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
flex-shrink: 1;

p {
     color: var(--NeonGreen);

}


`
export const PhrasesDiv = styled.div`


p {
     margin-top: 2rem;
     font-size: 1.5rem;
     color: white;
     font-weight: 200;
     text-align: center;
}

`
export const Button = styled.button`
position: relative;
top: 4rem;

background-color: var(--NeonGreen);
text-align: center;
border-radius: 100%;
height: 5rem; width: 5rem;
display: flex;
justify-content: center;
align-items: center;

&:hover {
     filter: brightness(150%);
     transition: 0.2s;
}
`


export const LineDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
width: 100%;
margin-top: 3em;
align-items: center;
`
export const Line = styled.hr`
background-color: var(--GrayishBlue);
height: 0.6px;
width: 40%;
`
export const VerticalLines = styled.div`

width: 7px;
background-color: white;
border-radius: 2px;
height: 1.3rem;
`