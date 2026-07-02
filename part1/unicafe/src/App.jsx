import { useState } from 'react'

const Button = (props) => ( <button onClick={props.onClick}>{props.text}</button> )

const Display = ({title, counter, unit}) => (<p>{title} {counter} {unit}</p>)

const Statistics = (props) => {
  const all = props.countGood + props.countNeutral + props.countBad
  let positive = 0
  let average = 0
  if (all !== 0) { 
    average = ( props.countGood - props.countBad ) / all
    positive = props.countGood / all * 100
  }

  console.log('Valeur de all', all)
  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={props.onClickGood} text="good" />
      <Button onClick={props.onClickNeutral} text="neutral" />
      <Button onClick={props.onClickBad} text="bad" />
      <h1>Statistics</h1>
      <Display title='good' counter={props.countGood} />
      <Display title='neutral' counter={props.countNeutral} />
      <Display title='bad' counter={props.countBad} />
      <Display title='all' counter={all} />
      <Display title='average' counter={average} />
      <Display title='positive' counter={positive} unit='%'/>
    </div>
  )
}
const App = () => {
  const [ good, setGood ] = useState(0)
  const [ neutral, setNeutral ] = useState(0)
  const [ bad, setBad ] = useState(0)

  const setNewGood = (newGood) => {
    setGood(newGood)
  }
  const setNewNeutral = (newNeutral) => {
    setNeutral(newNeutral)
  }
  const setNewBad= (newBad) => {
    setBad(newBad)
  }

  return (
    <>
    <Statistics onClickGood={() => setNewGood(good + 1)}
                onClickNeutral={() => setNewNeutral(neutral + 1)}
                onClickBad={() => setNewBad(bad + 1)}
                countGood={good}
                countNeutral={neutral}
                countBad={bad}
                >
   </Statistics>
    </>
  )
}
export default App
