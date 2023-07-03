import './App.css';
import Content from './Components/Content';
import Total from './Components/Total';
import Header from './Components/Header';



function App() {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  const gidi = ['fresh', 'smart', 'curious','gangstar', 'intelligent','good-looking', 'spec']

  const gidi2 = gidi.concat( 'rich as fuck', 'tall' )

  console.log(gidi2, 'Malex-gidi')


  return (
    
    <div>


      <Header course={course}  />

      <Content course={course} />

      <Total course={course} />

      

      

    </div>
  );
}

export default App;







