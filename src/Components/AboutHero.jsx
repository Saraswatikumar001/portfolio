import React from 'react'

const AboutHero = () => {
  return (
    <div className='relative bg-cover bg-center h-[40vh] flex items-center justify-center text-white'>
      style={{
        backgroundImage: "url('https://www.freepik.com/free-photo/person-front-computer-working-html_36189972.htm#fromView=search&page=1&position=22&uuid=3ed7ad90-f019-4995-8d5b-c293d7cef634&query=laptop+code+developer')",
        backgroundColor: "rgba(0,0,0,0.6)",
        backgroundBlendMode: "overlay"
      }}
        <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">About Me</h1>
        <p className="text-sm">
          <span className="text-gray-300">Home</span> <span className="text-orange-500"> &gt; </span> About Me
        </p>
      </div>
    </div>
    
  )
}

export default AboutHero
