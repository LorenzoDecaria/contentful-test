var contentful = require('contentful')

var client = contentful.createClient({
    space: 'r3zlzb8pl66r',
    accessToken: 'dI--1Or8PoJVjFWVYRdJiVO30VKtdzFtnPO8mIvz7hI'
})

const getHero = async () => {

    client.getEntries()
    .then((response) => console.log(response))
    .catch(console.error)


    // try {
    //     // let hero = await client.getContentType("hero")
    //     const hero = await client.getEntries()
    //     console.log("Data: " + hero)
    //     // return hero
    // } catch (error) {
    //     console.log(error)
    // }
}

getHero()
