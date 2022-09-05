// UNICAFE 1.6 - 1.11

import { useState } from "react"
const Stat = ({text, value, per}) => 
  <>
    {text}
    {value}
    {per}
  </>

const Stats = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  const avg = (good - bad) / total
  const positive = good / total * 100

  if (total === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td><Stat text="good" /></td>
            <td><Stat value={good} /></td>
          </tr>
          <tr>
            <td><Stat text="neutral" /></td>
            <td><Stat value={neutral} /></td>
          </tr>
          <tr>
            <td><Stat text="bad" /></td>
            <td><Stat value={bad} /></td>
          </tr>
          <tr>
            <td><Stat text="total" /></td>
            <td><Stat value={total} /></td>
          </tr>
          <tr>
            <td><Stat text="average" /></td>
            <td><Stat value={avg} /></td>
          </tr>
          <tr>
            <td><Stat text="positive" /></td>
            <td><Stat value={positive} per="%" /></td>
          </tr>
        </tbody>
      </table>
    </>
  )
}


const App=()=>{
  const [good, setgood] = useState(0)
  const [neutral, setneutral] = useState(0)
  const [bad, setbad] = useState(0)
  
  const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )

  return(
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={() => setgood(good + 1)} text="good" />
      <Button handleClick={() => setneutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setbad(bad + 1)} text="bad" />
      <h1>Statistics</h1>
      <Stats good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App;
