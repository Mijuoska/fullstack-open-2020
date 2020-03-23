import React from 'react';
import ReactDOM from 'react-dom';



const Course = ({ courses }) => {
   return (
    <div>
     {courses.map(course => <div> <Header name={course.name}/>
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

const App = () => {
   const courses = [{
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }, 
  {
    name: 'Node.js',
    id: 2,
    parts: [{
        name: 'Routing',
        exercises: 3,
        id: 1
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2
      }
    ]
  }
]
  


  return (
  <div>
  <Course courses={courses} />
  </div>

  )
}


ReactDOM.render(
    <App />,
  document.getElementById('root')
);

