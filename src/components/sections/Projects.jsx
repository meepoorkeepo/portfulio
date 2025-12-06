import { FaGithub } from "react-icons/fa";
import { BiShow } from "react-icons/bi";
import {RevealOnScroll} from '../RevealOnScroll'



export default function Projects() {
  return (
    <section 
    id='projects'
    className='min-h-screen flex items-center justify-center py-20'
    >
        <RevealOnScroll>
        <div className='max-w-5xl mx-auto px-4'>
            <h2 className='text-5xl font-bold mb-8 bg-linear-to-r from-blue-500 to bg-cyan-400 bg-clip-text text-transparent text-center pb-2'>Mes projets</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              

                <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all'>
                    <h3 className='text-xl font-bold mb-2'>Todo list</h3>
                    <p className='text-gray-400 mb-4'>Une mini to-do list : note et coche tes tâches en un clin d'œil.</p>
                    <div className="overflow-auto">
                        {['react','node.js','express','mongodb'].map((tech,key)=>(
                            <span
                                key={key} 
                                className='bg-blue-500/10 text-blue-300 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.8)] transition-all m-1'>{tech}</span>
                        ))}
                    </div>
                    <div className='flex justify-between pt-6 items-center'>
                        <a href="#todo"
                            className='text-blue-400 pt-4 hover:text-blue-300 transition-colors'>Voir le projet ➔</a>

                        <div className="flex gap-10">
                            <div className="text-blue-500 cursor-pointer text-3xl hover:text-blue-200 transition-colors "                              
                        >
                            <FaGithub />
                        </div>

                        <div className="text-blue-500 cursor-pointer text-4xl hover:text-blue-200 transition-colors "                              
                        >
                            <BiShow />
                        </div>
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
       </RevealOnScroll>                     
    </section>
  )
}
