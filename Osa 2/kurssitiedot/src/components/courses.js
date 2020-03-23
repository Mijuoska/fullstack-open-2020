
import React from 'react';

const Course = ({ courses }) => {
   return (
    <div>
     {courses.map(course => <div key={course.id}> <Header name={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/> </div>)}
</div>
  )
}


const Header = (props) => {
  return (
  
<h1>{props.name}</h1>

  )
}

const Content = ({ parts }) => {
  return (
    <div>
    {parts.map(part => <Part part={part.name} exercises={part.exercises} key={part.id}/>)}
    </div>

  )
}

const Part = (props) => {
  return (
    <p>{props.part} {props.exercises}</p>
  )
}



const Total = ({ parts }) => {
  const totaler = (total, part) => {
    return total + part.exercises
  }
  let total = parts.reduce(totaler, 0)
  return (
    <p style={{fontWeight: 'bold'}}>Total {total} of exercises</p>
  )
}


export default Course