import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter, } from 'react-router-dom';
import Header from './Components/HTML/Header';

import Checkout from './Components/HTML/Checkout';
import Home from './Components/HTML/Home';
import Login from './Components/HTML/Login';
import { useStateValue } from './Components/HTML/StateProvider';
import { useEffect } from 'react';
import { auth } from './Components/HTML/Firebase';
import Footer from './Components/HTML/Footer';
import FooterNav from './Components/HTML/FooterNav';
import Payment from './Components/HTML/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Components/HTML/Orders';
function App() {

  const publishable = loadStripe("pk_test_51NzIlyHZcwWB3M82JPTI4KHStSd4U3TW8nkobkI0TNca8YILqGx5mWaN2IzhjSnlmd660AjC1rU2MTIBC7Ykq0mr00dq1SIG4Y");
  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authuser) => {
      if (authuser) {
        dispatch({
          type: 'SET_USER',
          user: authuser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [dispatch])
  return (
    <BrowserRouter>

      <>



        <Routes>
          {/* <Route path="/" element={<Header />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<><Header /> <Home /> <FooterNav /><Footer /></>} />
          <Route path="/payment" element={
            <>
              <Header />
              <Elements stripe={publishable}>
                <Payment />
              </Elements>
            </>

          } />

          <Route path="/checkout" element={<><Header /><Checkout /><Footer /></>} />
          <Route path="/orders" element={<><Header /><Orders /></>} />
        </Routes>
        {/* <FooterNav /> */}
        {/* <Footer /> */}


      </>

    </BrowserRouter>
  )
}


export default App;
