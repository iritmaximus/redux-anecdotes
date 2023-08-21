import { Notification } from "./components/Notification";
import { AnecdoteForm, AnecdoteList } from "./components/Anecdote";
import { Filter } from "./components/Filter";

const App = () => {
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
