import './App.css';
import Content from './Components/Content';
import Total from './Components/Total';
import Header from './Components/Header';


function App() {

  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    
    <div>


         <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p> Number of exercises {exercises1 + exercises2 + exercises3} </p>
    </div>

      <Header course={course} />

      <Content part1={ exercises1 } part2={ exercises2 } part3={ exercises3 } />

      <Total exercises= { exercises1 + exercises2 + exercises3 } />

      

    </div>
  );
}

export default App;







