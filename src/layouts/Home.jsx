import React from 'react'
import Banner from '../components/Banner'
import Cards from '../components/Cards'
import Provider from '../components/Provider'
import Roadmap from '../components/Roadmap'
import Why from '../components/Why'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Cards></Cards>
            <Provider></Provider>
            <Roadmap></Roadmap>
            <Why></Why>
        </div>
    )
}

export default Home