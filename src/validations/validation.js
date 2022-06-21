const isBefore = require('date-fns/isBefore')
const isAfter = require('date-fns/isAfter')

const checkCellPhoneBody   = (phone) => {
    const { model, price, brand, startDate, endDate, color, code } = phone;

    const newModel = model.trim();
    const newBrand = brand.trim();

    const dataSplit = startDate.split('/');
    const day = dataSplit[0]; 
    const month = dataSplit[1]; 
    const year = dataSplit[2]; 
    const date = new Date(year, month -1, day);


    const dataSplit2 = endDate.split('/');
    const day2 = dataSplit2[0]; 
    const month2 = dataSplit2[1]; 
    const year2 = dataSplit2[2]; 
    const date1 = new Date(year2, month2 -1, day2);


    const pastDate = new Date(2018, 11, 25);
    

    const isAfterDate = isBefore(pastDate,date);


    const isAfterDate1 = isAfter(date1,date);


    
    if(newModel.length < 2 || newModel.length > 255 || newBrand.length < 2 || newBrand.length > 255) {
        return "Os campos tem poucos caracteres ou caracteres demais.";
    }

    if(price < 1){
        return "O Campo preço deve ser maior que 0."
    }
    
    if(isAfterDate === false){
        return "O campo startDate não pode ser menor que 25/12/2018."
    }

    if(isAfterDate1 === false){
        return "O campo endDate não pode ser menor que o campo startDate"
    }

    if(color !== 'BLACK' && color !== 'WHITE' && color !== 'GOLD' && color !== 'PINK'){
       return "O campo Cor só permite BLACK, WHITE, GOLD ou PINK."
    }

    if(code){
        if(code.length !== 8){
            return "O campo code devem ter 8 caracteres."
        }
    }

}


module.exports = {
    checkCellPhoneBody,
}