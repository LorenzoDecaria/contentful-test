import React, { useEffect, useState } from 'react'
import useHero from '../hooks/useHero'


const promise = useHero()


const Hero = () => {
    const [hero, setHero] = useState()

    useEffect( () => {
        promise
        .then( hero => setHero(hero) )
        .catch()
    }, [])

    return (
        <div>
            {hero &&
                <div>
                    <h6>{hero.greeting}</h6>
                    <h1>{hero.title}</h1>
                    <h3>{hero.subtitle}</h3>
                    <p>{hero.description}</p>
                    <button type="button">{hero.callToActionText}</button>
                </div>
            }
        </div>
    )
}

export default Hero
