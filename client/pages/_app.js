import React, { useEffect, useState } from 'react';
import App from 'next/app';
import '../styles/globals.css';
import { Navbar, Footer } from '../components';



function MyApp({ Component, pageProps }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);


  return (
    <>
    <div className="bg-[#0f1015] overflow-hidden">  
      <Navbar />
      {isMounted && <Component {...pageProps} />}
      <Footer />
    </div>
    </>
  );

}

export default MyApp;