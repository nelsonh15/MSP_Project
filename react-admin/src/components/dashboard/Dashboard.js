import { Box } from '@mui/material'
import TicketsCard from "./TicketsCard";
import React from 'react'
import DashboardPieChart from './DashboardPieChart';
import StatusVerticalChart from './StatusVerticalChart'
import CategoryVerticalChart from './CategoryVerticalChart';

function Dashboard() {
  const data1 = [
    { name: 'Low', value: 102 },
    { name: 'Medium', value: 11 },
    { name: 'High', value: 1110 },
  ];

  const data2 = [
    { name: 'Open', value: 55 },
    { name: 'Pending', value: 8 },
    { name: 'Resolved', value: 50 },
    { name: 'Closed', value: 100 },
  ];
  const data3 = [
    { name: 'Network', value: 55 },
    { name: 'Software', value: 8 },
    { name: 'Other', value: 50 },
    { name: 'Hardware', value: 100 },
  ];

  return (
    <Box>
      <Box sx={{display: 'flex', justifyContent: 'center', padding: '2rem'}}>
        <h1>
          Ticket Management System Dashboard
        </h1>
      </Box>
      <Box sx={{ 
        display: 'flex', 
        gap: 2,
        flexWrap: 'wrap', 
        justifyContent: 'space-around', // Aligns items at the start of the container
        alignItems: 'flex-start'
        }}>

        <TicketsCard category="Overdue Tasks" counts={132} />
        <TicketsCard category="Tickets Due Today" counts={21} />
        <TicketsCard category="Open Tickets" counts={62} />
        <TicketsCard category="Tickets on Hold" counts={5} />
        <TicketsCard category="Unassigned Tickets" counts={21} />
        <TicketsCard category="All Tickets" counts={9} />
      </Box>

      <Box sx={{ 
        display: 'flex', 
        gap: 2,
        flexWrap: 'nowrap', 
        justifyContent: 'space-around', // Aligns items at the start of the container
        alignItems: 'flex-start',
        width: '100%'
        }}>
        <DashboardPieChart data={data1} />
        <StatusVerticalChart data={data2} />
        <CategoryVerticalChart data={data3} />
      </Box>
    </Box>
  )
}

export default Dashboard