import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
 
  return (
    
 <div className="min-h-screen flex flex-col items-center py-12">
      <h1 className="text-4xl font-bold mb-10">Todos 📝</h1>
      <AddTodo />
      <div className="w-full max-w-2xl mt-12">
        <Todos />
      </div>
    </div>
  )
}

export default App
