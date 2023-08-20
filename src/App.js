import { useSelector, useDispatch } from 'react-redux';

import { createAnecdote, voteAnecdote } from "./reducers/anecdoteReducer";
import { AnecdoteForm, AnecdoteList } from "./components/Anecdote";

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  );
}

export default App
