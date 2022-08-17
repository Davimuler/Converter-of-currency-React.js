import MainArea from "./MainArea";
import {connect} from "react-redux";
import {
    UpdateUSD,
    UpdateEUR,
    UpdateFirstBox,
    UpdateSecondBox,
    SetFirstToSecond
} from "../../Redux/CurrencyReducer";

const mapStateToProps = (state) => {
    return {
        firstToSecond: state.Currency.firstToSecond,
        usd: state.Currency.usd,
        eur: state.Currency.eur,
        first_box: state.Currency.first_box,
        second_box: state.Currency.second_box
    };
};


export const MainAreaContainer = connect(mapStateToProps, {
    SetFirstToSecond,
    UpdateUSD,
    UpdateEUR,
    UpdateFirstBox,
    UpdateSecondBox
}, null, {forwardRef: true})(MainArea)