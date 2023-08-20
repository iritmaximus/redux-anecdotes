import { useSelector, useDispatch } from 'react-redux'

const App = () => {
  const anecdotes = useSelector(state => state.sort((a, b) => { return b.votes - a.votes }));
  const dispatch = useDispatch();

  const vote = (id) => {
    console.log('vote', id);

    dispatch({
      type: "VOTE",
      payload: { id }
    });
  }

  const createAnecdote = event => {
    event.preventDefault();

    dispatch({
      type: "NEW_ANECDOTE",
      payload: { anecdote: event.target.anecdote.value }
    });
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
      <h2>create new</h2>
      <form onSubmit={createAnecdote}>
        <div><input name="anecdote"/></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default App
