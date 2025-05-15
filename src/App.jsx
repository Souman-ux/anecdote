import { useState } from 'react';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const handleNextAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    console.log(`Next anecdote selected: Index ${randomIndex}, Text: "${anecdotes[randomIndex]}"`);
    setSelected(randomIndex);
  };

  const handleVote = () => {
    const copy = [...votes];
    copy[selected] += 1;
    console.log(`Vote added to: Index ${selected}, Text: "${anecdotes[selected]}", Total Votes: ${copy[selected]}`);
    setVotes(copy);
  };

  const maxVotes = Math.max(...votes);
  const bestAnecdoteIndex = votes.indexOf(maxVotes);
  console.log(`Current best anecdote: Index ${bestAnecdoteIndex}, Votes: ${maxVotes}`);

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '1rem' }}>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} vote(s)</p>
      <button onClick={handleVote}>Vote</button>
      <button onClick={handleNextAnecdote}>Next anecdote</button>

      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[bestAnecdoteIndex]}</p>
      <p>has {votes[bestAnecdoteIndex]} vote(s)</p>
    </div>
  );
};

export default App;
