import { useState } from 'react'

const Button = (props) => ( <button onClick={props.onClick}>{props.text}</button> )

const StatisticLine = ({title, counter, unit}) => (<p>{title} {counter} {unit}</p>)

const Statistics = (props) => {
  const all = props.countGood + props.countNeutral + props.countBad
  let positive = 0
  let average = 0
  if (all !== 0) { 
    average = ( props.countGood - props.countBad ) / all
    positive = props.countGood / all * 100
  return (
    <div>
      <h1>Statistics</h1>
      <StatisticLine title='good' counter={props.countGood} />
      <StatisticLine title='neutral' counter={props.countNeutral} />
      <StatisticLine title='bad' counter={props.countBad} />
      <StatisticLine title='all' counter={all} />
      <StatisticLine title='average' counter={average} />
      <StatisticLine title='positive' counter={positive} unit='%'/>
    </div>
  )
  } else {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }

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
      <h1>Give feedback</h1>
      <Button onClick={() => setNewGood(good + 1)} text="good" />
      <Button onClick={() => setNewNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setNewBad(bad + 1)} text="bad" />
      <Statistics
        countGood={good}
        countNeutral={neutral}
        countBad={bad} />
    </>
  )
}

export default App
