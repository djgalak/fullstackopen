import { useState } from 'react'

const Display = ({counter}) => <div>{props.counter}</div>

// const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>
const Button = (props) => {
  console.log('value of props', props)
  return (
  <button onClick={props.onClick}>{props.text}</button>
  )
}

const History = (props) => {
  if (props.allClicks.length === 0 ) {
  return (
    <div>
      the app is used by pressing the buttons
    </div>
  )
} else {
  return (
    <div>{props.allClicks.join(' ')}</div>
  )
}
}
const App = () => {
  const [ left, setLeft ] = useState(0)
  const [ right, setRight ] = useState(0)
  const [ allClicks, setAllClicks ] = useState([])
  const [ total, setTotal ] = useState(0)

  const handleLeftClick = () => {
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    setAllClicks(allClicks.concat('L'))
    setTotal(updatedLeft+ right)
  }
  const handleRightClick = () => {
    const updatedRight = right + 1
    setRight(updatedRight + 1)
    setAllClicks(allClicks.concat('R'))
    setTotal(left + updatedRight)
  }
  
  const [ value, setValue ] = useState(10)

  const hello = (who) => () => console.log('hello', who)
  
  return (
    <>
      {left}
      <Button onClick={handleLeftClick} text='Left' />
      <Button onClick={handleRightClick} text='Right' />
      {right}
      <History allClicks={allClicks} />
      <p>Total: {total}</p>
      <button onClick={hello('You')}>button</button>
      <button onClick={hello('World')}>button</button>
      <button onClick={hello('Function')}>button</button>
    </>
  )
}

export default App