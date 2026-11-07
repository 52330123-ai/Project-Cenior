import React from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Login from './Pages/Login';
import Student from './Pages/Student/Student';
import Professor from './Pages/Professor/Professor';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={< Login/>} />
           <Route path="/Student/*" element={< Student/>} />
           <Route path='/Professor/*' element={<Professor />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;