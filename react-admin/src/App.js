import React from 'react';
import Navbar from './components/Sidebar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';
import Home from './components/Home';
import Dashboard from './components/dashboard/Dashboard';
import Clients from './components/clients/Clients';
import Tickets from './components/tickets/Tickets';
import Calendar from './components/calendar/Calendar';
import Documents from './components/documents/Documents';
import Reports from './components/reports/Reports';
import Administration from './components/administration/Administration';
import TopBar from './components/TopBar';

export default function App() {
  return (
    <div >
      <BrowserRouter>
        <TopBar />
        <Navbar />
        <Box width="100%" height="100%" padding="0rem 0rem 0rem 15rem">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/administration" element={<Administration />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </div>
  );
}
