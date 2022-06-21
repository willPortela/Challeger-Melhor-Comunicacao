const connection = require('../database/connection');
const  { checkCellPhoneBody } = require('../validations/validation'); 

const registerPhone = async (req, res) => {
    const { model, price, brand, startDate, endDate, color, code } = req.body;

    const error = checkCellPhoneBody(req.body);
    
    if(error){
        return res.status(400).json({ "Message": error });
    }

    try {
        
        const queryCellphone = 'select * from cellPhones where code = $1';
        const regCellPhone = await connection.query(queryCellphone, [code]);
        
        if (regCellPhone.rowCount > 0) {

            return res.status(400).json({ "Message": "Codigo já cadastrado." });
        }

        
        const queryRegisterCellPhone ='insert into cellPhones (model, price, brand, startDate, endDate, color, code) values ($1, $2, $3, $4, $5, $6, $7)';


        const { rowCount } = await connection.query(queryRegisterCellPhone, [model.trim(), price, brand.trim(), startDate, endDate, color, code]);

        if (rowCount === 0) {
            return res.status(400).json({ "Message": "Celular não cadastrado!" });
        }

        return res.status(200).json("Celular cadastrado com sucesso!");

    } catch (error) {
        return res.status(500).json({ "Message": "Erro desconhecido " + error.mensagem });
    }
}

module.exports = {
    registerPhone
}