import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Income from './pages/Income';
import { ThemeProvider } from './utils/ThemeContext';

const Enpoints = () => {
    return (
        <ThemeProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/income" element={<Income />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default Enpoints;
