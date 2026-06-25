import { useState } from 'react'

const Display = ({counter}) => <div>{props.counter}</div>

const Button = ({onClick, text}) => <button onClick={props.onClick}>{props.text}</button>

const App = () => {
  const [ counter, setCounter ] = useState(0)

  console.log('rendering with counter value', counter)
  
  const increaseByOne = () => {
    setCounter(counter + 1)
    console.log('Increasing, value before', counter)
  }
  const decreaseByOne = () => {
    setCounter(counter - 1)
    console.log('decreasing, value before', counter)
  }
  const setToZero = () => {
    setCounter(0)
    console.log('Resetting, value before', counter)
  }
  return (
    <>
    <Display counter={counter} />
    <Button onClick={increaseByOne} text='Plus'/>
    <Button onClick={decreaseByOne} text='Minus'/>
    <Button onClick={setToZero} text='Zero'/>
    </>
  )
}

export default App