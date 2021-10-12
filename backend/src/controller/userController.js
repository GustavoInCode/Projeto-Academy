const connection = require ('../database/connection');
const crypto = require('crypto');

module.exports = {

    async index(request, response) {
        const users = await connection('users').select('*');
        return response.json(users);
    },

    async create (request, response){
        const {name, email, password, team, tel} = request.body;
        const text = 'Seja Bem Vindo a Ramo Academy.';
        const id = crypto.randomBytes(4).toString('hex');

        await connection('users').insert({
            id,
            name,
            email,
            password,
            team,
            tel,
        })

        return response.json({
            text,
            id,
            name,
            email,
            password,
            team,
            tel,
        }
        )
    }
};