import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    // Fetches via Vite proxy -> http://localhost:3000/api/jokes
    axios.get('/api/jokes')
      .then((res) => {
        setJokes(res.data)
      })
      .catch((err) => {
        console.error('Error fetching jokes:', err)
      })
  }, [])

  return (
    <>
      <h1>Jokes</h1>
      <p>Welcome to the Jokes App</p>

      {jokes.length > 0 ? (
        jokes.map((joke) => (
          <div key={joke.id}>
            <h2>{joke.title}</h2>
            <p>{joke.content}</p>
          </div>
        ))
      ) : (
        <p>No jokes found</p>
      )}
    </>
  )
}

export default App
