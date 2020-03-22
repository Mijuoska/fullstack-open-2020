import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const MostVoted = ({ votes }) => {
let mostVotes = Math.max(...votes)
let mostVotedIndex = votes.indexOf(mostVotes)
if (mostVotes > 0) {
  return (
   <div>
   <h1>Anecdote with most votes</h1>
   <p>{anecdotes[mostVotedIndex]}</p>
   </div>
  )
  } else {
    return (
      <div>
         <h1>Anecdote with most votes</h1>
<p>No votes yet</p>
      </div>

    )
  }
}

const App = () => {
  const [selected, setSelected] = useState(0)
  const [votes, addVote] = useState(new Array(anecdotes.length).fill(0))


  const selectAnecdote = () => {
      let randomNum = Math.floor(Math.random() * 6)
      setSelected(randomNum)
  }

  const voteAnecdote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    addVote(newVotes)
  }

  return (
    <div>
    <p>{anecdotes[selected]}</p>
    <p>Has {votes[selected]} votes</p>
        <button onClick={() => selectAnecdote()}>Next anecdote</button>
        <button onClick={() => voteAnecdote()}>Vote</button>
        <MostVoted votes={votes} />
    </div>

  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


ReactDOM.render(
    <App anecdotes={anecdotes} />,
  document.getElementById('root')
);

