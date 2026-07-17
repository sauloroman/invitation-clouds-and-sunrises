import React from 'react'
import { motion } from 'framer-motion'
import bg from '@/assets/images/itinerario-fondo.png'
import luna from '@/assets/images/luna.png'
import sombrero from '@/assets/images/sombrero.png'
import dulces from '@/assets/images/dulces.png'
import magia from '@/assets/images/show-magia.png'
import pastel from '@/assets/images/pastel.png'
import piñata from '@/assets/images/piñata.png'
import estrellaSad from '@/assets/images/estrella-triste.png'

const itinerary = [
    {
        time: '03:00 P.M',
        title: 'Bienvenida',
        description: 'Que comience la diversión',
        img: sombrero
    },
    {
        time: '04:00 P.M',
        title: 'Comida',
        description: 'Un momento para compartir',
        img: dulces,
    },
    {
        time: '05:00 P.M',
        title: 'Show de magia',
        description: 'La diversion esta en su punto',
        img: magia
    },
    {
        time: '06:00 P.M',
        title: 'Pastel',
        description: 'Sopla fuerte las velas',
        img: pastel
    },
    {
        time: '06:30 P.M',
        title: 'Piñata',
        description: 'A romper la piñata',
        img: piñata
    },
    {
        time: '07:00 P.M',
        title: 'Fin de la fiesta',
        description: 'Nos vamos',
        img: estrellaSad
    }
]

export const Itinerary: React.FC = () => {
    const bounceTransition = {
        type: "spring" as const,
        stiffness: 90,
        damping: 14,
        mass: 0.8
    };

    return (
        <section className='itinerary'>
            <div className="itinerary__background" style={{ backgroundImage: `url(${bg})` }}></div>
            <div className="itinerary__container">

                <motion.div
                    className="itinerary__icon"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ ...bounceTransition, delay: 0.1 }}
                >
                    <img src={luna} alt="luna" />
                </motion.div>

                <motion.div
                    className="itinerary__badge-wrapper"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ ...bounceTransition, delay: 0.2 }}
                >
                    <div className="itinerary__badge">
                        <span className="itinerary__badge-first">Los Planes</span>
                        <span className="itinerary__badge-second">del dia</span>
                    </div>
                </motion.div>

                <ul className='itinerary__list'>
                    {itinerary.map((item, index) => (
                        <motion.li
                            key={`${item.title}-${index}`}
                            initial={{ opacity: 0, scale: 0.9, y: 35 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={bounceTransition}
                            style={{ listStyle: 'none' }}
                        >
                            <div className="itinerary__item">
                                <div className="itinerary__item-img">
                                    <img src={item.img} alt={item.title} />
                                </div>
                                <div className="itinerary__item-content">
                                    <span>{item.time}</span>
                                    <p>{item.title}</p>
                                    <span>{item.description}</span>
                                </div>
                            </div>
                        </motion.li>
                    ))}
                </ul>

            </div>
        </section>
    )
}
