import React from 'react'
import { motion } from 'framer-motion'
import marco from '@/assets/images/marco-rosa.png'
import mariposa from '@/assets/images/mariposa-3.png'
import sol from '@/assets/images/sol-feliz.png'
import nube from '@/assets/images/nube.png'

export const Confirmation: React.FC = () => {
    const handleConfirmByMessage = () => {
        window.open('https://wa.me/521234567890?text=¡Hola!%20Confirmo%20mi%20asistencia%20a%20la%20fiesta%20de%20Layla%20Charlotte.%20🎈✨', '_blank');
    };

    const handleConfirmByPhone = () => {
        window.open('tel:521234567890');
    };

    const bounceTransition = {
        type: "spring" as const,
        stiffness: 90,
        damping: 14,
        mass: 0.8
    };

    return (
        <section className='confirmation'>
            {/* SVG waves remain static */}
            <svg
                viewBox="0 0 1440 590"
                xmlns="http://www.w3.org/2000/svg"
                className="confirmation__waves confirmation__waves--top"
            >
                <path
                    d="M 0,600 L 0,150 C 106.99521531100481,138.1531100478469 213.99043062200963,126.30622009569379 314,113 C 414.0095693779904,99.69377990430621 507.0334928229664,84.92822966507177 604,109 C 700.9665071770336,133.07177033492823 801.8755980861245,195.98086124401914 887,204 C 972.1244019138755,212.01913875598086 1041.4641148325359,165.14832535885168 1131,147 C 1220.5358851674641,128.85167464114832 1330.267942583732,139.42583732057415 1440,150 L 1440,600 L 0,600 Z"
                    stroke="none"
                    strokeWidth="0"
                    fill="#bfa0c1"
                    fillOpacity="0.53"
                    className="path-top-0"
                />
                <path
                    d="M 0,600 L 0,350 C 126.46889952153111,305.7799043062201 252.93779904306223,261.5598086124402 334,282 C 415.0622009569378,302.4401913875598 450.71770334928226,387.5406698564593 538,400 C 625.2822966507177,412.4593301435407 764.1913875598087,352.2775119617225 886,327 C 1007.8086124401913,301.7224880382775 1112.5167464114832,311.3492822966507 1202,321 C 1291.4832535885168,330.6507177033493 1365.7416267942585,340.32535885167465 1440,350 L 1440,600 L 0,600 Z"
                    stroke="none"
                    strokeWidth="0"
                    fill="#bfa0c1"
                    fillOpacity="1"
                    className="path-top-1"
                />
            </svg>

            {/* Animated Header texts */}
            <motion.div 
                className="confirmation__header"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...bounceTransition, delay: 0.1 }}
            >
                <h2 className='confirmation__header-title'>Confirma tu asistencia</h2>
                <p className="confirmation__header-text">
                    Tu presencia es muy valiosa para nosotros. Por favor, confírmanos antes del día de la fiesta.
                </p>
            </motion.div>

            <div className="confirmation__container">
                {/* Card 1: Confirm by message */}
                <motion.div 
                    className="confirmation__marco-wrapper"
                    initial={{ opacity: 0, scale: 0.9, y: 40 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={bounceTransition}
                >
                    <img src={mariposa} alt="Confirmación por Mensaje" className="confirmation__mariposa-img" />
                    <img src={marco} alt="Confirmación por Mensaje" className="confirmation__marco-img" />
                    <div className="confirmation__card-content">
                        <h3 className="confirmation__title">¿Nos acompañas?</h3>
                        <p className="confirmation__subtitle">Esperamos compartir contigo este gran día</p>
                        <div className="confirmation__actions">
                            <button onClick={handleConfirmByMessage} className="btn btn--green">
                                Confirmar por Mensaje
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Card 2: Confirm by phone */}
                <motion.div 
                    className="confirmation__marco-wrapper"
                    initial={{ opacity: 0, scale: 0.9, y: 40 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ ...bounceTransition, delay: 0.15 }}
                >
                    <img src={marco} alt="Confirmación por Teléfono" className="confirmation__marco-img" />
                    <img src={sol} alt="Confirmación por Mensaje" className="confirmation__sol-img" />
                    <img src={nube} alt="Confirmación por Mensaje" className="confirmation__nube-img" />
                    <div className="confirmation__card-content">
                        <h3 className="confirmation__title">Llamar para confirmar</h3>
                        <p className="confirmation__subtitle">Puedes confirmar tu asistencia llamando por teléfono.</p>
                        <div className="confirmation__actions">
                            <button onClick={handleConfirmByPhone} className="btn btn--green">
                                Confirmar por Teléfono
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>

            <svg
                viewBox="0 0 1440 590"
                xmlns="http://www.w3.org/2000/svg"
                className="confirmation__waves confirmation__waves--bottom transition duration-300 ease-in-out delay-150"
            >
                <path
                    d="M 0,600 L 0,150 C 77.34928229665073,118.64114832535886 154.69856459330146,87.28229665071771 266,78 C 377.30143540669854,68.71770334928229 522.555023923445,81.51196172248802 622,107 C 721.444976076555,132.48803827751198 775.0813397129189,170.66985645933016 860,183 C 944.9186602870811,195.33014354066984 1061.1196172248804,181.8086124401914 1163,172 C 1264.8803827751196,162.1913875598086 1352.44019138756,156.0956937799043 1440,150 L 1440,600 L 0,600 Z"
                    stroke="none"
                    strokeWidth="0"
                    fill="#bfa0c1"
                    fillOpacity="0.53"
                    className="path-bottom-0"
                    transform="rotate(-180 720 300)"
                />
                <path
                    d="M 0,600 L 0,350 C 112.91866028708137,386.5933014354067 225.83732057416273,423.1866028708134 334,407 C 442.16267942583727,390.8133971291866 545.5693779904306,321.8468899521531 622,302 C 698.4306220095694,282.1531100478469 747.8851674641148,311.42583732057415 823,318 C 898.1148325358852,324.57416267942585 998.88995215311,308.44976076555025 1106,310 C 1213.11004784689,311.55023923444975 1326.5550239234449,330.77511961722485 1440,350 L 1440,600 L 0,600 Z"
                    stroke="none"
                    strokeWidth="0"
                    fill="#bfa0c1"
                    fillOpacity="1"
                    className="path-bottom-1"
                    transform="rotate(-180 720 300)"
                />
            </svg>
        </section>
    )
}
