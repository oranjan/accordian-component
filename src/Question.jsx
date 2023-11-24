import { useState } from "react"

export default function Question(props) {
  
  const [toggleAccordian,setToggleAccordian]=useState(false)

function toggleAccordianState(){
setToggleAccordian(prev=>!prev)
}

  return (
    <>
        <div className="accordian-content">
         <h3>{props.question.title}</h3>
         <button onClick={toggleAccordianState}>{toggleAccordian?"👆🏼":"👇🏼"} </button>
    </div>
    {toggleAccordian &&  <h4>{props.question.info}</h4>
}
    </>

     
  )
}
