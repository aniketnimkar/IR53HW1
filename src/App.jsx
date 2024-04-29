import './App.css'
import useFetch from './useFetch'

export default function App() {
  const {data, loading, error} = useFetch('https://jsonplaceholder.typicode.com/todos?_limit=4')
  console.log(data)
  return (
    <div className='container'>
    <h1 className='mb-3  '>Todo Lists</h1>
      {loading && <p>Loading...</p>}
      {error && <p className='text-Center'>An error occured while fetching todos</p>}
      {data && data.length > 0 ? (
      data.map((task) =>(
        <div className='mt-3'>
          <ul className="list-group">
            <li className="list-group-item">
              <p><strong>{task.title}</strong></p>
              <p>{task.completed ? "Completed" : "Not Completed"}</p>
            </li>
          </ul>
        </div>
      ))
      ) : (
      <p>No data found</p>
      )}
      
    </div>
  )
}
