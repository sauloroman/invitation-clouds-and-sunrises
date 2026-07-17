import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useReveal } from '@/common/hooks/useReveal'
import { RevealRight } from './RevealRight/RevealRight'
import { RevealLeft } from './RevealLeft/RevealLeft'
import start from '@/assets/images/estrella.png'

export const Reveal: React.FC = () => {
    const navigate = useNavigate();

    const {
        containerRef,
        containerWidth,
        x,
        leftWidth,
        handleDrag
    } = useReveal({
        onExtremeReached: () => navigate('/invitation'),
        threshold: 15
    });

    return (
        <div className="reveal" ref={containerRef}>
            <div className="reveal__pane reveal__pane--right">
                <RevealRight />
            </div>

            <motion.div
                className="reveal__pane reveal__pane--left"
                style={{ width: leftWidth }}
            >
                <RevealLeft />
            </motion.div>

            <motion.div
                className="reveal__handle"
                drag="x"
                dragConstraints={{ left: 0, right: containerWidth }}
                dragElastic={0}
                dragMomentum={false}
                style={{ x }}
                onDrag={handleDrag}
            >
                <div className="reveal__handle-line"></div>
                <div className="reveal__handle-container">
                    <span className="reveal__handle-label">Desliza</span>
                    <div className="reveal__handle-button">
                        <img src={start} alt="start" />
                    </div>
                </div>
                <div className="reveal__handle-line"></div>
            </motion.div>
        </div>
    )
}
