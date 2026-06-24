const Header = (props) => {
  console.log(props)
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <>
      <p>{props.title} {props.exercises}</p>
    </>
  )
}
const Content = (props) => {
  console.log(props)
  return (
    <>
      <Part title={props.parts[0].title} exercises={props.parts[0].exercises}/>
      <Part title={props.parts[1].title} exercises={props.parts[1].exercises}/>
      <Part title={props.parts[2].title} exercises={props.parts[2].exercises}/>
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises}</p>
    </>
  )
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts : [{
      title: 'Fundamentals of React',
      exercises: 10
    },
    {
      title: 'Using props to pass data',
      exercises: 7
    },
    {
      title: 'State of a component',
      exercises: 14
    }]}

  return (
    <>
      <Header course={course.name}/>
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}

export default App