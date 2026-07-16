import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Invitation } from '../modules/invitation/Invitation'

export const AppRouter: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Invitation />} />
        </Routes>
    )
}