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
