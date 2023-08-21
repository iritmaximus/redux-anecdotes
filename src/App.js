import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Notification } from "./components/Notification";
import { AnecdoteForm, AnecdoteList } from "./components/Anecdote";
import { Filter } from "./components/Filter";

import { initializedAnecdotes } from "./reducers/anecdoteReducer";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializedAnecdotes());
  }, [dispatch]);

  return (
    <div>
      <Notification />
      <h2>Anecdotes</h2>
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  );
}

export default App
