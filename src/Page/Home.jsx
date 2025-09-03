import React from 'react'

//import ThemeToggle from '../Component/ThemeToggle'
import NavBar from '../Component/NavBar'
import HomeSection from '../Component/HomeSection'
import NavBarSeconde from '../Component/NavBarSeconde'
//import RateingSection from '../Component/RateingSection'
//import FeaturesSection from '../Component/FeaturesSection'
//import BenifitSection from '../Component/BenifitSection'
import ServiceArea from '../Component/ServiceArea'
import HeroSection from '../Component/HeroSection'
import CaseStudies from '../Component/CaseStudies'
import WorkingProcess from '../Component/WorkingProcess'
import TeamSection from '../Component/TeamSection'
import CustomerReview from '../Component/CustomerReview'
import ContactSection from '../Component/ContactSection'
import FooterSection from '../Component/FooterSection'

const Home = () => {
  return (
    <>
      <div className='absolute inset-0 bg-upper_custom opacity-30 dark:opacity-10 z-0'></div>
      {/*<ThemeToggle />*/}
     <NavBar />
      <HomeSection />
      <NavBarSeconde />
      <ServiceArea />
      <HeroSection />
      <CaseStudies />
      <WorkingProcess />
      <TeamSection />
      <CustomerReview />
      <ContactSection />
      <FooterSection /> 

      {/*  <main>
        <RateingSection />
        <FeaturesSection />
        <BenifitSection />
        
        
      </main>  
      */}
    </>
  )
}

export default Home
