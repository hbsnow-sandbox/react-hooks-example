import React, { useState, useEffect } from 'react'
import '../App.css'
import Article from './Article'
import Search from './Search'

const API_KEY = process.env.REACT_APP_API_KEY
const perPage = 10

const App = () => {
  const [loading, setLoading] = useState(true)
  const [articles, setArticles] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    (async () => {
      const params = new URLSearchParams()
      params.set('page', 1)
      params.set('per_page', perPage)
      try {
        const response = await fetch(`https://qiita.com/api/v2/items?${params.toString()}`, {
          headers: {
            'Authorization': `Bearer ${API_KEY}`
          }
        })
        setArticles(await response.json())
      } catch (err) {
        setErrorMessage(err)
      }

      setLoading(false)
    })()
  }, [])

  const search = async (searchValue) => {
    setLoading(true)
    const params = new URLSearchParams()
    params.set('page', 1)
    params.set('per_page', perPage)
    params.set('query', `title:${searchValue}`)
    try {
      const response = await fetch(`https://qiita.com/api/v2/items?${params.toString()}`, {
        headers: {
          'Authorization': `Bearer ${API_KEY}`
        }
      })
      setArticles(await response.json())
      setErrorMessage('')
    } catch (err) {
      setErrorMessage(err)
    }

    setLoading(false)
  }

  const render = () => {
    if (loading) {
      return <span>loading...</span>
    }
    if (errorMessage) {
      return <span className="caution">{errorMessage}</span>
    }
    return articles.map((article, i) => 
      <Article key={i} article={article} />
    )
  }

  return (
    <div className='App'>
      <Search search={search} />
      <p>Qiita の記事を取得します。</p>
      <div className='articles'>
        {render()}
      </div>
    </div>
  )
}

export default App
