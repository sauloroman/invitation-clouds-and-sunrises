import React from 'react'
import decoration from '@/assets/images/sol-nube.png'
import carreola from '@/assets/images/carreola.png'
import osito from '@/assets/images/osito.png'
import sol from '@/assets/images/sol.png'

export const Presents: React.FC = () => {
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
                <div className="presents__decoration">
                    <img src={decoration} alt="Decoration" className='presents__decoration-img' />
                </div>
                <div className="presents__badge-wrapper">
                    <div className="presents__badge">
                        <span className="presents__badge-first">Consejos</span>
                        <span className="presents__badge-second">y TIPS</span>
                    </div>
                </div>

                <div className="presents__item">
                    <div className='presents__items-icon'>
                        <img src={osito} alt="osito" />
                    </div>
                    <div className='presents__item-content'>
                        <p className='presents__item-title'>Regalos</p>
                        <p>Cualquier presente es bienvenido,<br /> lo mas importante es tu compañía. </p>
                    </div>
                </div>
                <div className="presents__item presents__item--reverse">
                    <div className='presents__items-icon'>
                        <img src={carreola} alt="Carreola" />
                    </div>
                    <div className='presents__item-content'>
                        <p className='presents__item-title'>Carreola</p>
                        <p>Puedes traer tu carreola, no te preocupes, hay espacio suficiente. </p>
                    </div>
                </div>
                <div className="presents__item">
                    <div className='presents__items-icon'>
                        <img src={sol} alt="sol" />
                    </div>
                    <div className='presents__item-content'>
                        <p className='presents__item-title'>Cuidado</p>
                        <p>Recomendamos usar <br /> bloqueador solar para evitar</p>
                        <p>quemaduras en tus peques. </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
