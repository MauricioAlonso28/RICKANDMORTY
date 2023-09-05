const axios = require('axios')
const url = 'https://rickandmortyapi.com/api/character/';

async function getCharById(req, res){
    try {
        const { id } = req.params;
        const { data } = await axios(`${url}${id}`)
        
        if(!data.name) throw new Error(`ID: ${id} Not Found`)

        const character = {
            id: data.id,
            name: data.name,
            species: data.species,
            origin: data.origin,
            image: data.image,
            gender: data.gender,
            status: data.status 
        }
        return res.status(200).json(character)
    } catch (error) {
        error.message.includes('ID')
        ? res.status(404).json(error.message)
        : res.status(500).json(error.message)
    }
}


module.exports = {
    getCharById,
}