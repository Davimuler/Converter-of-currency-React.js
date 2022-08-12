import * as axios from "axios";

export const getCurrencyApi=()=>{
    return  axios.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json').then(responce=>responce.data)
}