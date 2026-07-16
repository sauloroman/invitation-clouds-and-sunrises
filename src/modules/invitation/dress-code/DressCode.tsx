import React from 'react'
import decoration from '@/assets/images/ropa.png'

export const DressCode: React.FC = () => {
    return (
        <section className='dress-code'>
            <div className="dress-code__container">
                <h2 className='dress-code__title'>Código de Vestimenta</h2>
                <p className='dress-code__text'>Puedes traer lo que gustes, saca tu creatividad y luce tu mejor ropa</p>
            </div>
            <div className="dress-code__image">
                <img src={decoration} alt="Ropa" />
            </div>
        </section>
    )
}
