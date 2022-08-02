import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Contact } from '../components/contact';
import { Navbar } from '../components/navbar';
import { Banner } from '../components/banner';
import { Experience } from '../components/Experience';
import { useEffect, useMemo } from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';








const Home: NextPage = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, []);


  return (
    <>
      <div className={" flex flex-1 flex-col "}>
        <Navbar />
        <Banner />
        <Experience />
        <Contact />
      </div>
    </>
  )
}

export default Home




