import React from "react";
import S from "./Header.module.css"

 const Header=(props)=>{
    return  <div className='Header'>

        <div className={S.Domain}>Курси валют</div>
        <div className={S.Item}>
            USD Долар США:{props.USD}
        </div>

        <div className={S.Item}>

            EUR Євро:{props.EUR}
        </div>
    </div>
}
export default Header