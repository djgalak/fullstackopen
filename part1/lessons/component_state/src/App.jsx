import { useState } from 'react'

const Display = props => <div>{props.value}</div>

const Button = (props) => ( <button onClick={props.onClick}>{props.text}</button> )

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

  const setToValue = (newValue) => {
    console.log('New value:', newValue)
    setValue(newValue)
  }

  const resetValue = () => {
    setValue(10)
  }
  

  return (
    <>
      <Display value={value} />
      
      <Button onClick={() => setToValue(100)} text="100" />
      <Button onClick={resetValue} text='Reset' />
      <Button onClick={() => setToValue(value + 1)} text='Increment' />
      <History allClicks={allClicks} />
      <p>Total: {total}</p>
    </>
  )
}

export default App