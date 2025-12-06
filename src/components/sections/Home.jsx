import {RevealOnScroll} from '../RevealOnScroll'

export default function Home() {
  return (
    <section id="home" className='min-h-screen flex items-center justify-center relative'>
      <RevealOnScroll>
        <div className='text-center z-10 px-4'>
            <div className='flex justify-center'>
                <img className='w-60 h-auto' src="/IMG20240727084926.png" alt="ma photo" />
            </div>
            <h2 className='text-xl py-5'>Bonjour, je suis Faycel DJENAOUCINE</h2>
            <h1 className='text-5xl md:text-6xl pb-4 font-bold mb-6 bg-linear-to-r from-blue-700 to-cyan-400 bg-clip-text text-transparent leading-right'>
                Développeur Full-Stack
            </h1>

            <p className='text-gray-400 text-lg mb-8 max-w-4xl mx-auto '>
                 passionné par la création d'applications web modernes et performantes. Maîtrise du stack MERN (MongoDB, Express.js, React, Node.js) pour concevoir, développer et déployer des solutions complètes, de la conception de la base de données à l'interface utilisateur. Je suis capable de travailler de manière autonome ou en équipe pour répondre aux besoins des clients et livrer des projets de qualité.
            </p>
            <div className='flex justify-center space-x-4'>
              <a 
              href="#projects"
              className=' bg-blue-500 text-white py-3 px-6 rounded font-semibold transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]'
              >
                Mes Projets 
              </a>

              <a 
              href="#contact"
              className='border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:bg-blue-500/10'
              >
                Me contacter
              </a>

            </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}
