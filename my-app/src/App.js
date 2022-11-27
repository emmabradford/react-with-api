import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

import RandomChar from './pages/randomChar';
import Avatars from './pages/avatars';
import Bending from './pages/bending';
import Locations from './pages/locations';

// for multi page stuff : https://www.geeksforgeeks.org/how-to-create-a-multi-page-website-using-react-js/
  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route path='/' element={<RandomChar />} />
        <Route path='/avatars' element={<Avatars/>} />
        <Route path='/bending' element={<Bending/>} />
        <Route path='/locations' element={<Locations/>} />
    </Routes>
    </Router>
);
}
  
export default App;