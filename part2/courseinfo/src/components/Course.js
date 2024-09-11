const Header = ({course}) => <h2>{course.name}</h2>

const Part = ({part}) => <p>{part.name} {part.exercises}</p>

const Total = ({parts}) => <p><b>total of {parts
    .reduce((a, c) => c.exercises + a, 0)} exercises</b></p>

const Content = ({parts}) => {
    return (
        parts.map(part => 
            <Part part={part} key={part.id}/>
        )
    )
}

const Course = ({courses}) => {
    return (
        <>
            <h1>Web development curriculum</h1>
            {courses.map(course => {
                return (
                    <div key={course.id}> 
                        <Header course={course} />
                        <Content parts={course.parts} />
                        <Total parts={course.parts} />
                    </div>
                    
                )
            })}
        </>
    )
}

export default Course
