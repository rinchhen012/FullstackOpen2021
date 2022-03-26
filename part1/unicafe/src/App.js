import { useState } from 'react'


const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = ({good, neutral, bad}) => {
  const total = good + bad + neutral

  if (total === 0) return <span> No feedback given </span>
  else {
    return (
      <table>
        <tbody>
          <StatisticLine text='good' value={good} />
          <StatisticLine text='neutral' value={neutral} />
          <StatisticLine text='bad' value={bad} />
          <StatisticLine text='all' value={total} />
          <StatisticLine text='average' value={(good - bad) / total} />
          <StatisticLine text='positive' value={(good / total) * 100} />
        </tbody>
      </table>
    )
  }
}

const StatisticLine = ({text, value}) => {
  if (text==='positive') {
    return (
      <>
        <tr> 
          <td>{text}</td>
          <td>{value} %</td>
        </tr> 
      </>
    )
  }
  else {
    return (
      <>
        <tr> 
          <td>{text}</td>
          <td>{value}</td>
        </tr> 
      </>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

  return (
    <div>
      <h1> give feedback </h1>
      <Button handleClick={handleGood} text='good' />
      <Button handleClick={handleNeutral} text='neutral' />
      <Button handleClick={handleBad} text='bad' />
      <h1> statistics </h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App