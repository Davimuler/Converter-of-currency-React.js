import React from "react";
import S from "./MainArea.module.css"
import InputExchange from "./InputExchange";
import Selectors from "./Selectors";
import {getCurrencyApi} from "../../API/CurrencyApi";


const MainArea = (props) => {
    getCurrencyApi().then(data => {
        props.UpdateEUR(data[32].rate.toFixed(2))
        props.UpdateUSD(data[25].rate.toFixed(2))
    })

    return <>
        <div className={S.Name}>Конвертер валют</div>
        <div className={S.CurrencyBox}>
            <Selectors eur={props.eur} firstToSecond={props.firstToSecond} usd={props.usd}
                       SetFirstToSecond={props.SetFirstToSecond}/>
            <InputExchange UpdateFirstBox={props.UpdateFirstBox} firstToSecond={props.firstToSecond}
                           UpdateSecondBox={props.UpdateSecondBox} first_box={props.first_box}
                           second_box={props.second_box}/>
        </div>
    </>
}
export default MainArea
