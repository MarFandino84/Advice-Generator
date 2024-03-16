import React from 'react'
import {Button, MainContainer, PhrasesDiv, Line,
LineDiv, VerticalLines
} from './AdviceContainerStyles'
import { useEffect,useState } from 'react'





const AdviceContainer = () => {

 const[ click, setClick ] = useState(false);
 const[ advice, setAdvice] = useState([]);

    useEffect( () => {
     const call = async () => {
        const respo = await fetch("https://api.adviceslip.com/advice");
        const data = await respo.json();
        const aver = data.slip
        setAdvice(aver)       
    
    }   
      call()      
     
   },[click])
   

    return (
    <>
        <MainContainer>
            <p>Advice # {advice.id} </p>

            <PhrasesDiv><p> "{advice.advice}"</p></PhrasesDiv>    
            <LineDiv> 
                    <Line />
                    <VerticalLines />
                    <VerticalLines />
                    <Line /> 
            </LineDiv>
           
             <div>
                <Button onClick={() => setClick(!click)}> <img src='icon-dice.svg' /></Button>
             </div>
        
        </MainContainer>




    </>
  )
}

export default AdviceContainer
