const { format } =require ('date-fns');

const data = new Date(1991, 08, 12);

const data2 = '1002/07/12'

const dataSplit = data2.split('/');

const day = dataSplit[0]; 
const month = dataSplit[1]; 
const year = dataSplit[2]; 

const data3 = new Date(year, month -1, day);

const newData = format(data3, 'dd/MM/yyyy');


console.log(newData);