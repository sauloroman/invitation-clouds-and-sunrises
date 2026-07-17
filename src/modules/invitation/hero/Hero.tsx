import React from 'react'
import { motion } from 'framer-motion'
import numero from '@/assets/images/8.png'
import mariposa from '@/assets/images/mariposa-1.png'
import mariposa2 from '@/assets/images/mariposa-2.png'
import marco from '@/assets/images/marco-1.png'
import globo1 from '@/assets/images/globo-amarillo.png'
import globo2 from '@/assets/images/globo-verde.png'
import globoColores from '@/assets/images/globo-colores.png'
import estrella from '@/assets/images/estrella.png'

export const Hero: React.FC = () => {
    return (
        <div className='hero'>
            {/* Dots background wrapped in a motion overlay for a smooth fade-in */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >
                <div className="hero__dot hero__dot--1"></div>
                <div className="hero__dot hero__dot--2"></div>
                <div className="hero__dot hero__dot--3"></div>
                <div className="hero__dot hero__dot--4"></div>
                <div className="hero__dot hero__dot--5"></div>
                <div className="hero__dot hero__dot--6"></div>
                <div className="hero__dot hero__dot--7"></div>
                <div className="hero__dot hero__dot--8"></div>
                <div className="hero__dot hero__dot--9"></div>
                <div className="hero__dot hero__dot--10"></div>
                <div className="hero__dot hero__dot--11"></div>
                <div className="hero__dot hero__dot--12"></div>
                <div className="hero__dot hero__dot--13"></div>
                <div className="hero__dot hero__dot--14"></div>
                <div className="hero__dot hero__dot--15"></div>
                <div className="hero__dot hero__dot--16"></div>
                <div className="hero__dot hero__dot--17"></div>
                <div className="hero__dot hero__dot--18"></div>
                <div className="hero__dot hero__dot--19"></div>
                <div className="hero__dot hero__dot--20"></div>
                <div className="hero__dot hero__dot--21"></div>
                <div className="hero__dot hero__dot--22"></div>
                <div className="hero__dot hero__dot--23"></div>
                <div className="hero__dot hero__dot--24"></div>
                <div className="hero__dot hero__dot--25"></div>
                <div className="hero__dot hero__dot--26"></div>
                <div className="hero__dot hero__dot--27"></div>
                <div className="hero__dot hero__dot--28"></div>
                <div className="hero__dot hero__dot--29"></div>
                <div className="hero__dot hero__dot--30"></div>
                <div className="hero__dot hero__dot--31"></div>
                <div className="hero__dot hero__dot--32"></div>
            </motion.div>

            <motion.div
                className="hero__corner-balloon hero__corner-balloon--left"
                initial={{ opacity: 0, y: -100, x: -100, rotate: -35 }}
                animate={{ opacity: 1, y: 0, x: 0, rotate: -15 }}
                transition={{ type: "spring", stiffness: 60, damping: 15, delay: 0.6 }}
            >
                <img src={globoColores} alt="Globo Colores Esquina Izquierda" />
            </motion.div>

            <div className="hero__container">
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="hero__message"
                >
                    ¡Estás invitado!
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.7, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 90, damping: 14, delay: 0.15 }}
                    className='hero__name'
                >
                    <div className="hero__name-text">
                        <img className='hero__name-star' src={numero} alt="Numero" />
                        <p>Mi Cumpleaños</p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.5, rotate: -3 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 80, damping: 12, delay: 0.35 }}
                    style={{ display: 'flex', justifyContent: 'center', width: '100%' }}
                >
                    <div className="hero__badge-wrapper">
                        <img className="hero__butterfly" src={mariposa} alt="Mariposa" />
                        <div className="hero__badge">
                            <span className="hero__badge-first">Layla</span>
                            <span className="hero__badge-second">Charlotte</span>
                        </div>
                        <img className="hero__butterfly-pink" src={mariposa2} alt="Mariposa 2" />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.85, y: 25 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 75, damping: 14, delay: 0.55 }}
                    className="hero__info"
                >
                    <img src={marco} alt="Marco" className="hero__info-img" />
                    <div className="hero__info-text">
                        <p className="hero__info-month">Agosto</p>
                        <p className="hero__info-day">24</p>
                        <p className="hero__info-weekday">Viernes</p>
                        <p className="hero__info-time">A las 3:00 p.m</p>
                    </div>

                    <motion.div
                        className="hero__info-balloon-wrapper hero__info-balloon-wrapper--yellow-left"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 90, damping: 10, delay: 0.8 }}
                    >
                        <img className='hero__info-balloon hero__info-balloon--yellow-left' src={globo1} alt="Globo Amarillo Izquierda" />
                    </motion.div>

                    <motion.div
                        className="hero__info-balloon-wrapper hero__info-balloon-wrapper--green-left"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 90, damping: 10, delay: 0.9 }}
                    >
                        <img className='hero__info-balloon hero__info-balloon--green-left' src={globo2} alt="Globo Verde Izquierda" />
                    </motion.div>

                    <motion.div
                        className="hero__info-balloon-wrapper hero__info-balloon-wrapper--yellow-left-lower"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 90, damping: 10, delay: 1.0 }}
                    >
                        <img className='hero__info-balloon hero__info-balloon--yellow-left-lower' src={globo1} alt="Globo Amarillo Izquierda Abajo" />
                    </motion.div>

                    <motion.div
                        className="hero__info-balloon-wrapper hero__info-balloon-wrapper--yellow-right"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 90, damping: 10, delay: 1.1 }}
                    >
                        <img className='hero__info-balloon hero__info-balloon--yellow-right' src={globo1} alt="Globo Amarillo Derecha" />
                    </motion.div>

                    <motion.div
                        className="hero__info-balloon-wrapper hero__info-balloon-wrapper--green-right"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 90, damping: 10, delay: 1.2 }}
                    >
                        <img className='hero__info-balloon hero__info-balloon--green-right' src={globo2} alt="Globo Verde Derecha" />
                    </motion.div>

                    <motion.div
                        className="hero__info-balloon-wrapper hero__info-balloon-wrapper--yellow-right-lower"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 90, damping: 10, delay: 1.3 }}
                    >
                        <img className='hero__info-balloon hero__info-balloon--yellow-right-lower' src={globo1} alt="Globo Amarillo Derecha Abajo" />
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 12, delay: 0.75 }}
                    className="hero__bottom"
                >
                    <img className='hero__name-star' src={estrella} alt="Nube" />
                </motion.div>
            </div>
        </div>
    )
}
