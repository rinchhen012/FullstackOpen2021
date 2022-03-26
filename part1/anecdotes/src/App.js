import { useState } from 'react'

const LargestVote = ( {anecdotes, points} ) => {
  const max = Math.max(...points)
  const i = points.indexOf(max)

  return (
    <div>
      <h1>Anecdote with the most votes</h1>
      {anecdotes[i]}
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  
  const len = anecdotes.length
  const [selected, setSelected] = useState(0)
  const [points, setVote] = useState(Array(len).fill(0))
  
  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]} <br />
      has {points[selected]} votes <br />
      <button onClick={() => {
        const copy = [...points]
        copy[selected] += 1
        setVote(copy)
      }}>
        vote
      </button>
      <button onClick={() => setSelected(Math.floor(Math.random() * len))}>
        next anecdote
      </button>
      <LargestVote anecdotes={anecdotes} points={points} />
    </div>
  )
}

export default App
