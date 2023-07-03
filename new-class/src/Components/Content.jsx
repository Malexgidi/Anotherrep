import React from "react";
import Part from "../Part";



const Content= (props) => {
    console.log(props.course.parts ,"content")

return (
    <div>

        <Part exercise={props.course.parts[0]} />
        <Part exercise={props.course.parts[1]} />
        <Part exercise={props.course.parts[2]} />




    </div>
)


}

export default Content;