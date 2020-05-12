var contentful = require('contentful')

var client = contentful.createClient({
    space: 'r3zlzb8pl66r',
    accessToken: 'dI--1Or8PoJVjFWVYRdJiVO30VKtdzFtnPO8mIvz7hI'
})

const getHero = async () => {
    try {
        const hero = await client.getEntry({
            content_type: "hero"
        })
        return hero.fields
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getHero
}