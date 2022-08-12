import React from "react";
import S from "./MainArea.module.css"
import {getCurrency} from "../../API/CurrencyAPI";


 const MainArea=(props)=>{
     // getCurrency().then(data=>console.log(data))
    props.UpdateUSD(500)
     props.UpdateEUR(30)
    return <>
    <div className={S.Name}>Конвертер валют</div>
     <div className={S.CurrencyBox}>
         {props.USD}
    </div>
    </>
}
export default MainArea



