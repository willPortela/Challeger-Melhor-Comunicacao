const connection = require('../database/connection');

const listSinglePhone = async (req, res) => {
    
    const { id } = req.params

    try {
        const cell = 'select * from cellphones where code = $1'

        const list = await connection.query(cell, [id]);

        if(list.rowCount === 0){
            return res.status(400).json({ "Message": "Celular não encontrado." });
        }

        return res.status(201).json(list.rows)
    } catch (error) {
        return res.status(500).json({ "Message": "Erro desconhecido " + error.message })
    }
};

module.exports = {
    listSinglePhone
}