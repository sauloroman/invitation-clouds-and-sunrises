import React from 'react'
import { Hero, Location, Presents, DressCode } from './'

export const Invitation: React.FC = () => {
    return (
        <div className='invitation'>
            <Hero />
            <Location />
            <Presents />
            <DressCode />
        </div>
    )
}
