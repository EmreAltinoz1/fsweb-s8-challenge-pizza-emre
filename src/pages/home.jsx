import React from 'react'
import MainContent from '../components/layouts/main_content'
import Header from '../components/header'

function home() {

  return (
    <>
    <div className='home'>
      <Header></Header>
       <MainContent/>
    </div>
    </>
  )
}

export default home