import React from 'react'
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import NewProduct from '../../Components/NewProduct';

function Dashboard() {
  return (
    <div>
      <Navbar />
      <NewProduct />
      <Footer />
    </div>
  )
}

export default Dashboard;
