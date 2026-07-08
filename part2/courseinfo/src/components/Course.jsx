const Header = (props) => <h2>{props.course}</h2>

const Content = ({parts}) => 
    <div>
      {parts.map(part => <Part key={part.id} part={part} /> ) }
    </div>


const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
)

const Total = ({total}) => <strong>total of {total} exercises</strong>

const Course = ({course}) => {
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total= {course.parts.reduce( (total, part) => total + part.exercises, 0)}/>
    </>
  )
}

export default Course