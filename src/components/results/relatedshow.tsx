import * as React from 'react'
import { Box } from '@mui/material'

interface RelatedProps {
  data: any
}

export default function RelatedShow({ data }: RelatedProps) {
  return (
    <Box sx={{ textAlign: 'left', ml: 2 }}>
      <Box className="item-title">Related Searches</Box>
      {data &&
        data.map((row: any, i: number) => (
          <Box key={i} sx={{ m: 1 }}>
            <Box>{row.text}</Box>
          </Box>
        ))}
    </Box>
  )
}
