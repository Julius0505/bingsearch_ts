import React, { useState } from 'react'
import './App.css'
import Search from './components/search'
import axios, { AxiosRequestConfig } from 'axios'
import WebpageShow from './components/results/webpageshow'
import NewsShow from './components/results/newsshow'
import { Box, CircularProgress, Grid } from '@mui/material'
import RelatedShow from './components/results/relatedshow'

const BING_ENDPOINT = 'https://api.bing.microsoft.com/v7.0/search'

function App() {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const handleSearch = (value: string) => {
    const config: AxiosRequestConfig = {
      headers: {
        'Ocp-Apim-Subscription-Key': String(
          process.env.REACT_APP_SUBSCRIPTION_KEY
        )
      },
      params: { q: value }
    }
    setLoading(true)
    axios
      .get(BING_ENDPOINT, config)
      .then((res) => {
        setData(res.data)
        setLoading(false)
      })
      .catch((err) => setLoading(false))
  }

  return (
    <div className="App">
      <Search onSearch={handleSearch} />

      {loading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={8}>
            {data?.rankingResponse.mainline.items.map(
              (item: any, i: number) => (
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
              )
            )}
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      )}
    </div>
  )
}

export default App
