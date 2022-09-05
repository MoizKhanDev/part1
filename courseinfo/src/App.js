//  EXCERCISE 1.1 - 1.5
import React from "react"


const Header = ({courseinfo}) => 
  <h1>{courseinfo.name}</h1>

const Part = ({courseinfo}) => 
  <p>{courseinfo.name} {courseinfo.exercise}</p>

const Content = ({courseinfo}) =>
  <>
    <Part courseinfo={courseinfo.parts[0]}/>
    <Part courseinfo={courseinfo.parts[1]}/>
    <Part courseinfo={courseinfo.parts[2]}/>
  </>

const Total = ({courseinfo}) => 
  <p>
    Number of exercises {
      courseinfo.parts[0].exercise + 
      courseinfo.parts[1].exercise + 
      courseinfo.parts[2].exercise
    }
  </p>

// EXCERCISE 1.3 / 1.4 / 1.5
const App = () => {  
  const courseinfo = {
    name: 'HALF STACK APPLICATION DEVELOPMENT',  
    parts: [
      {
        name: 'Fundamentals of React', 
        exercise: 10
      },
      {
        name: 'Using props to pass data', 
        exercise: 7
      },
      {
        name: 'State of a component', 
        exercise: 14
      }
    ]
  }

  return (
    <>
      <Header courseinfo ={courseinfo}/>      {/*EXCERCISE 1.2 / 1.4*/}
      <Content courseinfo ={courseinfo}/>
      <Total courseinfo ={courseinfo}/>
    </>
  )
}


export default App;
