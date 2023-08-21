import { useSelector, useDispatch } from "react-redux";

import { addAnecdote, voteAnecdote } from "../reducers/anecdoteReducer";
import { setNotification, clearNotification } from "../reducers/notificationReducer";

export const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const handleCreate = event => {
    event.preventDefault();
    dispatch(addAnecdote(event.target.anecdote.value));
    dispatch(setNotification("you created \"" + event.target.anecdote.value + "\"")); 
    setTimeout(() => {
      dispatch(clearNotification());
    }, 5000);
  };

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={handleCreate}>
        <div><input name="anecdote"/></div>
        <button type="submit">create</button>
      </form>
    </div>
  );
}

export const AnecdoteList = () => {
  const sortAnecdotes = (a, b) => { return b.votes - a.votes };

  const filter = useSelector(state => state.filter);
  const anecdotes = [...useSelector(state => state.anecdotes)].sort(sortAnecdotes).filter(anecdote => anecdote.content.includes(filter));
  const dispatch = useDispatch();


  console.log("filter:", filter);
  console.log("anecdotes:", anecdotes);

  const vote = anecdote => {
    console.log('vote', anecdote.id);
    dispatch(voteAnecdote(anecdote.id));

    // 60% keyboard doesn't have backticks and can't be bothered to open laptop just to write fancy strings
    dispatch(setNotification("you voted \"" + anecdote.content + "\"")); 
    setTimeout(() => {
      dispatch(clearNotification());
    }, 5000);
  }

  return (
    <div>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  );
}
