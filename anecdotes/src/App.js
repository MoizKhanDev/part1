import React from "react";
import { useState } from "react";


const DisplayAnecdote = ({anecdotes, points}) => {
  return (
    <>
      {anecdotes}
      <br />
      has {points} votes
      <br />
    </>
  )
}

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
)

const GetFavorite = ({points, anecdotes}) => {
  let favorite = Math.max(...points)
  let position = points.indexOf(favorite)
  
  if (favorite === 0) {
    return (
      <p>no feedback given</p>
    )
  } else if (favorite === 1) {
    return (
      <>
        {anecdotes[position]}
        <br />
        has {points[position]} vote
      </>
    )
  }
  return (
    <>
      {anecdotes[position]}
      <br />
      has {points[position]} votes
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf,0))  

  const randomAnecdote = () =>
  setSelected(() => Math.floor(Math.random() * anecdotes.length))

  const Votes = () => {
    const addPoint = [...points] 
    addPoint[selected] += 1
    setPoints(addPoint)
  }

  return (
    <>
      <h1>Anecdote of the day</h1>
      <DisplayAnecdote anecdotes={anecdotes[selected]} points={points[selected]} />
      <Button handleClick={Votes} text="vote" />
      <Button handleClick={randomAnecdote} text="next anecdote" />
      <h1>Anecdote with most votes</h1>
      <GetFavorite points={points} anecdotes={anecdotes} />
    </>
  )
}

export default App