const connection = require('../database/connection');

const deletePhone = async (req, res) => {
    const { id } = req.params
    

    try {
        const queryDeletePhone =  'delete from cellphones where code = $1'

        const deletePhone = await connection.query(queryDeletePhone, [id]);

        if(deletePhone.rowCount === 0){
            return res.status(500).json({ "Mensagem": "Celular não deletado" })
        }
        return res.status(201).json({ "Mensagem": "Celular deletado com sucesso" });
        
    } catch (error) {
        return res.status(500).json({ "Mensagem": "Erro desconhecido " + error.mensagem })
    }
};

module.exports = {
    deletePhone
}