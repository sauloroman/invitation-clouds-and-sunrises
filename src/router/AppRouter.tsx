import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Invitation } from '../modules/invitation/Invitation'
import { Reveal } from '../modules/reveal/Reveal'

export const AppRouter: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Reveal />} />
            <Route path="/invitation" element={<Invitation />} />
            <Route path="/*" element={<Navigate to={'/'} />} />
        </Routes>
    )
}