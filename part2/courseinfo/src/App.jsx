const Header = (props) => <h1>{props.course}</h1>

const Content = ({parts}) => 
    <div>
      {parts.map(part => <Part key={part.id} part={part} /> ) }
      <Total total=
      {parts.reduce( (total, part) => {
        return total + part.exercises
      }, 0)}/>
    </div>


const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
)

const Total = ({total}) => <strong>Total of {total} exercises</strong>

const Course = ({course}) => {
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
    </>
  )
}
const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
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
    ],
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App