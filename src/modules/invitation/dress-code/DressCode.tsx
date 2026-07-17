import React from 'react'
import { motion } from 'framer-motion'
import decoration from '@/assets/images/ropa.png'

export const DressCode: React.FC = () => {
    return (
        <section className='dress-code'>
            <motion.div
                className="dress-code__container"
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                    type: "spring",
                    stiffness: 90,
                    damping: 14,
                    mass: 0.8,
                    delay: 0.4
                }}
            >
                <h2 className='dress-code__title'>Código de Vestimenta</h2>
                <p className='dress-code__text'>Puedes traer lo que gustes, saca tu creatividad y luce tu mejor ropa</p>
            </motion.div>

            <div className="dress-code__image">
                <img src={decoration} alt="Ropa" />
            </div>
        </section>
    )
}
