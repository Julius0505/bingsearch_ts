import * as React from 'react'
import { Box, Link } from '@mui/material'
import moment from 'moment'

interface NewsProps {
  data: any
}

export default function NewsShow({ data }: NewsProps) {
  return (
    <Box sx={{ textAlign: 'left', ml: 2 }}>
      <Box className="item-title">News</Box>
      {data &&
        data.map((row: any, i: number) => (
          <Box key={i} sx={{ m: 1 }}>
            <Link href={row?.url} className="item-title">
              {row?.name}
            </Link>
            <Box>{moment(row.datePublished).format('DD MMM, YYYY hh:mm')}</Box>
            <Box sx={{ width: '80%' }}>{row.description}</Box>
          </Box>
        ))}
    </Box>
  )
}
