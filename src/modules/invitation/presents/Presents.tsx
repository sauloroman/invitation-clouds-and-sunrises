import React from 'react'
import { motion } from 'framer-motion'
import decoration from '@/assets/images/sol-nube.png'
import carreola from '@/assets/images/carreola.png'
import osito from '@/assets/images/osito.png'
import sol from '@/assets/images/sol.png'

export const Presents: React.FC = () => {
    const bounceTransition = {
        type: "spring" as const,
        stiffness: 90,
        damping: 14,
        mass: 0.8
    };

    return (
        <section className='presents'>
            <div className="presents__dot presents__dot--1"></div>
            <div className="presents__dot presents__dot--2"></div>
            <div className="presents__dot presents__dot--3"></div>
            <div className="presents__dot presents__dot--4"></div>
            <div className="presents__dot presents__dot--5"></div>
            <div className="presents__dot presents__dot--6"></div>
            <div className="presents__dot presents__dot--7"></div>
            <div className="presents__dot presents__dot--8"></div>
            <div className="presents__dot presents__dot--9"></div>
            <div className="presents__dot presents__dot--10"></div>
            <div className="presents__dot presents__dot--11"></div>
            <div className="presents__dot presents__dot--12"></div>

            <div className="presents__container">
                <motion.div
                    className="presents__decoration"
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ ...bounceTransition, delay: 0.1 }}
                >
                    <img src={decoration} alt="Decoration" className='presents__decoration-img' />
                </motion.div>

                <motion.div
                    className="presents__badge-wrapper"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ ...bounceTransition, delay: 0.25 }}
                >
                    <div className="presents__badge">
                        <span className="presents__badge-first">Consejos</span>
                        <span className="presents__badge-second">y TIPS</span>
                    </div>
                </motion.div>

                <motion.div
                    className="presents__item"
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={bounceTransition}
                >
                    <div className='presents__items-icon presents__items-icon--bear'>
                        <img src={osito} alt="osito" />
                    </div>
                    <div className='presents__item-content'>
                        <p className='presents__item-title'>Regalos</p>
                        <p>Cualquier presente es bienvenido,<br /> lo mas importante es tu compañía. </p>
                    </div>
                </motion.div>

                <motion.div
                    className="presents__item presents__item--reverse"
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={bounceTransition}
                >
                    <div className='presents__items-icon presents__items-icon--stroller'>
                        <img src={carreola} alt="Carreola" />
                    </div>
                    <div className='presents__item-content'>
                        <p className='presents__item-title'>Carreola</p>
                        <p>Puedes traer tu carreola, no te preocupes, hay espacio suficiente. </p>
                    </div>
                </motion.div>

                <motion.div
                    className="presents__item"
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={bounceTransition}
                >
                    <div className='presents__items-icon presents__items-icon--sun'>
                        <img src={sol} alt="sol" />
                    </div>
                    <div className='presents__item-content'>
                        <p className='presents__item-title'>Cuidado</p>
                        <p>Recomendamos usar <br /> bloqueador solar para evitar</p>
                        <p>quemaduras en tus peques. </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
