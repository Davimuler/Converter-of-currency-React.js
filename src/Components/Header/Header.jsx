import React from "react";
import S from "./Header.module.css"

 const Header=(props)=>{
    return  <div className='Header'>

        <div className={S.Domain}>Курси валют</div>
        <div className={S.Item}>
            USD Долар США: <span className={S.Currency}>{props.USD}</span>

        </div>

        <div className={S.Item}>

            EUR Євро: <span className={S.Currency}>{props.EUR}</span>
        </div>
    </div>
}
export default Header