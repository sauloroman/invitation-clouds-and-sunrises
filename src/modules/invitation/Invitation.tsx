import React from 'react'
import { Hero, Location, Presents, DressCode, Itinerary, Confirmation, Farewell } from './'

export const Invitation: React.FC = () => {
    return (
        <div className='invitation'>
            <Hero />
            <Location />
            <Presents />
            <DressCode />
            <Itinerary />
            <Confirmation />
            <Farewell />
        </div>
    )
}
