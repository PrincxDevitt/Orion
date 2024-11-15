import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
/*import { useState } from 'react';*/
/*import { Counter } from './features/counter/Counter';*/
import './index.css';
import { makeStyles } from '@mui/styles';


import Home from './Pages/Home';
import Login from './Pages/Login';
import Paypal from './Pages/Paypal';
import Profile from './Pages/Profile';


function App() {
  const user = "Pepe";
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Router>
          {
            !user ? (<Login />) : (
              <Routes>
                <Route path='/Profile' element={<Profile />} />
                <Route path='/Checkout' element={<Paypal />} />
                <Route path='/' element={<Home />} />
              </Routes>
            )
          }
      </Router>
    </div>
  );
}

const useStyle = makeStyles(() => ({
  root: {
    minHeight:"100vh",
    /*backgroundColor: "#111",*/
  },
}));

export default App;