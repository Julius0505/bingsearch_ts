import * as React from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import { Box, Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const cacheList: string[] = []

interface SearchProps {
  onSearch: (value: string) => void
}

export default function Search({ onSearch }: SearchProps) {
  const [text, setText] = React.useState('')
  return (
    <Box sx={{ display: 'flex', m: 2 }}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        onChange={(e: any) => {
          onSearch(text)
        }}
        options={cacheList.map((option) => option)}
        renderInput={(params) => (
          <TextField
            {...params}
            sx={{ width: 500 }}
            label="Search"
            value={text}
            onChange={(e: any) => setText(e.target.value)}
            InputProps={{
              ...params.InputProps,
              type: 'search'
            }}
          />
        )}
      />
      <Button
        variant="contained"
        onClick={() => {
          onSearch(text)
        }}
      >
        <SearchIcon />
      </Button>
    </Box>
  )
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
// const cacheList = [
//   { title: 'The Shawshank Redemption', year: 1994 },
//   { title: 'The Godfather', year: 1972 }
// ]
