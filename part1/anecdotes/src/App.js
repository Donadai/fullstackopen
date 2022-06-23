import { useState } from 'react'

const Header = ({ text }) => {
  return (
    <div>
      <h1>{text}</h1>
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(7).fill(0))

  const handleRandomClick = () => setSelected(Math.floor(Math.random() * 7))

  const handleVoteClick = (selected) => {
    const handler = () => {
      const copy = [...votes]
      copy[selected] += 1
      setVotes(copy)
    }
    return handler
  }

  return (
    <div>
      <Header text='Anecdote of the day'/>
      <p>
        {anecdotes[selected]} <br/>
        has {votes[selected]} votes <br/>
        <Button handleClick={handleVoteClick(selected)} text="vote"/>
        <Button handleClick={handleRandomClick} text="next anecdote"/>
      </p>
      <Header text='Anecdote with the most votes'/>
      {anecdotes[votes.indexOf(Math.max(...votes))]}
    </div>
    
  )
}

export default App