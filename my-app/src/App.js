import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

import RandomChar from './pages/randomChar';
import Water from './pages/water';
import Fire from './pages/fire';
import Air from './pages/air';
import Earth from './pages/earth';

// for multi page stuff : https://www.geeksforgeeks.org/how-to-create-a-multi-page-website-using-react-js/
  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route path='/' element={<RandomChar />} />
        <Route path='/water' element={<Water/>} />
        <Route path='/fire' element={<Fire/>} />
        <Route path='/earth' element={<Earth/>} />
        <Route path='/air' element={<Air/>} />
    </Routes>
    </Router>
);
}
  
export default App;