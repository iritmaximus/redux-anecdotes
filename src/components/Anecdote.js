import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { createAnecdote, voteAnecdote, setAnecdotes } from "../reducers/anecdoteReducer";
import { setNotification, clearNotification } from "../reducers/notificationReducer";
import anecdotesService from "../services/anecdotes";

export const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const addAnecdote = event => {
    event.preventDefault();
    dispatch(createAnecdote(event.target.anecdote.value));
    dispatch(setNotification("you created \"" + event.target.anecdote.value + "\"")); 
    setTimeout(() => {
      dispatch(clearNotification());
    }, 5000);
  };

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
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


  useEffect(() => {
    const fetchAnecdotes = async () => {
      const anecdotes = await anecdotesService.getAll();
      dispatch(setAnecdotes(anecdotes));
    }
    fetchAnecdotes();
  }, [dispatch]);

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
