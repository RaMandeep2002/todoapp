// localStorageUtils.js
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('todos');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
    // console.log(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('todos', serializedState);
    console.log('serializedState ====> ', serializedState);
  } catch (err) {
    // Ignore write errors
    console.log('something happend');
  }
};
