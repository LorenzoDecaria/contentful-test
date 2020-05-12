import { getHero } from '../contentful/Client'

const useHeroData = () => {
    const heroData = getHero()
    // console.log(heroData)
    return heroData
}

export { useHeroData as default }