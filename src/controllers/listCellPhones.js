const connection = require('../database/connection');


const listCellphones = async (req, res) => {

    try {
        
        const listCells = 'select * from cellphones'
        const cell = await connection.query(listCells);

        return res.status(201).json(cell.rows);


    } catch (error) {
        return res.status(500).json({ "Message": "Erro desconhecido " + error.message })
    }
};

module.exports = {
    listCellphones
}