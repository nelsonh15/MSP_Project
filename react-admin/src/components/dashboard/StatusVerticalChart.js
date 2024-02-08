import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';
import { Box, Card, CardContent, CardActionArea, Typography } from '@mui/material'

const StatusVerticalChart = ({ data }) => (
  <div style={{ width: '100%', height: '400px', padding: '30px' }}>
    <Box>
      <Card sx={{ width: 485, height: 465, boxShadow: 3 }}>
        <CardActionArea>
          <CardContent sx={{ backgroundColor: '#668eff', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '2rem' }}>
            <Typography sx={{ color: 'white' }} component="div">
              Unresolved Tickets by Status
            </Typography>
          </CardContent>

          <CardContent sx={{ height: '27rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart
                layout="vertical"
                data={data}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis type="number" />
                <YAxis type="category" dataKey="name" />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" barSize={30} fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  </div>
);

export default StatusVerticalChart;
