import * as React from 'react'
import { Box, Link } from '@mui/material'

interface WebpageProps {
  data: any
}

export default function WebpageShow({ data }: WebpageProps) {
  return (
    <Box sx={{ textAlign: 'left' }}>
      <Box className="item-title">{data.name}</Box>
      <Link href={data.url}>{data.displayUrl}</Link>
      <Box className="item-description">{data.snippet}</Box>
    </Box>
  )
}
