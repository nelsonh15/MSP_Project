import { Typography, Box, CardActionArea, Card, CardContent } from '@mui/material'
import React from 'react'

function TicketsCard({ category, counts }) {
  return (
    <Box>
      <Card sx={{ width: 200, height: 200, boxShadow: 5 }}>
        <CardActionArea>
          <CardContent sx={{ backgroundColor: '#00b0ff', display: 'flex', justifyContent: 'center' }}>
            <Typography sx={{ color: 'white' }} component="div">
              {category}
            </Typography>
          </CardContent>

          <CardContent sx={{ height: '10rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography gutterBottom variant="h3" component="div">
              {counts}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  )
}

export default TicketsCard