import React, { useEffect } from "react";
import { useHero } from '../hooks/useHero'


const Hero = () => {
  const { hero, loading } = useHero();

  useEffect(() => {
    if (hero) {
      console.log(hero);
    }
  }, [hero, loading]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {hero && (
        <div>
          <h6>{hero.greeting}</h6>
          <h1>{hero.title}</h1>
          <h3>{hero.subtitle}</h3>
          <p>{hero.description}</p>
          <button type="button">{hero.callToActionText}</button>
        </div>
      )}
    </div>
  );
};
export default Hero;
