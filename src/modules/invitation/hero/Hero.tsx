import React from 'react'
import nube from '@/assets/images/nube.png'
import mariposa from '@/assets/images/mariposa-1.png'
import mariposa2 from '@/assets/images/mariposa-2.png'
import marco from '@/assets/images/marco-1.png'
import globo1 from '@/assets/images/globo-amarillo.png'
import globo2 from '@/assets/images/globo-verde.png'
import estrella from '@/assets/images/estrella.png'

export const Hero: React.FC = () => {
    return (
        <div className='hero'>
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

            <div className="hero__container">
                <div className="hero__message">¡Estás invitado!</div>

                <div className='hero__name'>
                    <div className="hero__name-text">
                        <p>Layla Charlotte</p>
                    </div>
                    <img className='hero__name-cloud' src={nube} alt="Nube" />
                </div>

                <div className="hero__badge-wrapper">
                    <img className="hero__butterfly" src={mariposa} alt="Mariposa" />
                    <div className="hero__badge">
                        <span className="hero__badge-first">BIRTHDAY</span>
                        <span className="hero__badge-second">Party</span>
                    </div>
                    <img className="hero__butterfly-pink" src={mariposa2} alt="Mariposa 2" />
                </div>

                <div className="hero__info">
                    <img src={marco} alt="Marco" className="hero__info-img" />
                    <div className="hero__info-text">
                        <p className="hero__info-month">Agosto</p>
                        <p className="hero__info-day">24</p>
                        <p className="hero__info-weekday">Viernes</p>
                        <p className="hero__info-time">A las 3:00 p.m</p>
                    </div>
                    <img className='hero__info-balloon hero__info-balloon--yellow-left' src={globo1} alt="Globo Amarillo Izquierda" />
                    <img className='hero__info-balloon hero__info-balloon--green-left' src={globo2} alt="Globo Verde Izquierda" />
                    <img className='hero__info-balloon hero__info-balloon--yellow-right' src={globo1} alt="Globo Amarillo Derecha" />
                    <img className='hero__info-balloon hero__info-balloon--green-right' src={globo2} alt="Globo Verde Derecha" />
                </div>

                <div className="hero__bottom">
                    <img src={estrella} alt="Estrella amarilla" />
                </div>
            </div>
        </div>
    )
}
