import type { NextPage } from 'next'
import Head from 'next/head'
import Blogbtn from '../components/containers/Blogbtn'
import Contact from '../components/containers/Contact'
import Hero from '../components/containers/Hero'
import Skills from '../components/containers/Skills'
import Footer from '../components/layouts/Footer'

const Home: NextPage = () => {
  return (
    <div className="px-4 sm:px-8 md:px-24 lg:px-48 xl:px-72 text-white justify-between">
      <Head>
        <title>xense | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero/>
      <div id='skills' className='lg:pt-20 pt-10'>
      <Skills/>
      </div>
      <Blogbtn/>
      <Contact/>
      <Footer/>

    </div>
  )
}

export default Home
