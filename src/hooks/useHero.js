import { getHero } from '../contentful/Client'

const useHero = async () => {
    try {
        const heroData = await getHero()
        return heroData
    } catch (error) {
        console.log(error)
    }
}

export { useHero as default }