import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Page from './project/Page'
import Pages from './Contact/pages'

const page = () => {
  return <>
    {/* <Navbar /> */}
    <Hero />
    <Projects />

    {/* <Footer /> */}
    <Page />
    <Pages />
  </>
}

export default page