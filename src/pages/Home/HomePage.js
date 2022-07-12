import React from 'react';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import FqSection from '../../components/FqSection/FqSection';
import LastProject from '../../components/LastProject/LastProject';
import Navbar from '../../components/Navbar/Navbar';
import NowYourTurn from '../../components/NowYourTurn/NowYourTurn';
import Specializing from '../../components/Specializing/Specializing';
import Testimonials from '../../components/Testimonials/Testimonials';
import WorkWith from '../../components/Work/WorkWith';





function HomePage() {
  return (
    <>
    <Navbar/>
   <Banner/>
   <Specializing/>
   <LastProject/>
   <NowYourTurn/>
   <Testimonials/>
   <WorkWith/>
   <FqSection/>
   <Footer/>
    </>
  );
}

export default HomePage;
