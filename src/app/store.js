import { configureStore } from '@reduxjs/toolkit';
import todoSlice from '../features/todos/todoSlice';
import { loadState, saveState } from '../settings/localstorge';

const preloadedState = loadState();
export const store = configureStore({
  reducer: todoSlice,
  preloadedState: {
    todos: preloadedState ? preloadedState.todos : [],
  },
});

store.subscribe(() => {
  saveState({
    todos: store.getState().todos,
  });
});
