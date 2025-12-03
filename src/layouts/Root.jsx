import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet, useNavigation } from 'react-router'
import Footer from '../components/Footer'

const Root = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="max-w-[1270px] mx-auto bg-gray-50">
      <Navbar />

      {isLoading && (
        <p className="text-2xl font-bold text-center py-5">Loading..............</p>
      )}

      <Outlet />

      <Footer />
    </div>
  );
}

export default Root;
