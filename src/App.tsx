import React, { useState } from 'react'
import './App.css'
import Search from './components/search'
import axios, { AxiosRequestConfig } from 'axios'

const BING_ENDPOINT = 'https://api.bing.microsoft.com/v7.0/search'

function App() {
  const [rows, setRows] = useState<any>(null)

  const handleSearch = (value: string) => {
    const config: AxiosRequestConfig = {
      headers: {
        'Ocp-Apim-Subscription-Key': String(
          process.env.REACT_APP_SUBSCRIPTION_KEY
        )
      },
      params: { q: value }
    }
    console.log('handleSearch', value, process.env.REACT_APP_SUBSCRIPTION_KEY)

    axios.get(BING_ENDPOINT, config).then((res) => {
      console.log('result', res)
      setRows(res)
    })
  }

  return (
    <div className="App">
      <Search onChange={handleSearch} />
    </div>
  )
}

export default App
