import React from "react";
import S from "./MainArea.module.css"
import * as axios from "axios";
import {UpdateUSD} from "../../Redux/CurrencyReducer";

 const MainArea=(props)=>{
axios.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json').then(responce=>{
    props.UpdateUSD(responce.data[25].rate.toFixed(2))
    props.UpdateEUR(responce.data[32].rate.toFixed(2))
})
    return <>
    <div className={S.Name}>Конвертер валют</div>
     <div className={S.CurrencyBox}>
         <div>
             <input  className={S.InputBox}/>
             <img className={S.ExchangeImg} src={'https://media.istockphoto.com/vectors/exchange-arrow-transfer-icon-logo-vector-isloated-on-white-background-vector-id1200593178?k=20&m=1200593178&s=612x612&w=0&h=u_rUdLSdDSYjhIdtbmlTjZ_A-wtd-Yu0EAJ4wA9HFkQ='}/>
             <input className={S.InputBox}/>
         </div>

    </div>
    </>
}
export default MainArea



