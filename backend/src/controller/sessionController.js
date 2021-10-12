const connection = require ('../database/connection');

module.exports = {async create (request,response){
    const {password} = request.body;
    const {email} = request.body;
    



    const user =  await connection('users')
        .where('email',email )
        .andWhere('password',password)
        .select('name')
        .first();

        if(!user){
            return response.status(400).json({error: 'Usuário ou senha não encontrado.'})
        }

        return response.json(user);
}};