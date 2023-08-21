import React from 'react'

function Hero() {
  return (
    <section id="home" className={'bg-black flex md:flex-row flex-col h-[256px] ${styles.paddingY} '}>
    <div className={'flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6'} >
      <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2' >

      </div>

    </div>
    </section>
  )
}

export default Hero

