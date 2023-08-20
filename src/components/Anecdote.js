import { useSelector, useDispatch } from "react-redux";
import { createAnecdote, voteAnecdote } from "../reducers/anecdoteReducer";

export const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const addAnecdote = event => {
    event.preventDefault();
    dispatch(createAnecdote(event.target.anecdote.value));
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name="anecdote"/></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.sort((a, b) => { return b.votes - a.votes }));
  const dispatch = useDispatch();

  const vote = (id) => {
    console.log('vote', id);
    dispatch(voteAnecdote(id));
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  );
}
