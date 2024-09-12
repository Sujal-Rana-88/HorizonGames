import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Delivery from './components/Home_Page/Buy';
import Categories from './components/Home_Page/Categories';
import Email from './components/Home_Page/Email';
import Featured from './components/Home_Page/Featured';
import Games from './components/Home_Page/Games';
import TopNav from './components/Home_Page/TopNav';
import TopPicks from './components/Home_Page/TopPicks';
import Footer from './components/Home_Page/Footer';
import Cart from './components/Cart_Module/Cart';
import MyAccount from './components/My_Account/MyAccount';
import MyFavorites from './components/My_Favourites/MyFavourites';
import Help from './components/Help/Help';

function App() {
  return (
    <Router>
      <div className="App">
        <TopNav />
        <Routes>
          <Route path="/" element={
            <>
              <Featured />
              <Delivery />
              <TopPicks />
              <Games />
              <Categories />
            </>
          } />
          <Route path="/cart" element={<Cart />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/myfavourites" element={<MyFavorites />} />
          <Route path="/help" element={<Help />} />
          {/* Add more routes as needed */}
        </Routes>
        <Email />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
