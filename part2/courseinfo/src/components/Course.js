import React from "react"

const Header = ({name}) => {
  return (
    <div>
      <h1>Web development curriculum</h1>
      <h2>{name}</h2>
    </div>
  )
}

const Content = ({parts}) => parts.map(part => <Part key={part.id} part={part} />)

const Part = ({part}) => <p>{part.name} {part.exercises}</p>

const Total = ({parts}) => {
  const total = parts.reduce((a, b) => a + b.exercises, 0)
  return <p><strong>total of {total} exercises</strong></p> 
}

const Course = ({course}) => {
    return (
      course.map(x => 
        <div key={x.id}>
          <Header name={course[x.id-1].name} />
          <Content parts={course[x.id-1].parts} />
          <Total parts={course[x.id-1].parts} />
        </div>
      )
    )
  }

export default Course