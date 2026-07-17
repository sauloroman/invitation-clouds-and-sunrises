import React, { useEffect, useRef, useState } from 'react'
import { Hero, Location, Presents, DressCode, Itinerary, Confirmation, Farewell } from './'
import song from '@/assets/song/song.mp3'

export const Invitation: React.FC = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        // Initialize HTMLAudioElement with the song URL
        const audio = new Audio(song);
        audio.loop = true;
        audio.volume = 0.45; // Soft volume suitable for background play
        audioRef.current = audio;

        // Play the music immediately
        // Autoplay works on almost all devices here since the user interacted with the screen (dragged the slider) on the previous page
        audio.play()
            .then(() => setIsPlaying(true))
            .catch((error) => {
                console.log("Autoplay was prevented by browser, waiting for user gesture:", error);
            });

        return () => {
            // Clean up and stop playback when leaving this route
            audio.pause();
            audioRef.current = null;
        };
    }, []);

    const togglePlay = () => {
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play()
                .then(() => setIsPlaying(true))
                .catch((err) => console.error("Playback failed:", err));
        }
    };

    return (
        <div className='invitation'>
            {/* Floating music control button */}
            <button
                className={`music-btn ${isPlaying ? 'music-btn--playing' : ''}`}
                onClick={togglePlay}
                aria-label="Controlar música"
            >
                {isPlaying ? (
                    // Speaker High SVG Icon
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14 3.23v17.54a1 1 0 0 1-1.57.83L7.1 17H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h4.1l5.33-4.6a1 1 0 0 1 1.57.83zm2 5.77a4 4 0 0 1 0 6v-6zm3-3a7 7 0 0 1 0 12V6z"/>
                    </svg>
                ) : (
                    // Speaker Slash SVG Icon
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 3.23v17.54a1 1 0 0 1-1.57.83L5.1 17H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h2.1l5.33-4.6A1 1 0 0 1 12 3.23zm8.41 5.36l1.42 1.42L20.41 12l1.42 1.42-1.42 1.42-1.42 1.42L19 13.41l-1.42 1.42-1.42-1.42L17.59 12l-1.42-1.42 1.42-1.42L19 10.59l1.41-1.4z"/>
                    </svg>
                )}
            </button>

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
