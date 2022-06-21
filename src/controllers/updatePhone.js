const connection = require('../database/connection');
const  { checkCellPhoneBody } = require('../validations/validation'); 

const updatePhone = async (req, res) => {
    const { model, price, brand , color } = req.body;
    const { id } = req.params;
    
    const error = checkCellPhoneBody(req.body);
    
    if(error){
        return res.status(400).json({ "Message": error });
    }

    try {
        const update ='update cellphones set model=$1, price=$2, brand=$3, color=$4 where code = $5';
        const detailUpdate = await connection.query(update, [model, price, brand, color, id]);
        
        if (detailUpdate.rowCount === 0) {
            return res.status(500).json({ "Message": "Falha na Atualização." });
        }

        return res.status(200).json({ "Message": "Atualização Realizada com Sucesso." })

    } catch (error) {
        return res.status(500).json({ "Message": "Erro desconhecido " + error.mensagem })
    }
};

module.exports = {
    updatePhone
}