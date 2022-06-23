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

const StatisticLine = (props) => {
  return (
    <tr>    
      <td>{props.text}</td>
      <td>{props.value}</td>
      <td>{props.symbol}</td> 
    </tr>
  )

}

const Statistics = ({ feedback }) => {
  const good = feedback[0]
  const neutral = feedback[1]
  const bad = feedback[2]
  const all = good + neutral + bad
  const average = (good - bad) / (good + neutral + bad)
  const positive = good * 100/ (good + neutral + bad)
  const feedbackCount = feedback[0] + feedback[1] + feedback[2]

  if (feedbackCount > 0) {
    return (
      <table>
        <tbody>
          <StatisticLine text="good" value={good}/>
          <StatisticLine text="neutral" value={neutral}/>
          <StatisticLine text="bad" value={bad}/>
          <StatisticLine text="all" value={all}/>
          <StatisticLine text="average" value={average}/>
          <StatisticLine text="positive" value={positive} symbol='%'/>
        </tbody>
      </table>
    )
  }
  return (
    <div>
      No feedback given
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const header = ["give feedback", "statistics"]
  const feedback = [good, neutral, bad]

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  return (
    <div>
      <Header text={header[0]}/>
      <Button handleClick={handleGoodClick} text="good"/>
      <Button handleClick={handleNeutralClick} text="neutral"/>
      <Button handleClick={handleBadClick} text="bad"/>
      <Header text={header[1]}/>
      <Statistics feedback={feedback}/>
    </div>
  )
}

export default App