import React from 'react'
import { motion } from 'framer-motion'
import tendido from '@/assets/images/collar-corazones.png'

export const Farewell: React.FC = () => {
    const bounceTransition = {
        type: "spring" as const,
        stiffness: 90,
        damping: 14,
        mass: 0.8
    };

    return (
        <div className='farewell'>
            {/* Background Dots */}
            <div className="farewell__dot farewell__dot--1"></div>
            <div className="farewell__dot farewell__dot--2"></div>
            <div className="farewell__dot farewell__dot--3"></div>
            <div className="farewell__dot farewell__dot--4"></div>
            <div className="farewell__dot farewell__dot--5"></div>
            <div className="farewell__dot farewell__dot--6"></div>
            <div className="farewell__dot farewell__dot--7"></div>
            <div className="farewell__dot farewell__dot--8"></div>

            <motion.div
                className="farewell__container"
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={bounceTransition}
            >
                <div className='farewell__text'>
                    <p>Nos vemos el día de la fiesta</p>
                    <p>¡Trae tus juegos favoritos!</p>
                </div>

                <div className="farewell__badge-wrapper">
                    <div className="farewell__badge">
                        <span className="farewell__badge-first">Layla</span>
                        <span className="farewell__badge-second">Charlotte</span>
                    </div>
                </div>
            </motion.div>

            {/* Static Image as requested */}
            <img src={tendido} alt="Collar de Corazones" className='farewell__tendido' />

            <footer className='farewell__footer'>
                <span className='farewell__footer-text'>
                    Hecha por amor con
                    <a href="https://www.instagram.com/tuamigoinvitaciones/" target="_blank" rel="noopener noreferrer">
                        TuAmigoInvitaciones
                    </a>
                </span>
            </footer>
        </div>
    )
}
