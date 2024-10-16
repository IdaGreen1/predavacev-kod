import './App.css';
import { useState, useEffect } from 'react';

export default function App() {

  const [data, setData] = useState({});

  useEffect(() => {
    fetch('https://rickandmortyapi.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `{
          characters(page: 2, filter: { name: "rick" }) {
          info {
            count
          }
          results {
            name
          }
        }
        location(id: 1) {
          id
        }
        episodesByIds(ids: [1, 2]) {
          id
        }}`
      }
      )
    }, [])
  })

  return (
    <div>
      
    </div>
  )

}


