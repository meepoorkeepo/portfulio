import {RevealOnScroll} from '../RevealOnScroll'

import { FaHtml5,FaCss3,FaDocker,FaReact,FaNodeJs,FaNpm,FaGithub,FaCloudDownloadAlt} from 'react-icons/fa'
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandSocketIo } from "react-icons/tb";
import { SiExpress,SiMongodb,SiMongoose,SiVite,SiPostman,SiTypescript } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export default function About() {

    const frontendskills = [
        {label:'Html',icon:<FaHtml5 />},
        {label:'Css ',icon:<FaCss3 />},
        {label:'Javascript ',icon:<IoLogoJavascript />},
        {label:'Typescript ',icon:<SiTypescript/>},
        {label:'React ',icon:<FaReact />},
        {label:'Tailwindcss ',icon:<RiTailwindCssFill />},  
    ]
    const backendskills = [
        {label:'Node.js',icon:<FaNodeJs />},
        {label:'Express.js',icon:<SiExpress />},
        {label:'MongoDB',icon:<SiMongodb />},
        {label:'Mongoose',icon:<SiMongoose />}, 
        {label:'SocketIo',icon:<TbBrandSocketIo />
}
    ]
      const toolskills = [
        {label:'Vscode',icon:<VscVscode />},
        {label:'NPM',icon:<FaNpm />},
        {label:'Docker',icon:<FaDocker />},
        {label:'GitHub',icon:<FaGithub />},
        {label:'Postman',icon:<SiPostman />},
    ]


  return (
    <section
    id='about'
    className='min-h-screen flex items-center justify-center py-20'
    >
        <RevealOnScroll>
        <div className='max-w-3xl mx-auto px-4'>
            <h2 className='text-5xl font-bold mb-8 bg-linear-to-r from-blue-500 to bg-cyan-400 bg-clip-text text-transparent text-center '>À propos de moi
            </h2>

            <div className='rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all '>
                <p className='text-gray-300 mb-6 items-center'>Développeur web créatif et rigoureux, je suis constamment à la recherche de nouvelles technologies pour améliorer mes compétences et livrer des projets de qualité.
                </p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
                <div className='p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all '>
                <h3 className='text-xl font-bold mb-4'>🏫 Éducation</h3>
                <ul className='list-disc list-inside text-gray-300 space-y-2'>
                    <li>
                        <strong>Baccalauréat Scientifique</strong> -2009 - Lycée Arezki Kettab, Béni Chebana -Algerie
                    </li>
                    <li>
                        <strong>Ingénieur d'État Océanographie</strong> -[2009-2014] -Ecole Nationale Supérieure (ENSSMAL) - Algerie
                    </li>
                    <li>
                        <strong>Licence Informatique</strong> -[2015-2018] - Université Abderrahmane Mira, Béjaïa 
                    </li>
                </ul>
                </div>
                <div className='p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all '>
                <h3 className='text-xl font-bold mb-4'>💼 Expérience professionnelle</h3>
                    <li>
                        <strong>Alternance en Développement Web</strong> -[2020-2022] - BNA (Banque Nationale d'Algérie), Béjaïa 
                    </li>
                    <li className='pb-6'>
                        <strong>Développeur Full Stack MERN</strong> -[2022-2024] BNA (Banque Nationale d'Algérie), Alger
                    </li>

                </div>
            </div>

                <div className='grid grid-cols-1 md:grid-cols-3 place-items-center gap-3'>

                    {/* frontend mapping */}
                    <div className='rounded-xl  hover:-translate-y-1 transition-all place-items-center'>
                        <h3 className='text-xl font-bold pt-3 mb-4'>Frontend </h3>
                        <div className='flex flex-wrap justify-center gap-2'>
                            {frontendskills.map((tech,key)=>(
                                <span
                                key={key} 
                                className='bg-blue-500/10 border-white/10 border text-blue-300 py-1 px-3 rounded-full text-xl hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition flex items-center'><div className='pr-2'>{tech.label}</div>           {tech.icon}</span>
                            ))}

                        </div>
                    </div>

                            {/* backend mapping */}

                            <div className='rounded-xl place-items-center hover:-translate-y-1 transition-all '>
                        <h3 className='text-xl font-bold mb-4'>Backend </h3>
                        <div className='flex flex-wrap justify-center gap-2'>
                            {backendskills.map((tech,key)=>(
                                <span
                                key={key} 
                                className='bg-blue-500/10 border-white/10 border text-blue-300 py-1 px-3 rounded-full text-xl hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition flex items-center'><div className='pr-2'>{tech.label}</div>           {tech.icon}</span>
                            ))}

                        </div>

                    </div>

                    {/* tools mapping */}

                            <div className='rounded-xl p-6 hover:-translate-y-1 transition-all '>
                        <h3 className='text-xl text-center font-bold mb-4'>Outils </h3>
                        <div className='flex flex-wrap justify-center gap-2'>
                            {toolskills.map((tech,key)=>(
                                <span
                                key={key} 
                                className='bg-blue-500/10 border-white/10 border text-blue-300 py-1 px-3 rounded-full text-xl hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition flex items-center'><div className='pr-2'>{tech.label}</div>           {tech.icon}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </RevealOnScroll>
    </section>
  )
}
