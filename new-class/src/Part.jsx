import React from "react";



const Part = (props) => {

    console.log(props)
   
 return(
     <div className="exercises">
       <p> {props.exercise.name}    </p> 
       
       <p className="exercises-numbers"> {props.exercise.exercises } </p>
     </div>
 )
 
}


export default Part;