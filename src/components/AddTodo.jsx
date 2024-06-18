import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todos/todoSlice' 

function AddTodo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

  return (
    <form onSubmit={addTodoHandler} className="flex flex-col md:flex-row justify-center items-center mt-12 space-y-3 md:space-y-0 md:space-x-3 px-4 w-full max-w-2xl mx-auto">
      <input
        type="text"
        className="w-full md:w-auto flex-grow bg-zinc-800 rounded border focus:ring-indigo-900 text-base outline-none text-gray-100 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        required
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg w-full md:w-auto"
      >
        Add Todo
      </button>
    </form>
  )
}

export default AddTodo