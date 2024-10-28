import React, { useEffect } from 'react'
import NavBar from './components/NavBarr/NavBar'
import Hero from './components/Hero/Hero'
import Aos from 'aos'
import 'aos/dist/aos.css'
import GetInTouch from './components/GetInTouch/GetInTouch'
import Projects from './components/Projects/Projects'
import Testimonials from './components/Testimonials/Testimonials'
import Footer from './components/Footer/Footer'




const App = () => {

  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    Aos.refresh();
  }, [])

  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
      <NavBar/>
      <Hero/>
      <GetInTouch/>
      <Projects/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App