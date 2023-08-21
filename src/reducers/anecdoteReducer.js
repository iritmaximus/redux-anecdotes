import { createSlice } from "@reduxjs/toolkit";

import anecdoteService from "../services/anecdotes";


const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject);

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState,
  reducers: {
    updateAnecdote(state, action) {
      return state.map(item => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });
    },
    addAnecdote(state, action) {
      const newAnecdote = asObject(action.payload);
      console.info("New anecdote:", newAnecdote);
      return state.concat(newAnecdote);
    },
    setAnecdotes(state, action) {
      return action.payload;
    },
    appendAnecdote(state, action) {
      return state.concat(action.payload);
    }
  }
});

export const initializedAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll();
    console.log("Anecdotes in db:", anecdotes);
    dispatch(setAnecdotes(anecdotes));
  }
}

export const createAnecdote = anecdoteContent => {
  return async dispatch => {
    const newAnecdote = asObject(anecdoteContent);
    anecdoteService.create(newAnecdote);
    dispatch(appendAnecdote(newAnecdote));
  }
}

export const voteAnecdote = anecdote => {
  return async dispatch => {
    const updatedAnecdote = { ...anecdote, votes: anecdote.votes + 1 };
    anecdoteService.update(updatedAnecdote);
    dispatch(updateAnecdote(updatedAnecdote));
  }
}

export const { updateAnecdote, addAnecdote, setAnecdotes, appendAnecdote } = anecdoteSlice.actions;
export default anecdoteSlice.reducer;
