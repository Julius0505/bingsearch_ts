import React, { useState } from 'react'
import './App.css'
import Search from './components/search'
import axios, { AxiosRequestConfig } from 'axios'
import WebpageShow from './components/results/webpageshow'
import NewsShow from './components/results/newsshow'
import { Box, Grid } from '@mui/material'
import RelatedShow from './components/results/relatedshow'

const BING_ENDPOINT = 'https://api.bing.microsoft.com/v7.0/search'

function App() {
  const [data, setData] = useState<any>(null)

  const handleSearch = (value: string) => {
    const config: AxiosRequestConfig = {
      headers: {
        'Ocp-Apim-Subscription-Key': String(
          process.env.REACT_APP_SUBSCRIPTION_KEY
        )
      },
      params: { q: value }
    }
    axios
      .get(BING_ENDPOINT, config)
      .then((res) => {
        setData(res)
      })
      .catch((err) => console.error(err))
  }

  return (
    <div className="App">
      <Search onSearch={handleSearch} />

      <Grid container spacing={2}>
        <Grid item xs={8}>
          {data?.rankingResponse.mainline.items.map((item: any, i: number) => (
            <Box key={i} sx={{ m: 2 }}>
              {item.answerType === 'WebPages' ? (
                <WebpageShow data={data.webPages.value[item.resultIndex]} />
              ) : item.answerType === 'News' ? (
                <NewsShow data={data.news.value} />
              ) : item.answerType === 'RelatedSearches' ? (
                <RelatedShow data={data.relatedSearches.value} />
              ) : (
                <></>
              )}
            </Box>
          ))}
        </Grid>
        <Grid item xs={4}>
          Sideline
        </Grid>
      </Grid>
    </div>
  )
}

export default App
