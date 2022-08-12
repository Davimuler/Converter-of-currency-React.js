import React from "react";
import S from "./MainArea.module.css"
import InputExchange from "./InputExchange";
import Selectors from "./Selectors";
import {getCurrencyApi} from "../../API/CurrencyApi";


 const MainArea=(props)=>{
     getCurrencyApi().then(data=>{
         props.UpdateEUR(data[32].rate.toFixed(2))
         props.UpdateUSD(data[25].rate.toFixed(2))
     })

    return <>
    <div className={S.Name}>Конвертер валют</div>
     <div className={S.CurrencyBox}>
         <Selectors EUR={props.EUR} FirstToSecond={props.FirstToSecond} USD={props.USD} SetFirstToSecond={props.SetFirstToSecond}/>
         <InputExchange UpdateFirstBox={props.UpdateFirstBox} FirstToSecond={props.FirstToSecond}
     UpdateSecondBox={props.UpdateSecondBox} First_box={props.First_box} Second_box={props.Second_box}/>
    </div>
    </>
}
export default MainArea



