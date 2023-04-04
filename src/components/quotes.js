import { useState, useEffect } from "react";
import './quotes.css';

function Quotes() {
  const [data, setData] = useState([])
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await fetch("https://api.api-ninjas.com/v1/quotes?category=happiness", {
        method: 'GET',
        headers: {'X-Api-Key': 'CcWSe3Q/vZJVo+IRHgQWDQ==dUq4F8t32UVJIKO7'},
        contentType: 'application/json',
      })
        const json = await res.json()
        setData(json)
      } catch (error) {
        console.log(error)
        setHasError(true)
      }
      setIsLoading(false)
    }
    fetchData()
  }, [setData, setIsLoading])

  if (hasError) return <div>Something went wrong!</div>

  if (isLoading) return <div>Loading...</div>
  return (
    <div className="main-container">
    <ul className="quoteitem">
    {data.map((item) => (
      <strong key={10000}>
      <li key={item.quote}>{item.quote}<br></br><br></br>Author: {item.author}
      <br></br><br></br>Category: {item.category}</li>
      </strong>
    ))}
    </ul>
    </div>
  )
}

export default Quotes