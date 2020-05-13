import { useEffect, useState } from 'react'
import { getHero } from '../contentful/Client'

export const useHero = function () {
    const [hero, setHero] = useState(null);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      setLoading(true);

      async function loadHero() {
        const heroData = await getHero();
        setHero(heroData);
        setLoading(false);
      }
      
      loadHero();
    }, []);
  
    return { hero, loading };
  };