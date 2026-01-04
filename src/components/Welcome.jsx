import React, { useRef } from 'react'

const renderText = (text, className, baseWeight = 400) => {
    return [...text].map((char, index) => (
        <span key={index} className={className} style={{ fontVariationSettings: baseWeight + index }} >{char}</span>)
    );
}

const Welcome = () => {
    const titleRef = useRef(null)
    const subtitleRef = useRef(null)

    return (
        <section id='welcome'>
            <div>
                <p ref={subtitleRef}>Hey I'm Olyad Welcome to my</p>
                <h1 ref={titleRef} className='mt-7'>portfolio</h1>
            </div>
            <div className='small-screen'>
                <p>This portfolio is best viewed on a desktop/tablet screen</p>
            </div>
        </section>
    )
}

export default Welcome