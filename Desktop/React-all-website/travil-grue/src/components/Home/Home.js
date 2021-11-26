import React from 'react'
import About from '../About/About'
import Banner from '../Banner/Banner'
import Fetures from '../Fetures/Fetures'
import Footer from '../Footer/Footer'
import Serves from '../Serves/Serves'


const Home = () => {
    return (
        <div>
          <Banner/>
          <Fetures/>
          <Serves/>
          <About/>
          <Footer/>
        </div>
    )
}

export default Home
