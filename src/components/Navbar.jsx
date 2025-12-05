import React, { useEffect } from 'react'

export default function Navbar({menuOpen, setMenuOpen}) {
useEffect(()=>{
    document.body.style.overflow = menuOpen? 'hidden' : '';
},[menuOpen])

  return (
    <nav className='fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg '>
        <div className='max-w-5xl mx-auto px-4'>
            <div className='flex justify-between item-center h-16'>
                <a href="#home" className='font-mono flex items-center text-xl font-bold text-white'>
                    Faycel <span className='text-blue-500'>.tech</span>
                </a>

                {/*for phones (burger) */}
                <div className='w-7 h-auto flex items-center justify-center relative cursor-pointer z-40 md:hidden ' onClick={()=>setMenuOpen((prev)=> !prev) }>&#9776;

                </div>
                {/* for big screens */}
                <div className='hidden md:flex items-center space-x-8'>
                     <a href="#home"
                        className='text-gray-300 hover:text-white transition-colors'>
                            Accueil
                        </a>

                     <a href="#about"
                        className='text-gray-300 hover:text-white transition-colors'>
                            À propos
                        </a>

                     <a href="#projects"
                        className='text-gray-300 hover:text-white transition-colors'>
                            
                            Projets
                        </a>


                     <a href="#contact"
                        className='text-gray-300 hover:text-white transition-colors'>
                            
                            Contact
                        </a>            

                </div>

            </div>
            <div className=''></div>

        </div>
    </nav>
  )
}
