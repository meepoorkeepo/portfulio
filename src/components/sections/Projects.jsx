import { FaGithub } from "react-icons/fa";
import { BiShow } from "react-icons/bi";
import {RevealOnScroll} from '../RevealOnScroll'
import { useState } from "react";



export default function Projects() {

    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);

  return (
    <section 
    id='projects'
    className='min-h-screen flex items-center justify-center py-20'
    >
        <RevealOnScroll>
        <div className='max-w-5xl mx-auto mr-5 px-6'>
            <h2 className='text-5xl font-bold mb-8 bg-linear-to-r from-blue-500 to bg-cyan-400 bg-clip-text text-transparent text-center pb-2'>Mes projets</h2>
            <p className="pb-10">Découvrez mes projets full-stack, conçus avec passion et rigueur. Chaque réalisation met en œuvre des technologies modernes et répond à des besoins concrets, témoignant de mon parcours et de mes compétences techniques.</p>
            <div className='grid grid-cols-1 gap-6'>


                  {/* amazoni project */}
                    
                <div className='p-6 rounded-xl border border-white/10 w-full hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all'>
                    
                    <div className="flex justify-between">
                    
                    <h3 className='text-xl font-bold mb-2'>Shopping amazoni</h3>

                      <div className="flex gap-10 pb-5 ">
                            <div className="text-blue-500 cursor-pointer text-3xl hover:text-blue-200 transition-colors "            
                        >
                            <a href="https://github.com/meepoorkeepo/amazoni" target="_blank">< FaGithub /></a>
                            
                        </div>

                        <div className="text-blue-500 cursor-pointer text-4xl hover:text-blue-200 transition-colors "                              
                        >
                            <a href="https://amazoni-yty6.onrender.com" target="_blank"><BiShow /></a>
                            
                        </div>
                        </div>


                    </div>

                    <p className='text-gray-400 mb-4'>Application e-commerce complète permettant aux utilisateurs de parcourir des produits, gérer leur panier d'achat et effectuer des commandes en ligne. Interface moderne et responsive avec gestion des utilisateurs et système de paiement intégré.</p>

                    {/* skills */}

                    <div className="flex justify-start overflow-auto">
                        {['TypeScript','react','node.js','JWT','express.js','mongodb','Render'].map((tech,key)=>(
                            <div
                                key={key} 
                                className='w-100 bg-blue-500/10 text-blue-300 p-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.8)] transition-all m-1'>{tech}</div>

                        ))}
                        
                    </div>
                    <div className='flex justify-between pt-6 items-center'>
                        
                        {/* detail button */}

                        <div className="w-full max-w-lg mx-auto">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="flex items-center gap-2 text-left w-full px-4 rounded-lg transition-colors cursor-pointer"
                            >
                                <span>Détails</span>
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {isOpen && (
                               <>
                                <p className="mt-2 px-4 py-3 shadow-sm">
                                Application web e-commerce moderne et responsive, conçue pour offrir une expérience d'achat fluide et sécurisée.
                                <ul>
                                • Navigation intuitive: Catalogue de produits organisé et facile à parcourir, avec des filtres et des options de tri.<br/>
                                • Processus de commande simplifié: Ajout d'articles au panier, calcul automatique des frais de port et options de livraison claires.<br/>
                                • Gestion des utilisateurs: Système d'authentification sécurisé avec création de comptes et gestion des profils utilisateurs.<br/>
                                • Design responsive: Adapté à tous les types d'écrans (mobile, tablette, desktop) pour une expérience utilisateur optimale.<br/>
                                • Paiements sécurisés: Intégration transparente avec Stripe et PayPal pour des transactions en toute sécurité. 
                                </ul>
                                </p>
                                <div>
                            </div>
                               </>
                            )}
                            </div>
                        
                    </div>

                </div>

              

                     {/* causette project */}
                    
                <div className='p-6 rounded-xl border border-white/10 w-full hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all'>
                    
                    <div className="flex justify-between">
                    
                    <h3 className='text-xl font-bold mb-2'>Application de chat</h3>

                      <div className="flex gap-10 pb-5">
                            <div className="text-blue-500 cursor-pointer text-3xl hover:text-blue-200 transition-colors "            
                        >
                            <a href="https://github.com/meepoorkeepo/fullstack-chat" target="_blank">< FaGithub /></a>
                            
                        </div>

                        <div className="text-blue-500 cursor-pointer text-4xl hover:text-blue-200 transition-colors "                              
                        >
                            <a href="https://causette.onrender.com/" target="_blank"><BiShow /></a>
                            
                        </div>
                        </div>


                    </div>

                    <p className='text-gray-400 mb-4'>application de chat en temps réel, Messages instantanés, salons dynamiques et interface responsive.</p>

                    {/* skills */}

                    <div className="flex justify-start overflow-auto">
                        {['react','node.js','JWT','Socket.IO','express.js','mongodb','Render'].map((tech,key)=>(
                            <div
                                key={key} 
                                className='bg-blue-500/10 text-blue-300 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.8)] transition-all m-1'>{tech}</div>

                        ))}
                        
                    </div>
                    <div className='flex justify-between pt-6 items-center'>
                        
                        {/* detail button */}

                        <div className="w-full max-w-lg mx-auto">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="flex items-center gap-2 text-left w-full px-4 rounded-lg transition-colors cursor-pointer"
                            >
                                <span>Détails</span>
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {isOpen && (
                               <>
                                <p className="mt-2 px-4 py-3 shadow-sm">
                                Ce projet est une application de chat en temps réel 'causette', développée avec React, Node.js, Express, MongoDB et Socket.IO. 
                                Elle inclut l'authentification, les messages persistants, les salons dynamiques et une interface responsive.
                                Cette application de chat propose plusieurs thèmes personnalisables (clair/sombre), permet l'envoi de messages texte et d'images, et inclut des fonctionnalités comme l'état en ligne et une interface responsive.

                                </p>
                                <div>
                            </div>
                               </>
                            )}
                            </div>



                      
                        
                    </div>

                </div>




                     {/* app des produits */}
                    
                <div className='p-6 rounded-xl border border-white/10 w-full hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all'>
                    <div className="flex justify-between">

                        <h3 className='text-xl font-bold mb-2'>Boutique de produits</h3>

                    {/* github and live view */}

                            <div className="flex gap-10 pb-5">
                            <div className="text-blue-500 cursor-pointer text-3xl hover:text-blue-200 transition-colors "            
                        >
                            <a href="https://github.com/meepoorkeepo/Mern-products" target="_blank">< FaGithub /></a>
                            
                        </div>

                        <div className="text-blue-500 cursor-pointer text-4xl hover:text-blue-200 transition-colors "                              
                        >
                            <a href="https://boutique-xw40.onrender.com/" target="_blank"><BiShow /></a>
                            
                        </div>
                        </div>
                    </div>

                    <p className='text-gray-400 mb-4'>Boutique en ligne fullstack avec interface responsive, gestion des produits,thèmes personnalisables. Développée avec React, Node.js, Express et MongoDB.</p>

                    {/* skills */}

                    <div className="flex justify-start overflow-auto">
                        {['react','node.js','express.js','mongodb','Render'].map((tech,key)=>(
                            <div
                                key={key} 
                                className='bg-blue-500/10 text-blue-300 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.8)] transition-all m-1'>{tech}</div>

                        ))}
                        
                    </div>
                    <div className='flex justify-between pt-6 items-center'>
                        
                        {/* detail button */}

                        <div className="w-full max-w-lg mx-auto">
                            <button
                                onClick={() => setIsOpen1(!isOpen1)}
                                className="flex items-center gap-2 text-left w-full px-4 rounded-lg transition-colors cursor-pointer"
                            >
                                <span>Détails</span>
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={`h-4 w-4 transition-transform ${isOpen1 ? 'rotate-180' : ''}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {isOpen1 && (
                               <>
                                <p className="mt-2 px-4 py-3 shadow-sm">
                                Boutique en ligne fullstack présentant un catalogue de produits avec interface responsive, mode sombre/clair et aperçu des images au clic. Chaque produit affiche une description détaillée, des photos haute qualité et des options de personnalisation. Développée avec React, Node.js, Express et MongoDB, elle met en avant l'expérience utilisateur sans fonctionnalité de panier ni paiement.

                                </p>
                                <div>
                            </div>
                               </>
                            )}
                            </div>



                      
                        
                    </div>

                </div>




                     {/* todo app */}
                    
                <div className='p-6 rounded-xl border border-white/10 w-full hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all'>
                    
                    <div className="flex justify-between">

                    <h3 className='text-xl font-bold mb-2'>Gestionnaire de tâches</h3>

                      <div className="flex gap-10 pb-5">
                            <div className="text-blue-500 cursor-pointer text-3xl hover:text-blue-200 transition-colors "            
                        >
                            <a href="https://github.com/meepoorkeepo/todo" target="_blank">< FaGithub /></a>
                            
                        </div>

                        <div className="text-blue-500 cursor-pointer text-4xl hover:text-blue-200 transition-colors "                              
                        >
                            <a href="https://liste-taches.onrender.com/" target="_blank"><BiShow /></a>
                            
                        </div>
                        </div>

                    </div>

                    <p className='text-gray-400 mb-4'>Application simple de gestion de tâches permettant d'ajouter, modifier et supprimer des tâches. Interface intuitive avec marquage des tâches terminées et thème sombre/clair.</p>

                    {/* skills */}

                    <div className="flex justify-start overflow-auto">
                        {['Html','Css','javascript','node.js','express.js','mongodb','Render'].map((tech,key)=>(
                            <div
                                key={key} 
                                className='bg-blue-500/10 text-blue-300 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.8)] transition-all m-1'>{tech}</div>

                        ))}
                        
                    </div>
                    <div className='flex justify-between pt-6 items-center'>
                        
                        {/* detail button */}

                        <div className="w-full max-w-lg mx-auto">
                            <button
                                onClick={() => setIsOpen2(!isOpen2)}
                                className="flex items-center gap-2 text-left w-full px-4 rounded-lg transition-colors cursor-pointer"
                            >
                                <span>Détails</span>
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={`h-4 w-4 transition-transform ${isOpen2 ? 'rotate-180' : ''}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {isOpen2 && (
                               <>
                                <p className="mt-2 px-4 py-3 shadow-sm">
                                application de gestion de tâches développée avec HTML, CSS, JavaScript, Node.js, Express et MongoDB. Permet d'ajouter, modifier, supprimer et marquer les tâches comme terminées. Interface simple et fonctionnelle, avec stockage persistant des données et thèmes clair/sombre.

                                </p>
                                <div>
                            </div>
                               </>
                            )}
                            </div>

                        
                    </div>

                </div>




                     {/* nasa app */}
                    
                <div className='p-6 rounded-xl border border-white/10 w-full hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all'>
                    
                    <div className="flex justify-between">

                    <h3 className='text-xl font-bold mb-2'>Nasa-Image</h3>

                    <div className="flex gap-10 pb-5">
                            <div className="text-blue-500 cursor-pointer text-3xl hover:text-blue-200 transition-colors "            
                        >
                            <a href="https://github.com/meepoorkeepo/nasa-project" target="_blank">< FaGithub /></a>
                            
                        </div>

                        <div className="text-blue-500 cursor-pointer text-4xl hover:text-blue-200 transition-colors "                              
                        >
                            <a href="https://faycel-nasa.netlify.app/" target="_blank"><BiShow /></a>
                            
                        </div>
                        </div>


                    </div>


                    <p className='text-gray-400 mb-4'>Application web affichant l'image du jour de la NASA (APOD) avec sa description détaillée, récupérée via l'API officielle de la NASA.</p>

                    {/* skills */}

                    <div className="flex justify-start overflow-auto">
                        {['Javascript','react','tailwindCss','Netlify'].map((tech,key)=>(
                            <div
                                key={key} 
                                className='bg-blue-500/10 text-blue-300 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.8)] transition-all m-1'>{tech}</div>

                        ))}
                        
                    </div>
                    <div className='flex justify-between pt-6 items-center'>
                        
                        {/* detail button */}

                        <div className="w-full max-w-lg mx-auto">
                            <button
                                onClick={() => setIsOpen3(!isOpen3)}
                                className="flex items-center gap-2 text-left w-full px-4 rounded-lg transition-colors cursor-pointer"
                            >
                                <span>Détails</span>
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={`h-4 w-4 transition-transform ${isOpen3 ? 'rotate-180' : ''}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {isOpen3 && (
                               <>
                                <p className="mt-2 px-4 py-3 shadow-sm">
                                Application développée avec React et Tailwind CSS, affichant l'image du jour de la NASA via l'API APOD. Intègre un titre, une description scientifique et une mise en page responsive. Déployée sur Netlify, elle illustre les compétences en gestion d'API, composants dynamiques et design moderne.

                                </p>
                                <div>
                            </div>
                               </>
                            )}
                            </div>



                        
                        
                    </div>

                </div>



            </div>
        </div>
       </RevealOnScroll>                     
    </section>
  )
}
