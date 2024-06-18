import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo, updateTodo } from '../features/todos/todoSlice';

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState('');

  const startEditing = (todo) => {
    setEditingId(todo.id);
    setEditingText(todo.text);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateTodo({
      id: editingId,
      text: editingText,
    }));
    setEditingId(null);
    setEditingText('');
  };

  return (
    <>
    <ul className="list-none space-y-4 px-4 w-full max-w-2xl mx-auto">
      {todos.map((todo) => (
        <li
          className="flex flex-col md:flex-row justify-between items-center bg-zinc-800 px-4 py-2 rounded hover:bg-zinc-700 transition-colors duration-300 border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] space-y-2 md:space-y-0"
          key={todo.id}
        >
          {editingId === todo.id ? (
            <form onSubmit={handleUpdate} className="flex-grow w-full md:w-auto">
              <input
                type="text"
                value={editingText}
                onChange={(e) => setEditingText(e.target.value)}
                className="w-full bg-gray-700 text-white border border-gray-600 rounded px-2 py-1"
              />
            </form>
          ) : (
            <div className="text-white flex-grow w-full md:w-auto">{todo.text}</div>
          )}
          <div className="flex space-x-4">
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
              Delete
            </button>
            <button
              onClick={() => startEditing(todo)}
              className="text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded text-md flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 2.487a3.375 3.375 0 014.776 4.775l-13.69 13.69a4.5 4.5 0 01-1.56 1.03l-5.04 1.68a.75.75 0 01-.952-.952l1.68-5.04a4.5 4.5 0 011.03-1.56l13.69-13.69z"
                />
              </svg>
              Update
            </button>
          </div>
        </li>
      ))}
    </ul>
  </>
  );
}

export default Todos;
