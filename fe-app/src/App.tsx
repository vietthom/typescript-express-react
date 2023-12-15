import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState(null);

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/v1/ping')
        const result = await response.json()

        setData(result.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  },[])
  return (
    <main>
      <p>{data}</p>
    </main>
  )
}

export default App
