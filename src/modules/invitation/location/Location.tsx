import React from 'react'
import { motion } from 'framer-motion'
import marco from '@/assets/images/marco-locations.png'
import { openExternalLink } from '@/common/helpers/navigation'
import nube from '@/assets/images/nube-locations.png'
import globo from '@/assets/images/globo-colores.png'

export const Location: React.FC = () => {
    const bounceTransition = {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        mass: 0.8
    };

    return (
        <section className='locations'>
            <div className="locations__container">
                <motion.p
                    initial={{ opacity: 0, scale: 0.85, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ ...bounceTransition, delay: 0.1 }}
                >
                    <span className='locations__name'>Layla Charlotte</span> quiere invitarte
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, scale: 0.85, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ ...bounceTransition, delay: 0.25 }}
                >
                    A festejar sus <span className='locations__age'>8 años</span>
                </motion.p>

                <motion.div
                    className="locations__content"
                    initial={{ opacity: 0, scale: 0.9, y: 40 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ ...bounceTransition, delay: 0.4 }}
                >
                    <img src={marco} alt="Marco" className='locations__content-img' />
                    <div className="locations__content-main">
                        <div className='locations__content-main-title'>
                            <p>Ubicación</p>
                        </div>

                        <div className='locations__item'>
                            <span className='locations__item-title'>Salón</span>
                            <span className='locations__item-name'>Jardín La Caballa</span>
                            <span className='locations__item-address'>Vivero de La Floresta 906, Casa Blanca, 20297 Aguascalientes, Ags.</span>
                            <div className="locations__button">
                                <button onClick={() => openExternalLink('https://maps.app.goo.gl/ggvCCCQ61RxehkXc6')} className='btn btn--green'>Ver Ubicación</button>
                            </div>
                        </div>
                    </div>
                    <img src={nube} alt="" className='locations__nube locations__nube--left' />
                    <img src={globo} alt="" className='locations__nube locations__nube--right' />
                </motion.div>

                <div className="locations__footer-wrapper">
                    <motion.p
                        className='locations__text'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        ¡Te esperamos!
                    </motion.p>
                    <motion.p
                        className='locations__time'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.25 }}
                    >
                        en punto de las <span className='locations__name'>03:00 p. m.</span>
                    </motion.p>
                </div>
            </div>
        </section>
    )
}
