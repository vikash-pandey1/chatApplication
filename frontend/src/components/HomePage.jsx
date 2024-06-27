import React from 'react'
import Sidebar from './Sidebaar'
import MessageContainer from './MessageContainer'

function HomePage() {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden  bg-clip-padding backdrop-filter backdrop-blur-lg ' >
      <Sidebar></Sidebar>
      <MessageContainer/>
    </div>
  )
}

export default HomePage
