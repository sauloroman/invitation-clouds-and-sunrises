import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import numero from '@/assets/images/8.png'
import mariposa from '@/assets/images/mariposa-1.png'
import mariposa2 from '@/assets/images/mariposa-2.png'
import marco from '@/assets/images/marco-1.png'
import globos from '@/assets/images/globos.png'
import estrella from '@/assets/images/estrella.png'
import waveCorner from '@/assets/images/wave-corner.png'

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

            <div className="hero__back-wave">
                <img src={waveCorner} alt="Onda Esquina" className="hero__wave-corner-img" />
                <Link to="/" className="hero__back-btn" aria-label="Regresar">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </Link>
            </div>

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
                        <p className="hero__info-month">Julio</p>
                        <p className="hero__info-day">24</p>
                        <p className="hero__info-weekday">Viernes</p>
                        <p className="hero__info-time">A las 3:00 p.m</p>
                    </div>

                    {/* Group of balloons on the left */}
                    <motion.div
                        className="hero__info-balloon-group hero__info-balloon-group--left"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 80, damping: 12, delay: 0.8 }}
                    >
                        <img className='hero__info-balloon-img' src={globos} alt="Globos Izquierda" />
                    </motion.div>

                    {/* Group of balloons on the right */}
                    <motion.div
                        className="hero__info-balloon-group hero__info-balloon-group--right"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 80, damping: 12, delay: 1.0 }}
                    >
                        <img className='hero__info-balloon-img' src={globos} alt="Globos Derecha" />
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
