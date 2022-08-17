import Header from "./Header";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        usd: state.Currency.usd,
        eur: state.Currency.eur
    }
}


export const HeaderContainer = connect(mapStateToProps)(Header)